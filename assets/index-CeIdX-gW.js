var a_=Object.defineProperty;var c_=(i,e,t)=>e in i?a_(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Tn=(i,e,t)=>c_(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ka="180",lr={ROTATE:0,DOLLY:1,PAN:2},or={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},l_=0,tl=1,u_=2,hu=1,h_=2,Jn=3,pi=0,cn=1,Cn=2,fi=0,ur=1,nl=2,il=3,rl=4,f_=5,Fi=100,d_=101,p_=102,m_=103,__=104,g_=200,v_=201,x_=202,y_=203,sa=204,oa=205,E_=206,S_=207,M_=208,T_=209,w_=210,b_=211,A_=212,R_=213,C_=214,aa=0,ca=1,la=2,fr=3,ua=4,ha=5,fa=6,da=7,fu=0,P_=1,D_=2,di=0,L_=1,F_=2,I_=3,U_=4,N_=5,O_=6,k_=7,du=300,dr=301,pr=302,pa=303,ma=304,Zs=306,_a=1e3,Ui=1001,ga=1002,Ln=1003,B_=1004,us=1005,zn=1006,xo=1007,Ni=1008,Vn=1009,pu=1010,mu=1011,Fr=1012,Za=1013,Oi=1014,Qn=1015,kr=1016,Ja=1017,Qa=1018,Ir=1020,_u=35902,gu=35899,vu=1021,xu=1022,Dn=1023,Ur=1026,Nr=1027,yu=1028,ec=1029,Eu=1030,tc=1031,nc=1033,Bs=33776,zs=33777,Hs=33778,Vs=33779,va=35840,xa=35841,ya=35842,Ea=35843,Sa=36196,Ma=37492,Ta=37496,wa=37808,ba=37809,Aa=37810,Ra=37811,Ca=37812,Pa=37813,Da=37814,La=37815,Fa=37816,Ia=37817,Ua=37818,Na=37819,Oa=37820,ka=37821,Ba=36492,za=36494,Ha=36495,Va=36283,Ga=36284,Wa=36285,Xa=36286,z_=3200,H_=3201,Su=0,V_=1,hi="",pn="srgb",mr="srgb-linear",$s="linear",Rt="srgb",Vi=7680,sl=519,G_=512,W_=513,X_=514,Mu=515,$_=516,q_=517,j_=518,Y_=519,ol=35044,al="300 es",Hn=2e3,qs=2001;class zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const o=n[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const o=n.slice(0);for(let a=0,u=o.length;a<u;a++)o[a].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gs=Math.PI/180,$a=180/Math.PI;function Br(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function mt(i,e,t){return Math.max(e,Math.min(t,i))}function K_(i,e){return(i%e+e)%e}function yo(i,e,t){return(1-t)*i+t*e}function wr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function on(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Z_={DEG2RAD:Gs};class ot{constructor(e=0,t=0){ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6],this.y=o[1]*t+o[4]*n+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),o=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*n-u*o+e.x,this.y=a*o+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ki{constructor(e=0,t=0,n=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=o}static slerpFlat(e,t,n,o,a,u,h){let p=n[o+0],d=n[o+1],v=n[o+2],m=n[o+3];const x=a[u+0],y=a[u+1],A=a[u+2],R=a[u+3];if(h===0){e[t+0]=p,e[t+1]=d,e[t+2]=v,e[t+3]=m;return}if(h===1){e[t+0]=x,e[t+1]=y,e[t+2]=A,e[t+3]=R;return}if(m!==R||p!==x||d!==y||v!==A){let E=1-h;const _=p*x+d*y+v*A+m*R,N=_>=0?1:-1,U=1-_*_;if(U>Number.EPSILON){const B=Math.sqrt(U),D=Math.atan2(B,_*N);E=Math.sin(E*D)/B,h=Math.sin(h*D)/B}const I=h*N;if(p=p*E+x*I,d=d*E+y*I,v=v*E+A*I,m=m*E+R*I,E===1-h){const B=1/Math.sqrt(p*p+d*d+v*v+m*m);p*=B,d*=B,v*=B,m*=B}}e[t]=p,e[t+1]=d,e[t+2]=v,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,o,a,u){const h=n[o],p=n[o+1],d=n[o+2],v=n[o+3],m=a[u],x=a[u+1],y=a[u+2],A=a[u+3];return e[t]=h*A+v*m+p*y-d*x,e[t+1]=p*A+v*x+d*m-h*y,e[t+2]=d*A+v*y+h*x-p*m,e[t+3]=v*A-h*m-p*x-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,o){return this._x=e,this._y=t,this._z=n,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,o=e._y,a=e._z,u=e._order,h=Math.cos,p=Math.sin,d=h(n/2),v=h(o/2),m=h(a/2),x=p(n/2),y=p(o/2),A=p(a/2);switch(u){case"XYZ":this._x=x*v*m+d*y*A,this._y=d*y*m-x*v*A,this._z=d*v*A+x*y*m,this._w=d*v*m-x*y*A;break;case"YXZ":this._x=x*v*m+d*y*A,this._y=d*y*m-x*v*A,this._z=d*v*A-x*y*m,this._w=d*v*m+x*y*A;break;case"ZXY":this._x=x*v*m-d*y*A,this._y=d*y*m+x*v*A,this._z=d*v*A+x*y*m,this._w=d*v*m-x*y*A;break;case"ZYX":this._x=x*v*m-d*y*A,this._y=d*y*m+x*v*A,this._z=d*v*A-x*y*m,this._w=d*v*m+x*y*A;break;case"YZX":this._x=x*v*m+d*y*A,this._y=d*y*m+x*v*A,this._z=d*v*A-x*y*m,this._w=d*v*m-x*y*A;break;case"XZY":this._x=x*v*m-d*y*A,this._y=d*y*m-x*v*A,this._z=d*v*A+x*y*m,this._w=d*v*m+x*y*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,o=Math.sin(n);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],o=t[4],a=t[8],u=t[1],h=t[5],p=t[9],d=t[2],v=t[6],m=t[10],x=n+h+m;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(v-p)*y,this._y=(a-d)*y,this._z=(u-o)*y}else if(n>h&&n>m){const y=2*Math.sqrt(1+n-h-m);this._w=(v-p)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(a+d)/y}else if(h>m){const y=2*Math.sqrt(1+h-n-m);this._w=(a-d)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(p+v)/y}else{const y=2*Math.sqrt(1+m-n-h);this._w=(u-o)/y,this._x=(a+d)/y,this._y=(p+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const o=Math.min(1,t/n);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,o=e._y,a=e._z,u=e._w,h=t._x,p=t._y,d=t._z,v=t._w;return this._x=n*v+u*h+o*d-a*p,this._y=o*v+u*p+a*h-n*d,this._z=a*v+u*d+n*p-o*h,this._w=u*v-n*h-o*p-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,o=this._y,a=this._z,u=this._w;let h=u*e._w+n*e._x+o*e._y+a*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=u,this._x=n,this._y=o,this._z=a,this;const p=1-h*h;if(p<=Number.EPSILON){const y=1-t;return this._w=y*u+t*this._w,this._x=y*n+t*this._x,this._y=y*o+t*this._y,this._z=y*a+t*this._z,this.normalize(),this}const d=Math.sqrt(p),v=Math.atan2(d,h),m=Math.sin((1-t)*v)/d,x=Math.sin(t*v)/d;return this._w=u*m+this._w*x,this._x=n*m+this._x*x,this._y=o*m+this._y*x,this._z=a*m+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),o=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,n=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*o,this.y=a[1]*t+a[4]*n+a[7]*o,this.z=a[2]*t+a[5]*n+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,a=e.elements,u=1/(a[3]*t+a[7]*n+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*o+a[12])*u,this.y=(a[1]*t+a[5]*n+a[9]*o+a[13])*u,this.z=(a[2]*t+a[6]*n+a[10]*o+a[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,o=this.z,a=e.x,u=e.y,h=e.z,p=e.w,d=2*(u*o-h*n),v=2*(h*t-a*o),m=2*(a*n-u*t);return this.x=t+p*d+u*m-h*v,this.y=n+p*v+h*d-a*m,this.z=o+p*m+a*v-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*o,this.y=a[1]*t+a[5]*n+a[9]*o,this.z=a[2]*t+a[6]*n+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,o=e.y,a=e.z,u=t.x,h=t.y,p=t.z;return this.x=o*p-a*h,this.y=a*u-n*p,this.z=n*h-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Eo.copy(this).projectOnVector(e),this.sub(Eo)}reflect(e){return this.sub(Eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,o=this.z-e.z;return t*t+n*n+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const o=Math.sin(t)*e;return this.x=o*Math.sin(n),this.y=Math.cos(t)*e,this.z=o*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eo=new J,cl=new ki;class ct{constructor(e,t,n,o,a,u,h,p,d){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,o,a,u,h,p,d)}set(e,t,n,o,a,u,h,p,d){const v=this.elements;return v[0]=e,v[1]=o,v[2]=h,v[3]=t,v[4]=a,v[5]=p,v[6]=n,v[7]=u,v[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,a=this.elements,u=n[0],h=n[3],p=n[6],d=n[1],v=n[4],m=n[7],x=n[2],y=n[5],A=n[8],R=o[0],E=o[3],_=o[6],N=o[1],U=o[4],I=o[7],B=o[2],D=o[5],z=o[8];return a[0]=u*R+h*N+p*B,a[3]=u*E+h*U+p*D,a[6]=u*_+h*I+p*z,a[1]=d*R+v*N+m*B,a[4]=d*E+v*U+m*D,a[7]=d*_+v*I+m*z,a[2]=x*R+y*N+A*B,a[5]=x*E+y*U+A*D,a[8]=x*_+y*I+A*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],u=e[4],h=e[5],p=e[6],d=e[7],v=e[8];return t*u*v-t*h*d-n*a*v+n*h*p+o*a*d-o*u*p}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],u=e[4],h=e[5],p=e[6],d=e[7],v=e[8],m=v*u-h*d,x=h*p-v*a,y=d*a-u*p,A=t*m+n*x+o*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=m*R,e[1]=(o*d-v*n)*R,e[2]=(h*n-o*u)*R,e[3]=x*R,e[4]=(v*t-o*p)*R,e[5]=(o*a-h*t)*R,e[6]=y*R,e[7]=(n*p-d*t)*R,e[8]=(u*t-n*a)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,o,a,u,h){const p=Math.cos(a),d=Math.sin(a);return this.set(n*p,n*d,-n*(p*u+d*h)+u+e,-o*d,o*p,-o*(-d*u+p*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(So.makeScale(e,t)),this}rotate(e){return this.premultiply(So.makeRotation(-e)),this}translate(e,t){return this.premultiply(So.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<9;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const So=new ct;function Tu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function J_(){const i=js("canvas");return i.style.display="block",i}const ll={};function Or(i){i in ll||(ll[i]=!0,console.warn(i))}function Q_(i,e,t){return new Promise(function(n,o){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const ul=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hl=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eg(){const i={enabled:!0,workingColorSpace:mr,spaces:{},convert:function(o,a,u){return this.enabled===!1||a===u||!a||!u||(this.spaces[a].transfer===Rt&&(o.r=ei(o.r),o.g=ei(o.g),o.b=ei(o.b)),this.spaces[a].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Rt&&(o.r=hr(o.r),o.g=hr(o.g),o.b=hr(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===hi?$s:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,u){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return Or("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return Or("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[mr]:{primaries:e,whitePoint:n,transfer:$s,toXYZ:ul,fromXYZ:hl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:n,transfer:Rt,toXYZ:ul,fromXYZ:hl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),i}const Mt=eg();function ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Gi;class tg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gi===void 0&&(Gi=js("canvas")),Gi.width=e.width,Gi.height=e.height;const o=Gi.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),n=Gi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=js("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const o=n.getImageData(0,0,e.width,e.height),a=o.data;for(let u=0;u<a.length;u++)a[u]=ei(a[u]/255)*255;return n.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ei(t[n]/255)*255):t[n]=ei(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ng=0;class ic{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=Br(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?a.push(Mo(o[u].image)):a.push(Mo(o[u]))}else a=Mo(o);n.url=a}return t||(e.images[this.uuid]=n),n}}function Mo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?tg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ig=0;const To=new J;class ln extends zi{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,n=Ui,o=Ui,a=zn,u=Ni,h=Dn,p=Vn,d=ln.DEFAULT_ANISOTROPY,v=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=Br(),this.name="",this.source=new ic(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=o,this.magFilter=a,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(To).x}get height(){return this.source.getSize(To).y}get depth(){return this.source.getSize(To).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}o&&n&&o.isVector2&&n.isVector2||o&&n&&o.isVector3&&n.isVector3||o&&n&&o.isMatrix3&&n.isMatrix3?o.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==du)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _a:e.x=e.x-Math.floor(e.x);break;case Ui:e.x=e.x<0?0:1;break;case ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _a:e.y=e.y-Math.floor(e.y);break;case Ui:e.y=e.y<0?0:1;break;case ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=du;ln.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,n=0,o=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,o){return this.x=e,this.y=t,this.z=n,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,o=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*o+u[12]*a,this.y=u[1]*t+u[5]*n+u[9]*o+u[13]*a,this.z=u[2]*t+u[6]*n+u[10]*o+u[14]*a,this.w=u[3]*t+u[7]*n+u[11]*o+u[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,o,a;const p=e.elements,d=p[0],v=p[4],m=p[8],x=p[1],y=p[5],A=p[9],R=p[2],E=p[6],_=p[10];if(Math.abs(v-x)<.01&&Math.abs(m-R)<.01&&Math.abs(A-E)<.01){if(Math.abs(v+x)<.1&&Math.abs(m+R)<.1&&Math.abs(A+E)<.1&&Math.abs(d+y+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const U=(d+1)/2,I=(y+1)/2,B=(_+1)/2,D=(v+x)/4,z=(m+R)/4,j=(A+E)/4;return U>I&&U>B?U<.01?(n=0,o=.707106781,a=.707106781):(n=Math.sqrt(U),o=D/n,a=z/n):I>B?I<.01?(n=.707106781,o=0,a=.707106781):(o=Math.sqrt(I),n=D/o,a=j/o):B<.01?(n=.707106781,o=.707106781,a=0):(a=Math.sqrt(B),n=z/a,o=j/a),this.set(n,o,a,t),this}let N=Math.sqrt((E-A)*(E-A)+(m-R)*(m-R)+(x-v)*(x-v));return Math.abs(N)<.001&&(N=1),this.x=(E-A)/N,this.y=(m-R)/N,this.z=(x-v)/N,this.w=Math.acos((d+y+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rg extends zi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const o={width:e,height:t,depth:n.depth},a=new ln(o);this.textures=[];const u=n.count;for(let h=0;h<u;h++)this.textures[h]=a.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=n,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new ic(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends rg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class wu extends ln{constructor(e=null,t=1,n=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sg extends ln{constructor(e=null,t=1,n=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:o},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zr{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=a.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,wn):wn.fromBufferAttribute(a,u),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hs.copy(n.boundingBox)),hs.applyMatrix4(e.matrixWorld),this.union(hs)}const o=e.children;for(let a=0,u=o.length;a<u;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),fs.subVectors(this.max,br),Wi.subVectors(e.a,br),Xi.subVectors(e.b,br),$i.subVectors(e.c,br),ni.subVectors(Xi,Wi),ii.subVectors($i,Xi),wi.subVectors(Wi,$i);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-wi.z,wi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,wi.z,0,-wi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-wi.y,wi.x,0];return!wo(t,Wi,Xi,$i,fs)||(t=[1,0,0,0,1,0,0,0,1],!wo(t,Wi,Xi,$i,fs))?!1:(ds.crossVectors(ni,ii),t=[ds.x,ds.y,ds.z],wo(t,Wi,Xi,$i,fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qn=[new J,new J,new J,new J,new J,new J,new J,new J],wn=new J,hs=new zr,Wi=new J,Xi=new J,$i=new J,ni=new J,ii=new J,wi=new J,br=new J,fs=new J,ds=new J,bi=new J;function wo(i,e,t,n,o){for(let a=0,u=i.length-3;a<=u;a+=3){bi.fromArray(i,a);const h=o.x*Math.abs(bi.x)+o.y*Math.abs(bi.y)+o.z*Math.abs(bi.z),p=e.dot(bi),d=t.dot(bi),v=n.dot(bi);if(Math.max(-Math.max(p,d,v),Math.min(p,d,v))>h)return!1}return!0}const og=new zr,Ar=new J,bo=new J;class Js{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):og.setFromPoints(e).getCenter(n);let o=0;for(let a=0,u=e.length;a<u;a++)o=Math.max(o,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);const t=Ar.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),o=(n-this.radius)*.5;this.center.addScaledVector(Ar,o/n),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(bo)),this.expandByPoint(Ar.copy(e.center).sub(bo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const jn=new J,Ao=new J,ps=new J,ri=new J,Ro=new J,ms=new J,Co=new J;class rc{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,o){Ao.copy(e).add(t).multiplyScalar(.5),ps.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(Ao);const a=e.distanceTo(t)*.5,u=-this.direction.dot(ps),h=ri.dot(this.direction),p=-ri.dot(ps),d=ri.lengthSq(),v=Math.abs(1-u*u);let m,x,y,A;if(v>0)if(m=u*p-h,x=u*h-p,A=a*v,m>=0)if(x>=-A)if(x<=A){const R=1/v;m*=R,x*=R,y=m*(m+u*x+2*h)+x*(u*m+x+2*p)+d}else x=a,m=Math.max(0,-(u*x+h)),y=-m*m+x*(x+2*p)+d;else x=-a,m=Math.max(0,-(u*x+h)),y=-m*m+x*(x+2*p)+d;else x<=-A?(m=Math.max(0,-(-u*a+h)),x=m>0?-a:Math.min(Math.max(-a,-p),a),y=-m*m+x*(x+2*p)+d):x<=A?(m=0,x=Math.min(Math.max(-a,-p),a),y=x*(x+2*p)+d):(m=Math.max(0,-(u*a+h)),x=m>0?a:Math.min(Math.max(-a,-p),a),y=-m*m+x*(x+2*p)+d);else x=u>0?-a:a,m=Math.max(0,-(u*x+h)),y=-m*m+x*(x+2*p)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,m),o&&o.copy(Ao).addScaledVector(ps,x),y}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const n=jn.dot(this.direction),o=jn.dot(jn)-n*n,a=e.radius*e.radius;if(o>a)return null;const u=Math.sqrt(a-o),h=n-u,p=n+u;return p<0?null:h<0?this.at(p,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,o,a,u,h,p;const d=1/this.direction.x,v=1/this.direction.y,m=1/this.direction.z,x=this.origin;return d>=0?(n=(e.min.x-x.x)*d,o=(e.max.x-x.x)*d):(n=(e.max.x-x.x)*d,o=(e.min.x-x.x)*d),v>=0?(a=(e.min.y-x.y)*v,u=(e.max.y-x.y)*v):(a=(e.max.y-x.y)*v,u=(e.min.y-x.y)*v),n>u||a>o||((a>n||isNaN(n))&&(n=a),(u<o||isNaN(o))&&(o=u),m>=0?(h=(e.min.z-x.z)*m,p=(e.max.z-x.z)*m):(h=(e.max.z-x.z)*m,p=(e.min.z-x.z)*m),n>p||h>o)||((h>n||n!==n)&&(n=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(n>=0?n:o,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,o,a){Ro.subVectors(t,e),ms.subVectors(n,e),Co.crossVectors(Ro,ms);let u=this.direction.dot(Co),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;ri.subVectors(this.origin,e);const p=h*this.direction.dot(ms.crossVectors(ri,ms));if(p<0)return null;const d=h*this.direction.dot(Ro.cross(ri));if(d<0||p+d>u)return null;const v=-h*ri.dot(Co);return v<0?null:this.at(v/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(e,t,n,o,a,u,h,p,d,v,m,x,y,A,R,E){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,o,a,u,h,p,d,v,m,x,y,A,R,E)}set(e,t,n,o,a,u,h,p,d,v,m,x,y,A,R,E){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=o,_[1]=a,_[5]=u,_[9]=h,_[13]=p,_[2]=d,_[6]=v,_[10]=m,_[14]=x,_[3]=y,_[7]=A,_[11]=R,_[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,o=1/qi.setFromMatrixColumn(e,0).length(),a=1/qi.setFromMatrixColumn(e,1).length(),u=1/qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,o=e.y,a=e.z,u=Math.cos(n),h=Math.sin(n),p=Math.cos(o),d=Math.sin(o),v=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){const x=u*v,y=u*m,A=h*v,R=h*m;t[0]=p*v,t[4]=-p*m,t[8]=d,t[1]=y+A*d,t[5]=x-R*d,t[9]=-h*p,t[2]=R-x*d,t[6]=A+y*d,t[10]=u*p}else if(e.order==="YXZ"){const x=p*v,y=p*m,A=d*v,R=d*m;t[0]=x+R*h,t[4]=A*h-y,t[8]=u*d,t[1]=u*m,t[5]=u*v,t[9]=-h,t[2]=y*h-A,t[6]=R+x*h,t[10]=u*p}else if(e.order==="ZXY"){const x=p*v,y=p*m,A=d*v,R=d*m;t[0]=x-R*h,t[4]=-u*m,t[8]=A+y*h,t[1]=y+A*h,t[5]=u*v,t[9]=R-x*h,t[2]=-u*d,t[6]=h,t[10]=u*p}else if(e.order==="ZYX"){const x=u*v,y=u*m,A=h*v,R=h*m;t[0]=p*v,t[4]=A*d-y,t[8]=x*d+R,t[1]=p*m,t[5]=R*d+x,t[9]=y*d-A,t[2]=-d,t[6]=h*p,t[10]=u*p}else if(e.order==="YZX"){const x=u*p,y=u*d,A=h*p,R=h*d;t[0]=p*v,t[4]=R-x*m,t[8]=A*m+y,t[1]=m,t[5]=u*v,t[9]=-h*v,t[2]=-d*v,t[6]=y*m+A,t[10]=x-R*m}else if(e.order==="XZY"){const x=u*p,y=u*d,A=h*p,R=h*d;t[0]=p*v,t[4]=-m,t[8]=d*v,t[1]=x*m+R,t[5]=u*v,t[9]=y*m-A,t[2]=A*m-y,t[6]=h*v,t[10]=R*m+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ag,e,cg)}lookAt(e,t,n){const o=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),si.crossVectors(n,hn),si.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),si.crossVectors(n,hn)),si.normalize(),_s.crossVectors(hn,si),o[0]=si.x,o[4]=_s.x,o[8]=hn.x,o[1]=si.y,o[5]=_s.y,o[9]=hn.y,o[2]=si.z,o[6]=_s.z,o[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,o=t.elements,a=this.elements,u=n[0],h=n[4],p=n[8],d=n[12],v=n[1],m=n[5],x=n[9],y=n[13],A=n[2],R=n[6],E=n[10],_=n[14],N=n[3],U=n[7],I=n[11],B=n[15],D=o[0],z=o[4],j=o[8],P=o[12],w=o[1],O=o[5],Y=o[9],te=o[13],Z=o[2],he=o[6],re=o[10],ye=o[14],ne=o[3],ge=o[7],Re=o[11],Oe=o[15];return a[0]=u*D+h*w+p*Z+d*ne,a[4]=u*z+h*O+p*he+d*ge,a[8]=u*j+h*Y+p*re+d*Re,a[12]=u*P+h*te+p*ye+d*Oe,a[1]=v*D+m*w+x*Z+y*ne,a[5]=v*z+m*O+x*he+y*ge,a[9]=v*j+m*Y+x*re+y*Re,a[13]=v*P+m*te+x*ye+y*Oe,a[2]=A*D+R*w+E*Z+_*ne,a[6]=A*z+R*O+E*he+_*ge,a[10]=A*j+R*Y+E*re+_*Re,a[14]=A*P+R*te+E*ye+_*Oe,a[3]=N*D+U*w+I*Z+B*ne,a[7]=N*z+U*O+I*he+B*ge,a[11]=N*j+U*Y+I*re+B*Re,a[15]=N*P+U*te+I*ye+B*Oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],o=e[8],a=e[12],u=e[1],h=e[5],p=e[9],d=e[13],v=e[2],m=e[6],x=e[10],y=e[14],A=e[3],R=e[7],E=e[11],_=e[15];return A*(+a*p*m-o*d*m-a*h*x+n*d*x+o*h*y-n*p*y)+R*(+t*p*y-t*d*x+a*u*x-o*u*y+o*d*v-a*p*v)+E*(+t*d*m-t*h*y-a*u*m+n*u*y+a*h*v-n*d*v)+_*(-o*h*v-t*p*m+t*h*x+o*u*m-n*u*x+n*p*v)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],o=e[2],a=e[3],u=e[4],h=e[5],p=e[6],d=e[7],v=e[8],m=e[9],x=e[10],y=e[11],A=e[12],R=e[13],E=e[14],_=e[15],N=m*E*d-R*x*d+R*p*y-h*E*y-m*p*_+h*x*_,U=A*x*d-v*E*d-A*p*y+u*E*y+v*p*_-u*x*_,I=v*R*d-A*m*d+A*h*y-u*R*y-v*h*_+u*m*_,B=A*m*p-v*R*p-A*h*x+u*R*x+v*h*E-u*m*E,D=t*N+n*U+o*I+a*B;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/D;return e[0]=N*z,e[1]=(R*x*a-m*E*a-R*o*y+n*E*y+m*o*_-n*x*_)*z,e[2]=(h*E*a-R*p*a+R*o*d-n*E*d-h*o*_+n*p*_)*z,e[3]=(m*p*a-h*x*a-m*o*d+n*x*d+h*o*y-n*p*y)*z,e[4]=U*z,e[5]=(v*E*a-A*x*a+A*o*y-t*E*y-v*o*_+t*x*_)*z,e[6]=(A*p*a-u*E*a-A*o*d+t*E*d+u*o*_-t*p*_)*z,e[7]=(u*x*a-v*p*a+v*o*d-t*x*d-u*o*y+t*p*y)*z,e[8]=I*z,e[9]=(A*m*a-v*R*a-A*n*y+t*R*y+v*n*_-t*m*_)*z,e[10]=(u*R*a-A*h*a+A*n*d-t*R*d-u*n*_+t*h*_)*z,e[11]=(v*h*a-u*m*a-v*n*d+t*m*d+u*n*y-t*h*y)*z,e[12]=B*z,e[13]=(v*R*o-A*m*o+A*n*x-t*R*x-v*n*E+t*m*E)*z,e[14]=(A*h*o-u*R*o-A*n*p+t*R*p+u*n*E-t*h*E)*z,e[15]=(u*m*o-v*h*o+v*n*p-t*m*p-u*n*x+t*h*x)*z,this}scale(e){const t=this.elements,n=e.x,o=e.y,a=e.z;return t[0]*=n,t[4]*=o,t[8]*=a,t[1]*=n,t[5]*=o,t[9]*=a,t[2]*=n,t[6]*=o,t[10]*=a,t[3]*=n,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,o))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),o=Math.sin(t),a=1-n,u=e.x,h=e.y,p=e.z,d=a*u,v=a*h;return this.set(d*u+n,d*h-o*p,d*p+o*h,0,d*h+o*p,v*h+n,v*p-o*u,0,d*p-o*h,v*p+o*u,a*p*p+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,o,a,u){return this.set(1,n,a,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,n){const o=this.elements,a=t._x,u=t._y,h=t._z,p=t._w,d=a+a,v=u+u,m=h+h,x=a*d,y=a*v,A=a*m,R=u*v,E=u*m,_=h*m,N=p*d,U=p*v,I=p*m,B=n.x,D=n.y,z=n.z;return o[0]=(1-(R+_))*B,o[1]=(y+I)*B,o[2]=(A-U)*B,o[3]=0,o[4]=(y-I)*D,o[5]=(1-(x+_))*D,o[6]=(E+N)*D,o[7]=0,o[8]=(A+U)*z,o[9]=(E-N)*z,o[10]=(1-(x+R))*z,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,n){const o=this.elements;let a=qi.set(o[0],o[1],o[2]).length();const u=qi.set(o[4],o[5],o[6]).length(),h=qi.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],bn.copy(this);const d=1/a,v=1/u,m=1/h;return bn.elements[0]*=d,bn.elements[1]*=d,bn.elements[2]*=d,bn.elements[4]*=v,bn.elements[5]*=v,bn.elements[6]*=v,bn.elements[8]*=m,bn.elements[9]*=m,bn.elements[10]*=m,t.setFromRotationMatrix(bn),n.x=a,n.y=u,n.z=h,this}makePerspective(e,t,n,o,a,u,h=Hn,p=!1){const d=this.elements,v=2*a/(t-e),m=2*a/(n-o),x=(t+e)/(t-e),y=(n+o)/(n-o);let A,R;if(p)A=a/(u-a),R=u*a/(u-a);else if(h===Hn)A=-(u+a)/(u-a),R=-2*u*a/(u-a);else if(h===qs)A=-u/(u-a),R=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=v,d[4]=0,d[8]=x,d[12]=0,d[1]=0,d[5]=m,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=A,d[14]=R,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,o,a,u,h=Hn,p=!1){const d=this.elements,v=2/(t-e),m=2/(n-o),x=-(t+e)/(t-e),y=-(n+o)/(n-o);let A,R;if(p)A=1/(u-a),R=u/(u-a);else if(h===Hn)A=-2/(u-a),R=-(u+a)/(u-a);else if(h===qs)A=-1/(u-a),R=-a/(u-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=v,d[4]=0,d[8]=0,d[12]=x,d[1]=0,d[5]=m,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=A,d[14]=R,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let o=0;o<16;o++)if(t[o]!==n[o])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qi=new J,bn=new Ot,ag=new J(0,0,0),cg=new J(1,1,1),si=new J,_s=new J,hn=new J,fl=new Ot,dl=new ki;class Gn{constructor(e=0,t=0,n=0,o=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,o=this._order){return this._x=e,this._y=t,this._z=n,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const o=e.elements,a=o[0],u=o[4],h=o[8],p=o[1],d=o[5],v=o[9],m=o[2],x=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(x,d),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(mt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-m,y),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,a));break;case"ZYX":this._y=Math.asin(-mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(p,a)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,d),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,d),this._y=Math.atan2(h,a)):(this._x=Math.atan2(-v,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dl.setFromEuler(this),this.setFromQuaternion(dl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class bu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lg=0;const pl=new J,ji=new ki,Yn=new Ot,gs=new J,Rr=new J,ug=new J,hg=new ki,ml=new J(1,0,0),_l=new J(0,1,0),gl=new J(0,0,1),vl={type:"added"},fg={type:"removed"},Yi={type:"childadded",child:null},Po={type:"childremoved",child:null};class jt extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lg++}),this.uuid=Br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new J,t=new Gn,n=new ki,o=new J(1,1,1);function a(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ot},normalMatrix:{value:new ct}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.multiply(ji),this}rotateOnWorldAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.premultiply(ji),this}rotateX(e){return this.rotateOnAxis(ml,e)}rotateY(e){return this.rotateOnAxis(_l,e)}rotateZ(e){return this.rotateOnAxis(gl,e)}translateOnAxis(e,t){return pl.copy(e).applyQuaternion(this.quaternion),this.position.add(pl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ml,e)}translateY(e){return this.translateOnAxis(_l,e)}translateZ(e){return this.translateOnAxis(gl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gs.copy(e):gs.set(e,t,n);const o=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Rr,gs,this.up):Yn.lookAt(gs,Rr,this.up),this.quaternion.setFromRotationMatrix(Yn),o&&(Yn.extractRotation(o.matrixWorld),ji.setFromRotationMatrix(Yn),this.quaternion.premultiply(ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vl),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fg),Po.child=e,this.dispatchEvent(Po),Po.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vl),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,o=this.children.length;n<o;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,ug),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,hg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,o=t.length;n<o;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,v=p.length;d<v;d++){const m=p[d];a(e.shapes,m)}else a(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(a(e.materials,this.material[p]));o.material=h}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(a(e.animations,p))}}if(t){const h=u(e.geometries),p=u(e.materials),d=u(e.textures),v=u(e.images),m=u(e.shapes),x=u(e.skeletons),y=u(e.animations),A=u(e.nodes);h.length>0&&(n.geometries=h),p.length>0&&(n.materials=p),d.length>0&&(n.textures=d),v.length>0&&(n.images=v),m.length>0&&(n.shapes=m),x.length>0&&(n.skeletons=x),y.length>0&&(n.animations=y),A.length>0&&(n.nodes=A)}return n.object=o,n;function u(h){const p=[];for(const d in h){const v=h[d];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const o=e.children[n];this.add(o.clone())}return this}}jt.DEFAULT_UP=new J(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new J,Kn=new J,Do=new J,Zn=new J,Ki=new J,Zi=new J,xl=new J,Lo=new J,Fo=new J,Io=new J,Uo=new Nt,No=new Nt,Oo=new Nt;class Pn{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,o){o.subVectors(n,t),An.subVectors(e,t),o.cross(An);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,n,o,a){An.subVectors(o,t),Kn.subVectors(n,t),Do.subVectors(e,t);const u=An.dot(An),h=An.dot(Kn),p=An.dot(Do),d=Kn.dot(Kn),v=Kn.dot(Do),m=u*d-h*h;if(m===0)return a.set(0,0,0),null;const x=1/m,y=(d*p-h*v)*x,A=(u*v-h*p)*x;return a.set(1-y-A,A,y)}static containsPoint(e,t,n,o){return this.getBarycoord(e,t,n,o,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,o,a,u,h,p){return this.getBarycoord(e,t,n,o,Zn)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(a,Zn.x),p.addScaledVector(u,Zn.y),p.addScaledVector(h,Zn.z),p)}static getInterpolatedAttribute(e,t,n,o,a,u){return Uo.setScalar(0),No.setScalar(0),Oo.setScalar(0),Uo.fromBufferAttribute(e,t),No.fromBufferAttribute(e,n),Oo.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Uo,a.x),u.addScaledVector(No,a.y),u.addScaledVector(Oo,a.z),u}static isFrontFacing(e,t,n,o){return An.subVectors(n,t),Kn.subVectors(e,t),An.cross(Kn).dot(o)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,o){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,n,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),An.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,o,a){return Pn.getInterpolation(e,this.a,this.b,this.c,t,n,o,a)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,o=this.b,a=this.c;let u,h;Ki.subVectors(o,n),Zi.subVectors(a,n),Lo.subVectors(e,n);const p=Ki.dot(Lo),d=Zi.dot(Lo);if(p<=0&&d<=0)return t.copy(n);Fo.subVectors(e,o);const v=Ki.dot(Fo),m=Zi.dot(Fo);if(v>=0&&m<=v)return t.copy(o);const x=p*m-v*d;if(x<=0&&p>=0&&v<=0)return u=p/(p-v),t.copy(n).addScaledVector(Ki,u);Io.subVectors(e,a);const y=Ki.dot(Io),A=Zi.dot(Io);if(A>=0&&y<=A)return t.copy(a);const R=y*d-p*A;if(R<=0&&d>=0&&A<=0)return h=d/(d-A),t.copy(n).addScaledVector(Zi,h);const E=v*A-y*m;if(E<=0&&m-v>=0&&y-A>=0)return xl.subVectors(a,o),h=(m-v)/(m-v+(y-A)),t.copy(o).addScaledVector(xl,h);const _=1/(E+R+x);return u=R*_,h=x*_,t.copy(n).addScaledVector(Ki,u).addScaledVector(Zi,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},vs={h:0,s:0,l:0};function ko(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class _t{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,o=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.colorSpaceToWorking(this,o),this}setHSL(e,t,n,o=Mt.workingColorSpace){if(e=K_(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,u=2*n-a;this.r=ko(u,a,e+1/3),this.g=ko(u,a,e),this.b=ko(u,a,e-1/3)}return Mt.colorSpaceToWorking(this,o),this}setStyle(e,t=pn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){const n=Au[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return Mt.workingToColorSpace(en.copy(this),e),Math.round(mt(en.r*255,0,255))*65536+Math.round(mt(en.g*255,0,255))*256+Math.round(mt(en.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(en.copy(this),t);const n=en.r,o=en.g,a=en.b,u=Math.max(n,o,a),h=Math.min(n,o,a);let p,d;const v=(h+u)/2;if(h===u)p=0,d=0;else{const m=u-h;switch(d=v<=.5?m/(u+h):m/(2-u-h),u){case n:p=(o-a)/m+(o<a?6:0);break;case o:p=(a-n)/m+2;break;case a:p=(n-o)/m+4;break}p/=6}return e.h=p,e.s=d,e.l=v,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=pn){Mt.workingToColorSpace(en.copy(this),e);const t=en.r,n=en.g,o=en.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(o*255)})`}offsetHSL(e,t,n){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(vs);const n=yo(oi.h,vs.h,t),o=yo(oi.s,vs.s,t),a=yo(oi.l,vs.l,t);return this.setHSL(n,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*o,this.g=a[1]*t+a[4]*n+a[7]*o,this.b=a[2]*t+a[5]*n+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new _t;_t.NAMES=Au;let dg=0;class gr extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=Br(),this.name="",this.type="Material",this.blending=ur,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sa,this.blendDst=oa,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(n):o&&o.isVector3&&n&&n.isVector3?o.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ur&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sa&&(n.blendSrc=this.blendSrc),this.blendDst!==oa&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function o(a){const u=[];for(const h in a){const p=a[h];delete p.metadata,u.push(p)}return u}if(t){const a=o(e.textures),u=o(e.images);a.length>0&&(n.textures=a),u.length>0&&(n.images=u)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const o=t.length;n=new Array(o);for(let a=0;a!==o;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class sc extends gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new J,xs=new ot;let pg=0;class En{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ol,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[n+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xs.fromBufferAttribute(this,t),xs.applyMatrix3(e),this.setXY(t,xs.x,xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wr(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wr(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wr(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,o){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),o=on(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this}setXYZW(e,t,n,o,a){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),o=on(o,this.array),a=on(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ol&&(e.usage=this.usage),e}}class Ru extends En{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Cu extends En{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class un extends En{constructor(e,t,n){super(new Float32Array(e),t,n)}}let mg=0;const gn=new Ot,Bo=new jt,Ji=new J,fn=new zr,Cr=new zr,qt=new J;class Fn extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=Br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tu(e)?Cu:Ru)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ct().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return Bo.lookAt(e),Bo.updateMatrix(),this.applyMatrix4(Bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let o=0,a=e.length;o<a;o++){const u=e[o];n.push(u.x,u.y,u.z||0)}this.setAttribute("position",new un(n,3))}else{const n=Math.min(e.length,t.count);for(let o=0;o<n;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,o=t.length;n<o;n++){const a=t[n];fn.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const h=t[a];Cr.setFromBufferAttribute(h),this.morphTargetsRelative?(qt.addVectors(fn.min,Cr.min),fn.expandByPoint(qt),qt.addVectors(fn.max,Cr.max),fn.expandByPoint(qt)):(fn.expandByPoint(Cr.min),fn.expandByPoint(Cr.max))}fn.getCenter(n);let o=0;for(let a=0,u=e.count;a<u;a++)qt.fromBufferAttribute(e,a),o=Math.max(o,n.distanceToSquared(qt));if(t)for(let a=0,u=t.length;a<u;a++){const h=t[a],p=this.morphTargetsRelative;for(let d=0,v=h.count;d<v;d++)qt.fromBufferAttribute(h,d),p&&(Ji.fromBufferAttribute(e,d),qt.add(Ji)),o=Math.max(o,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*n.count),4));const u=this.getAttribute("tangent"),h=[],p=[];for(let j=0;j<n.count;j++)h[j]=new J,p[j]=new J;const d=new J,v=new J,m=new J,x=new ot,y=new ot,A=new ot,R=new J,E=new J;function _(j,P,w){d.fromBufferAttribute(n,j),v.fromBufferAttribute(n,P),m.fromBufferAttribute(n,w),x.fromBufferAttribute(a,j),y.fromBufferAttribute(a,P),A.fromBufferAttribute(a,w),v.sub(d),m.sub(d),y.sub(x),A.sub(x);const O=1/(y.x*A.y-A.x*y.y);isFinite(O)&&(R.copy(v).multiplyScalar(A.y).addScaledVector(m,-y.y).multiplyScalar(O),E.copy(m).multiplyScalar(y.x).addScaledVector(v,-A.x).multiplyScalar(O),h[j].add(R),h[P].add(R),h[w].add(R),p[j].add(E),p[P].add(E),p[w].add(E))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let j=0,P=N.length;j<P;++j){const w=N[j],O=w.start,Y=w.count;for(let te=O,Z=O+Y;te<Z;te+=3)_(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const U=new J,I=new J,B=new J,D=new J;function z(j){B.fromBufferAttribute(o,j),D.copy(B);const P=h[j];U.copy(P),U.sub(B.multiplyScalar(B.dot(P))).normalize(),I.crossVectors(D,P);const O=I.dot(p[j])<0?-1:1;u.setXYZW(j,U.x,U.y,U.z,O)}for(let j=0,P=N.length;j<P;++j){const w=N[j],O=w.start,Y=w.count;for(let te=O,Z=O+Y;te<Z;te+=3)z(e.getX(te+0)),z(e.getX(te+1)),z(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let x=0,y=n.count;x<y;x++)n.setXYZ(x,0,0,0);const o=new J,a=new J,u=new J,h=new J,p=new J,d=new J,v=new J,m=new J;if(e)for(let x=0,y=e.count;x<y;x+=3){const A=e.getX(x+0),R=e.getX(x+1),E=e.getX(x+2);o.fromBufferAttribute(t,A),a.fromBufferAttribute(t,R),u.fromBufferAttribute(t,E),v.subVectors(u,a),m.subVectors(o,a),v.cross(m),h.fromBufferAttribute(n,A),p.fromBufferAttribute(n,R),d.fromBufferAttribute(n,E),h.add(v),p.add(v),d.add(v),n.setXYZ(A,h.x,h.y,h.z),n.setXYZ(R,p.x,p.y,p.z),n.setXYZ(E,d.x,d.y,d.z)}else for(let x=0,y=t.count;x<y;x+=3)o.fromBufferAttribute(t,x+0),a.fromBufferAttribute(t,x+1),u.fromBufferAttribute(t,x+2),v.subVectors(u,a),m.subVectors(o,a),v.cross(m),n.setXYZ(x+0,v.x,v.y,v.z),n.setXYZ(x+1,v.x,v.y,v.z),n.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(h,p){const d=h.array,v=h.itemSize,m=h.normalized,x=new d.constructor(p.length*v);let y=0,A=0;for(let R=0,E=p.length;R<E;R++){h.isInterleavedBufferAttribute?y=p[R]*h.data.stride+h.offset:y=p[R]*v;for(let _=0;_<v;_++)x[A++]=d[y++]}return new En(x,v,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fn,n=this.index.array,o=this.attributes;for(const h in o){const p=o[h],d=e(p,n);t.setAttribute(h,d)}const a=this.morphAttributes;for(const h in a){const p=[],d=a[h];for(let v=0,m=d.length;v<m;v++){const x=d[v],y=e(x,n);p.push(y)}t.morphAttributes[h]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,p=u.length;h<p;h++){const d=u[h];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(e[d]=p[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const p in n){const d=n[p];e.data.attributes[p]=d.toJSON(e.data)}const o={};let a=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],v=[];for(let m=0,x=d.length;m<x;m++){const y=d[m];v.push(y.toJSON(e.data))}v.length>0&&(o[p]=v,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const o=e.attributes;for(const d in o){const v=o[d];this.setAttribute(d,v.clone(t))}const a=e.morphAttributes;for(const d in a){const v=[],m=a[d];for(let x=0,y=m.length;x<y;x++)v.push(m[x].clone(t));this.morphAttributes[d]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,v=u.length;d<v;d++){const m=u[d];this.addGroup(m.start,m.count,m.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yl=new Ot,Ai=new rc,ys=new Js,El=new J,Es=new J,Ss=new J,Ms=new J,zo=new J,Ts=new J,Sl=new J,ws=new J;class yn extends jt{constructor(e=new Fn,t=new sc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const h=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}getVertexPosition(e,t){const n=this.geometry,o=n.attributes.position,a=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(a&&h){Ts.set(0,0,0);for(let p=0,d=a.length;p<d;p++){const v=h[p],m=a[p];v!==0&&(zo.fromBufferAttribute(m,e),u?Ts.addScaledVector(zo,v):Ts.addScaledVector(zo.sub(t),v))}t.add(Ts)}return t}raycast(e,t){const n=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(a),Ai.copy(e.ray).recast(e.near),!(ys.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(ys,El)===null||Ai.origin.distanceToSquared(El)>(e.far-e.near)**2))&&(yl.copy(a).invert(),Ai.copy(e.ray).applyMatrix4(yl),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,n){let o;const a=this.geometry,u=this.material,h=a.index,p=a.attributes.position,d=a.attributes.uv,v=a.attributes.uv1,m=a.attributes.normal,x=a.groups,y=a.drawRange;if(h!==null)if(Array.isArray(u))for(let A=0,R=x.length;A<R;A++){const E=x[A],_=u[E.materialIndex],N=Math.max(E.start,y.start),U=Math.min(h.count,Math.min(E.start+E.count,y.start+y.count));for(let I=N,B=U;I<B;I+=3){const D=h.getX(I),z=h.getX(I+1),j=h.getX(I+2);o=bs(this,_,e,n,d,v,m,D,z,j),o&&(o.faceIndex=Math.floor(I/3),o.face.materialIndex=E.materialIndex,t.push(o))}}else{const A=Math.max(0,y.start),R=Math.min(h.count,y.start+y.count);for(let E=A,_=R;E<_;E+=3){const N=h.getX(E),U=h.getX(E+1),I=h.getX(E+2);o=bs(this,u,e,n,d,v,m,N,U,I),o&&(o.faceIndex=Math.floor(E/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let A=0,R=x.length;A<R;A++){const E=x[A],_=u[E.materialIndex],N=Math.max(E.start,y.start),U=Math.min(p.count,Math.min(E.start+E.count,y.start+y.count));for(let I=N,B=U;I<B;I+=3){const D=I,z=I+1,j=I+2;o=bs(this,_,e,n,d,v,m,D,z,j),o&&(o.faceIndex=Math.floor(I/3),o.face.materialIndex=E.materialIndex,t.push(o))}}else{const A=Math.max(0,y.start),R=Math.min(p.count,y.start+y.count);for(let E=A,_=R;E<_;E+=3){const N=E,U=E+1,I=E+2;o=bs(this,u,e,n,d,v,m,N,U,I),o&&(o.faceIndex=Math.floor(E/3),t.push(o))}}}}function _g(i,e,t,n,o,a,u,h){let p;if(e.side===cn?p=n.intersectTriangle(u,a,o,!0,h):p=n.intersectTriangle(o,a,u,e.side===pi,h),p===null)return null;ws.copy(h),ws.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(ws);return d<t.near||d>t.far?null:{distance:d,point:ws.clone(),object:i}}function bs(i,e,t,n,o,a,u,h,p,d){i.getVertexPosition(h,Es),i.getVertexPosition(p,Ss),i.getVertexPosition(d,Ms);const v=_g(i,e,t,n,Es,Ss,Ms,Sl);if(v){const m=new J;Pn.getBarycoord(Sl,Es,Ss,Ms,m),o&&(v.uv=Pn.getInterpolatedAttribute(o,h,p,d,m,new ot)),a&&(v.uv1=Pn.getInterpolatedAttribute(a,h,p,d,m,new ot)),u&&(v.normal=Pn.getInterpolatedAttribute(u,h,p,d,m,new J),v.normal.dot(n.direction)>0&&v.normal.multiplyScalar(-1));const x={a:h,b:p,c:d,normal:new J,materialIndex:0};Pn.getNormal(Es,Ss,Ms,x.normal),v.face=x,v.barycoord=m}return v}class Hr extends Fn{constructor(e=1,t=1,n=1,o=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:o,heightSegments:a,depthSegments:u};const h=this;o=Math.floor(o),a=Math.floor(a),u=Math.floor(u);const p=[],d=[],v=[],m=[];let x=0,y=0;A("z","y","x",-1,-1,n,t,e,u,a,0),A("z","y","x",1,-1,n,t,-e,u,a,1),A("x","z","y",1,1,e,n,t,o,u,2),A("x","z","y",1,-1,e,n,-t,o,u,3),A("x","y","z",1,-1,e,t,n,o,a,4),A("x","y","z",-1,-1,e,t,-n,o,a,5),this.setIndex(p),this.setAttribute("position",new un(d,3)),this.setAttribute("normal",new un(v,3)),this.setAttribute("uv",new un(m,2));function A(R,E,_,N,U,I,B,D,z,j,P){const w=I/z,O=B/j,Y=I/2,te=B/2,Z=D/2,he=z+1,re=j+1;let ye=0,ne=0;const ge=new J;for(let Re=0;Re<re;Re++){const Oe=Re*O-te;for(let $e=0;$e<he;$e++){const nt=$e*w-Y;ge[R]=nt*N,ge[E]=Oe*U,ge[_]=Z,d.push(ge.x,ge.y,ge.z),ge[R]=0,ge[E]=0,ge[_]=D>0?1:-1,v.push(ge.x,ge.y,ge.z),m.push($e/z),m.push(1-Re/j),ye+=1}}for(let Re=0;Re<j;Re++)for(let Oe=0;Oe<z;Oe++){const $e=x+Oe+he*Re,nt=x+Oe+he*(Re+1),Je=x+(Oe+1)+he*(Re+1),Ke=x+(Oe+1)+he*Re;p.push($e,nt,Ke),p.push(nt,Je,Ke),ne+=6}h.addGroup(y,ne,P),y+=ne,x+=ye}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _r(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const o=i[t][n];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=o.clone():Array.isArray(o)?e[t][n]=o.slice():e[t][n]=o}}return e}function nn(i){const e={};for(let t=0;t<i.length;t++){const n=_r(i[t]);for(const o in n)e[o]=n[o]}return e}function gg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Pu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const vg={clone:_r,merge:nn};var xg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xg,this.fragmentShader=yg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_r(e.uniforms),this.uniformsGroups=gg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const o in this.extensions)this.extensions[o]===!0&&(n[o]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Du extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ai=new J,Ml=new ot,Tl=new ot;class xn extends Du{constructor(e=50,t=1,n=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$a*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,Ml,Tl),t.subVectors(Tl,Ml)}setViewOffset(e,t,n,o,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gs*.5*this.fov)/this.zoom,n=2*t,o=this.aspect*n,a=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;a+=u.offsetX*o/p,t-=u.offsetY*n/d,o*=u.width/p,n*=u.height/d}const h=this.filmOffset;h!==0&&(a+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qi=-90,er=1;class Eg extends jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new xn(Qi,er,e,t);o.layers=this.layers,this.add(o);const a=new xn(Qi,er,e,t);a.layers=this.layers,this.add(a);const u=new xn(Qi,er,e,t);u.layers=this.layers,this.add(u);const h=new xn(Qi,er,e,t);h.layers=this.layers,this.add(h);const p=new xn(Qi,er,e,t);p.layers=this.layers,this.add(p);const d=new xn(Qi,er,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,o,a,u,h,p]=t;for(const d of t)this.remove(d);if(e===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,h,p,d,v]=this.children,m=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const R=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,o),e.render(t,a),e.setRenderTarget(n,1,o),e.render(t,u),e.setRenderTarget(n,2,o),e.render(t,h),e.setRenderTarget(n,3,o),e.render(t,p),e.setRenderTarget(n,4,o),e.render(t,d),n.texture.generateMipmaps=R,e.setRenderTarget(n,5,o),e.render(t,v),e.setRenderTarget(m,x,y),e.xr.enabled=A,n.texture.needsPMREMUpdate=!0}}class Lu extends ln{constructor(e=[],t=dr,n,o,a,u,h,p,d,v){super(e,t,n,o,a,u,h,p,d,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sg extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},o=[n,n,n,n,n,n];this.texture=new Lu(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Hr(5,5,5),a=new mi({name:"CubemapFromEquirect",uniforms:_r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:fi});a.uniforms.tEquirect.value=t;const u=new yn(o,a),h=t.minFilter;return t.minFilter===Ni&&(t.minFilter=zn),new Eg(1,10,this).update(e,u),t.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,n=!0,o=!0){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,o);e.setRenderTarget(a)}}class As extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mg={type:"move"};class Ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new As,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new As,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new As,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let o=null,a=null,u=null;const h=this._targetRay,p=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const R of e.hand.values()){const E=t.getJointPose(R,n),_=this._getHandJoint(d,R);E!==null&&(_.matrix.fromArray(E.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=E.radius),_.visible=E!==null}const v=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],x=v.position.distanceTo(m.position),y=.02,A=.005;d.inputState.pinching&&x>y+A?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&x<=y-A&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(p.matrix.fromArray(a.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,a.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(a.linearVelocity)):p.hasLinearVelocity=!1,a.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(a.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(o=t.getPose(e.targetRaySpace,n),o===null&&a!==null&&(o=a),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Mg)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=a!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new As;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Tg extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Vo=new J,wg=new J,bg=new ct;class ui{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,o){return this.normal.set(e,t,n),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const o=Vo.subVectors(n,t).cross(wg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Vo),o=this.normal.dot(n);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||bg.getNormalMatrix(e),o=this.coplanarPoint(Vo).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Js,Ag=new ot(.5,.5),Rs=new J;class oc{constructor(e=new ui,t=new ui,n=new ui,o=new ui,a=new ui,u=new ui){this.planes=[e,t,n,o,a,u]}set(e,t,n,o,a,u){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(n),h[3].copy(o),h[4].copy(a),h[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hn,n=!1){const o=this.planes,a=e.elements,u=a[0],h=a[1],p=a[2],d=a[3],v=a[4],m=a[5],x=a[6],y=a[7],A=a[8],R=a[9],E=a[10],_=a[11],N=a[12],U=a[13],I=a[14],B=a[15];if(o[0].setComponents(d-u,y-v,_-A,B-N).normalize(),o[1].setComponents(d+u,y+v,_+A,B+N).normalize(),o[2].setComponents(d+h,y+m,_+R,B+U).normalize(),o[3].setComponents(d-h,y-m,_-R,B-U).normalize(),n)o[4].setComponents(p,x,E,I).normalize(),o[5].setComponents(d-p,y-x,_-E,B-I).normalize();else if(o[4].setComponents(d-p,y-x,_-E,B-I).normalize(),t===Hn)o[5].setComponents(d+p,y+x,_+E,B+I).normalize();else if(t===qs)o[5].setComponents(p,x,E,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){Ri.center.set(0,0,0);const t=Ag.distanceTo(e.center);return Ri.radius=.7071067811865476+t,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,n=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const o=t[n];if(Rs.x=o.normal.x>0?e.max.x:e.min.x,Rs.y=o.normal.y>0?e.max.y:e.min.y,Rs.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fu extends gr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ys=new J,Ks=new J,wl=new Ot,Pr=new rc,Cs=new Js,Go=new J,bl=new J;class Rg extends jt{constructor(e=new Fn,t=new Fu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let o=1,a=t.count;o<a;o++)Ys.fromBufferAttribute(t,o-1),Ks.fromBufferAttribute(t,o),n[o]=n[o-1],n[o]+=Ys.distanceTo(Ks);e.setAttribute("lineDistance",new un(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(o),Cs.radius+=a,e.ray.intersectsSphere(Cs)===!1)return;wl.copy(o).invert(),Pr.copy(e.ray).applyMatrix4(wl);const h=a/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=this.isLineSegments?2:1,v=n.index,x=n.attributes.position;if(v!==null){const y=Math.max(0,u.start),A=Math.min(v.count,u.start+u.count);for(let R=y,E=A-1;R<E;R+=d){const _=v.getX(R),N=v.getX(R+1),U=Ps(this,e,Pr,p,_,N,R);U&&t.push(U)}if(this.isLineLoop){const R=v.getX(A-1),E=v.getX(y),_=Ps(this,e,Pr,p,R,E,A-1);_&&t.push(_)}}else{const y=Math.max(0,u.start),A=Math.min(x.count,u.start+u.count);for(let R=y,E=A-1;R<E;R+=d){const _=Ps(this,e,Pr,p,R,R+1,R);_&&t.push(_)}if(this.isLineLoop){const R=Ps(this,e,Pr,p,A-1,y,A-1);R&&t.push(R)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const o=t[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const h=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}}function Ps(i,e,t,n,o,a,u){const h=i.geometry.attributes.position;if(Ys.fromBufferAttribute(h,o),Ks.fromBufferAttribute(h,a),t.distanceSqToSegment(Ys,Ks,Go,bl)>n)return;Go.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo(Go);if(!(d<e.near||d>e.far))return{distance:d,point:bl.clone().applyMatrix4(i.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:i}}const Al=new J,Rl=new J;class Cg extends Rg{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let o=0,a=t.count;o<a;o+=2)Al.fromBufferAttribute(t,o),Rl.fromBufferAttribute(t,o+1),n[o]=o===0?0:n[o-1],n[o+1]=n[o]+Al.distanceTo(Rl);e.setAttribute("lineDistance",new un(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Iu extends ln{constructor(e,t,n=Oi,o,a,u,h=Ln,p=Ln,d,v=Ur,m=1){if(v!==Ur&&v!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:m};super(x,o,a,u,h,p,v,n,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ic(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Uu extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ac extends Fn{constructor(e=1,t=1,n=1,o=32,a=1,u=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:o,heightSegments:a,openEnded:u,thetaStart:h,thetaLength:p};const d=this;o=Math.floor(o),a=Math.floor(a);const v=[],m=[],x=[],y=[];let A=0;const R=[],E=n/2;let _=0;N(),u===!1&&(e>0&&U(!0),t>0&&U(!1)),this.setIndex(v),this.setAttribute("position",new un(m,3)),this.setAttribute("normal",new un(x,3)),this.setAttribute("uv",new un(y,2));function N(){const I=new J,B=new J;let D=0;const z=(t-e)/n;for(let j=0;j<=a;j++){const P=[],w=j/a,O=w*(t-e)+e;for(let Y=0;Y<=o;Y++){const te=Y/o,Z=te*p+h,he=Math.sin(Z),re=Math.cos(Z);B.x=O*he,B.y=-w*n+E,B.z=O*re,m.push(B.x,B.y,B.z),I.set(he,z,re).normalize(),x.push(I.x,I.y,I.z),y.push(te,1-w),P.push(A++)}R.push(P)}for(let j=0;j<o;j++)for(let P=0;P<a;P++){const w=R[P][j],O=R[P+1][j],Y=R[P+1][j+1],te=R[P][j+1];(e>0||P!==0)&&(v.push(w,O,te),D+=3),(t>0||P!==a-1)&&(v.push(O,Y,te),D+=3)}d.addGroup(_,D,0),_+=D}function U(I){const B=A,D=new ot,z=new J;let j=0;const P=I===!0?e:t,w=I===!0?1:-1;for(let Y=1;Y<=o;Y++)m.push(0,E*w,0),x.push(0,w,0),y.push(.5,.5),A++;const O=A;for(let Y=0;Y<=o;Y++){const Z=Y/o*p+h,he=Math.cos(Z),re=Math.sin(Z);z.x=P*re,z.y=E*w,z.z=P*he,m.push(z.x,z.y,z.z),x.push(0,w,0),D.x=he*.5+.5,D.y=re*.5*w+.5,y.push(D.x,D.y),A++}for(let Y=0;Y<o;Y++){const te=B+Y,Z=O+Y;I===!0?v.push(Z,Z+1,te):v.push(Z+1,Z,te),j+=3}d.addGroup(_,j,I===!0?1:2),_+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ac(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vr extends Fn{constructor(e=1,t=1,n=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:o};const a=e/2,u=t/2,h=Math.floor(n),p=Math.floor(o),d=h+1,v=p+1,m=e/h,x=t/p,y=[],A=[],R=[],E=[];for(let _=0;_<v;_++){const N=_*x-u;for(let U=0;U<d;U++){const I=U*m-a;A.push(I,-N,0),R.push(0,0,1),E.push(U/h),E.push(1-_/p)}}for(let _=0;_<p;_++)for(let N=0;N<h;N++){const U=N+d*_,I=N+d*(_+1),B=N+1+d*(_+1),D=N+1+d*_;y.push(U,I,D),y.push(I,B,D)}this.setIndex(y),this.setAttribute("position",new un(A,3)),this.setAttribute("normal",new un(R,3)),this.setAttribute("uv",new un(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Cl extends gr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Su,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pg extends gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=z_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dg extends gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Nu extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Lg extends Nu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Wo=new Ot,Pl=new J,Dl=new J;class Fg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oc,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Pl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pl),Dl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dl),t.updateMatrixWorld(),Wo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ou extends Du{constructor(e=-1,t=1,n=1,o=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=o,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,o,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=n-e,u=n+e,h=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,u=a+d*this.view.width,h-=v*this.view.offsetY,p=h-v*this.view.height}this.projectionMatrix.makeOrthographic(a,u,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ig extends Fg{constructor(){super(new Ou(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ug extends Nu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new Ig}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ng extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ll{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=mt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Og extends Cg{constructor(e=10,t=10,n=4473924,o=8947848){n=new _t(n),o=new _t(o);const a=t/2,u=e/t,h=e/2,p=[],d=[];for(let x=0,y=0,A=-h;x<=t;x++,A+=u){p.push(-h,0,A,h,0,A),p.push(A,0,-h,A,0,h);const R=x===a?n:o;R.toArray(d,y),y+=3,R.toArray(d,y),y+=3,R.toArray(d,y),y+=3,R.toArray(d,y),y+=3}const v=new Fn;v.setAttribute("position",new un(p,3)),v.setAttribute("color",new un(d,3));const m=new Fu({vertexColors:!0,toneMapped:!1});super(v,m),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class kg extends zi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Fl(i,e,t,n){const o=Bg(n);switch(t){case vu:return i*e;case yu:return i*e/o.components*o.byteLength;case ec:return i*e/o.components*o.byteLength;case Eu:return i*e*2/o.components*o.byteLength;case tc:return i*e*2/o.components*o.byteLength;case xu:return i*e*3/o.components*o.byteLength;case Dn:return i*e*4/o.components*o.byteLength;case nc:return i*e*4/o.components*o.byteLength;case Bs:case zs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hs:case Vs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xa:case Ea:return Math.max(i,16)*Math.max(e,8)/4;case va:case ya:return Math.max(i,8)*Math.max(e,8)/2;case Sa:case Ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Aa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Pa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Da:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case La:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Na:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Oa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ba:case za:case Ha:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Va:case Ga:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bg(i){switch(i){case Vn:case pu:return{byteLength:1,components:1};case Fr:case mu:case kr:return{byteLength:2,components:1};case Ja:case Qa:return{byteLength:2,components:4};case Oi:case Za:case Qn:return{byteLength:4,components:1};case _u:case gu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ka}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ka);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ku(){let i=null,e=!1,t=null,n=null;function o(a,u){t(a,u),n=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function zg(i){const e=new WeakMap;function t(h,p){const d=h.array,v=h.usage,m=d.byteLength,x=i.createBuffer();i.bindBuffer(p,x),i.bufferData(p,d,v),h.onUploadCallback();let y;if(d instanceof Float32Array)y=i.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=i.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=i.SHORT;else if(d instanceof Uint32Array)y=i.UNSIGNED_INT;else if(d instanceof Int32Array)y=i.INT;else if(d instanceof Int8Array)y=i.BYTE;else if(d instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:m}}function n(h,p,d){const v=p.array,m=p.updateRanges;if(i.bindBuffer(d,h),m.length===0)i.bufferSubData(d,0,v);else{m.sort((y,A)=>y.start-A.start);let x=0;for(let y=1;y<m.length;y++){const A=m[x],R=m[y];R.start<=A.start+A.count+1?A.count=Math.max(A.count,R.start+R.count-A.start):(++x,m[x]=R)}m.length=x+1;for(let y=0,A=m.length;y<A;y++){const R=m[y];i.bufferSubData(d,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(i.deleteBuffer(p.buffer),e.delete(h))}function u(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=e.get(h);if(d===void 0)e.set(h,t(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,h,p),d.version=h.version}}return{get:o,remove:a,update:u}}var Hg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vg=`#ifdef USE_ALPHAHASH
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
#endif`,Gg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$g=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qg=`#ifdef USE_AOMAP
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
#endif`,jg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yg=`#ifdef USE_BATCHING
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
#endif`,Kg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ev=`#ifdef USE_IRIDESCENCE
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
#endif`,tv=`#ifdef USE_BUMPMAP
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
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ov=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,av=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,uv=`#define PI 3.141592653589793
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
} // validated`,hv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fv=`vec3 transformedNormal = objectNormal;
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
#endif`,dv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_v=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gv="gl_FragColor = linearToOutputTexel( gl_FragColor );",vv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xv=`#ifdef USE_ENVMAP
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
#endif`,yv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ev=`#ifdef USE_ENVMAP
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
#endif`,Sv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mv=`#ifdef USE_ENVMAP
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
#endif`,Tv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Av=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rv=`#ifdef USE_GRADIENTMAP
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
}`,Cv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lv=`uniform bool receiveShadow;
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
#endif`,Fv=`#ifdef USE_ENVMAP
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
#endif`,Iv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ov=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kv=`PhysicalMaterial material;
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
#endif`,Bv=`struct PhysicalMaterial {
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
}`,zv=`
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
#endif`,Hv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$v=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kv=`#if defined( USE_POINTS_UV )
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
#endif`,Zv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n0=`#ifdef USE_MORPHTARGETS
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
#endif`,i0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,s0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,o0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a0=`#ifndef FLAT_SHADED
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
#endif`,l0=`#ifdef USE_NORMALMAP
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
#endif`,u0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,w0=`float getShadowMask() {
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
}`,b0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A0=`#ifdef USE_SKINNING
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
#endif`,R0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C0=`#ifdef USE_SKINNING
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
#endif`,P0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,I0=`#ifdef USE_TRANSMISSION
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
#endif`,U0=`#ifdef USE_TRANSMISSION
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
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const z0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H0=`uniform sampler2D t2D;
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
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`#include <common>
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
}`,q0=`#if DEPTH_PACKING == 3200
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
}`,j0=`#define DISTANCE
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
}`,Y0=`#define DISTANCE
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
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`uniform float scale;
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
}`,Q0=`uniform vec3 diffuse;
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
}`,ex=`#include <common>
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
}`,tx=`uniform vec3 diffuse;
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
}`,nx=`#define LAMBERT
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
}`,ix=`#define LAMBERT
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
}`,rx=`#define MATCAP
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
}`,sx=`#define MATCAP
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
}`,ox=`#define NORMAL
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
}`,ax=`#define NORMAL
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
}`,lx=`#define PHONG
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
}`,ux=`#define STANDARD
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
}`,hx=`#define STANDARD
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
}`,fx=`#define TOON
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
}`,dx=`#define TOON
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
}`,px=`uniform float size;
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
}`,mx=`uniform vec3 diffuse;
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
}`,_x=`#include <common>
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
}`,gx=`uniform vec3 color;
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
}`,vx=`uniform float rotation;
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
}`,xx=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Hg,alphahash_pars_fragment:Vg,alphamap_fragment:Gg,alphamap_pars_fragment:Wg,alphatest_fragment:Xg,alphatest_pars_fragment:$g,aomap_fragment:qg,aomap_pars_fragment:jg,batching_pars_vertex:Yg,batching_vertex:Kg,begin_vertex:Zg,beginnormal_vertex:Jg,bsdfs:Qg,iridescence_fragment:ev,bumpmap_pars_fragment:tv,clipping_planes_fragment:nv,clipping_planes_pars_fragment:iv,clipping_planes_pars_vertex:rv,clipping_planes_vertex:sv,color_fragment:ov,color_pars_fragment:av,color_pars_vertex:cv,color_vertex:lv,common:uv,cube_uv_reflection_fragment:hv,defaultnormal_vertex:fv,displacementmap_pars_vertex:dv,displacementmap_vertex:pv,emissivemap_fragment:mv,emissivemap_pars_fragment:_v,colorspace_fragment:gv,colorspace_pars_fragment:vv,envmap_fragment:xv,envmap_common_pars_fragment:yv,envmap_pars_fragment:Ev,envmap_pars_vertex:Sv,envmap_physical_pars_fragment:Fv,envmap_vertex:Mv,fog_vertex:Tv,fog_pars_vertex:wv,fog_fragment:bv,fog_pars_fragment:Av,gradientmap_pars_fragment:Rv,lightmap_pars_fragment:Cv,lights_lambert_fragment:Pv,lights_lambert_pars_fragment:Dv,lights_pars_begin:Lv,lights_toon_fragment:Iv,lights_toon_pars_fragment:Uv,lights_phong_fragment:Nv,lights_phong_pars_fragment:Ov,lights_physical_fragment:kv,lights_physical_pars_fragment:Bv,lights_fragment_begin:zv,lights_fragment_maps:Hv,lights_fragment_end:Vv,logdepthbuf_fragment:Gv,logdepthbuf_pars_fragment:Wv,logdepthbuf_pars_vertex:Xv,logdepthbuf_vertex:$v,map_fragment:qv,map_pars_fragment:jv,map_particle_fragment:Yv,map_particle_pars_fragment:Kv,metalnessmap_fragment:Zv,metalnessmap_pars_fragment:Jv,morphinstance_vertex:Qv,morphcolor_vertex:e0,morphnormal_vertex:t0,morphtarget_pars_vertex:n0,morphtarget_vertex:i0,normal_fragment_begin:r0,normal_fragment_maps:s0,normal_pars_fragment:o0,normal_pars_vertex:a0,normal_vertex:c0,normalmap_pars_fragment:l0,clearcoat_normal_fragment_begin:u0,clearcoat_normal_fragment_maps:h0,clearcoat_pars_fragment:f0,iridescence_pars_fragment:d0,opaque_fragment:p0,packing:m0,premultiplied_alpha_fragment:_0,project_vertex:g0,dithering_fragment:v0,dithering_pars_fragment:x0,roughnessmap_fragment:y0,roughnessmap_pars_fragment:E0,shadowmap_pars_fragment:S0,shadowmap_pars_vertex:M0,shadowmap_vertex:T0,shadowmask_pars_fragment:w0,skinbase_vertex:b0,skinning_pars_vertex:A0,skinning_vertex:R0,skinnormal_vertex:C0,specularmap_fragment:P0,specularmap_pars_fragment:D0,tonemapping_fragment:L0,tonemapping_pars_fragment:F0,transmission_fragment:I0,transmission_pars_fragment:U0,uv_pars_fragment:N0,uv_pars_vertex:O0,uv_vertex:k0,worldpos_vertex:B0,background_vert:z0,background_frag:H0,backgroundCube_vert:V0,backgroundCube_frag:G0,cube_vert:W0,cube_frag:X0,depth_vert:$0,depth_frag:q0,distanceRGBA_vert:j0,distanceRGBA_frag:Y0,equirect_vert:K0,equirect_frag:Z0,linedashed_vert:J0,linedashed_frag:Q0,meshbasic_vert:ex,meshbasic_frag:tx,meshlambert_vert:nx,meshlambert_frag:ix,meshmatcap_vert:rx,meshmatcap_frag:sx,meshnormal_vert:ox,meshnormal_frag:ax,meshphong_vert:cx,meshphong_frag:lx,meshphysical_vert:ux,meshphysical_frag:hx,meshtoon_vert:fx,meshtoon_frag:dx,points_vert:px,points_frag:mx,shadow_vert:_x,shadow_frag:gx,sprite_vert:vx,sprite_frag:xx},Ue={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},kn={basic:{uniforms:nn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:nn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new _t(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:nn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:nn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:nn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new _t(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:nn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:nn([Ue.points,Ue.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:nn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:nn([Ue.common,Ue.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:nn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:nn([Ue.sprite,Ue.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:nn([Ue.common,Ue.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:nn([Ue.lights,Ue.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};kn.physical={uniforms:nn([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Ds={r:0,b:0,g:0},Ci=new Gn,yx=new Ot;function Ex(i,e,t,n,o,a,u){const h=new _t(0);let p=a===!0?0:1,d,v,m=null,x=0,y=null;function A(U){let I=U.isScene===!0?U.background:null;return I&&I.isTexture&&(I=(U.backgroundBlurriness>0?t:e).get(I)),I}function R(U){let I=!1;const B=A(U);B===null?_(h,p):B&&B.isColor&&(_(B,1),I=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,u):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(i.autoClear||I)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(U,I){const B=A(I);B&&(B.isCubeTexture||B.mapping===Zs)?(v===void 0&&(v=new yn(new Hr(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:_r(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(D,z,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),Ci.copy(I.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),v.material.uniforms.envMap.value=B,v.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(yx.makeRotationFromEuler(Ci)),v.material.toneMapped=Mt.getTransfer(B.colorSpace)!==Rt,(m!==B||x!==B.version||y!==i.toneMapping)&&(v.material.needsUpdate=!0,m=B,x=B.version,y=i.toneMapping),v.layers.enableAll(),U.unshift(v,v.geometry,v.material,0,0,null)):B&&B.isTexture&&(d===void 0&&(d=new yn(new Vr(2,2),new mi({name:"BackgroundMaterial",uniforms:_r(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=B,d.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,d.material.toneMapped=Mt.getTransfer(B.colorSpace)!==Rt,B.matrixAutoUpdate===!0&&B.updateMatrix(),d.material.uniforms.uvTransform.value.copy(B.matrix),(m!==B||x!==B.version||y!==i.toneMapping)&&(d.material.needsUpdate=!0,m=B,x=B.version,y=i.toneMapping),d.layers.enableAll(),U.unshift(d,d.geometry,d.material,0,0,null))}function _(U,I){U.getRGB(Ds,Pu(i)),n.buffers.color.setClear(Ds.r,Ds.g,Ds.b,I,u)}function N(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,I=1){h.set(U),p=I,_(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,_(h,p)},render:R,addToRenderList:E,dispose:N}}function Sx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},o=x(null);let a=o,u=!1;function h(w,O,Y,te,Z){let he=!1;const re=m(te,Y,O);a!==re&&(a=re,d(a.object)),he=y(w,te,Y,Z),he&&A(w,te,Y,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,I(w,O,Y,te),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function p(){return i.createVertexArray()}function d(w){return i.bindVertexArray(w)}function v(w){return i.deleteVertexArray(w)}function m(w,O,Y){const te=Y.wireframe===!0;let Z=n[w.id];Z===void 0&&(Z={},n[w.id]=Z);let he=Z[O.id];he===void 0&&(he={},Z[O.id]=he);let re=he[te];return re===void 0&&(re=x(p()),he[te]=re),re}function x(w){const O=[],Y=[],te=[];for(let Z=0;Z<t;Z++)O[Z]=0,Y[Z]=0,te[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Y,attributeDivisors:te,object:w,attributes:{},index:null}}function y(w,O,Y,te){const Z=a.attributes,he=O.attributes;let re=0;const ye=Y.getAttributes();for(const ne in ye)if(ye[ne].location>=0){const Re=Z[ne];let Oe=he[ne];if(Oe===void 0&&(ne==="instanceMatrix"&&w.instanceMatrix&&(Oe=w.instanceMatrix),ne==="instanceColor"&&w.instanceColor&&(Oe=w.instanceColor)),Re===void 0||Re.attribute!==Oe||Oe&&Re.data!==Oe.data)return!0;re++}return a.attributesNum!==re||a.index!==te}function A(w,O,Y,te){const Z={},he=O.attributes;let re=0;const ye=Y.getAttributes();for(const ne in ye)if(ye[ne].location>=0){let Re=he[ne];Re===void 0&&(ne==="instanceMatrix"&&w.instanceMatrix&&(Re=w.instanceMatrix),ne==="instanceColor"&&w.instanceColor&&(Re=w.instanceColor));const Oe={};Oe.attribute=Re,Re&&Re.data&&(Oe.data=Re.data),Z[ne]=Oe,re++}a.attributes=Z,a.attributesNum=re,a.index=te}function R(){const w=a.newAttributes;for(let O=0,Y=w.length;O<Y;O++)w[O]=0}function E(w){_(w,0)}function _(w,O){const Y=a.newAttributes,te=a.enabledAttributes,Z=a.attributeDivisors;Y[w]=1,te[w]===0&&(i.enableVertexAttribArray(w),te[w]=1),Z[w]!==O&&(i.vertexAttribDivisor(w,O),Z[w]=O)}function N(){const w=a.newAttributes,O=a.enabledAttributes;for(let Y=0,te=O.length;Y<te;Y++)O[Y]!==w[Y]&&(i.disableVertexAttribArray(Y),O[Y]=0)}function U(w,O,Y,te,Z,he,re){re===!0?i.vertexAttribIPointer(w,O,Y,Z,he):i.vertexAttribPointer(w,O,Y,te,Z,he)}function I(w,O,Y,te){R();const Z=te.attributes,he=Y.getAttributes(),re=O.defaultAttributeValues;for(const ye in he){const ne=he[ye];if(ne.location>=0){let ge=Z[ye];if(ge===void 0&&(ye==="instanceMatrix"&&w.instanceMatrix&&(ge=w.instanceMatrix),ye==="instanceColor"&&w.instanceColor&&(ge=w.instanceColor)),ge!==void 0){const Re=ge.normalized,Oe=ge.itemSize,$e=e.get(ge);if($e===void 0)continue;const nt=$e.buffer,Je=$e.type,Ke=$e.bytesPerElement,le=Je===i.INT||Je===i.UNSIGNED_INT||ge.gpuType===Za;if(ge.isInterleavedBufferAttribute){const pe=ge.data,ae=pe.stride,Me=ge.offset;if(pe.isInstancedInterleavedBuffer){for(let We=0;We<ne.locationSize;We++)_(ne.location+We,pe.meshPerAttribute);w.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let We=0;We<ne.locationSize;We++)E(ne.location+We);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let We=0;We<ne.locationSize;We++)U(ne.location+We,Oe/ne.locationSize,Je,Re,ae*Ke,(Me+Oe/ne.locationSize*We)*Ke,le)}else{if(ge.isInstancedBufferAttribute){for(let pe=0;pe<ne.locationSize;pe++)_(ne.location+pe,ge.meshPerAttribute);w.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let pe=0;pe<ne.locationSize;pe++)E(ne.location+pe);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let pe=0;pe<ne.locationSize;pe++)U(ne.location+pe,Oe/ne.locationSize,Je,Re,Oe*Ke,Oe/ne.locationSize*pe*Ke,le)}}else if(re!==void 0){const Re=re[ye];if(Re!==void 0)switch(Re.length){case 2:i.vertexAttrib2fv(ne.location,Re);break;case 3:i.vertexAttrib3fv(ne.location,Re);break;case 4:i.vertexAttrib4fv(ne.location,Re);break;default:i.vertexAttrib1fv(ne.location,Re)}}}}N()}function B(){j();for(const w in n){const O=n[w];for(const Y in O){const te=O[Y];for(const Z in te)v(te[Z].object),delete te[Z];delete O[Y]}delete n[w]}}function D(w){if(n[w.id]===void 0)return;const O=n[w.id];for(const Y in O){const te=O[Y];for(const Z in te)v(te[Z].object),delete te[Z];delete O[Y]}delete n[w.id]}function z(w){for(const O in n){const Y=n[O];if(Y[w.id]===void 0)continue;const te=Y[w.id];for(const Z in te)v(te[Z].object),delete te[Z];delete Y[w.id]}}function j(){P(),u=!0,a!==o&&(a=o,d(a.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:j,resetDefaultState:P,dispose:B,releaseStatesOfGeometry:D,releaseStatesOfProgram:z,initAttributes:R,enableAttribute:E,disableUnusedAttributes:N}}function Mx(i,e,t){let n;function o(d){n=d}function a(d,v){i.drawArrays(n,d,v),t.update(v,n,1)}function u(d,v,m){m!==0&&(i.drawArraysInstanced(n,d,v,m),t.update(v,n,m))}function h(d,v,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,v,0,m);let y=0;for(let A=0;A<m;A++)y+=v[A];t.update(y,n,1)}function p(d,v,m,x){if(m===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let A=0;A<d.length;A++)u(d[A],v[A],x[A]);else{y.multiDrawArraysInstancedWEBGL(n,d,0,v,0,x,0,m);let A=0;for(let R=0;R<m;R++)A+=v[R]*x[R];t.update(A,n,1)}}this.setMode=o,this.render=a,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function Tx(i,e,t,n){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(z){return!(z!==Dn&&n.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const j=z===kr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Vn&&n.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Qn&&!j)}function p(z){if(z==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const v=p(d);v!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",v,"instead."),d=v);const m=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=i.getParameter(i.MAX_TEXTURE_SIZE),E=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),N=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),U=i.getParameter(i.MAX_VARYING_VECTORS),I=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=A>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:m,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:A,maxTextureSize:R,maxCubemapSize:E,maxAttributes:_,maxVertexUniforms:N,maxVaryings:U,maxFragmentUniforms:I,vertexTextures:B,maxSamples:D}}function wx(i){const e=this;let t=null,n=0,o=!1,a=!1;const u=new ui,h=new ct,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(m,x){const y=m.length!==0||x||n!==0||o;return o=x,n=m.length,y},this.beginShadows=function(){a=!0,v(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,x){t=v(m,x,0)},this.setState=function(m,x,y){const A=m.clippingPlanes,R=m.clipIntersection,E=m.clipShadows,_=i.get(m);if(!o||A===null||A.length===0||a&&!E)a?v(null):d();else{const N=a?0:n,U=N*4;let I=_.clippingState||null;p.value=I,I=v(A,x,U,y);for(let B=0;B!==U;++B)I[B]=t[B];_.clippingState=I,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=N}};function d(){p.value!==t&&(p.value=t,p.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function v(m,x,y,A){const R=m!==null?m.length:0;let E=null;if(R!==0){if(E=p.value,A!==!0||E===null){const _=y+R*4,N=x.matrixWorldInverse;h.getNormalMatrix(N),(E===null||E.length<_)&&(E=new Float32Array(_));for(let U=0,I=y;U!==R;++U,I+=4)u.copy(m[U]).applyMatrix4(N,h),u.normal.toArray(E,I),E[I+3]=u.constant}p.value=E,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,E}}function bx(i){let e=new WeakMap;function t(u,h){return h===pa?u.mapping=dr:h===ma&&(u.mapping=pr),u}function n(u){if(u&&u.isTexture){const h=u.mapping;if(h===pa||h===ma)if(e.has(u)){const p=e.get(u).texture;return t(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const d=new Sg(p.height);return d.fromEquirectangularTexture(i,u),e.set(u,d),u.addEventListener("dispose",o),t(d.texture,u.mapping)}else return null}}return u}function o(u){const h=u.target;h.removeEventListener("dispose",o);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const ar=4,Il=[.125,.215,.35,.446,.526,.582],Ii=20,Xo=new Ou,Ul=new _t;let $o=null,qo=0,jo=0,Yo=!1;const Li=(1+Math.sqrt(5))/2,tr=1/Li,Nl=[new J(-Li,tr,0),new J(Li,tr,0),new J(-tr,0,Li),new J(tr,0,Li),new J(0,Li,-tr),new J(0,Li,tr),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],Ax=new J;class Ol{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,o=100,a={}){const{size:u=256,position:h=Ax}=a;$o=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,n,o,p,h),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($o,qo,jo),this._renderer.xr.enabled=Yo,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$o=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:kr,format:Dn,colorSpace:mr,depthBuffer:!1},o=kl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kl(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rx(a)),this._blurMaterial=Cx(a,e,t)}return o}_compileMaterial(e){const t=new yn(this._lodPlanes[0],e);this._renderer.compile(t,Xo)}_sceneToCubeUV(e,t,n,o,a){const p=new xn(90,1,t,n),d=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],m=this._renderer,x=m.autoClear,y=m.toneMapping;m.getClearColor(Ul),m.toneMapping=di,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(o),m.clearDepth(),m.setRenderTarget(null));const R=new sc({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),E=new yn(new Hr,R);let _=!1;const N=e.background;N?N.isColor&&(R.color.copy(N),e.background=null,_=!0):(R.color.copy(Ul),_=!0);for(let U=0;U<6;U++){const I=U%3;I===0?(p.up.set(0,d[U],0),p.position.set(a.x,a.y,a.z),p.lookAt(a.x+v[U],a.y,a.z)):I===1?(p.up.set(0,0,d[U]),p.position.set(a.x,a.y,a.z),p.lookAt(a.x,a.y+v[U],a.z)):(p.up.set(0,d[U],0),p.position.set(a.x,a.y,a.z),p.lookAt(a.x,a.y,a.z+v[U]));const B=this._cubeSize;Ls(o,I*B,U>2?B:0,B,B),m.setRenderTarget(o),_&&m.render(E,p),m.render(e,p)}E.geometry.dispose(),E.material.dispose(),m.toneMapping=y,m.autoClear=x,e.background=N}_textureToCubeUV(e,t){const n=this._renderer,o=e.mapping===dr||e.mapping===pr;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=zl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bl());const a=o?this._cubemapMaterial:this._equirectMaterial,u=new yn(this._lodPlanes[0],a),h=a.uniforms;h.envMap.value=e;const p=this._cubeSize;Ls(t,0,0,3*p,2*p),n.setRenderTarget(t),n.render(u,Xo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let a=1;a<o;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),h=Nl[(o-a-1)%Nl.length];this._blur(e,a-1,a,u,h)}t.autoClear=n}_blur(e,t,n,o,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,n,o,"latitudinal",a),this._halfBlur(u,e,n,n,o,"longitudinal",a)}_halfBlur(e,t,n,o,a,u,h){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,m=new yn(this._lodPlanes[o],d),x=d.uniforms,y=this._sizeLods[n]-1,A=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*Ii-1),R=a/A,E=isFinite(a)?1+Math.floor(v*R):Ii;E>Ii&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${Ii}`);const _=[];let N=0;for(let z=0;z<Ii;++z){const j=z/R,P=Math.exp(-j*j/2);_.push(P),z===0?N+=P:z<E&&(N+=2*P)}for(let z=0;z<_.length;z++)_[z]=_[z]/N;x.envMap.value=e.texture,x.samples.value=E,x.weights.value=_,x.latitudinal.value=u==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:U}=this;x.dTheta.value=A,x.mipInt.value=U-n;const I=this._sizeLods[o],B=3*I*(o>U-ar?o-U+ar:0),D=4*(this._cubeSize-I);Ls(t,B,D,3*I,2*I),p.setRenderTarget(t),p.render(m,Xo)}}function Rx(i){const e=[],t=[],n=[];let o=i;const a=i-ar+1+Il.length;for(let u=0;u<a;u++){const h=Math.pow(2,o);t.push(h);let p=1/h;u>i-ar?p=Il[u-i+ar-1]:u===0&&(p=0),n.push(p);const d=1/(h-2),v=-d,m=1+d,x=[v,v,m,v,m,m,v,v,m,m,v,m],y=6,A=6,R=3,E=2,_=1,N=new Float32Array(R*A*y),U=new Float32Array(E*A*y),I=new Float32Array(_*A*y);for(let D=0;D<y;D++){const z=D%3*2/3-1,j=D>2?0:-1,P=[z,j,0,z+2/3,j,0,z+2/3,j+1,0,z,j,0,z+2/3,j+1,0,z,j+1,0];N.set(P,R*A*D),U.set(x,E*A*D);const w=[D,D,D,D,D,D];I.set(w,_*A*D)}const B=new Fn;B.setAttribute("position",new En(N,R)),B.setAttribute("uv",new En(U,E)),B.setAttribute("faceIndex",new En(I,_)),e.push(B),o>ar&&o--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function kl(i,e,t){const n=new Bi(i,e,t);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ls(i,e,t,n,o){i.viewport.set(e,t,n,o),i.scissor.set(e,t,n,o)}function Cx(i,e,t){const n=new Float32Array(Ii),o=new J(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:cc(),fragmentShader:`

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
	`}function Px(i){let e=new WeakMap,t=null;function n(h){if(h&&h.isTexture){const p=h.mapping,d=p===pa||p===ma,v=p===dr||p===pr;if(d||v){let m=e.get(h);const x=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return t===null&&(t=new Ol(i)),m=d?t.fromEquirectangular(h,m):t.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const y=h.image;return d&&y&&y.height>0||v&&y&&o(y)?(t===null&&(t=new Ol(i)),m=d?t.fromEquirectangular(h):t.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",a),m.texture):null}}}return h}function o(h){let p=0;const d=6;for(let v=0;v<d;v++)h[v]!==void 0&&p++;return p===d}function a(h){const p=h.target;p.removeEventListener("dispose",a);const d=e.get(p);d!==void 0&&(e.delete(p),d.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:u}}function Dx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let o;switch(n){case"WEBGL_depth_texture":o=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=i.getExtension(n)}return e[n]=o,o}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const o=t(n);return o===null&&Or("THREE.WebGLRenderer: "+n+" extension not supported."),o}}}function Lx(i,e,t,n){const o={},a=new WeakMap;function u(m){const x=m.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);x.removeEventListener("dispose",u),delete o[x.id];const y=a.get(x);y&&(e.remove(y),a.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function h(m,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,t.memory.geometries++),x}function p(m){const x=m.attributes;for(const y in x)e.update(x[y],i.ARRAY_BUFFER)}function d(m){const x=[],y=m.index,A=m.attributes.position;let R=0;if(y!==null){const N=y.array;R=y.version;for(let U=0,I=N.length;U<I;U+=3){const B=N[U+0],D=N[U+1],z=N[U+2];x.push(B,D,D,z,z,B)}}else if(A!==void 0){const N=A.array;R=A.version;for(let U=0,I=N.length/3-1;U<I;U+=3){const B=U+0,D=U+1,z=U+2;x.push(B,D,D,z,z,B)}}else return;const E=new(Tu(x)?Cu:Ru)(x,1);E.version=R;const _=a.get(m);_&&e.remove(_),a.set(m,E)}function v(m){const x=a.get(m);if(x){const y=m.index;y!==null&&x.version<y.version&&d(m)}else d(m);return a.get(m)}return{get:h,update:p,getWireframeAttribute:v}}function Fx(i,e,t){let n;function o(x){n=x}let a,u;function h(x){a=x.type,u=x.bytesPerElement}function p(x,y){i.drawElements(n,y,a,x*u),t.update(y,n,1)}function d(x,y,A){A!==0&&(i.drawElementsInstanced(n,y,a,x*u,A),t.update(y,n,A))}function v(x,y,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,y,0,a,x,0,A);let E=0;for(let _=0;_<A;_++)E+=y[_];t.update(E,n,1)}function m(x,y,A,R){if(A===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let _=0;_<x.length;_++)d(x[_]/u,y[_],R[_]);else{E.multiDrawElementsInstancedWEBGL(n,y,0,a,x,0,R,0,A);let _=0;for(let N=0;N<A;N++)_+=y[N]*R[N];t.update(_,n,1)}}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=v,this.renderMultiDrawInstances=m}function Ix(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,u,h){switch(t.calls++,u){case i.TRIANGLES:t.triangles+=h*(a/3);break;case i.LINES:t.lines+=h*(a/2);break;case i.LINE_STRIP:t.lines+=h*(a-1);break;case i.LINE_LOOP:t.lines+=h*a;break;case i.POINTS:t.points+=h*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:n}}function Ux(i,e,t){const n=new WeakMap,o=new Nt;function a(u,h,p){const d=u.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=v!==void 0?v.length:0;let x=n.get(h);if(x===void 0||x.count!==m){let P=function(){z.dispose(),n.delete(h),h.removeEventListener("dispose",P)};x!==void 0&&x.texture.dispose();const y=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],_=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let U=0;y===!0&&(U=1),A===!0&&(U=2),R===!0&&(U=3);let I=h.attributes.position.count*U,B=1;I>e.maxTextureSize&&(B=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const D=new Float32Array(I*B*4*m),z=new wu(D,I,B,m);z.type=Qn,z.needsUpdate=!0;const j=U*4;for(let w=0;w<m;w++){const O=E[w],Y=_[w],te=N[w],Z=I*B*4*w;for(let he=0;he<O.count;he++){const re=he*j;y===!0&&(o.fromBufferAttribute(O,he),D[Z+re+0]=o.x,D[Z+re+1]=o.y,D[Z+re+2]=o.z,D[Z+re+3]=0),A===!0&&(o.fromBufferAttribute(Y,he),D[Z+re+4]=o.x,D[Z+re+5]=o.y,D[Z+re+6]=o.z,D[Z+re+7]=0),R===!0&&(o.fromBufferAttribute(te,he),D[Z+re+8]=o.x,D[Z+re+9]=o.y,D[Z+re+10]=o.z,D[Z+re+11]=te.itemSize===4?o.w:1)}}x={count:m,texture:z,size:new ot(I,B)},n.set(h,x),h.addEventListener("dispose",P)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(i,"morphTexture",u.morphTexture,t);else{let y=0;for(let R=0;R<d.length;R++)y+=d[R];const A=h.morphTargetsRelative?1:1-y;p.getUniforms().setValue(i,"morphTargetBaseInfluence",A),p.getUniforms().setValue(i,"morphTargetInfluences",d)}p.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}return{update:a}}function Nx(i,e,t,n){let o=new WeakMap;function a(p){const d=n.render.frame,v=p.geometry,m=e.get(p,v);if(o.get(m)!==d&&(e.update(m),o.set(m,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),o.get(p)!==d&&(t.update(p.instanceMatrix,i.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,i.ARRAY_BUFFER),o.set(p,d))),p.isSkinnedMesh){const x=p.skeleton;o.get(x)!==d&&(x.update(),o.set(x,d))}return m}function u(){o=new WeakMap}function h(p){const d=p.target;d.removeEventListener("dispose",h),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:u}}const Bu=new ln,Hl=new Iu(1,1),zu=new wu,Hu=new sg,Vu=new Lu,Vl=[],Gl=[],Wl=new Float32Array(16),Xl=new Float32Array(9),$l=new Float32Array(4);function vr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const o=e*t;let a=Vl[o];if(a===void 0&&(a=new Float32Array(o),Vl[o]=a),e!==0){n.toArray(a,0);for(let u=1,h=0;u!==e;++u)h+=t,i[u].toArray(a,h)}return a}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Qs(i,e){let t=Gl[e];t===void 0&&(t=new Int32Array(e),Gl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ox(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function kx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function Bx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function zx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function Hx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Xt(t,n))return;$l.set(n),i.uniformMatrix2fv(this.addr,!1,$l),$t(t,n)}}function Vx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Xt(t,n))return;Xl.set(n),i.uniformMatrix3fv(this.addr,!1,Xl),$t(t,n)}}function Gx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Xt(t,n))return;Wl.set(n),i.uniformMatrix4fv(this.addr,!1,Wl),$t(t,n)}}function Wx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Xx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function $x(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function qx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function jx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Yx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function Kx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function Zx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function Jx(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o);let a;this.type===i.SAMPLER_2D_SHADOW?(Hl.compareFunction=Mu,a=Hl):a=Bu,t.setTexture2D(e||a,o)}function Qx(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTexture3D(e||Hu,o)}function ey(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTextureCube(e||Vu,o)}function ty(i,e,t){const n=this.cache,o=t.allocateTextureUnit();n[0]!==o&&(i.uniform1i(this.addr,o),n[0]=o),t.setTexture2DArray(e||zu,o)}function ny(i){switch(i){case 5126:return Ox;case 35664:return kx;case 35665:return Bx;case 35666:return zx;case 35674:return Hx;case 35675:return Vx;case 35676:return Gx;case 5124:case 35670:return Wx;case 35667:case 35671:return Xx;case 35668:case 35672:return $x;case 35669:case 35673:return qx;case 5125:return jx;case 36294:return Yx;case 36295:return Kx;case 36296:return Zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Jx;case 35679:case 36299:case 36307:return Qx;case 35680:case 36300:case 36308:case 36293:return ey;case 36289:case 36303:case 36311:case 36292:return ty}}function iy(i,e){i.uniform1fv(this.addr,e)}function ry(i,e){const t=vr(e,this.size,2);i.uniform2fv(this.addr,t)}function sy(i,e){const t=vr(e,this.size,3);i.uniform3fv(this.addr,t)}function oy(i,e){const t=vr(e,this.size,4);i.uniform4fv(this.addr,t)}function ay(i,e){const t=vr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function cy(i,e){const t=vr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ly(i,e){const t=vr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function uy(i,e){i.uniform1iv(this.addr,e)}function hy(i,e){i.uniform2iv(this.addr,e)}function fy(i,e){i.uniform3iv(this.addr,e)}function dy(i,e){i.uniform4iv(this.addr,e)}function py(i,e){i.uniform1uiv(this.addr,e)}function my(i,e){i.uniform2uiv(this.addr,e)}function _y(i,e){i.uniform3uiv(this.addr,e)}function gy(i,e){i.uniform4uiv(this.addr,e)}function vy(i,e,t){const n=this.cache,o=e.length,a=Qs(t,o);Xt(n,a)||(i.uniform1iv(this.addr,a),$t(n,a));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||Bu,a[u])}function xy(i,e,t){const n=this.cache,o=e.length,a=Qs(t,o);Xt(n,a)||(i.uniform1iv(this.addr,a),$t(n,a));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Hu,a[u])}function yy(i,e,t){const n=this.cache,o=e.length,a=Qs(t,o);Xt(n,a)||(i.uniform1iv(this.addr,a),$t(n,a));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Vu,a[u])}function Ey(i,e,t){const n=this.cache,o=e.length,a=Qs(t,o);Xt(n,a)||(i.uniform1iv(this.addr,a),$t(n,a));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||zu,a[u])}function Sy(i){switch(i){case 5126:return iy;case 35664:return ry;case 35665:return sy;case 35666:return oy;case 35674:return ay;case 35675:return cy;case 35676:return ly;case 5124:case 35670:return uy;case 35667:case 35671:return hy;case 35668:case 35672:return fy;case 35669:case 35673:return dy;case 5125:return py;case 36294:return my;case 36295:return _y;case 36296:return gy;case 35678:case 36198:case 36298:case 36306:case 35682:return vy;case 35679:case 36299:case 36307:return xy;case 35680:case 36300:case 36308:case 36293:return yy;case 36289:case 36303:case 36311:case 36292:return Ey}}class My{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ny(t.type)}}class Ty{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sy(t.type)}}class wy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const o=this.seq;for(let a=0,u=o.length;a!==u;++a){const h=o[a];h.setValue(e,t[h.id],n)}}}const Ko=/(\w+)(\])?(\[|\.)?/g;function ql(i,e){i.seq.push(e),i.map[e.id]=e}function by(i,e,t){const n=i.name,o=n.length;for(Ko.lastIndex=0;;){const a=Ko.exec(n),u=Ko.lastIndex;let h=a[1];const p=a[2]==="]",d=a[3];if(p&&(h=h|0),d===void 0||d==="["&&u+2===o){ql(t,d===void 0?new My(h,i,e):new Ty(h,i,e));break}else{let m=t.map[h];m===void 0&&(m=new wy(h),ql(t,m)),t=m}}}class Ws{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),u=e.getUniformLocation(t,a.name);by(a,u,this)}}setValue(e,t,n,o){const a=this.map[t];a!==void 0&&a.setValue(e,n,o)}setOptional(e,t,n){const o=t[n];o!==void 0&&this.setValue(e,n,o)}static upload(e,t,n,o){for(let a=0,u=t.length;a!==u;++a){const h=t[a],p=n[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,o)}}static seqWithValue(e,t){const n=[];for(let o=0,a=e.length;o!==a;++o){const u=e[o];u.id in t&&n.push(u)}return n}}function jl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ay=37297;let Ry=0;function Cy(i,e){const t=i.split(`
`),n=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=o;u<a;u++){const h=u+1;n.push(`${h===e?">":" "} ${h}: ${t[u]}`)}return n.join(`
`)}const Yl=new ct;function Py(i){Mt._getMatrix(Yl,Mt.workingColorSpace,i);const e=`mat3( ${Yl.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(i)){case $s:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Kl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const h=parseInt(u[1]);return t.toUpperCase()+`

`+a+`

`+Cy(i.getShaderSource(e),h)}else return a}function Dy(i,e){const t=Py(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ly(i,e){let t;switch(e){case L_:t="Linear";break;case F_:t="Reinhard";break;case I_:t="Cineon";break;case U_:t="ACESFilmic";break;case O_:t="AgX";break;case k_:t="Neutral";break;case N_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fs=new J;function Fy(){Mt.getLuminanceCoefficients(Fs);const i=Fs.x.toFixed(4),e=Fs.y.toFixed(4),t=Fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Iy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function Uy(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ny(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<n;o++){const a=i.getActiveAttrib(e,o),u=a.name;let h=1;a.type===i.FLOAT_MAT2&&(h=2),a.type===i.FLOAT_MAT3&&(h=3),a.type===i.FLOAT_MAT4&&(h=4),t[u]={type:a.type,location:i.getAttribLocation(e,u),locationSize:h}}return t}function Dr(i){return i!==""}function Zl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Oy=/^[ \t]*#include +<([\w\d./]+)>/gm;function qa(i){return i.replace(Oy,By)}const ky=new Map;function By(i,e){let t=ft[e];if(t===void 0){const n=ky.get(e);if(n!==void 0)t=ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return qa(t)}const zy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ql(i){return i.replace(zy,Hy)}function Hy(i,e,t,n){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function eu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Vy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===h_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function Gy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case dr:case pr:e="ENVMAP_TYPE_CUBE";break;case Zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case pr:e="ENVMAP_MODE_REFRACTION";break}return e}function Xy(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fu:e="ENVMAP_BLENDING_MULTIPLY";break;case P_:e="ENVMAP_BLENDING_MIX";break;case D_:e="ENVMAP_BLENDING_ADD";break}return e}function $y(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function qy(i,e,t,n){const o=i.getContext(),a=t.defines;let u=t.vertexShader,h=t.fragmentShader;const p=Vy(t),d=Gy(t),v=Wy(t),m=Xy(t),x=$y(t),y=Iy(t),A=Uy(a),R=o.createProgram();let E,_,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(E=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(Dr).join(`
`),E.length>0&&(E+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(Dr).join(`
`),_.length>0&&(_+=`
`)):(E=[eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),_=[eu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+v:"",t.envMap?"#define "+m:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?ft.tonemapping_pars_fragment:"",t.toneMapping!==di?Ly("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,Dy("linearToOutputTexel",t.outputColorSpace),Fy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Dr).join(`
`)),u=qa(u),u=Zl(u,t),u=Jl(u,t),h=qa(h),h=Zl(h,t),h=Jl(h,t),u=Ql(u),h=Ql(h),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,E=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,_=["#define varying in",t.glslVersion===al?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=N+E+u,I=N+_+h,B=jl(o,o.VERTEX_SHADER,U),D=jl(o,o.FRAGMENT_SHADER,I);o.attachShader(R,B),o.attachShader(R,D),t.index0AttributeName!==void 0?o.bindAttribLocation(R,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function z(O){if(i.debug.checkShaderErrors){const Y=o.getProgramInfoLog(R)||"",te=o.getShaderInfoLog(B)||"",Z=o.getShaderInfoLog(D)||"",he=Y.trim(),re=te.trim(),ye=Z.trim();let ne=!0,ge=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,R,B,D);else{const Re=Kl(o,B,"vertex"),Oe=Kl(o,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+he+`
`+Re+`
`+Oe)}else he!==""?console.warn("THREE.WebGLProgram: Program Info Log:",he):(re===""||ye==="")&&(ge=!1);ge&&(O.diagnostics={runnable:ne,programLog:he,vertexShader:{log:re,prefix:E},fragmentShader:{log:ye,prefix:_}})}o.deleteShader(B),o.deleteShader(D),j=new Ws(o,R),P=Ny(o,R)}let j;this.getUniforms=function(){return j===void 0&&z(this),j};let P;this.getAttributes=function(){return P===void 0&&z(this),P};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=o.getProgramParameter(R,Ay)),w},this.destroy=function(){n.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ry++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=B,this.fragmentShader=D,this}let jy=0;class Yy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(n),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ky(e),t.set(e,n)),n}}class Ky{constructor(e){this.id=jy++,this.code=e,this.usedTimes=0}}function Zy(i,e,t,n,o,a,u){const h=new bu,p=new Yy,d=new Set,v=[],m=o.logarithmicDepthBuffer,x=o.vertexTextures;let y=o.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(P){return d.add(P),P===0?"uv":`uv${P}`}function E(P,w,O,Y,te){const Z=Y.fog,he=te.geometry,re=P.isMeshStandardMaterial?Y.environment:null,ye=(P.isMeshStandardMaterial?t:e).get(P.envMap||re),ne=ye&&ye.mapping===Zs?ye.image.height:null,ge=A[P.type];P.precision!==null&&(y=o.getMaxPrecision(P.precision),y!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",y,"instead."));const Re=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Oe=Re!==void 0?Re.length:0;let $e=0;he.morphAttributes.position!==void 0&&($e=1),he.morphAttributes.normal!==void 0&&($e=2),he.morphAttributes.color!==void 0&&($e=3);let nt,Je,Ke,le;if(ge){const lt=kn[ge];nt=lt.vertexShader,Je=lt.fragmentShader}else nt=P.vertexShader,Je=P.fragmentShader,p.update(P),Ke=p.getVertexShaderID(P),le=p.getFragmentShaderID(P);const pe=i.getRenderTarget(),ae=i.state.buffers.depth.getReversed(),Me=te.isInstancedMesh===!0,We=te.isBatchedMesh===!0,st=!!P.map,yt=!!P.matcap,k=!!ye,vt=!!P.aoMap,it=!!P.lightMap,ce=!!P.bumpMap,fe=!!P.normalMap,Ce=!!P.displacementMap,me=!!P.emissiveMap,Le=!!P.metalnessMap,at=!!P.roughnessMap,Ye=P.anisotropy>0,L=P.clearcoat>0,S=P.dispersion>0,V=P.iridescence>0,Q=P.sheen>0,de=P.transmission>0,se=Ye&&!!P.anisotropyMap,Be=L&&!!P.clearcoatMap,Se=L&&!!P.clearcoatNormalMap,He=L&&!!P.clearcoatRoughnessMap,Ve=V&&!!P.iridescenceMap,Te=V&&!!P.iridescenceThicknessMap,Ie=Q&&!!P.sheenColorMap,Qe=Q&&!!P.sheenRoughnessMap,Xe=!!P.specularMap,De=!!P.specularColorMap,qe=!!P.specularIntensityMap,G=de&&!!P.transmissionMap,we=de&&!!P.thicknessMap,Pe=!!P.gradientMap,ze=!!P.alphaMap,W=P.alphaTest>0,H=!!P.alphaHash,ke=!!P.extensions;let rt=di;P.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(rt=i.toneMapping);const Et={shaderID:ge,shaderType:P.type,shaderName:P.name,vertexShader:nt,fragmentShader:Je,defines:P.defines,customVertexShaderID:Ke,customFragmentShaderID:le,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:y,batching:We,batchingColor:We&&te._colorsTexture!==null,instancing:Me,instancingColor:Me&&te.instanceColor!==null,instancingMorph:Me&&te.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:mr,alphaToCoverage:!!P.alphaToCoverage,map:st,matcap:yt,envMap:k,envMapMode:k&&ye.mapping,envMapCubeUVHeight:ne,aoMap:vt,lightMap:it,bumpMap:ce,normalMap:fe,displacementMap:x&&Ce,emissiveMap:me,normalMapObjectSpace:fe&&P.normalMapType===V_,normalMapTangentSpace:fe&&P.normalMapType===Su,metalnessMap:Le,roughnessMap:at,anisotropy:Ye,anisotropyMap:se,clearcoat:L,clearcoatMap:Be,clearcoatNormalMap:Se,clearcoatRoughnessMap:He,dispersion:S,iridescence:V,iridescenceMap:Ve,iridescenceThicknessMap:Te,sheen:Q,sheenColorMap:Ie,sheenRoughnessMap:Qe,specularMap:Xe,specularColorMap:De,specularIntensityMap:qe,transmission:de,transmissionMap:G,thicknessMap:we,gradientMap:Pe,opaque:P.transparent===!1&&P.blending===ur&&P.alphaToCoverage===!1,alphaMap:ze,alphaTest:W,alphaHash:H,combine:P.combine,mapUv:st&&R(P.map.channel),aoMapUv:vt&&R(P.aoMap.channel),lightMapUv:it&&R(P.lightMap.channel),bumpMapUv:ce&&R(P.bumpMap.channel),normalMapUv:fe&&R(P.normalMap.channel),displacementMapUv:Ce&&R(P.displacementMap.channel),emissiveMapUv:me&&R(P.emissiveMap.channel),metalnessMapUv:Le&&R(P.metalnessMap.channel),roughnessMapUv:at&&R(P.roughnessMap.channel),anisotropyMapUv:se&&R(P.anisotropyMap.channel),clearcoatMapUv:Be&&R(P.clearcoatMap.channel),clearcoatNormalMapUv:Se&&R(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&R(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&R(P.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&R(P.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&R(P.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&R(P.sheenRoughnessMap.channel),specularMapUv:Xe&&R(P.specularMap.channel),specularColorMapUv:De&&R(P.specularColorMap.channel),specularIntensityMapUv:qe&&R(P.specularIntensityMap.channel),transmissionMapUv:G&&R(P.transmissionMap.channel),thicknessMapUv:we&&R(P.thicknessMap.channel),alphaMapUv:ze&&R(P.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(fe||Ye),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!he.attributes.uv&&(st||ze),fog:!!Z,useFog:P.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:ae,skinning:te.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:$e,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:rt,decodeVideoTexture:st&&P.map.isVideoTexture===!0&&Mt.getTransfer(P.map.colorSpace)===Rt,decodeVideoTextureEmissive:me&&P.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(P.emissiveMap.colorSpace)===Rt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Cn,flipSided:P.side===cn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ke&&P.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&P.extensions.multiDraw===!0||We)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Et.vertexUv1s=d.has(1),Et.vertexUv2s=d.has(2),Et.vertexUv3s=d.has(3),d.clear(),Et}function _(P){const w=[];if(P.shaderID?w.push(P.shaderID):(w.push(P.customVertexShaderID),w.push(P.customFragmentShaderID)),P.defines!==void 0)for(const O in P.defines)w.push(O),w.push(P.defines[O]);return P.isRawShaderMaterial===!1&&(N(w,P),U(w,P),w.push(i.outputColorSpace)),w.push(P.customProgramCacheKey),w.join()}function N(P,w){P.push(w.precision),P.push(w.outputColorSpace),P.push(w.envMapMode),P.push(w.envMapCubeUVHeight),P.push(w.mapUv),P.push(w.alphaMapUv),P.push(w.lightMapUv),P.push(w.aoMapUv),P.push(w.bumpMapUv),P.push(w.normalMapUv),P.push(w.displacementMapUv),P.push(w.emissiveMapUv),P.push(w.metalnessMapUv),P.push(w.roughnessMapUv),P.push(w.anisotropyMapUv),P.push(w.clearcoatMapUv),P.push(w.clearcoatNormalMapUv),P.push(w.clearcoatRoughnessMapUv),P.push(w.iridescenceMapUv),P.push(w.iridescenceThicknessMapUv),P.push(w.sheenColorMapUv),P.push(w.sheenRoughnessMapUv),P.push(w.specularMapUv),P.push(w.specularColorMapUv),P.push(w.specularIntensityMapUv),P.push(w.transmissionMapUv),P.push(w.thicknessMapUv),P.push(w.combine),P.push(w.fogExp2),P.push(w.sizeAttenuation),P.push(w.morphTargetsCount),P.push(w.morphAttributeCount),P.push(w.numDirLights),P.push(w.numPointLights),P.push(w.numSpotLights),P.push(w.numSpotLightMaps),P.push(w.numHemiLights),P.push(w.numRectAreaLights),P.push(w.numDirLightShadows),P.push(w.numPointLightShadows),P.push(w.numSpotLightShadows),P.push(w.numSpotLightShadowsWithMaps),P.push(w.numLightProbes),P.push(w.shadowMapType),P.push(w.toneMapping),P.push(w.numClippingPlanes),P.push(w.numClipIntersection),P.push(w.depthPacking)}function U(P,w){h.disableAll(),w.supportsVertexTextures&&h.enable(0),w.instancing&&h.enable(1),w.instancingColor&&h.enable(2),w.instancingMorph&&h.enable(3),w.matcap&&h.enable(4),w.envMap&&h.enable(5),w.normalMapObjectSpace&&h.enable(6),w.normalMapTangentSpace&&h.enable(7),w.clearcoat&&h.enable(8),w.iridescence&&h.enable(9),w.alphaTest&&h.enable(10),w.vertexColors&&h.enable(11),w.vertexAlphas&&h.enable(12),w.vertexUv1s&&h.enable(13),w.vertexUv2s&&h.enable(14),w.vertexUv3s&&h.enable(15),w.vertexTangents&&h.enable(16),w.anisotropy&&h.enable(17),w.alphaHash&&h.enable(18),w.batching&&h.enable(19),w.dispersion&&h.enable(20),w.batchingColor&&h.enable(21),w.gradientMap&&h.enable(22),P.push(h.mask),h.disableAll(),w.fog&&h.enable(0),w.useFog&&h.enable(1),w.flatShading&&h.enable(2),w.logarithmicDepthBuffer&&h.enable(3),w.reversedDepthBuffer&&h.enable(4),w.skinning&&h.enable(5),w.morphTargets&&h.enable(6),w.morphNormals&&h.enable(7),w.morphColors&&h.enable(8),w.premultipliedAlpha&&h.enable(9),w.shadowMapEnabled&&h.enable(10),w.doubleSided&&h.enable(11),w.flipSided&&h.enable(12),w.useDepthPacking&&h.enable(13),w.dithering&&h.enable(14),w.transmission&&h.enable(15),w.sheen&&h.enable(16),w.opaque&&h.enable(17),w.pointsUvs&&h.enable(18),w.decodeVideoTexture&&h.enable(19),w.decodeVideoTextureEmissive&&h.enable(20),w.alphaToCoverage&&h.enable(21),P.push(h.mask)}function I(P){const w=A[P.type];let O;if(w){const Y=kn[w];O=vg.clone(Y.uniforms)}else O=P.uniforms;return O}function B(P,w){let O;for(let Y=0,te=v.length;Y<te;Y++){const Z=v[Y];if(Z.cacheKey===w){O=Z,++O.usedTimes;break}}return O===void 0&&(O=new qy(i,w,P,a),v.push(O)),O}function D(P){if(--P.usedTimes===0){const w=v.indexOf(P);v[w]=v[v.length-1],v.pop(),P.destroy()}}function z(P){p.remove(P)}function j(){p.dispose()}return{getParameters:E,getProgramCacheKey:_,getUniforms:I,acquireProgram:B,releaseProgram:D,releaseShaderCache:z,programs:v,dispose:j}}function Jy(){let i=new WeakMap;function e(u){return i.has(u)}function t(u){let h=i.get(u);return h===void 0&&(h={},i.set(u,h)),h}function n(u){i.delete(u)}function o(u,h,p){i.get(u)[h]=p}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:o,dispose:a}}function Qy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function tu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nu(){const i=[];let e=0;const t=[],n=[],o=[];function a(){e=0,t.length=0,n.length=0,o.length=0}function u(m,x,y,A,R,E){let _=i[e];return _===void 0?(_={id:m.id,object:m,geometry:x,material:y,groupOrder:A,renderOrder:m.renderOrder,z:R,group:E},i[e]=_):(_.id=m.id,_.object=m,_.geometry=x,_.material=y,_.groupOrder=A,_.renderOrder=m.renderOrder,_.z=R,_.group=E),e++,_}function h(m,x,y,A,R,E){const _=u(m,x,y,A,R,E);y.transmission>0?n.push(_):y.transparent===!0?o.push(_):t.push(_)}function p(m,x,y,A,R,E){const _=u(m,x,y,A,R,E);y.transmission>0?n.unshift(_):y.transparent===!0?o.unshift(_):t.unshift(_)}function d(m,x){t.length>1&&t.sort(m||Qy),n.length>1&&n.sort(x||tu),o.length>1&&o.sort(x||tu)}function v(){for(let m=e,x=i.length;m<x;m++){const y=i[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:o,init:a,push:h,unshift:p,finish:v,sort:d}}function eE(){let i=new WeakMap;function e(n,o){const a=i.get(n);let u;return a===void 0?(u=new nu,i.set(n,[u])):o>=a.length?(u=new nu,a.push(u)):u=a[o],u}function t(){i=new WeakMap}return{get:e,dispose:t}}function tE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new _t};break;case"SpotLight":t={position:new J,direction:new J,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new J,halfWidth:new J,halfHeight:new J};break}return i[e.id]=t,t}}}function nE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let iE=0;function rE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function sE(i){const e=new tE,t=nE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new J);const o=new J,a=new Ot,u=new Ot;function h(d){let v=0,m=0,x=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let y=0,A=0,R=0,E=0,_=0,N=0,U=0,I=0,B=0,D=0,z=0;d.sort(rE);for(let P=0,w=d.length;P<w;P++){const O=d[P],Y=O.color,te=O.intensity,Z=O.distance,he=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)v+=Y.r*te,m+=Y.g*te,x+=Y.b*te;else if(O.isLightProbe){for(let re=0;re<9;re++)n.probe[re].addScaledVector(O.sh.coefficients[re],te);z++}else if(O.isDirectionalLight){const re=e.get(O);if(re.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const ye=O.shadow,ne=t.get(O);ne.shadowIntensity=ye.intensity,ne.shadowBias=ye.bias,ne.shadowNormalBias=ye.normalBias,ne.shadowRadius=ye.radius,ne.shadowMapSize=ye.mapSize,n.directionalShadow[y]=ne,n.directionalShadowMap[y]=he,n.directionalShadowMatrix[y]=O.shadow.matrix,N++}n.directional[y]=re,y++}else if(O.isSpotLight){const re=e.get(O);re.position.setFromMatrixPosition(O.matrixWorld),re.color.copy(Y).multiplyScalar(te),re.distance=Z,re.coneCos=Math.cos(O.angle),re.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),re.decay=O.decay,n.spot[R]=re;const ye=O.shadow;if(O.map&&(n.spotLightMap[B]=O.map,B++,ye.updateMatrices(O),O.castShadow&&D++),n.spotLightMatrix[R]=ye.matrix,O.castShadow){const ne=t.get(O);ne.shadowIntensity=ye.intensity,ne.shadowBias=ye.bias,ne.shadowNormalBias=ye.normalBias,ne.shadowRadius=ye.radius,ne.shadowMapSize=ye.mapSize,n.spotShadow[R]=ne,n.spotShadowMap[R]=he,I++}R++}else if(O.isRectAreaLight){const re=e.get(O);re.color.copy(Y).multiplyScalar(te),re.halfWidth.set(O.width*.5,0,0),re.halfHeight.set(0,O.height*.5,0),n.rectArea[E]=re,E++}else if(O.isPointLight){const re=e.get(O);if(re.color.copy(O.color).multiplyScalar(O.intensity),re.distance=O.distance,re.decay=O.decay,O.castShadow){const ye=O.shadow,ne=t.get(O);ne.shadowIntensity=ye.intensity,ne.shadowBias=ye.bias,ne.shadowNormalBias=ye.normalBias,ne.shadowRadius=ye.radius,ne.shadowMapSize=ye.mapSize,ne.shadowCameraNear=ye.camera.near,ne.shadowCameraFar=ye.camera.far,n.pointShadow[A]=ne,n.pointShadowMap[A]=he,n.pointShadowMatrix[A]=O.shadow.matrix,U++}n.point[A]=re,A++}else if(O.isHemisphereLight){const re=e.get(O);re.skyColor.copy(O.color).multiplyScalar(te),re.groundColor.copy(O.groundColor).multiplyScalar(te),n.hemi[_]=re,_++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ue.LTC_FLOAT_1,n.rectAreaLTC2=Ue.LTC_FLOAT_2):(n.rectAreaLTC1=Ue.LTC_HALF_1,n.rectAreaLTC2=Ue.LTC_HALF_2)),n.ambient[0]=v,n.ambient[1]=m,n.ambient[2]=x;const j=n.hash;(j.directionalLength!==y||j.pointLength!==A||j.spotLength!==R||j.rectAreaLength!==E||j.hemiLength!==_||j.numDirectionalShadows!==N||j.numPointShadows!==U||j.numSpotShadows!==I||j.numSpotMaps!==B||j.numLightProbes!==z)&&(n.directional.length=y,n.spot.length=R,n.rectArea.length=E,n.point.length=A,n.hemi.length=_,n.directionalShadow.length=N,n.directionalShadowMap.length=N,n.pointShadow.length=U,n.pointShadowMap.length=U,n.spotShadow.length=I,n.spotShadowMap.length=I,n.directionalShadowMatrix.length=N,n.pointShadowMatrix.length=U,n.spotLightMatrix.length=I+B-D,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=z,j.directionalLength=y,j.pointLength=A,j.spotLength=R,j.rectAreaLength=E,j.hemiLength=_,j.numDirectionalShadows=N,j.numPointShadows=U,j.numSpotShadows=I,j.numSpotMaps=B,j.numLightProbes=z,n.version=iE++)}function p(d,v){let m=0,x=0,y=0,A=0,R=0;const E=v.matrixWorldInverse;for(let _=0,N=d.length;_<N;_++){const U=d[_];if(U.isDirectionalLight){const I=n.directional[m];I.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(E),m++}else if(U.isSpotLight){const I=n.spot[y];I.position.setFromMatrixPosition(U.matrixWorld),I.position.applyMatrix4(E),I.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(E),y++}else if(U.isRectAreaLight){const I=n.rectArea[A];I.position.setFromMatrixPosition(U.matrixWorld),I.position.applyMatrix4(E),u.identity(),a.copy(U.matrixWorld),a.premultiply(E),u.extractRotation(a),I.halfWidth.set(U.width*.5,0,0),I.halfHeight.set(0,U.height*.5,0),I.halfWidth.applyMatrix4(u),I.halfHeight.applyMatrix4(u),A++}else if(U.isPointLight){const I=n.point[x];I.position.setFromMatrixPosition(U.matrixWorld),I.position.applyMatrix4(E),x++}else if(U.isHemisphereLight){const I=n.hemi[R];I.direction.setFromMatrixPosition(U.matrixWorld),I.direction.transformDirection(E),R++}}}return{setup:h,setupView:p,state:n}}function iu(i){const e=new sE(i),t=[],n=[];function o(v){d.camera=v,t.length=0,n.length=0}function a(v){t.push(v)}function u(v){n.push(v)}function h(){e.setup(t)}function p(v){e.setupView(t,v)}const d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:h,setupLightsView:p,pushLight:a,pushShadow:u}}function oE(i){let e=new WeakMap;function t(o,a=0){const u=e.get(o);let h;return u===void 0?(h=new iu(i),e.set(o,[h])):a>=u.length?(h=new iu(i),u.push(h)):h=u[a],h}function n(){e=new WeakMap}return{get:t,dispose:n}}const aE=`void main() {
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
}`;function lE(i,e,t){let n=new oc;const o=new ot,a=new ot,u=new Nt,h=new Pg({depthPacking:H_}),p=new Dg,d={},v=t.maxTextureSize,m={[pi]:cn,[cn]:pi,[Cn]:Cn},x=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:aE,fragmentShader:cE}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const A=new Fn;A.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new yn(A,x),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hu;let _=this.type;this.render=function(D,z,j){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||D.length===0)return;const P=i.getRenderTarget(),w=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(fi),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const te=_!==Jn&&this.type===Jn,Z=_===Jn&&this.type!==Jn;for(let he=0,re=D.length;he<re;he++){const ye=D[he],ne=ye.shadow;if(ne===void 0){console.warn("THREE.WebGLShadowMap:",ye,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;o.copy(ne.mapSize);const ge=ne.getFrameExtents();if(o.multiply(ge),a.copy(ne.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(a.x=Math.floor(v/ge.x),o.x=a.x*ge.x,ne.mapSize.x=a.x),o.y>v&&(a.y=Math.floor(v/ge.y),o.y=a.y*ge.y,ne.mapSize.y=a.y)),ne.map===null||te===!0||Z===!0){const Oe=this.type!==Jn?{minFilter:Ln,magFilter:Ln}:{};ne.map!==null&&ne.map.dispose(),ne.map=new Bi(o.x,o.y,Oe),ne.map.texture.name=ye.name+".shadowMap",ne.camera.updateProjectionMatrix()}i.setRenderTarget(ne.map),i.clear();const Re=ne.getViewportCount();for(let Oe=0;Oe<Re;Oe++){const $e=ne.getViewport(Oe);u.set(a.x*$e.x,a.y*$e.y,a.x*$e.z,a.y*$e.w),Y.viewport(u),ne.updateMatrices(ye,Oe),n=ne.getFrustum(),I(z,j,ne.camera,ye,this.type)}ne.isPointLightShadow!==!0&&this.type===Jn&&N(ne,j),ne.needsUpdate=!1}_=this.type,E.needsUpdate=!1,i.setRenderTarget(P,w,O)};function N(D,z){const j=e.update(R);x.defines.VSM_SAMPLES!==D.blurSamples&&(x.defines.VSM_SAMPLES=D.blurSamples,y.defines.VSM_SAMPLES=D.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Bi(o.x,o.y)),x.uniforms.shadow_pass.value=D.map.texture,x.uniforms.resolution.value=D.mapSize,x.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(z,null,j,x,R,null),y.uniforms.shadow_pass.value=D.mapPass.texture,y.uniforms.resolution.value=D.mapSize,y.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(z,null,j,y,R,null)}function U(D,z,j,P){let w=null;const O=j.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(O!==void 0)w=O;else if(w=j.isPointLight===!0?p:h,i.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Y=w.uuid,te=z.uuid;let Z=d[Y];Z===void 0&&(Z={},d[Y]=Z);let he=Z[te];he===void 0&&(he=w.clone(),Z[te]=he,z.addEventListener("dispose",B)),w=he}if(w.visible=z.visible,w.wireframe=z.wireframe,P===Jn?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:m[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,j.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Y=i.properties.get(w);Y.light=j}return w}function I(D,z,j,P,w){if(D.visible===!1)return;if(D.layers.test(z.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&w===Jn)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,D.matrixWorld);const te=e.update(D),Z=D.material;if(Array.isArray(Z)){const he=te.groups;for(let re=0,ye=he.length;re<ye;re++){const ne=he[re],ge=Z[ne.materialIndex];if(ge&&ge.visible){const Re=U(D,ge,P,w);D.onBeforeShadow(i,D,z,j,te,Re,ne),i.renderBufferDirect(j,null,te,Re,D,ne),D.onAfterShadow(i,D,z,j,te,Re,ne)}}}else if(Z.visible){const he=U(D,Z,P,w);D.onBeforeShadow(i,D,z,j,te,he,null),i.renderBufferDirect(j,null,te,he,D,null),D.onAfterShadow(i,D,z,j,te,he,null)}}const Y=D.children;for(let te=0,Z=Y.length;te<Z;te++)I(Y[te],z,j,P,w)}function B(D){D.target.removeEventListener("dispose",B);for(const j in d){const P=d[j],w=D.target.uuid;w in P&&(P[w].dispose(),delete P[w])}}}const uE={[aa]:ca,[la]:fa,[ua]:da,[fr]:ha,[ca]:aa,[fa]:la,[da]:ua,[ha]:fr};function hE(i,e){function t(){let G=!1;const we=new Nt;let Pe=null;const ze=new Nt(0,0,0,0);return{setMask:function(W){Pe!==W&&!G&&(i.colorMask(W,W,W,W),Pe=W)},setLocked:function(W){G=W},setClear:function(W,H,ke,rt,Et){Et===!0&&(W*=rt,H*=rt,ke*=rt),we.set(W,H,ke,rt),ze.equals(we)===!1&&(i.clearColor(W,H,ke,rt),ze.copy(we))},reset:function(){G=!1,Pe=null,ze.set(-1,0,0,0)}}}function n(){let G=!1,we=!1,Pe=null,ze=null,W=null;return{setReversed:function(H){if(we!==H){const ke=e.get("EXT_clip_control");H?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),we=H;const rt=W;W=null,this.setClear(rt)}},getReversed:function(){return we},setTest:function(H){H?pe(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(H){Pe!==H&&!G&&(i.depthMask(H),Pe=H)},setFunc:function(H){if(we&&(H=uE[H]),ze!==H){switch(H){case aa:i.depthFunc(i.NEVER);break;case ca:i.depthFunc(i.ALWAYS);break;case la:i.depthFunc(i.LESS);break;case fr:i.depthFunc(i.LEQUAL);break;case ua:i.depthFunc(i.EQUAL);break;case ha:i.depthFunc(i.GEQUAL);break;case fa:i.depthFunc(i.GREATER);break;case da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ze=H}},setLocked:function(H){G=H},setClear:function(H){W!==H&&(we&&(H=1-H),i.clearDepth(H),W=H)},reset:function(){G=!1,Pe=null,ze=null,W=null,we=!1}}}function o(){let G=!1,we=null,Pe=null,ze=null,W=null,H=null,ke=null,rt=null,Et=null;return{setTest:function(lt){G||(lt?pe(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(lt){we!==lt&&!G&&(i.stencilMask(lt),we=lt)},setFunc:function(lt,Sn,kt){(Pe!==lt||ze!==Sn||W!==kt)&&(i.stencilFunc(lt,Sn,kt),Pe=lt,ze=Sn,W=kt)},setOp:function(lt,Sn,kt){(H!==lt||ke!==Sn||rt!==kt)&&(i.stencilOp(lt,Sn,kt),H=lt,ke=Sn,rt=kt)},setLocked:function(lt){G=lt},setClear:function(lt){Et!==lt&&(i.clearStencil(lt),Et=lt)},reset:function(){G=!1,we=null,Pe=null,ze=null,W=null,H=null,ke=null,rt=null,Et=null}}}const a=new t,u=new n,h=new o,p=new WeakMap,d=new WeakMap;let v={},m={},x=new WeakMap,y=[],A=null,R=!1,E=null,_=null,N=null,U=null,I=null,B=null,D=null,z=new _t(0,0,0),j=0,P=!1,w=null,O=null,Y=null,te=null,Z=null;const he=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,ye=0;const ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(ye=parseFloat(/^WebGL (\d)/.exec(ne)[1]),re=ye>=1):ne.indexOf("OpenGL ES")!==-1&&(ye=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),re=ye>=2);let ge=null,Re={};const Oe=i.getParameter(i.SCISSOR_BOX),$e=i.getParameter(i.VIEWPORT),nt=new Nt().fromArray(Oe),Je=new Nt().fromArray($e);function Ke(G,we,Pe,ze){const W=new Uint8Array(4),H=i.createTexture();i.bindTexture(G,H),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<Pe;ke++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,ze,0,i.RGBA,i.UNSIGNED_BYTE,W):i.texImage2D(we+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,W);return H}const le={};le[i.TEXTURE_2D]=Ke(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=Ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=Ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=Ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),h.setClear(0),pe(i.DEPTH_TEST),u.setFunc(fr),ce(!1),fe(tl),pe(i.CULL_FACE),vt(fi);function pe(G){v[G]!==!0&&(i.enable(G),v[G]=!0)}function ae(G){v[G]!==!1&&(i.disable(G),v[G]=!1)}function Me(G,we){return m[G]!==we?(i.bindFramebuffer(G,we),m[G]=we,G===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=we),G===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=we),!0):!1}function We(G,we){let Pe=y,ze=!1;if(G){Pe=x.get(we),Pe===void 0&&(Pe=[],x.set(we,Pe));const W=G.textures;if(Pe.length!==W.length||Pe[0]!==i.COLOR_ATTACHMENT0){for(let H=0,ke=W.length;H<ke;H++)Pe[H]=i.COLOR_ATTACHMENT0+H;Pe.length=W.length,ze=!0}}else Pe[0]!==i.BACK&&(Pe[0]=i.BACK,ze=!0);ze&&i.drawBuffers(Pe)}function st(G){return A!==G?(i.useProgram(G),A=G,!0):!1}const yt={[Fi]:i.FUNC_ADD,[d_]:i.FUNC_SUBTRACT,[p_]:i.FUNC_REVERSE_SUBTRACT};yt[m_]=i.MIN,yt[__]=i.MAX;const k={[g_]:i.ZERO,[v_]:i.ONE,[x_]:i.SRC_COLOR,[sa]:i.SRC_ALPHA,[w_]:i.SRC_ALPHA_SATURATE,[M_]:i.DST_COLOR,[E_]:i.DST_ALPHA,[y_]:i.ONE_MINUS_SRC_COLOR,[oa]:i.ONE_MINUS_SRC_ALPHA,[T_]:i.ONE_MINUS_DST_COLOR,[S_]:i.ONE_MINUS_DST_ALPHA,[b_]:i.CONSTANT_COLOR,[A_]:i.ONE_MINUS_CONSTANT_COLOR,[R_]:i.CONSTANT_ALPHA,[C_]:i.ONE_MINUS_CONSTANT_ALPHA};function vt(G,we,Pe,ze,W,H,ke,rt,Et,lt){if(G===fi){R===!0&&(ae(i.BLEND),R=!1);return}if(R===!1&&(pe(i.BLEND),R=!0),G!==f_){if(G!==E||lt!==P){if((_!==Fi||I!==Fi)&&(i.blendEquation(i.FUNC_ADD),_=Fi,I=Fi),lt)switch(G){case ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nl:i.blendFunc(i.ONE,i.ONE);break;case il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case il:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}N=null,U=null,B=null,D=null,z.set(0,0,0),j=0,E=G,P=lt}return}W=W||we,H=H||Pe,ke=ke||ze,(we!==_||W!==I)&&(i.blendEquationSeparate(yt[we],yt[W]),_=we,I=W),(Pe!==N||ze!==U||H!==B||ke!==D)&&(i.blendFuncSeparate(k[Pe],k[ze],k[H],k[ke]),N=Pe,U=ze,B=H,D=ke),(rt.equals(z)===!1||Et!==j)&&(i.blendColor(rt.r,rt.g,rt.b,Et),z.copy(rt),j=Et),E=G,P=!1}function it(G,we){G.side===Cn?ae(i.CULL_FACE):pe(i.CULL_FACE);let Pe=G.side===cn;we&&(Pe=!Pe),ce(Pe),G.blending===ur&&G.transparent===!1?vt(fi):vt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),a.setMask(G.colorWrite);const ze=G.stencilWrite;h.setTest(ze),ze&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),me(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function ce(G){w!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),w=G)}function fe(G){G!==l_?(pe(i.CULL_FACE),G!==O&&(G===tl?i.cullFace(i.BACK):G===u_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),O=G}function Ce(G){G!==Y&&(re&&i.lineWidth(G),Y=G)}function me(G,we,Pe){G?(pe(i.POLYGON_OFFSET_FILL),(te!==we||Z!==Pe)&&(i.polygonOffset(we,Pe),te=we,Z=Pe)):ae(i.POLYGON_OFFSET_FILL)}function Le(G){G?pe(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function at(G){G===void 0&&(G=i.TEXTURE0+he-1),ge!==G&&(i.activeTexture(G),ge=G)}function Ye(G,we,Pe){Pe===void 0&&(ge===null?Pe=i.TEXTURE0+he-1:Pe=ge);let ze=Re[Pe];ze===void 0&&(ze={type:void 0,texture:void 0},Re[Pe]=ze),(ze.type!==G||ze.texture!==we)&&(ge!==Pe&&(i.activeTexture(Pe),ge=Pe),i.bindTexture(G,we||le[G]),ze.type=G,ze.texture=we)}function L(){const G=Re[ge];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Q(){try{i.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function de(){try{i.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function se(){try{i.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Be(){try{i.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{i.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function He(){try{i.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{i.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(){try{i.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ie(G){nt.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),nt.copy(G))}function Qe(G){Je.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),Je.copy(G))}function Xe(G,we){let Pe=d.get(we);Pe===void 0&&(Pe=new WeakMap,d.set(we,Pe));let ze=Pe.get(G);ze===void 0&&(ze=i.getUniformBlockIndex(we,G.name),Pe.set(G,ze))}function De(G,we){const ze=d.get(we).get(G);p.get(we)!==ze&&(i.uniformBlockBinding(we,ze,G.__bindingPointIndex),p.set(we,ze))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),v={},ge=null,Re={},m={},x=new WeakMap,y=[],A=null,R=!1,E=null,_=null,N=null,U=null,I=null,B=null,D=null,z=new _t(0,0,0),j=0,P=!1,w=null,O=null,Y=null,te=null,Z=null,nt.set(0,0,i.canvas.width,i.canvas.height),Je.set(0,0,i.canvas.width,i.canvas.height),a.reset(),u.reset(),h.reset()}return{buffers:{color:a,depth:u,stencil:h},enable:pe,disable:ae,bindFramebuffer:Me,drawBuffers:We,useProgram:st,setBlending:vt,setMaterial:it,setFlipSided:ce,setCullFace:fe,setLineWidth:Ce,setPolygonOffset:me,setScissorTest:Le,activeTexture:at,bindTexture:Ye,unbindTexture:L,compressedTexImage2D:S,compressedTexImage3D:V,texImage2D:Ve,texImage3D:Te,updateUBOMapping:Xe,uniformBlockBinding:De,texStorage2D:Se,texStorage3D:He,texSubImage2D:Q,texSubImage3D:de,compressedTexSubImage2D:se,compressedTexSubImage3D:Be,scissor:Ie,viewport:Qe,reset:qe}}function fE(i,e,t,n,o,a,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ot,v=new WeakMap;let m;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(L,S){return y?new OffscreenCanvas(L,S):js("canvas")}function R(L,S,V){let Q=1;const de=Ye(L);if((de.width>V||de.height>V)&&(Q=V/Math.max(de.width,de.height)),Q<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const se=Math.floor(Q*de.width),Be=Math.floor(Q*de.height);m===void 0&&(m=A(se,Be));const Se=S?A(se,Be):m;return Se.width=se,Se.height=Be,Se.getContext("2d").drawImage(L,0,0,se,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+se+"x"+Be+")."),Se}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),L;return L}function E(L){return L.generateMipmaps}function _(L){i.generateMipmap(L)}function N(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function U(L,S,V,Q,de=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let se=S;if(S===i.RED&&(V===i.FLOAT&&(se=i.R32F),V===i.HALF_FLOAT&&(se=i.R16F),V===i.UNSIGNED_BYTE&&(se=i.R8)),S===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(se=i.R8UI),V===i.UNSIGNED_SHORT&&(se=i.R16UI),V===i.UNSIGNED_INT&&(se=i.R32UI),V===i.BYTE&&(se=i.R8I),V===i.SHORT&&(se=i.R16I),V===i.INT&&(se=i.R32I)),S===i.RG&&(V===i.FLOAT&&(se=i.RG32F),V===i.HALF_FLOAT&&(se=i.RG16F),V===i.UNSIGNED_BYTE&&(se=i.RG8)),S===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(se=i.RG8UI),V===i.UNSIGNED_SHORT&&(se=i.RG16UI),V===i.UNSIGNED_INT&&(se=i.RG32UI),V===i.BYTE&&(se=i.RG8I),V===i.SHORT&&(se=i.RG16I),V===i.INT&&(se=i.RG32I)),S===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(se=i.RGB8UI),V===i.UNSIGNED_SHORT&&(se=i.RGB16UI),V===i.UNSIGNED_INT&&(se=i.RGB32UI),V===i.BYTE&&(se=i.RGB8I),V===i.SHORT&&(se=i.RGB16I),V===i.INT&&(se=i.RGB32I)),S===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(se=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(se=i.RGBA16UI),V===i.UNSIGNED_INT&&(se=i.RGBA32UI),V===i.BYTE&&(se=i.RGBA8I),V===i.SHORT&&(se=i.RGBA16I),V===i.INT&&(se=i.RGBA32I)),S===i.RGB&&(V===i.UNSIGNED_INT_5_9_9_9_REV&&(se=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(se=i.R11F_G11F_B10F)),S===i.RGBA){const Be=de?$s:Mt.getTransfer(Q);V===i.FLOAT&&(se=i.RGBA32F),V===i.HALF_FLOAT&&(se=i.RGBA16F),V===i.UNSIGNED_BYTE&&(se=Be===Rt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function I(L,S){let V;return L?S===null||S===Oi||S===Ir?V=i.DEPTH24_STENCIL8:S===Qn?V=i.DEPTH32F_STENCIL8:S===Fr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Oi||S===Ir?V=i.DEPTH_COMPONENT24:S===Qn?V=i.DEPTH_COMPONENT32F:S===Fr&&(V=i.DEPTH_COMPONENT16),V}function B(L,S){return E(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ln&&L.minFilter!==zn?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function D(L){const S=L.target;S.removeEventListener("dispose",D),j(S),S.isVideoTexture&&v.delete(S)}function z(L){const S=L.target;S.removeEventListener("dispose",z),w(S)}function j(L){const S=n.get(L);if(S.__webglInit===void 0)return;const V=L.source,Q=x.get(V);if(Q){const de=Q[S.__cacheKey];de.usedTimes--,de.usedTimes===0&&P(L),Object.keys(Q).length===0&&x.delete(V)}n.remove(L)}function P(L){const S=n.get(L);i.deleteTexture(S.__webglTexture);const V=L.source,Q=x.get(V);delete Q[S.__cacheKey],u.memory.textures--}function w(L){const S=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let de=0;de<S.__webglFramebuffer[Q].length;de++)i.deleteFramebuffer(S.__webglFramebuffer[Q][de]);else i.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)i.deleteFramebuffer(S.__webglFramebuffer[Q]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=L.textures;for(let Q=0,de=V.length;Q<de;Q++){const se=n.get(V[Q]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),u.memory.textures--),n.remove(V[Q])}n.remove(L)}let O=0;function Y(){O=0}function te(){const L=O;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),O+=1,L}function Z(L){const S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function he(L,S){const V=n.get(L);if(L.isVideoTexture&&Le(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&V.__version!==L.version){const Q=L.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(V,L,S);return}}else L.isExternalTexture&&(V.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+S)}function re(L,S){const V=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){le(V,L,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+S)}function ye(L,S){const V=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){le(V,L,S);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+S)}function ne(L,S){const V=n.get(L);if(L.version>0&&V.__version!==L.version){pe(V,L,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+S)}const ge={[_a]:i.REPEAT,[Ui]:i.CLAMP_TO_EDGE,[ga]:i.MIRRORED_REPEAT},Re={[Ln]:i.NEAREST,[B_]:i.NEAREST_MIPMAP_NEAREST,[us]:i.NEAREST_MIPMAP_LINEAR,[zn]:i.LINEAR,[xo]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},Oe={[G_]:i.NEVER,[Y_]:i.ALWAYS,[W_]:i.LESS,[Mu]:i.LEQUAL,[X_]:i.EQUAL,[j_]:i.GEQUAL,[$_]:i.GREATER,[q_]:i.NOTEQUAL};function $e(L,S){if(S.type===Qn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===zn||S.magFilter===xo||S.magFilter===us||S.magFilter===Ni||S.minFilter===zn||S.minFilter===xo||S.minFilter===us||S.minFilter===Ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,ge[S.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,ge[S.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,ge[S.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,Re[S.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,Re[S.minFilter]),S.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Oe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ln||S.minFilter!==us&&S.minFilter!==Ni||S.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,o.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function nt(L,S){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",D));const Q=S.source;let de=x.get(Q);de===void 0&&(de={},x.set(Q,de));const se=Z(S);if(se!==L.__cacheKey){de[se]===void 0&&(de[se]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,V=!0),de[se].usedTimes++;const Be=de[L.__cacheKey];Be!==void 0&&(de[L.__cacheKey].usedTimes--,Be.usedTimes===0&&P(S)),L.__cacheKey=se,L.__webglTexture=de[se].texture}return V}function Je(L,S,V){return Math.floor(Math.floor(L/V)/S)}function Ke(L,S,V,Q){const se=L.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,V,Q,S.data);else{se.sort((Te,Ie)=>Te.start-Ie.start);let Be=0;for(let Te=1;Te<se.length;Te++){const Ie=se[Be],Qe=se[Te],Xe=Ie.start+Ie.count,De=Je(Qe.start,S.width,4),qe=Je(Ie.start,S.width,4);Qe.start<=Xe+1&&De===qe&&Je(Qe.start+Qe.count-1,S.width,4)===De?Ie.count=Math.max(Ie.count,Qe.start+Qe.count-Ie.start):(++Be,se[Be]=Qe)}se.length=Be+1;const Se=i.getParameter(i.UNPACK_ROW_LENGTH),He=i.getParameter(i.UNPACK_SKIP_PIXELS),Ve=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let Te=0,Ie=se.length;Te<Ie;Te++){const Qe=se[Te],Xe=Math.floor(Qe.start/4),De=Math.ceil(Qe.count/4),qe=Xe%S.width,G=Math.floor(Xe/S.width),we=De,Pe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),i.pixelStorei(i.UNPACK_SKIP_ROWS,G),t.texSubImage2D(i.TEXTURE_2D,0,qe,G,we,Pe,V,Q,S.data)}L.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Se),i.pixelStorei(i.UNPACK_SKIP_PIXELS,He),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ve)}}function le(L,S,V){let Q=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=i.TEXTURE_3D);const de=nt(L,S),se=S.source;t.bindTexture(Q,L.__webglTexture,i.TEXTURE0+V);const Be=n.get(se);if(se.version!==Be.__version||de===!0){t.activeTexture(i.TEXTURE0+V);const Se=Mt.getPrimaries(Mt.workingColorSpace),He=S.colorSpace===hi?null:Mt.getPrimaries(S.colorSpace),Ve=S.colorSpace===hi||Se===He?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let Te=R(S.image,!1,o.maxTextureSize);Te=at(S,Te);const Ie=a.convert(S.format,S.colorSpace),Qe=a.convert(S.type);let Xe=U(S.internalFormat,Ie,Qe,S.colorSpace,S.isVideoTexture);$e(Q,S);let De;const qe=S.mipmaps,G=S.isVideoTexture!==!0,we=Be.__version===void 0||de===!0,Pe=se.dataReady,ze=B(S,Te);if(S.isDepthTexture)Xe=I(S.format===Nr,S.type),we&&(G?t.texStorage2D(i.TEXTURE_2D,1,Xe,Te.width,Te.height):t.texImage2D(i.TEXTURE_2D,0,Xe,Te.width,Te.height,0,Ie,Qe,null));else if(S.isDataTexture)if(qe.length>0){G&&we&&t.texStorage2D(i.TEXTURE_2D,ze,Xe,qe[0].width,qe[0].height);for(let W=0,H=qe.length;W<H;W++)De=qe[W],G?Pe&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,De.width,De.height,Ie,Qe,De.data):t.texImage2D(i.TEXTURE_2D,W,Xe,De.width,De.height,0,Ie,Qe,De.data);S.generateMipmaps=!1}else G?(we&&t.texStorage2D(i.TEXTURE_2D,ze,Xe,Te.width,Te.height),Pe&&Ke(S,Te,Ie,Qe)):t.texImage2D(i.TEXTURE_2D,0,Xe,Te.width,Te.height,0,Ie,Qe,Te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){G&&we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ze,Xe,qe[0].width,qe[0].height,Te.depth);for(let W=0,H=qe.length;W<H;W++)if(De=qe[W],S.format!==Dn)if(Ie!==null)if(G){if(Pe)if(S.layerUpdates.size>0){const ke=Fl(De.width,De.height,S.format,S.type);for(const rt of S.layerUpdates){const Et=De.data.subarray(rt*ke/De.data.BYTES_PER_ELEMENT,(rt+1)*ke/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,rt,De.width,De.height,1,Ie,Et)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,De.width,De.height,Te.depth,Ie,De.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Xe,De.width,De.height,Te.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,De.width,De.height,Te.depth,Ie,Qe,De.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,Xe,De.width,De.height,Te.depth,0,Ie,Qe,De.data)}else{G&&we&&t.texStorage2D(i.TEXTURE_2D,ze,Xe,qe[0].width,qe[0].height);for(let W=0,H=qe.length;W<H;W++)De=qe[W],S.format!==Dn?Ie!==null?G?Pe&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,De.width,De.height,Ie,De.data):t.compressedTexImage2D(i.TEXTURE_2D,W,Xe,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Pe&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,De.width,De.height,Ie,Qe,De.data):t.texImage2D(i.TEXTURE_2D,W,Xe,De.width,De.height,0,Ie,Qe,De.data)}else if(S.isDataArrayTexture)if(G){if(we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ze,Xe,Te.width,Te.height,Te.depth),Pe)if(S.layerUpdates.size>0){const W=Fl(Te.width,Te.height,S.format,S.type);for(const H of S.layerUpdates){const ke=Te.data.subarray(H*W/Te.data.BYTES_PER_ELEMENT,(H+1)*W/Te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,H,Te.width,Te.height,1,Ie,Qe,ke)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Ie,Qe,Te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Xe,Te.width,Te.height,Te.depth,0,Ie,Qe,Te.data);else if(S.isData3DTexture)G?(we&&t.texStorage3D(i.TEXTURE_3D,ze,Xe,Te.width,Te.height,Te.depth),Pe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Ie,Qe,Te.data)):t.texImage3D(i.TEXTURE_3D,0,Xe,Te.width,Te.height,Te.depth,0,Ie,Qe,Te.data);else if(S.isFramebufferTexture){if(we)if(G)t.texStorage2D(i.TEXTURE_2D,ze,Xe,Te.width,Te.height);else{let W=Te.width,H=Te.height;for(let ke=0;ke<ze;ke++)t.texImage2D(i.TEXTURE_2D,ke,Xe,W,H,0,Ie,Qe,null),W>>=1,H>>=1}}else if(qe.length>0){if(G&&we){const W=Ye(qe[0]);t.texStorage2D(i.TEXTURE_2D,ze,Xe,W.width,W.height)}for(let W=0,H=qe.length;W<H;W++)De=qe[W],G?Pe&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Ie,Qe,De):t.texImage2D(i.TEXTURE_2D,W,Xe,Ie,Qe,De);S.generateMipmaps=!1}else if(G){if(we){const W=Ye(Te);t.texStorage2D(i.TEXTURE_2D,ze,Xe,W.width,W.height)}Pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ie,Qe,Te)}else t.texImage2D(i.TEXTURE_2D,0,Xe,Ie,Qe,Te);E(S)&&_(Q),Be.__version=se.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function pe(L,S,V){if(S.image.length!==6)return;const Q=nt(L,S),de=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+V);const se=n.get(de);if(de.version!==se.__version||Q===!0){t.activeTexture(i.TEXTURE0+V);const Be=Mt.getPrimaries(Mt.workingColorSpace),Se=S.colorSpace===hi?null:Mt.getPrimaries(S.colorSpace),He=S.colorSpace===hi||Be===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const Ve=S.isCompressedTexture||S.image[0].isCompressedTexture,Te=S.image[0]&&S.image[0].isDataTexture,Ie=[];for(let H=0;H<6;H++)!Ve&&!Te?Ie[H]=R(S.image[H],!0,o.maxCubemapSize):Ie[H]=Te?S.image[H].image:S.image[H],Ie[H]=at(S,Ie[H]);const Qe=Ie[0],Xe=a.convert(S.format,S.colorSpace),De=a.convert(S.type),qe=U(S.internalFormat,Xe,De,S.colorSpace),G=S.isVideoTexture!==!0,we=se.__version===void 0||Q===!0,Pe=de.dataReady;let ze=B(S,Qe);$e(i.TEXTURE_CUBE_MAP,S);let W;if(Ve){G&&we&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ze,qe,Qe.width,Qe.height);for(let H=0;H<6;H++){W=Ie[H].mipmaps;for(let ke=0;ke<W.length;ke++){const rt=W[ke];S.format!==Dn?Xe!==null?G?Pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,ke,0,0,rt.width,rt.height,Xe,rt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,ke,qe,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,ke,0,0,rt.width,rt.height,Xe,De,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,ke,qe,rt.width,rt.height,0,Xe,De,rt.data)}}}else{if(W=S.mipmaps,G&&we){W.length>0&&ze++;const H=Ye(Ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ze,qe,H.width,H.height)}for(let H=0;H<6;H++)if(Te){G?Pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Ie[H].width,Ie[H].height,Xe,De,Ie[H].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,qe,Ie[H].width,Ie[H].height,0,Xe,De,Ie[H].data);for(let ke=0;ke<W.length;ke++){const Et=W[ke].image[H].image;G?Pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,ke+1,0,0,Et.width,Et.height,Xe,De,Et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,ke+1,qe,Et.width,Et.height,0,Xe,De,Et.data)}}else{G?Pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Xe,De,Ie[H]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,qe,Xe,De,Ie[H]);for(let ke=0;ke<W.length;ke++){const rt=W[ke];G?Pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,ke+1,0,0,Xe,De,rt.image[H]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,ke+1,qe,Xe,De,rt.image[H])}}}E(S)&&_(i.TEXTURE_CUBE_MAP),se.__version=de.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function ae(L,S,V,Q,de,se){const Be=a.convert(V.format,V.colorSpace),Se=a.convert(V.type),He=U(V.internalFormat,Be,Se,V.colorSpace),Ve=n.get(S),Te=n.get(V);if(Te.__renderTarget=S,!Ve.__hasExternalTextures){const Ie=Math.max(1,S.width>>se),Qe=Math.max(1,S.height>>se);de===i.TEXTURE_3D||de===i.TEXTURE_2D_ARRAY?t.texImage3D(de,se,He,Ie,Qe,S.depth,0,Be,Se,null):t.texImage2D(de,se,He,Ie,Qe,0,Be,Se,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),me(S)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,de,Te.__webglTexture,0,Ce(S)):(de===i.TEXTURE_2D||de>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,de,Te.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(L,S,V){if(i.bindRenderbuffer(i.RENDERBUFFER,L),S.depthBuffer){const Q=S.depthTexture,de=Q&&Q.isDepthTexture?Q.type:null,se=I(S.stencilBuffer,de),Be=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=Ce(S);me(S)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,se,S.width,S.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,se,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,se,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Be,i.RENDERBUFFER,L)}else{const Q=S.textures;for(let de=0;de<Q.length;de++){const se=Q[de],Be=a.convert(se.format,se.colorSpace),Se=a.convert(se.type),He=U(se.internalFormat,Be,Se,se.colorSpace),Ve=Ce(S);V&&me(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,He,S.width,S.height):me(S)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve,He,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,He,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function We(L,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(S.depthTexture);Q.__renderTarget=S,(!Q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),he(S.depthTexture,0);const de=Q.__webglTexture,se=Ce(S);if(S.depthTexture.format===Ur)me(S)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0);else if(S.depthTexture.format===Nr)me(S)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function st(L){const S=n.get(L),V=L.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==L.depthTexture){const Q=L.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){const de=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",de)};Q.addEventListener("dispose",de),S.__depthDisposeCallback=de}S.__boundDepthTexture=Q}if(L.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const Q=L.texture.mipmaps;Q&&Q.length>0?We(S.__webglFramebuffer[0],L):We(S.__webglFramebuffer,L)}else if(V){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=i.createRenderbuffer(),Me(S.__webglDepthbuffer[Q],L,!1);else{const de=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=S.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,se)}}else{const Q=L.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Me(S.__webglDepthbuffer,L,!1);else{const de=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,se)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(L,S,V){const Q=n.get(L);S!==void 0&&ae(Q.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&st(L)}function k(L){const S=L.texture,V=n.get(L),Q=n.get(S);L.addEventListener("dispose",z);const de=L.textures,se=L.isWebGLCubeRenderTarget===!0,Be=de.length>1;if(Be||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=S.version,u.memory.textures++),se){V.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[Se]=[];for(let He=0;He<S.mipmaps.length;He++)V.__webglFramebuffer[Se][He]=i.createFramebuffer()}else V.__webglFramebuffer[Se]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let Se=0;Se<S.mipmaps.length;Se++)V.__webglFramebuffer[Se]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Be)for(let Se=0,He=de.length;Se<He;Se++){const Ve=n.get(de[Se]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=i.createTexture(),u.memory.textures++)}if(L.samples>0&&me(L)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Se=0;Se<de.length;Se++){const He=de[Se];V.__webglColorRenderbuffer[Se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[Se]);const Ve=a.convert(He.format,He.colorSpace),Te=a.convert(He.type),Ie=U(He.internalFormat,Ve,Te,He.colorSpace,L.isXRRenderTarget===!0),Qe=Ce(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,Ie,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,V.__webglColorRenderbuffer[Se])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(V.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),$e(i.TEXTURE_CUBE_MAP,S);for(let Se=0;Se<6;Se++)if(S.mipmaps&&S.mipmaps.length>0)for(let He=0;He<S.mipmaps.length;He++)ae(V.__webglFramebuffer[Se][He],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,He);else ae(V.__webglFramebuffer[Se],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);E(S)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let Se=0,He=de.length;Se<He;Se++){const Ve=de[Se],Te=n.get(Ve);let Ie=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ie=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ie,Te.__webglTexture),$e(Ie,Ve),ae(V.__webglFramebuffer,L,Ve,i.COLOR_ATTACHMENT0+Se,Ie,0),E(Ve)&&_(Ie)}t.unbindTexture()}else{let Se=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Se=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,Q.__webglTexture),$e(Se,S),S.mipmaps&&S.mipmaps.length>0)for(let He=0;He<S.mipmaps.length;He++)ae(V.__webglFramebuffer[He],L,S,i.COLOR_ATTACHMENT0,Se,He);else ae(V.__webglFramebuffer,L,S,i.COLOR_ATTACHMENT0,Se,0);E(S)&&_(Se),t.unbindTexture()}L.depthBuffer&&st(L)}function vt(L){const S=L.textures;for(let V=0,Q=S.length;V<Q;V++){const de=S[V];if(E(de)){const se=N(L),Be=n.get(de).__webglTexture;t.bindTexture(se,Be),_(se),t.unbindTexture()}}}const it=[],ce=[];function fe(L){if(L.samples>0){if(me(L)===!1){const S=L.textures,V=L.width,Q=L.height;let de=i.COLOR_BUFFER_BIT;const se=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Be=n.get(L),Se=S.length>1;if(Se)for(let Ve=0;Ve<S.length;Ve++)t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);const He=L.texture.mipmaps;He&&He.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Ve=0;Ve<S.length;Ve++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(de|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(de|=i.STENCIL_BUFFER_BIT)),Se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Be.__webglColorRenderbuffer[Ve]);const Te=n.get(S[Ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,V,Q,0,0,V,Q,de,i.NEAREST),p===!0&&(it.length=0,ce.length=0,it.push(i.COLOR_ATTACHMENT0+Ve),L.depthBuffer&&L.resolveDepthBuffer===!1&&(it.push(se),ce.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Se)for(let Ve=0;Ve<S.length;Ve++){t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,Be.__webglColorRenderbuffer[Ve]);const Te=n.get(S[Ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const S=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Ce(L){return Math.min(o.maxSamples,L.samples)}function me(L){const S=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Le(L){const S=u.render.frame;v.get(L)!==S&&(v.set(L,S),L.update())}function at(L,S){const V=L.colorSpace,Q=L.format,de=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||V!==mr&&V!==hi&&(Mt.getTransfer(V)===Rt?(Q!==Dn||de!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function Ye(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(d.width=L.naturalWidth||L.width,d.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(d.width=L.displayWidth,d.height=L.displayHeight):(d.width=L.width,d.height=L.height),d}this.allocateTextureUnit=te,this.resetTextureUnits=Y,this.setTexture2D=he,this.setTexture2DArray=re,this.setTexture3D=ye,this.setTextureCube=ne,this.rebindTextures=yt,this.setupRenderTarget=k,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=me}function dE(i,e){function t(n,o=hi){let a;const u=Mt.getTransfer(o);if(n===Vn)return i.UNSIGNED_BYTE;if(n===Ja)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_u)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===pu)return i.BYTE;if(n===mu)return i.SHORT;if(n===Fr)return i.UNSIGNED_SHORT;if(n===Za)return i.INT;if(n===Oi)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===kr)return i.HALF_FLOAT;if(n===vu)return i.ALPHA;if(n===xu)return i.RGB;if(n===Dn)return i.RGBA;if(n===Ur)return i.DEPTH_COMPONENT;if(n===Nr)return i.DEPTH_STENCIL;if(n===yu)return i.RED;if(n===ec)return i.RED_INTEGER;if(n===Eu)return i.RG;if(n===tc)return i.RG_INTEGER;if(n===nc)return i.RGBA_INTEGER;if(n===Bs||n===zs||n===Hs||n===Vs)if(u===Rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Bs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Bs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===va||n===xa||n===ya||n===Ea)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===va)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ya)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ea)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sa||n===Ma||n===Ta)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Sa||n===Ma)return u===Rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Ta)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wa||n===ba||n===Aa||n===Ra||n===Ca||n===Pa||n===Da||n===La||n===Fa||n===Ia||n===Ua||n===Na||n===Oa||n===ka)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===wa)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ba)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Aa)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ra)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ca)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pa)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Da)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===La)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fa)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ia)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ua)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Na)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oa)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ka)return u===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ba||n===za||n===Ha)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Ba)return u===Rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===za)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ha)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Va||n===Ga||n===Wa||n===Xa)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Va)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Ga)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ir?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const pE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mE=`
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

}`;class _E{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Uu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new mi({vertexShader:pE,fragmentShader:mE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yn(new Vr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gE extends zi{constructor(e,t){super();const n=this;let o=null,a=1,u=null,h="local-floor",p=1,d=null,v=null,m=null,x=null,y=null,A=null;const R=typeof XRWebGLBinding<"u",E=new _E,_={},N=t.getContextAttributes();let U=null,I=null;const B=[],D=[],z=new ot;let j=null;const P=new xn;P.viewport=new Nt;const w=new xn;w.viewport=new Nt;const O=[P,w],Y=new Ng;let te=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let pe=B[le];return pe===void 0&&(pe=new Ho,B[le]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(le){let pe=B[le];return pe===void 0&&(pe=new Ho,B[le]=pe),pe.getGripSpace()},this.getHand=function(le){let pe=B[le];return pe===void 0&&(pe=new Ho,B[le]=pe),pe.getHandSpace()};function he(le){const pe=D.indexOf(le.inputSource);if(pe===-1)return;const ae=B[pe];ae!==void 0&&(ae.update(le.inputSource,le.frame,d||u),ae.dispatchEvent({type:le.type,data:le.inputSource}))}function re(){o.removeEventListener("select",he),o.removeEventListener("selectstart",he),o.removeEventListener("selectend",he),o.removeEventListener("squeeze",he),o.removeEventListener("squeezestart",he),o.removeEventListener("squeezeend",he),o.removeEventListener("end",re),o.removeEventListener("inputsourceschange",ye);for(let le=0;le<B.length;le++){const pe=D[le];pe!==null&&(D[le]=null,B[le].disconnect(pe))}te=null,Z=null,E.reset();for(const le in _)delete _[le];e.setRenderTarget(U),y=null,x=null,m=null,o=null,I=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(j),e.setSize(z.width,z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){a=le,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){h=le,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(le){d=le},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return m===null&&R&&(m=new XRWebGLBinding(o,t)),m},this.getFrame=function(){return A},this.getSession=function(){return o},this.setSession=async function(le){if(o=le,o!==null){if(U=e.getRenderTarget(),o.addEventListener("select",he),o.addEventListener("selectstart",he),o.addEventListener("selectend",he),o.addEventListener("squeeze",he),o.addEventListener("squeezestart",he),o.addEventListener("squeezeend",he),o.addEventListener("end",re),o.addEventListener("inputsourceschange",ye),N.xrCompatible!==!0&&await t.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(z),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Me=null,We=null;N.depth&&(We=N.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=N.stencil?Nr:Ur,Me=N.stencil?Ir:Oi);const st={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:a};m=this.getBinding(),x=m.createProjectionLayer(st),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new Bi(x.textureWidth,x.textureHeight,{format:Dn,type:Vn,depthTexture:new Iu(x.textureWidth,x.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const ae={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(o,t,ae),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),I=new Bi(y.framebufferWidth,y.framebufferHeight,{format:Dn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await o.requestReferenceSpace(h),Ke.setContext(o),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function ye(le){for(let pe=0;pe<le.removed.length;pe++){const ae=le.removed[pe],Me=D.indexOf(ae);Me>=0&&(D[Me]=null,B[Me].disconnect(ae))}for(let pe=0;pe<le.added.length;pe++){const ae=le.added[pe];let Me=D.indexOf(ae);if(Me===-1){for(let st=0;st<B.length;st++)if(st>=D.length){D.push(ae),Me=st;break}else if(D[st]===null){D[st]=ae,Me=st;break}if(Me===-1)break}const We=B[Me];We&&We.connect(ae)}}const ne=new J,ge=new J;function Re(le,pe,ae){ne.setFromMatrixPosition(pe.matrixWorld),ge.setFromMatrixPosition(ae.matrixWorld);const Me=ne.distanceTo(ge),We=pe.projectionMatrix.elements,st=ae.projectionMatrix.elements,yt=We[14]/(We[10]-1),k=We[14]/(We[10]+1),vt=(We[9]+1)/We[5],it=(We[9]-1)/We[5],ce=(We[8]-1)/We[0],fe=(st[8]+1)/st[0],Ce=yt*ce,me=yt*fe,Le=Me/(-ce+fe),at=Le*-ce;if(pe.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(at),le.translateZ(Le),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),We[10]===-1)le.projectionMatrix.copy(pe.projectionMatrix),le.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Ye=yt+Le,L=k+Le,S=Ce-at,V=me+(Me-at),Q=vt*k/L*Ye,de=it*k/L*Ye;le.projectionMatrix.makePerspective(S,V,Q,de,Ye,L),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function Oe(le,pe){pe===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(pe.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(o===null)return;let pe=le.near,ae=le.far;E.texture!==null&&(E.depthNear>0&&(pe=E.depthNear),E.depthFar>0&&(ae=E.depthFar)),Y.near=w.near=P.near=pe,Y.far=w.far=P.far=ae,(te!==Y.near||Z!==Y.far)&&(o.updateRenderState({depthNear:Y.near,depthFar:Y.far}),te=Y.near,Z=Y.far),Y.layers.mask=le.layers.mask|6,P.layers.mask=Y.layers.mask&3,w.layers.mask=Y.layers.mask&5;const Me=le.parent,We=Y.cameras;Oe(Y,Me);for(let st=0;st<We.length;st++)Oe(We[st],Me);We.length===2?Re(Y,P,w):Y.projectionMatrix.copy(P.projectionMatrix),$e(le,Y,Me)};function $e(le,pe,ae){ae===null?le.matrix.copy(pe.matrixWorld):(le.matrix.copy(ae.matrixWorld),le.matrix.invert(),le.matrix.multiply(pe.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(pe.projectionMatrix),le.projectionMatrixInverse.copy(pe.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=$a*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(x===null&&y===null))return p},this.setFoveation=function(le){p=le,x!==null&&(x.fixedFoveation=le),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=le)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(Y)},this.getCameraTexture=function(le){return _[le]};let nt=null;function Je(le,pe){if(v=pe.getViewerPose(d||u),A=pe,v!==null){const ae=v.views;y!==null&&(e.setRenderTargetFramebuffer(I,y.framebuffer),e.setRenderTarget(I));let Me=!1;ae.length!==Y.cameras.length&&(Y.cameras.length=0,Me=!0);for(let k=0;k<ae.length;k++){const vt=ae[k];let it=null;if(y!==null)it=y.getViewport(vt);else{const fe=m.getViewSubImage(x,vt);it=fe.viewport,k===0&&(e.setRenderTargetTextures(I,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(I))}let ce=O[k];ce===void 0&&(ce=new xn,ce.layers.enable(k),ce.viewport=new Nt,O[k]=ce),ce.matrix.fromArray(vt.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(vt.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(it.x,it.y,it.width,it.height),k===0&&(Y.matrix.copy(ce.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Me===!0&&Y.cameras.push(ce)}const We=o.enabledFeatures;if(We&&We.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){m=n.getBinding();const k=m.getDepthInformation(ae[0]);k&&k.isValid&&k.texture&&E.init(k,o.renderState)}if(We&&We.includes("camera-access")&&R){e.state.unbindTexture(),m=n.getBinding();for(let k=0;k<ae.length;k++){const vt=ae[k].camera;if(vt){let it=_[vt];it||(it=new Uu,_[vt]=it);const ce=m.getCameraImage(vt);it.sourceTexture=ce}}}}for(let ae=0;ae<B.length;ae++){const Me=D[ae],We=B[ae];Me!==null&&We!==void 0&&We.update(Me,pe,d||u)}nt&&nt(le,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),A=null}const Ke=new ku;Ke.setAnimationLoop(Je),this.setAnimationLoop=function(le){nt=le},this.dispose=function(){}}}const Pi=new Gn,vE=new Ot;function xE(i,e){function t(E,_){E.matrixAutoUpdate===!0&&E.updateMatrix(),_.value.copy(E.matrix)}function n(E,_){_.color.getRGB(E.fogColor.value,Pu(i)),_.isFog?(E.fogNear.value=_.near,E.fogFar.value=_.far):_.isFogExp2&&(E.fogDensity.value=_.density)}function o(E,_,N,U,I){_.isMeshBasicMaterial||_.isMeshLambertMaterial?a(E,_):_.isMeshToonMaterial?(a(E,_),m(E,_)):_.isMeshPhongMaterial?(a(E,_),v(E,_)):_.isMeshStandardMaterial?(a(E,_),x(E,_),_.isMeshPhysicalMaterial&&y(E,_,I)):_.isMeshMatcapMaterial?(a(E,_),A(E,_)):_.isMeshDepthMaterial?a(E,_):_.isMeshDistanceMaterial?(a(E,_),R(E,_)):_.isMeshNormalMaterial?a(E,_):_.isLineBasicMaterial?(u(E,_),_.isLineDashedMaterial&&h(E,_)):_.isPointsMaterial?p(E,_,N,U):_.isSpriteMaterial?d(E,_):_.isShadowMaterial?(E.color.value.copy(_.color),E.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function a(E,_){E.opacity.value=_.opacity,_.color&&E.diffuse.value.copy(_.color),_.emissive&&E.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(E.map.value=_.map,t(_.map,E.mapTransform)),_.alphaMap&&(E.alphaMap.value=_.alphaMap,t(_.alphaMap,E.alphaMapTransform)),_.bumpMap&&(E.bumpMap.value=_.bumpMap,t(_.bumpMap,E.bumpMapTransform),E.bumpScale.value=_.bumpScale,_.side===cn&&(E.bumpScale.value*=-1)),_.normalMap&&(E.normalMap.value=_.normalMap,t(_.normalMap,E.normalMapTransform),E.normalScale.value.copy(_.normalScale),_.side===cn&&E.normalScale.value.negate()),_.displacementMap&&(E.displacementMap.value=_.displacementMap,t(_.displacementMap,E.displacementMapTransform),E.displacementScale.value=_.displacementScale,E.displacementBias.value=_.displacementBias),_.emissiveMap&&(E.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,E.emissiveMapTransform)),_.specularMap&&(E.specularMap.value=_.specularMap,t(_.specularMap,E.specularMapTransform)),_.alphaTest>0&&(E.alphaTest.value=_.alphaTest);const N=e.get(_),U=N.envMap,I=N.envMapRotation;U&&(E.envMap.value=U,Pi.copy(I),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),E.envMapRotation.value.setFromMatrix4(vE.makeRotationFromEuler(Pi)),E.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=_.reflectivity,E.ior.value=_.ior,E.refractionRatio.value=_.refractionRatio),_.lightMap&&(E.lightMap.value=_.lightMap,E.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,E.lightMapTransform)),_.aoMap&&(E.aoMap.value=_.aoMap,E.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,E.aoMapTransform))}function u(E,_){E.diffuse.value.copy(_.color),E.opacity.value=_.opacity,_.map&&(E.map.value=_.map,t(_.map,E.mapTransform))}function h(E,_){E.dashSize.value=_.dashSize,E.totalSize.value=_.dashSize+_.gapSize,E.scale.value=_.scale}function p(E,_,N,U){E.diffuse.value.copy(_.color),E.opacity.value=_.opacity,E.size.value=_.size*N,E.scale.value=U*.5,_.map&&(E.map.value=_.map,t(_.map,E.uvTransform)),_.alphaMap&&(E.alphaMap.value=_.alphaMap,t(_.alphaMap,E.alphaMapTransform)),_.alphaTest>0&&(E.alphaTest.value=_.alphaTest)}function d(E,_){E.diffuse.value.copy(_.color),E.opacity.value=_.opacity,E.rotation.value=_.rotation,_.map&&(E.map.value=_.map,t(_.map,E.mapTransform)),_.alphaMap&&(E.alphaMap.value=_.alphaMap,t(_.alphaMap,E.alphaMapTransform)),_.alphaTest>0&&(E.alphaTest.value=_.alphaTest)}function v(E,_){E.specular.value.copy(_.specular),E.shininess.value=Math.max(_.shininess,1e-4)}function m(E,_){_.gradientMap&&(E.gradientMap.value=_.gradientMap)}function x(E,_){E.metalness.value=_.metalness,_.metalnessMap&&(E.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,E.metalnessMapTransform)),E.roughness.value=_.roughness,_.roughnessMap&&(E.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,E.roughnessMapTransform)),_.envMap&&(E.envMapIntensity.value=_.envMapIntensity)}function y(E,_,N){E.ior.value=_.ior,_.sheen>0&&(E.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),E.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(E.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,E.sheenColorMapTransform)),_.sheenRoughnessMap&&(E.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,E.sheenRoughnessMapTransform))),_.clearcoat>0&&(E.clearcoat.value=_.clearcoat,E.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(E.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,E.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(E.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===cn&&E.clearcoatNormalScale.value.negate())),_.dispersion>0&&(E.dispersion.value=_.dispersion),_.iridescence>0&&(E.iridescence.value=_.iridescence,E.iridescenceIOR.value=_.iridescenceIOR,E.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(E.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,E.iridescenceMapTransform)),_.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),_.transmission>0&&(E.transmission.value=_.transmission,E.transmissionSamplerMap.value=N.texture,E.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(E.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,E.transmissionMapTransform)),E.thickness.value=_.thickness,_.thicknessMap&&(E.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=_.attenuationDistance,E.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(E.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(E.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=_.specularIntensity,E.specularColor.value.copy(_.specularColor),_.specularColorMap&&(E.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,E.specularColorMapTransform)),_.specularIntensityMap&&(E.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,E.specularIntensityMapTransform))}function A(E,_){_.matcap&&(E.matcap.value=_.matcap)}function R(E,_){const N=e.get(_).light;E.referencePosition.value.setFromMatrixPosition(N.matrixWorld),E.nearDistance.value=N.shadow.camera.near,E.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:o}}function yE(i,e,t,n){let o={},a={},u=[];const h=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,U){const I=U.program;n.uniformBlockBinding(N,I)}function d(N,U){let I=o[N.id];I===void 0&&(A(N),I=v(N),o[N.id]=I,N.addEventListener("dispose",E));const B=U.program;n.updateUBOMapping(N,B);const D=e.render.frame;a[N.id]!==D&&(x(N),a[N.id]=D)}function v(N){const U=m();N.__bindingPointIndex=U;const I=i.createBuffer(),B=N.__size,D=N.usage;return i.bindBuffer(i.UNIFORM_BUFFER,I),i.bufferData(i.UNIFORM_BUFFER,B,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,U,I),I}function m(){for(let N=0;N<h;N++)if(u.indexOf(N)===-1)return u.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const U=o[N.id],I=N.uniforms,B=N.__cache;i.bindBuffer(i.UNIFORM_BUFFER,U);for(let D=0,z=I.length;D<z;D++){const j=Array.isArray(I[D])?I[D]:[I[D]];for(let P=0,w=j.length;P<w;P++){const O=j[P];if(y(O,D,P,B)===!0){const Y=O.__offset,te=Array.isArray(O.value)?O.value:[O.value];let Z=0;for(let he=0;he<te.length;he++){const re=te[he],ye=R(re);typeof re=="number"||typeof re=="boolean"?(O.__data[0]=re,i.bufferSubData(i.UNIFORM_BUFFER,Y+Z,O.__data)):re.isMatrix3?(O.__data[0]=re.elements[0],O.__data[1]=re.elements[1],O.__data[2]=re.elements[2],O.__data[3]=0,O.__data[4]=re.elements[3],O.__data[5]=re.elements[4],O.__data[6]=re.elements[5],O.__data[7]=0,O.__data[8]=re.elements[6],O.__data[9]=re.elements[7],O.__data[10]=re.elements[8],O.__data[11]=0):(re.toArray(O.__data,Z),Z+=ye.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(N,U,I,B){const D=N.value,z=U+"_"+I;if(B[z]===void 0)return typeof D=="number"||typeof D=="boolean"?B[z]=D:B[z]=D.clone(),!0;{const j=B[z];if(typeof D=="number"||typeof D=="boolean"){if(j!==D)return B[z]=D,!0}else if(j.equals(D)===!1)return j.copy(D),!0}return!1}function A(N){const U=N.uniforms;let I=0;const B=16;for(let z=0,j=U.length;z<j;z++){const P=Array.isArray(U[z])?U[z]:[U[z]];for(let w=0,O=P.length;w<O;w++){const Y=P[w],te=Array.isArray(Y.value)?Y.value:[Y.value];for(let Z=0,he=te.length;Z<he;Z++){const re=te[Z],ye=R(re),ne=I%B,ge=ne%ye.boundary,Re=ne+ge;I+=ge,Re!==0&&B-Re<ye.storage&&(I+=B-Re),Y.__data=new Float32Array(ye.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=I,I+=ye.storage}}}const D=I%B;return D>0&&(I+=B-D),N.__size=I,N.__cache={},this}function R(N){const U={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(U.boundary=4,U.storage=4):N.isVector2?(U.boundary=8,U.storage=8):N.isVector3||N.isColor?(U.boundary=16,U.storage=12):N.isVector4?(U.boundary=16,U.storage=16):N.isMatrix3?(U.boundary=48,U.storage=48):N.isMatrix4?(U.boundary=64,U.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),U}function E(N){const U=N.target;U.removeEventListener("dispose",E);const I=u.indexOf(U.__bindingPointIndex);u.splice(I,1),i.deleteBuffer(o[U.id]),delete o[U.id],delete a[U.id]}function _(){for(const N in o)i.deleteBuffer(o[N]);u=[],o={},a={}}return{bind:p,update:d,dispose:_}}class EE{constructor(e={}){const{canvas:t=J_(),context:n=null,depth:o=!0,stencil:a=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=u;const A=new Uint32Array(4),R=new Int32Array(4);let E=null,_=null;const N=[],U=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let B=!1;this._outputColorSpace=pn;let D=0,z=0,j=null,P=-1,w=null;const O=new Nt,Y=new Nt;let te=null;const Z=new _t(0);let he=0,re=t.width,ye=t.height,ne=1,ge=null,Re=null;const Oe=new Nt(0,0,re,ye),$e=new Nt(0,0,re,ye);let nt=!1;const Je=new oc;let Ke=!1,le=!1;const pe=new Ot,ae=new J,Me=new Nt,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function yt(){return j===null?ne:1}let k=n;function vt(C,$){return t.getContext(C,$)}try{const C={alpha:!0,depth:o,stencil:a,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:v,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ka}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",W,!1),k===null){const $="webgl2";if(k=vt($,C),k===null)throw vt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let it,ce,fe,Ce,me,Le,at,Ye,L,S,V,Q,de,se,Be,Se,He,Ve,Te,Ie,Qe,Xe,De,qe;function G(){it=new Dx(k),it.init(),Xe=new dE(k,it),ce=new Tx(k,it,e,Xe),fe=new hE(k,it),ce.reversedDepthBuffer&&x&&fe.buffers.depth.setReversed(!0),Ce=new Ix(k),me=new Jy,Le=new fE(k,it,fe,me,ce,Xe,Ce),at=new bx(I),Ye=new Px(I),L=new zg(k),De=new Sx(k,L),S=new Lx(k,L,Ce,De),V=new Nx(k,S,L,Ce),Te=new Ux(k,ce,Le),Se=new wx(me),Q=new Zy(I,at,Ye,it,ce,De,Se),de=new xE(I,me),se=new eE,Be=new oE(it),Ve=new Ex(I,at,Ye,fe,V,y,p),He=new lE(I,V,ce),qe=new yE(k,Ce,ce,fe),Ie=new Mx(k,it,Ce),Qe=new Fx(k,it,Ce),Ce.programs=Q.programs,I.capabilities=ce,I.extensions=it,I.properties=me,I.renderLists=se,I.shadowMap=He,I.state=fe,I.info=Ce}G();const we=new gE(I,k);this.xr=we,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=it.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=it.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(C){C!==void 0&&(ne=C,this.setSize(re,ye,!1))},this.getSize=function(C){return C.set(re,ye)},this.setSize=function(C,$,ee=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=C,ye=$,t.width=Math.floor(C*ne),t.height=Math.floor($*ne),ee===!0&&(t.style.width=C+"px",t.style.height=$+"px"),this.setViewport(0,0,C,$)},this.getDrawingBufferSize=function(C){return C.set(re*ne,ye*ne).floor()},this.setDrawingBufferSize=function(C,$,ee){re=C,ye=$,ne=ee,t.width=Math.floor(C*ee),t.height=Math.floor($*ee),this.setViewport(0,0,C,$)},this.getCurrentViewport=function(C){return C.copy(O)},this.getViewport=function(C){return C.copy(Oe)},this.setViewport=function(C,$,ee,ie){C.isVector4?Oe.set(C.x,C.y,C.z,C.w):Oe.set(C,$,ee,ie),fe.viewport(O.copy(Oe).multiplyScalar(ne).round())},this.getScissor=function(C){return C.copy($e)},this.setScissor=function(C,$,ee,ie){C.isVector4?$e.set(C.x,C.y,C.z,C.w):$e.set(C,$,ee,ie),fe.scissor(Y.copy($e).multiplyScalar(ne).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(C){fe.setScissorTest(nt=C)},this.setOpaqueSort=function(C){ge=C},this.setTransparentSort=function(C){Re=C},this.getClearColor=function(C){return C.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(C=!0,$=!0,ee=!0){let ie=0;if(C){let q=!1;if(j!==null){const be=j.texture.format;q=be===nc||be===tc||be===ec}if(q){const be=j.texture.type,Fe=be===Vn||be===Oi||be===Fr||be===Ir||be===Ja||be===Qa,Ge=Ve.getClearColor(),Ne=Ve.getClearAlpha(),tt=Ge.r,Ae=Ge.g,Ze=Ge.b;Fe?(A[0]=tt,A[1]=Ae,A[2]=Ze,A[3]=Ne,k.clearBufferuiv(k.COLOR,0,A)):(R[0]=tt,R[1]=Ae,R[2]=Ze,R[3]=Ne,k.clearBufferiv(k.COLOR,0,R))}else ie|=k.COLOR_BUFFER_BIT}$&&(ie|=k.DEPTH_BUFFER_BIT),ee&&(ie|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",W,!1),Ve.dispose(),se.dispose(),Be.dispose(),me.dispose(),at.dispose(),Ye.dispose(),V.dispose(),De.dispose(),qe.dispose(),Q.dispose(),we.dispose(),we.removeEventListener("sessionstart",kt),we.removeEventListener("sessionend",_i),Wn.stop()};function Pe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function ze(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const C=Ce.autoReset,$=He.enabled,ee=He.autoUpdate,ie=He.needsUpdate,q=He.type;G(),Ce.autoReset=C,He.enabled=$,He.autoUpdate=ee,He.needsUpdate=ie,He.type=q}function W(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function H(C){const $=C.target;$.removeEventListener("dispose",H),ke($)}function ke(C){rt(C),me.remove(C)}function rt(C){const $=me.get(C).programs;$!==void 0&&($.forEach(function(ee){Q.releaseProgram(ee)}),C.isShaderMaterial&&Q.releaseShaderCache(C))}this.renderBufferDirect=function(C,$,ee,ie,q,be){$===null&&($=We);const Fe=q.isMesh&&q.matrixWorld.determinant()<0,Ge=qr(C,$,ee,ie,q);fe.setMaterial(ie,Fe);let Ne=ee.index,tt=1;if(ie.wireframe===!0){if(Ne=S.getWireframeAttribute(ee),Ne===void 0)return;tt=2}const Ae=ee.drawRange,Ze=ee.attributes.position;let dt=Ae.start*tt,wt=(Ae.start+Ae.count)*tt;be!==null&&(dt=Math.max(dt,be.start*tt),wt=Math.min(wt,(be.start+be.count)*tt)),Ne!==null?(dt=Math.max(dt,0),wt=Math.min(wt,Ne.count)):Ze!=null&&(dt=Math.max(dt,0),wt=Math.min(wt,Ze.count));const It=wt-dt;if(It<0||It===1/0)return;De.setup(q,ie,Ge,ee,Ne);let Pt,bt=Ie;if(Ne!==null&&(Pt=L.get(Ne),bt=Qe,bt.setIndex(Pt)),q.isMesh)ie.wireframe===!0?(fe.setLineWidth(ie.wireframeLinewidth*yt()),bt.setMode(k.LINES)):bt.setMode(k.TRIANGLES);else if(q.isLine){let et=ie.linewidth;et===void 0&&(et=1),fe.setLineWidth(et*yt()),q.isLineSegments?bt.setMode(k.LINES):q.isLineLoop?bt.setMode(k.LINE_LOOP):bt.setMode(k.LINE_STRIP)}else q.isPoints?bt.setMode(k.POINTS):q.isSprite&&bt.setMode(k.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Or("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))bt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const et=q._multiDrawStarts,Dt=q._multiDrawCounts,xt=q._multiDrawCount,Kt=Ne?L.get(Ne).bytesPerElement:1,M=me.get(ie).currentProgram.getUniforms();for(let pt=0;pt<xt;pt++)M.setValue(k,"_gl_DrawID",pt),bt.render(et[pt]/Kt,Dt[pt])}else if(q.isInstancedMesh)bt.renderInstances(dt,It,q.count);else if(ee.isInstancedBufferGeometry){const et=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Dt=Math.min(ee.instanceCount,et);bt.renderInstances(dt,It,Dt)}else bt.render(dt,It)};function Et(C,$,ee){C.transparent===!0&&C.side===Cn&&C.forceSinglePass===!1?(C.side=cn,C.needsUpdate=!0,vi(C,$,ee),C.side=pi,C.needsUpdate=!0,vi(C,$,ee),C.side=Cn):vi(C,$,ee)}this.compile=function(C,$,ee=null){ee===null&&(ee=C),_=Be.get(ee),_.init($),U.push(_),ee.traverseVisible(function(q){q.isLight&&q.layers.test($.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),C!==ee&&C.traverseVisible(function(q){q.isLight&&q.layers.test($.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),_.setupLights();const ie=new Set;return C.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const be=q.material;if(be)if(Array.isArray(be))for(let Fe=0;Fe<be.length;Fe++){const Ge=be[Fe];Et(Ge,ee,q),ie.add(Ge)}else Et(be,ee,q),ie.add(be)}),_=U.pop(),ie},this.compileAsync=function(C,$,ee=null){const ie=this.compile(C,$,ee);return new Promise(q=>{function be(){if(ie.forEach(function(Fe){me.get(Fe).currentProgram.isReady()&&ie.delete(Fe)}),ie.size===0){q(C);return}setTimeout(be,10)}it.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let lt=null;function Sn(C){lt&&lt(C)}function kt(){Wn.stop()}function _i(){Wn.start()}const Wn=new ku;Wn.setAnimationLoop(Sn),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(C){lt=C,we.setAnimationLoop(C),C===null?Wn.stop():Wn.start()},we.addEventListener("sessionstart",kt),we.addEventListener("sessionend",_i),this.render=function(C,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera($),$=we.getCamera()),C.isScene===!0&&C.onBeforeRender(I,C,$,j),_=Be.get(C,U.length),_.init($),U.push(_),pe.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Je.setFromProjectionMatrix(pe,Hn,$.reversedDepth),le=this.localClippingEnabled,Ke=Se.init(this.clippingPlanes,le),E=se.get(C,N.length),E.init(),N.push(E),we.enabled===!0&&we.isPresenting===!0){const be=I.xr.getDepthSensingMesh();be!==null&&xr(be,$,-1/0,I.sortObjects)}xr(C,$,0,I.sortObjects),E.finish(),I.sortObjects===!0&&E.sort(ge,Re),st=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,st&&Ve.addToRenderList(E,C),this.info.render.frame++,Ke===!0&&Se.beginShadows();const ee=_.state.shadowsArray;He.render(ee,C,$),Ke===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=E.opaque,q=E.transmissive;if(_.setupLights(),$.isArrayCamera){const be=$.cameras;if(q.length>0)for(let Fe=0,Ge=be.length;Fe<Ge;Fe++){const Ne=be[Fe];Wr(ie,q,C,Ne)}st&&Ve.render(C);for(let Fe=0,Ge=be.length;Fe<Ge;Fe++){const Ne=be[Fe];rn(E,C,Ne,Ne.viewport)}}else q.length>0&&Wr(ie,q,C,$),st&&Ve.render(C),rn(E,C,$);j!==null&&z===0&&(Le.updateMultisampleRenderTarget(j),Le.updateRenderTargetMipmap(j)),C.isScene===!0&&C.onAfterRender(I,C,$),De.resetDefaultState(),P=-1,w=null,U.pop(),U.length>0?(_=U[U.length-1],Ke===!0&&Se.setGlobalState(I.clippingPlanes,_.state.camera)):_=null,N.pop(),N.length>0?E=N[N.length-1]:E=null};function xr(C,$,ee,ie){if(C.visible===!1)return;if(C.layers.test($.layers)){if(C.isGroup)ee=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update($);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Je.intersectsSprite(C)){ie&&Me.setFromMatrixPosition(C.matrixWorld).applyMatrix4(pe);const Fe=V.update(C),Ge=C.material;Ge.visible&&E.push(C,Fe,Ge,ee,Me.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Je.intersectsObject(C))){const Fe=V.update(C),Ge=C.material;if(ie&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Me.copy(C.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Me.copy(Fe.boundingSphere.center)),Me.applyMatrix4(C.matrixWorld).applyMatrix4(pe)),Array.isArray(Ge)){const Ne=Fe.groups;for(let tt=0,Ae=Ne.length;tt<Ae;tt++){const Ze=Ne[tt],dt=Ge[Ze.materialIndex];dt&&dt.visible&&E.push(C,Fe,dt,ee,Me.z,Ze)}}else Ge.visible&&E.push(C,Fe,Ge,ee,Me.z,null)}}const be=C.children;for(let Fe=0,Ge=be.length;Fe<Ge;Fe++)xr(be[Fe],$,ee,ie)}function rn(C,$,ee,ie){const q=C.opaque,be=C.transmissive,Fe=C.transparent;_.setupLightsView(ee),Ke===!0&&Se.setGlobalState(I.clippingPlanes,ee),ie&&fe.viewport(O.copy(ie)),q.length>0&&Xn(q,$,ee),be.length>0&&Xn(be,$,ee),Fe.length>0&&Xn(Fe,$,ee),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Wr(C,$,ee,ie){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ie.id]===void 0&&(_.state.transmissionRenderTarget[ie.id]=new Bi(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?kr:Vn,minFilter:Ni,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const be=_.state.transmissionRenderTarget[ie.id],Fe=ie.viewport||O;be.setSize(Fe.z*I.transmissionResolutionScale,Fe.w*I.transmissionResolutionScale);const Ge=I.getRenderTarget(),Ne=I.getActiveCubeFace(),tt=I.getActiveMipmapLevel();I.setRenderTarget(be),I.getClearColor(Z),he=I.getClearAlpha(),he<1&&I.setClearColor(16777215,.5),I.clear(),st&&Ve.render(ee);const Ae=I.toneMapping;I.toneMapping=di;const Ze=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),_.setupLightsView(ie),Ke===!0&&Se.setGlobalState(I.clippingPlanes,ie),Xn(C,ee,ie),Le.updateMultisampleRenderTarget(be),Le.updateRenderTargetMipmap(be),it.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let wt=0,It=$.length;wt<It;wt++){const Pt=$[wt],bt=Pt.object,et=Pt.geometry,Dt=Pt.material,xt=Pt.group;if(Dt.side===Cn&&bt.layers.test(ie.layers)){const Kt=Dt.side;Dt.side=cn,Dt.needsUpdate=!0,gi(bt,ee,ie,et,Dt,xt),Dt.side=Kt,Dt.needsUpdate=!0,dt=!0}}dt===!0&&(Le.updateMultisampleRenderTarget(be),Le.updateRenderTargetMipmap(be))}I.setRenderTarget(Ge,Ne,tt),I.setClearColor(Z,he),Ze!==void 0&&(ie.viewport=Ze),I.toneMapping=Ae}function Xn(C,$,ee){const ie=$.isScene===!0?$.overrideMaterial:null;for(let q=0,be=C.length;q<be;q++){const Fe=C[q],Ge=Fe.object,Ne=Fe.geometry,tt=Fe.group;let Ae=Fe.material;Ae.allowOverride===!0&&ie!==null&&(Ae=ie),Ge.layers.test(ee.layers)&&gi(Ge,$,ee,Ne,Ae,tt)}}function gi(C,$,ee,ie,q,be){C.onBeforeRender(I,$,ee,ie,q,be),C.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(I,$,ee,ie,C,be),q.transparent===!0&&q.side===Cn&&q.forceSinglePass===!1?(q.side=cn,q.needsUpdate=!0,I.renderBufferDirect(ee,$,ie,q,C,be),q.side=pi,q.needsUpdate=!0,I.renderBufferDirect(ee,$,ie,q,C,be),q.side=Cn):I.renderBufferDirect(ee,$,ie,q,C,be),C.onAfterRender(I,$,ee,ie,q,be)}function vi(C,$,ee){$.isScene!==!0&&($=We);const ie=me.get(C),q=_.state.lights,be=_.state.shadowsArray,Fe=q.state.version,Ge=Q.getParameters(C,q.state,be,$,ee),Ne=Q.getProgramCacheKey(Ge);let tt=ie.programs;ie.environment=C.isMeshStandardMaterial?$.environment:null,ie.fog=$.fog,ie.envMap=(C.isMeshStandardMaterial?Ye:at).get(C.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&C.envMap===null?$.environmentRotation:C.envMapRotation,tt===void 0&&(C.addEventListener("dispose",H),tt=new Map,ie.programs=tt);let Ae=tt.get(Ne);if(Ae!==void 0){if(ie.currentProgram===Ae&&ie.lightsStateVersion===Fe)return $r(C,Ge),Ae}else Ge.uniforms=Q.getUniforms(C),C.onBeforeCompile(Ge,I),Ae=Q.acquireProgram(Ge,Ne),tt.set(Ne,Ae),ie.uniforms=Ge.uniforms;const Ze=ie.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ze.clippingPlanes=Se.uniform),$r(C,Ge),ie.needsLights=to(C),ie.lightsStateVersion=Fe,ie.needsLights&&(Ze.ambientLightColor.value=q.state.ambient,Ze.lightProbe.value=q.state.probe,Ze.directionalLights.value=q.state.directional,Ze.directionalLightShadows.value=q.state.directionalShadow,Ze.spotLights.value=q.state.spot,Ze.spotLightShadows.value=q.state.spotShadow,Ze.rectAreaLights.value=q.state.rectArea,Ze.ltc_1.value=q.state.rectAreaLTC1,Ze.ltc_2.value=q.state.rectAreaLTC2,Ze.pointLights.value=q.state.point,Ze.pointLightShadows.value=q.state.pointShadow,Ze.hemisphereLights.value=q.state.hemi,Ze.directionalShadowMap.value=q.state.directionalShadowMap,Ze.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ze.spotShadowMap.value=q.state.spotShadowMap,Ze.spotLightMatrix.value=q.state.spotLightMatrix,Ze.spotLightMap.value=q.state.spotLightMap,Ze.pointShadowMap.value=q.state.pointShadowMap,Ze.pointShadowMatrix.value=q.state.pointShadowMatrix),ie.currentProgram=Ae,ie.uniformsList=null,Ae}function Xr(C){if(C.uniformsList===null){const $=C.currentProgram.getUniforms();C.uniformsList=Ws.seqWithValue($.seq,C.uniforms)}return C.uniformsList}function $r(C,$){const ee=me.get(C);ee.outputColorSpace=$.outputColorSpace,ee.batching=$.batching,ee.batchingColor=$.batchingColor,ee.instancing=$.instancing,ee.instancingColor=$.instancingColor,ee.instancingMorph=$.instancingMorph,ee.skinning=$.skinning,ee.morphTargets=$.morphTargets,ee.morphNormals=$.morphNormals,ee.morphColors=$.morphColors,ee.morphTargetsCount=$.morphTargetsCount,ee.numClippingPlanes=$.numClippingPlanes,ee.numIntersection=$.numClipIntersection,ee.vertexAlphas=$.vertexAlphas,ee.vertexTangents=$.vertexTangents,ee.toneMapping=$.toneMapping}function qr(C,$,ee,ie,q){$.isScene!==!0&&($=We),Le.resetTextureUnits();const be=$.fog,Fe=ie.isMeshStandardMaterial?$.environment:null,Ge=j===null?I.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:mr,Ne=(ie.isMeshStandardMaterial?Ye:at).get(ie.envMap||Fe),tt=ie.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Ae=!!ee.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ze=!!ee.morphAttributes.position,dt=!!ee.morphAttributes.normal,wt=!!ee.morphAttributes.color;let It=di;ie.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(It=I.toneMapping);const Pt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,bt=Pt!==void 0?Pt.length:0,et=me.get(ie),Dt=_.state.lights;if(Ke===!0&&(le===!0||C!==w)){const Yt=C===w&&ie.id===P;Se.setState(ie,C,Yt)}let xt=!1;ie.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Dt.state.version||et.outputColorSpace!==Ge||q.isBatchedMesh&&et.batching===!1||!q.isBatchedMesh&&et.batching===!0||q.isBatchedMesh&&et.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&et.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&et.instancing===!1||!q.isInstancedMesh&&et.instancing===!0||q.isSkinnedMesh&&et.skinning===!1||!q.isSkinnedMesh&&et.skinning===!0||q.isInstancedMesh&&et.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&et.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&et.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&et.instancingMorph===!1&&q.morphTexture!==null||et.envMap!==Ne||ie.fog===!0&&et.fog!==be||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Se.numPlanes||et.numIntersection!==Se.numIntersection)||et.vertexAlphas!==tt||et.vertexTangents!==Ae||et.morphTargets!==Ze||et.morphNormals!==dt||et.morphColors!==wt||et.toneMapping!==It||et.morphTargetsCount!==bt)&&(xt=!0):(xt=!0,et.__version=ie.version);let Kt=et.currentProgram;xt===!0&&(Kt=vi(ie,$,q));let M=!1,pt=!1,xi=!1;const At=Kt.getUniforms(),Ht=et.uniforms;if(fe.useProgram(Kt.program)&&(M=!0,pt=!0,xi=!0),ie.id!==P&&(P=ie.id,pt=!0),M||w!==C){fe.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),At.setValue(k,"projectionMatrix",C.projectionMatrix),At.setValue(k,"viewMatrix",C.matrixWorldInverse);const Zt=At.map.cameraPosition;Zt!==void 0&&Zt.setValue(k,ae.setFromMatrixPosition(C.matrixWorld)),ce.logarithmicDepthBuffer&&At.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&At.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),w!==C&&(w=C,pt=!0,xi=!0)}if(q.isSkinnedMesh){At.setOptional(k,q,"bindMatrix"),At.setOptional(k,q,"bindMatrixInverse");const Yt=q.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),At.setValue(k,"boneTexture",Yt.boneTexture,Le))}q.isBatchedMesh&&(At.setOptional(k,q,"batchingTexture"),At.setValue(k,"batchingTexture",q._matricesTexture,Le),At.setOptional(k,q,"batchingIdTexture"),At.setValue(k,"batchingIdTexture",q._indirectTexture,Le),At.setOptional(k,q,"batchingColorTexture"),q._colorsTexture!==null&&At.setValue(k,"batchingColorTexture",q._colorsTexture,Le));const sn=ee.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&Te.update(q,ee,Kt),(pt||et.receiveShadow!==q.receiveShadow)&&(et.receiveShadow=q.receiveShadow,At.setValue(k,"receiveShadow",q.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Ht.envMap.value=Ne,Ht.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&$.environment!==null&&(Ht.envMapIntensity.value=$.environmentIntensity),pt&&(At.setValue(k,"toneMappingExposure",I.toneMappingExposure),et.needsLights&&eo(Ht,xi),be&&ie.fog===!0&&de.refreshFogUniforms(Ht,be),de.refreshMaterialUniforms(Ht,ie,ne,ye,_.state.transmissionRenderTarget[C.id]),Ws.upload(k,Xr(et),Ht,Le)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Ws.upload(k,Xr(et),Ht,Le),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&At.setValue(k,"center",q.center),At.setValue(k,"modelViewMatrix",q.modelViewMatrix),At.setValue(k,"normalMatrix",q.normalMatrix),At.setValue(k,"modelMatrix",q.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Yt=ie.uniformsGroups;for(let Zt=0,yr=Yt.length;Zt<yr;Zt++){const $n=Yt[Zt];qe.update($n,Kt),qe.bind($n,Kt)}}return Kt}function eo(C,$){C.ambientLightColor.needsUpdate=$,C.lightProbe.needsUpdate=$,C.directionalLights.needsUpdate=$,C.directionalLightShadows.needsUpdate=$,C.pointLights.needsUpdate=$,C.pointLightShadows.needsUpdate=$,C.spotLights.needsUpdate=$,C.spotLightShadows.needsUpdate=$,C.rectAreaLights.needsUpdate=$,C.hemisphereLights.needsUpdate=$}function to(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(C,$,ee){const ie=me.get(C);ie.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),me.get(C.texture).__webglTexture=$,me.get(C.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ee,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,$){const ee=me.get(C);ee.__webglFramebuffer=$,ee.__useDefaultFramebuffer=$===void 0};const no=k.createFramebuffer();this.setRenderTarget=function(C,$=0,ee=0){j=C,D=$,z=ee;let ie=!0,q=null,be=!1,Fe=!1;if(C){const Ne=me.get(C);if(Ne.__useDefaultFramebuffer!==void 0)fe.bindFramebuffer(k.FRAMEBUFFER,null),ie=!1;else if(Ne.__webglFramebuffer===void 0)Le.setupRenderTarget(C);else if(Ne.__hasExternalTextures)Le.rebindTextures(C,me.get(C.texture).__webglTexture,me.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ze=C.depthTexture;if(Ne.__boundDepthTexture!==Ze){if(Ze!==null&&me.has(Ze)&&(C.width!==Ze.image.width||C.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Le.setupDepthRenderbuffer(C)}}const tt=C.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Fe=!0);const Ae=me.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ae[$])?q=Ae[$][ee]:q=Ae[$],be=!0):C.samples>0&&Le.useMultisampledRTT(C)===!1?q=me.get(C).__webglMultisampledFramebuffer:Array.isArray(Ae)?q=Ae[ee]:q=Ae,O.copy(C.viewport),Y.copy(C.scissor),te=C.scissorTest}else O.copy(Oe).multiplyScalar(ne).floor(),Y.copy($e).multiplyScalar(ne).floor(),te=nt;if(ee!==0&&(q=no),fe.bindFramebuffer(k.FRAMEBUFFER,q)&&ie&&fe.drawBuffers(C,q),fe.viewport(O),fe.scissor(Y),fe.setScissorTest(te),be){const Ne=me.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ne.__webglTexture,ee)}else if(Fe){const Ne=$;for(let tt=0;tt<C.textures.length;tt++){const Ae=me.get(C.textures[tt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+tt,Ae.__webglTexture,ee,Ne)}}else if(C!==null&&ee!==0){const Ne=me.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ne.__webglTexture,ee)}P=-1},this.readRenderTargetPixels=function(C,$,ee,ie,q,be,Fe,Ge=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=me.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ne=Ne[Fe]),Ne){fe.bindFramebuffer(k.FRAMEBUFFER,Ne);try{const tt=C.textures[Ge],Ae=tt.format,Ze=tt.type;if(!ce.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=C.width-ie&&ee>=0&&ee<=C.height-q&&(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ge),k.readPixels($,ee,ie,q,Xe.convert(Ae),Xe.convert(Ze),be))}finally{const tt=j!==null?me.get(j).__webglFramebuffer:null;fe.bindFramebuffer(k.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(C,$,ee,ie,q,be,Fe,Ge=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=me.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ne=Ne[Fe]),Ne)if($>=0&&$<=C.width-ie&&ee>=0&&ee<=C.height-q){fe.bindFramebuffer(k.FRAMEBUFFER,Ne);const tt=C.textures[Ge],Ae=tt.format,Ze=tt.type;if(!ce.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,dt),k.bufferData(k.PIXEL_PACK_BUFFER,be.byteLength,k.STREAM_READ),C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ge),k.readPixels($,ee,ie,q,Xe.convert(Ae),Xe.convert(Ze),0);const wt=j!==null?me.get(j).__webglFramebuffer:null;fe.bindFramebuffer(k.FRAMEBUFFER,wt);const It=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Q_(k,It,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,dt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,be),k.deleteBuffer(dt),k.deleteSync(It),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,$=null,ee=0){const ie=Math.pow(2,-ee),q=Math.floor(C.image.width*ie),be=Math.floor(C.image.height*ie),Fe=$!==null?$.x:0,Ge=$!==null?$.y:0;Le.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,ee,0,0,Fe,Ge,q,be),fe.unbindTexture()};const io=k.createFramebuffer(),Tt=k.createFramebuffer();this.copyTextureToTexture=function(C,$,ee=null,ie=null,q=0,be=null){be===null&&(q!==0?(Or("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=q,q=0):be=0);let Fe,Ge,Ne,tt,Ae,Ze,dt,wt,It;const Pt=C.isCompressedTexture?C.mipmaps[be]:C.image;if(ee!==null)Fe=ee.max.x-ee.min.x,Ge=ee.max.y-ee.min.y,Ne=ee.isBox3?ee.max.z-ee.min.z:1,tt=ee.min.x,Ae=ee.min.y,Ze=ee.isBox3?ee.min.z:0;else{const sn=Math.pow(2,-q);Fe=Math.floor(Pt.width*sn),Ge=Math.floor(Pt.height*sn),C.isDataArrayTexture?Ne=Pt.depth:C.isData3DTexture?Ne=Math.floor(Pt.depth*sn):Ne=1,tt=0,Ae=0,Ze=0}ie!==null?(dt=ie.x,wt=ie.y,It=ie.z):(dt=0,wt=0,It=0);const bt=Xe.convert($.format),et=Xe.convert($.type);let Dt;$.isData3DTexture?(Le.setTexture3D($,0),Dt=k.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(Le.setTexture2DArray($,0),Dt=k.TEXTURE_2D_ARRAY):(Le.setTexture2D($,0),Dt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,$.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,$.unpackAlignment);const xt=k.getParameter(k.UNPACK_ROW_LENGTH),Kt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),M=k.getParameter(k.UNPACK_SKIP_PIXELS),pt=k.getParameter(k.UNPACK_SKIP_ROWS),xi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Pt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Pt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,tt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ae),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ze);const At=C.isDataArrayTexture||C.isData3DTexture,Ht=$.isDataArrayTexture||$.isData3DTexture;if(C.isDepthTexture){const sn=me.get(C),Yt=me.get($),Zt=me.get(sn.__renderTarget),yr=me.get(Yt.__renderTarget);fe.bindFramebuffer(k.READ_FRAMEBUFFER,Zt.__webglFramebuffer),fe.bindFramebuffer(k.DRAW_FRAMEBUFFER,yr.__webglFramebuffer);for(let $n=0;$n<Ne;$n++)At&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,me.get(C).__webglTexture,q,Ze+$n),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,me.get($).__webglTexture,be,It+$n)),k.blitFramebuffer(tt,Ae,Fe,Ge,dt,wt,Fe,Ge,k.DEPTH_BUFFER_BIT,k.NEAREST);fe.bindFramebuffer(k.READ_FRAMEBUFFER,null),fe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(q!==0||C.isRenderTargetTexture||me.has(C)){const sn=me.get(C),Yt=me.get($);fe.bindFramebuffer(k.READ_FRAMEBUFFER,io),fe.bindFramebuffer(k.DRAW_FRAMEBUFFER,Tt);for(let Zt=0;Zt<Ne;Zt++)At?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,sn.__webglTexture,q,Ze+Zt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,sn.__webglTexture,q),Ht?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Yt.__webglTexture,be,It+Zt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Yt.__webglTexture,be),q!==0?k.blitFramebuffer(tt,Ae,Fe,Ge,dt,wt,Fe,Ge,k.COLOR_BUFFER_BIT,k.NEAREST):Ht?k.copyTexSubImage3D(Dt,be,dt,wt,It+Zt,tt,Ae,Fe,Ge):k.copyTexSubImage2D(Dt,be,dt,wt,tt,Ae,Fe,Ge);fe.bindFramebuffer(k.READ_FRAMEBUFFER,null),fe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ht?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(Dt,be,dt,wt,It,Fe,Ge,Ne,bt,et,Pt.data):$.isCompressedArrayTexture?k.compressedTexSubImage3D(Dt,be,dt,wt,It,Fe,Ge,Ne,bt,Pt.data):k.texSubImage3D(Dt,be,dt,wt,It,Fe,Ge,Ne,bt,et,Pt):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,be,dt,wt,Fe,Ge,bt,et,Pt.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,be,dt,wt,Pt.width,Pt.height,bt,Pt.data):k.texSubImage2D(k.TEXTURE_2D,be,dt,wt,Fe,Ge,bt,et,Pt);k.pixelStorei(k.UNPACK_ROW_LENGTH,xt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Kt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,M),k.pixelStorei(k.UNPACK_SKIP_ROWS,pt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,xi),be===0&&$.generateMipmaps&&k.generateMipmap(Dt),fe.unbindTexture()},this.initRenderTarget=function(C){me.get(C).__webglFramebuffer===void 0&&Le.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Le.setTextureCube(C,0):C.isData3DTexture?Le.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Le.setTexture2DArray(C,0):Le.setTexture2D(C,0),fe.unbindTexture()},this.resetState=function(){D=0,z=0,j=null,fe.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}const ru={type:"change"},lc={type:"start"},Gu={type:"end"},Is=new rc,su=new ui,SE=Math.cos(70*Z_.DEG2RAD),Wt=new J,an=2*Math.PI,Ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Zo=1e-6;class ME extends kg{constructor(e,t=null){super(e,t),this.state=Ct.NONE,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:lr.ROTATE,MIDDLE:lr.DOLLY,RIGHT:lr.PAN},this.touches={ONE:or.ROTATE,TWO:or.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new ki,this._lastTargetPosition=new J,this._quat=new ki().setFromUnitVectors(e.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ll,this._sphericalDelta=new Ll,this._scale=1,this._panOffset=new J,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new J,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=wE.bind(this),this._onPointerDown=TE.bind(this),this._onPointerUp=bE.bind(this),this._onContextMenu=FE.bind(this),this._onMouseWheel=CE.bind(this),this._onKeyDown=PE.bind(this),this._onTouchStart=DE.bind(this),this._onTouchMove=LE.bind(this),this._onMouseDown=AE.bind(this),this._onMouseMove=RE.bind(this),this._interceptControlDown=IE.bind(this),this._interceptControlUp=UE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ru),this.update(),this.state=Ct.NONE}update(e=null){const t=this.object.position;Wt.copy(t).sub(this.target),Wt.applyQuaternion(this._quat),this._spherical.setFromVector3(Wt),this.autoRotate&&this.state===Ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(n)&&isFinite(o)&&(n<-Math.PI?n+=an:n>Math.PI&&(n-=an),o<-Math.PI?o+=an:o>Math.PI&&(o-=an),n<=o?this._spherical.theta=Math.max(n,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+o)/2?Math.max(n,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=u!=this._spherical.radius}if(Wt.setFromSpherical(this._spherical),Wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=Wt.length();u=this._clampDistance(h*this._scale);const p=h-u;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),a=!!p}else if(this.object.isOrthographicCamera){const h=new J(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=p!==this.object.zoom;const d=new J(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(h),this.object.updateMatrixWorld(),u=Wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Is.origin.copy(this.object.position),Is.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Is.direction))<SE?this.object.lookAt(this.target):(su.setFromNormalAndCoplanarPoint(this.object.up,this.target),Is.intersectPlane(su,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Zo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Zo||this._lastTargetPosition.distanceToSquared(this.target)>Zo?(this.dispatchEvent(ru),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?an/60*this.autoRotateSpeed*e:an/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Wt.setFromMatrixColumn(t,0),Wt.multiplyScalar(-e),this._panOffset.add(Wt)}_panUp(e,t){this.screenSpacePanning===!0?Wt.setFromMatrixColumn(t,1):(Wt.setFromMatrixColumn(t,0),Wt.crossVectors(this.object.up,Wt)),Wt.multiplyScalar(e),this._panOffset.add(Wt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;Wt.copy(o).sub(this.target);let a=Wt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),o=e-n.left,a=t-n.top,u=n.width,h=n.height;this._mouse.x=o/u*2-1,this._mouse.y=-(a/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(n,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(n,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(n*n+o*o);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),o=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(o,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(n,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,o=e.pageY-t.y,a=Math.sqrt(n*n+o*o);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,h=(e.pageY+t.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ot,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function TE(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function wE(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function bE(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Gu),this.state=Ct.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function AE(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case lr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ct.DOLLY;break;case lr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ct.ROTATE}break;case lr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ct.PAN}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(lc)}function RE(i){switch(this.state){case Ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function CE(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ct.NONE||(i.preventDefault(),this.dispatchEvent(lc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Gu))}function PE(i){this.enabled!==!1&&this._handleKeyDown(i)}function DE(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case or.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ct.TOUCH_ROTATE;break;case or.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ct.TOUCH_PAN;break;default:this.state=Ct.NONE}break;case 2:switch(this.touches.TWO){case or.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ct.TOUCH_DOLLY_PAN;break;case or.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ct.TOUCH_DOLLY_ROTATE;break;default:this.state=Ct.NONE}break;default:this.state=Ct.NONE}this.state!==Ct.NONE&&this.dispatchEvent(lc)}function LE(i){switch(this._trackPointer(i),this.state){case Ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ct.NONE}}function FE(i){this.enabled!==!1&&i.preventDefault()}function IE(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function UE(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const NE="modulepreload",OE=function(i,e){return new URL(i,e).href},ou={},kE=function(e,t,n){let o=Promise.resolve();if(t&&t.length>0){const u=document.getElementsByTagName("link"),h=document.querySelector("meta[property=csp-nonce]"),p=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));o=Promise.allSettled(t.map(d=>{if(d=OE(d,n),d in ou)return;ou[d]=!0;const v=d.endsWith(".css"),m=v?'[rel="stylesheet"]':"";if(!!n)for(let A=u.length-1;A>=0;A--){const R=u[A];if(R.href===d&&(!v||R.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${m}`))return;const y=document.createElement("link");if(y.rel=v?"stylesheet":NE,v||(y.as="script"),y.crossOrigin="",y.href=d,p&&y.setAttribute("nonce",p),document.head.appendChild(y),v)return new Promise((A,R)=>{y.addEventListener("load",A),y.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${d}`)))})}))}function a(u){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=u,window.dispatchEvent(h),!h.defaultPrevented)throw u}return o.then(u=>{for(const h of u||[])h.status==="rejected"&&a(h.reason);return e().catch(a)})};var BE=async function(i={}){var Zc,Jc,Qc;var e,t=i,n=typeof window=="object",o=typeof WorkerGlobalScope<"u",a=typeof process=="object"&&((Zc=process.versions)==null?void 0:Zc.node)&&process.type!="renderer",u=!n&&!a&&!o;if(a){const{createRequire:r}=await kE(async()=>{const{createRequire:s}=await Promise.resolve().then(()=>mS);return{createRequire:s}},void 0,import.meta.url);var h=r(import.meta.url)}var p="./this.program",d=(r,s)=>{throw s},v=import.meta.url,m="";function x(r){return t.locateFile?t.locateFile(r,m):m+r}var y,A;if(a){if(!(typeof process=="object"&&((Jc=process.versions)==null?void 0:Jc.node)&&process.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var R=process.versions.node,E=R.split(".").slice(0,3);if(E=E[0]*1e4+E[1]*100+E[2].split("-")[0]*1,E<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+R+")");var _=h("fs");v.startsWith("file:")&&(m=h("path").dirname(h("url").fileURLToPath(v))+"/"),A=s=>{s=z(s)?new URL(s):s;var c=_.readFileSync(s);return D(Buffer.isBuffer(c)),c},y=async(s,c=!0)=>{s=z(s)?new URL(s):s;var l=_.readFileSync(s,c?void 0:"utf8");return D(c?Buffer.isBuffer(l):typeof l=="string"),l},process.argv.length>1&&(p=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),d=(s,c)=>{throw process.exitCode=s,c}}else if(u){if(typeof process=="object"&&((Qc=process.versions)==null?void 0:Qc.node)&&process.type!="renderer"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(n||o){try{m=new URL(".",v).href}catch{}if(!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");o&&(A=r=>{var s=new XMLHttpRequest;return s.open("GET",r,!1),s.responseType="arraybuffer",s.send(null),new Uint8Array(s.response)}),y=async r=>{if(z(r))return new Promise((c,l)=>{var f=new XMLHttpRequest;f.open("GET",r,!0),f.responseType="arraybuffer",f.onload=()=>{if(f.status==200||f.status==0&&f.response){c(f.response);return}l(f.status)},f.onerror=l,f.send(null)});var s=await fetch(r,{credentials:"same-origin"});if(s.ok)return s.arrayBuffer();throw new Error(s.status+" : "+s.url)}}else throw new Error("environment detection error");var N=console.log.bind(console),U=console.error.bind(console);D(!u,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var I;typeof WebAssembly!="object"&&U("no native wasm support detected");var B=!1;function D(r,s){r||V("Assertion failed"+(s?": "+s:""))}var z=r=>r.startsWith("file://");function j(){var r=_o();D((r&3)==0),r==0&&(r+=4),Me[r>>2]=34821223,Me[r+4>>2]=2310721022,Me[0]=1668509029}function P(){if(!B){var r=_o();r==0&&(r+=4);var s=Me[r>>2],c=Me[r+4>>2];(s!=34821223||c!=2310721022)&&V(`Stack overflow! Stack cookie has been overwritten at ${ze(r)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${ze(c)} ${ze(s)}`),Me[0]!=1668509029&&V("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class w extends Error{}class O extends w{}class Y extends w{constructor(s){super(s),this.excPtr=s;const c=Oc(s);this.name=c[0],this.message=c[1]}}(()=>{var r=new Int16Array(1),s=new Int8Array(r.buffer);if(r[0]=25459,s[0]!==115||s[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();function te(r){Object.getOwnPropertyDescriptor(t,r)||Object.defineProperty(t,r,{configurable:!0,set(){V(`Attempt to set \`Module.${r}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function Z(r){return()=>D(!1,`call to '${r}' via reference taken before Wasm module initialization`)}function he(r){Object.getOwnPropertyDescriptor(t,r)&&V(`\`Module.${r}\` was supplied but \`${r}\` not included in INCOMING_MODULE_JS_API`)}function re(r){return r==="FS_createPath"||r==="FS_createDataFile"||r==="FS_createPreloadedFile"||r==="FS_unlink"||r==="addRunDependency"||r==="FS_createLazyFile"||r==="FS_createDevice"||r==="removeRunDependency"}function ye(r,s){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,r)&&Object.defineProperty(globalThis,r,{configurable:!0,get(){s()}})}function ne(r,s){ye(r,()=>{ke(`\`${r}\` is not longer defined by emscripten. ${s}`)})}ne("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),ne("asm","Please use wasmExports instead");function ge(r){ye(r,()=>{var s=`\`${r}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,c=r;c.startsWith("_")||(c="$"+r),s+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${c}')`,re(r)&&(s+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),ke(s)}),Re(r)}function Re(r){Object.getOwnPropertyDescriptor(t,r)||Object.defineProperty(t,r,{configurable:!0,get(){var s=`'${r}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;re(r)&&(s+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),V(s)}})}var Oe,$e,nt,Je,Ke,le,pe,ae,Me,We,st,yt,k,vt=!1;function it(){var r=nt.buffer;Je=new Int8Array(r),le=new Int16Array(r),Ke=new Uint8Array(r),pe=new Uint16Array(r),ae=new Int32Array(r),Me=new Uint32Array(r),We=new Float32Array(r),st=new Float64Array(r),yt=new BigInt64Array(r),k=new BigUint64Array(r)}D(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");function ce(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)we(t.preRun.shift());te("preRun"),Xe(G)}function fe(){D(!vt),vt=!0,P(),!t.noFSInit&&!M.initialized&&M.init(),Ti.__wasm_call_ctors(),M.ignorePermissions=!1}function Ce(){if(P(),t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)qe(t.postRun.shift());te("postRun"),Xe(De)}var me=0,Le=null,at={},Ye=null;function L(r){var s;me++,(s=t.monitorRunDependencies)==null||s.call(t,me),r?(D(!at[r]),at[r]=1,Ye===null&&typeof setInterval<"u"&&(Ye=setInterval(()=>{if(B){clearInterval(Ye),Ye=null;return}var c=!1;for(var l in at)c||(c=!0,U("still waiting on run dependencies:")),U(`dependency: ${l}`);c&&U("(end of list)")},1e4))):U("warning: run dependency added without ID")}function S(r){var c;if(me--,(c=t.monitorRunDependencies)==null||c.call(t,me),r?(D(at[r]),delete at[r]):U("warning: run dependency removed without ID"),me==0&&(Ye!==null&&(clearInterval(Ye),Ye=null),Le)){var s=Le;Le=null,s()}}function V(r){var c;(c=t.onAbort)==null||c.call(t,r),r="Aborted("+r+")",U(r),B=!0;var s=new WebAssembly.RuntimeError(r);throw $e==null||$e(s),s}function Q(r,s){return(...c)=>{D(vt,`native function \`${r}\` called before runtime initialization`);var l=Ti[r];return D(l,`exported native function \`${r}\` not found`),D(c.length<=s,`native function \`${r}\` called with ${c.length} args but expects ${s}`),l(...c)}}var de;function se(){return t.locateFile?x("mujoco.wasm"):new URL(""+new URL("mujoco-CGsuVDfV.wasm",import.meta.url).href,import.meta.url).href}function Be(r){if(r==de&&I)return new Uint8Array(I);if(A)return A(r);throw"both async and sync fetching of the wasm failed"}async function Se(r){if(!I)try{var s=await y(r);return new Uint8Array(s)}catch{}return Be(r)}async function He(r,s){try{var c=await Se(r),l=await WebAssembly.instantiate(c,s);return l}catch(f){U(`failed to asynchronously prepare wasm: ${f}`),z(de)&&U(`warning: Loading from a file URI (${de}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),V(f)}}async function Ve(r,s,c){if(!r&&typeof WebAssembly.instantiateStreaming=="function"&&!z(s)&&!a)try{var l=fetch(s,{credentials:"same-origin"}),f=await WebAssembly.instantiateStreaming(l,c);return f}catch(g){U(`wasm streaming compile failed: ${g}`),U("falling back to ArrayBuffer instantiation")}return He(s,c)}function Te(){return{env:Yc,wasi_snapshot_preview1:Yc}}async function Ie(){function r(T,b){return Ti=T.exports,nt=Ti.memory,D(nt,"memory not found in wasm exports"),it(),ns=Ti.__indirect_function_table,D(ns,"table not found in wasm exports"),sd(Ti),S("wasm-instantiate"),Ti}L("wasm-instantiate");var s=t;function c(T){return D(t===s,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),s=null,r(T.instance)}var l=Te();if(t.instantiateWasm)return new Promise((T,b)=>{try{t.instantiateWasm(l,(F,X)=>{T(r(F,X))})}catch(F){U(`Module.instantiateWasm callback failed with error: ${F}`),b(F)}});de??(de=se());var f=await Ve(I,de,l),g=c(f);return g}class Qe{constructor(s){Tn(this,"name","ExitStatus");this.message=`Program terminated with exit(${s})`,this.status=s}}var Xe=r=>{for(;r.length>0;)r.shift()(t)},De=[],qe=r=>De.push(r),G=[],we=r=>G.push(r),Pe=!0,ze=r=>(D(typeof r=="number"),r>>>=0,"0x"+r.toString(16).padStart(8,"0")),W=r=>Gc(r),H=()=>Xc(),ke=r=>{ke.shown||(ke.shown={}),ke.shown[r]||(ke.shown[r]=1,a&&(r="warning: "+r),U(r))},rt=typeof TextDecoder<"u"?new TextDecoder:void 0,Et=(r,s=0,c=NaN)=>{for(var l=s+c,f=s;r[f]&&!(f>=l);)++f;if(f-s>16&&r.buffer&&rt)return rt.decode(r.subarray(s,f));for(var g="";s<f;){var T=r[s++];if(!(T&128)){g+=String.fromCharCode(T);continue}var b=r[s++]&63;if((T&224)==192){g+=String.fromCharCode((T&31)<<6|b);continue}var F=r[s++]&63;if((T&240)==224?T=(T&15)<<12|b<<6|F:((T&248)!=240&&ke("Invalid UTF-8 leading byte "+ze(T)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),T=(T&7)<<18|b<<12|F<<6|r[s++]&63),T<65536)g+=String.fromCharCode(T);else{var X=T-65536;g+=String.fromCharCode(55296|X>>10,56320|X&1023)}}return g},lt=(r,s)=>(D(typeof r=="number",`UTF8ToString expects a number (got ${typeof r})`),r?Et(Ke,r,s):""),Sn=(r,s,c,l)=>V(`Assertion failed: ${lt(r)}, at: `+[s?lt(s):"unknown filename",c,l?lt(l):"unknown function"]),kt=[],_i=0,Wn=r=>{var s=new Xn(r);return s.get_caught()||(s.set_caught(!0),_i--),s.set_rethrown(!1),kt.push(s),cs(r),jc(r)},xr=()=>{if(!kt.length)return 0;var r=kt[kt.length-1];return cs(r.excPtr),r.excPtr},rn=0,Wr=()=>{ve(0,0),D(kt.length>0);var r=kt.pop();go(r.excPtr),rn=0};class Xn{constructor(s){this.excPtr=s,this.ptr=s-24}set_type(s){Me[this.ptr+4>>2]=s}get_type(){return Me[this.ptr+4>>2]}set_destructor(s){Me[this.ptr+8>>2]=s}get_destructor(){return Me[this.ptr+8>>2]}set_caught(s){s=s?1:0,Je[this.ptr+12]=s}get_caught(){return Je[this.ptr+12]!=0}set_rethrown(s){s=s?1:0,Je[this.ptr+13]=s}get_rethrown(){return Je[this.ptr+13]!=0}init(s,c){this.set_adjusted_ptr(0),this.set_type(s),this.set_destructor(c)}set_adjusted_ptr(s){Me[this.ptr+16>>2]=s}get_adjusted_ptr(){return Me[this.ptr+16>>2]}}var gi=r=>Hc(r),vi=r=>{var s=rn==null?void 0:rn.excPtr;if(!s)return gi(0),0;var c=new Xn(s);c.set_adjusted_ptr(s);var l=c.get_type();if(!l)return gi(0),s;for(var f of r){if(f===0||f===l)break;var g=c.ptr+16;if(qc(f,l,g))return gi(f),s}return gi(l),s},Xr=()=>vi([]),$r=r=>vi([r]),qr=()=>{var r=kt.pop();r||V("no exception to throw");var s=r.excPtr;throw r.get_rethrown()||(kt.push(r),r.set_rethrown(!0),r.set_caught(!1),_i++),rn=new Y(s),rn},eo=r=>{if(r){var s=new Xn(r);kt.push(s),s.set_rethrown(!0),qr()}},to=(r,s,c)=>{var l=new Xn(r);throw l.init(s,c),rn=new Y(r),_i++,rn},no=()=>_i,io=r=>{throw rn||(rn=new Y(r)),rn},Tt={isAbs:r=>r.charAt(0)==="/",splitPath:r=>{var s=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return s.exec(r).slice(1)},normalizeArray:(r,s)=>{for(var c=0,l=r.length-1;l>=0;l--){var f=r[l];f==="."?r.splice(l,1):f===".."?(r.splice(l,1),c++):c&&(r.splice(l,1),c--)}if(s)for(;c;c--)r.unshift("..");return r},normalize:r=>{var s=Tt.isAbs(r),c=r.slice(-1)==="/";return r=Tt.normalizeArray(r.split("/").filter(l=>!!l),!s).join("/"),!r&&!s&&(r="."),r&&c&&(r+="/"),(s?"/":"")+r},dirname:r=>{var s=Tt.splitPath(r),c=s[0],l=s[1];return!c&&!l?".":(l&&(l=l.slice(0,-1)),c+l)},basename:r=>r&&r.match(/([^\/]+|\/)\/*$/)[1],join:(...r)=>Tt.normalize(r.join("/")),join2:(r,s)=>Tt.normalize(r+"/"+s)},C=()=>{if(a){var r=h("crypto");return s=>r.randomFillSync(s)}return s=>crypto.getRandomValues(s)},$=r=>{($=C())(r)},ee={resolve:(...r)=>{for(var s="",c=!1,l=r.length-1;l>=-1&&!c;l--){var f=l>=0?r[l]:M.cwd();if(typeof f!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!f)return"";s=f+"/"+s,c=Tt.isAbs(f)}return s=Tt.normalizeArray(s.split("/").filter(g=>!!g),!c).join("/"),(c?"/":"")+s||"."},relative:(r,s)=>{r=ee.resolve(r).slice(1),s=ee.resolve(s).slice(1);function c(X){for(var K=0;K<X.length&&X[K]==="";K++);for(var oe=X.length-1;oe>=0&&X[oe]==="";oe--);return K>oe?[]:X.slice(K,oe-K+1)}for(var l=c(r.split("/")),f=c(s.split("/")),g=Math.min(l.length,f.length),T=g,b=0;b<g;b++)if(l[b]!==f[b]){T=b;break}for(var F=[],b=T;b<l.length;b++)F.push("..");return F=F.concat(f.slice(T)),F.join("/")}},ie=[],q=r=>{for(var s=0,c=0;c<r.length;++c){var l=r.charCodeAt(c);l<=127?s++:l<=2047?s+=2:l>=55296&&l<=57343?(s+=4,++c):s+=3}return s},be=(r,s,c,l)=>{if(D(typeof r=="string",`stringToUTF8Array expects a string (got ${typeof r})`),!(l>0))return 0;for(var f=c,g=c+l-1,T=0;T<r.length;++T){var b=r.codePointAt(T);if(b<=127){if(c>=g)break;s[c++]=b}else if(b<=2047){if(c+1>=g)break;s[c++]=192|b>>6,s[c++]=128|b&63}else if(b<=65535){if(c+2>=g)break;s[c++]=224|b>>12,s[c++]=128|b>>6&63,s[c++]=128|b&63}else{if(c+3>=g)break;b>1114111&&ke("Invalid Unicode code point "+ze(b)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),s[c++]=240|b>>18,s[c++]=128|b>>12&63,s[c++]=128|b>>6&63,s[c++]=128|b&63,T++}}return s[c]=0,c-f},Fe=(r,s,c)=>{var l=q(r)+1,f=new Array(l),g=be(r,f,0,f.length);return f.length=g,f},Ge=()=>{if(!ie.length){var r=null;if(a){var s=256,c=Buffer.alloc(s),l=0,f=process.stdin.fd;try{l=_.readSync(f,c,0,s)}catch(g){if(g.toString().includes("EOF"))l=0;else throw g}l>0&&(r=c.slice(0,l).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(r=window.prompt("Input: "),r!==null&&(r+=`
`));if(!r)return null;ie=Fe(r)}return ie.shift()},Ne={ttys:[],init(){},shutdown(){},register(r,s){Ne.ttys[r]={input:[],output:[],ops:s},M.registerDevice(r,Ne.stream_ops)},stream_ops:{open(r){var s=Ne.ttys[r.node.rdev];if(!s)throw new M.ErrnoError(43);r.tty=s,r.seekable=!1},close(r){r.tty.ops.fsync(r.tty)},fsync(r){r.tty.ops.fsync(r.tty)},read(r,s,c,l,f){if(!r.tty||!r.tty.ops.get_char)throw new M.ErrnoError(60);for(var g=0,T=0;T<l;T++){var b;try{b=r.tty.ops.get_char(r.tty)}catch{throw new M.ErrnoError(29)}if(b===void 0&&g===0)throw new M.ErrnoError(6);if(b==null)break;g++,s[c+T]=b}return g&&(r.node.atime=Date.now()),g},write(r,s,c,l,f){if(!r.tty||!r.tty.ops.put_char)throw new M.ErrnoError(60);try{for(var g=0;g<l;g++)r.tty.ops.put_char(r.tty,s[c+g])}catch{throw new M.ErrnoError(29)}return l&&(r.node.mtime=r.node.ctime=Date.now()),g}},default_tty_ops:{get_char(r){return Ge()},put_char(r,s){s===null||s===10?(N(Et(r.output)),r.output=[]):s!=0&&r.output.push(s)},fsync(r){var s;((s=r.output)==null?void 0:s.length)>0&&(N(Et(r.output)),r.output=[])},ioctl_tcgets(r){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(r,s,c){return 0},ioctl_tiocgwinsz(r){return[24,80]}},default_tty1_ops:{put_char(r,s){s===null||s===10?(U(Et(r.output)),r.output=[]):s!=0&&r.output.push(s)},fsync(r){var s;((s=r.output)==null?void 0:s.length)>0&&(U(Et(r.output)),r.output=[])}}},tt=r=>{V("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},Ae={ops_table:null,mount(r){return Ae.createNode(null,"/",16895,0)},createNode(r,s,c,l){if(M.isBlkdev(c)||M.isFIFO(c))throw new M.ErrnoError(63);Ae.ops_table||(Ae.ops_table={dir:{node:{getattr:Ae.node_ops.getattr,setattr:Ae.node_ops.setattr,lookup:Ae.node_ops.lookup,mknod:Ae.node_ops.mknod,rename:Ae.node_ops.rename,unlink:Ae.node_ops.unlink,rmdir:Ae.node_ops.rmdir,readdir:Ae.node_ops.readdir,symlink:Ae.node_ops.symlink},stream:{llseek:Ae.stream_ops.llseek}},file:{node:{getattr:Ae.node_ops.getattr,setattr:Ae.node_ops.setattr},stream:{llseek:Ae.stream_ops.llseek,read:Ae.stream_ops.read,write:Ae.stream_ops.write,mmap:Ae.stream_ops.mmap,msync:Ae.stream_ops.msync}},link:{node:{getattr:Ae.node_ops.getattr,setattr:Ae.node_ops.setattr,readlink:Ae.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Ae.node_ops.getattr,setattr:Ae.node_ops.setattr},stream:M.chrdev_stream_ops}});var f=M.createNode(r,s,c,l);return M.isDir(f.mode)?(f.node_ops=Ae.ops_table.dir.node,f.stream_ops=Ae.ops_table.dir.stream,f.contents={}):M.isFile(f.mode)?(f.node_ops=Ae.ops_table.file.node,f.stream_ops=Ae.ops_table.file.stream,f.usedBytes=0,f.contents=null):M.isLink(f.mode)?(f.node_ops=Ae.ops_table.link.node,f.stream_ops=Ae.ops_table.link.stream):M.isChrdev(f.mode)&&(f.node_ops=Ae.ops_table.chrdev.node,f.stream_ops=Ae.ops_table.chrdev.stream),f.atime=f.mtime=f.ctime=Date.now(),r&&(r.contents[s]=f,r.atime=r.mtime=r.ctime=f.atime),f},getFileDataAsTypedArray(r){return r.contents?r.contents.subarray?r.contents.subarray(0,r.usedBytes):new Uint8Array(r.contents):new Uint8Array(0)},expandFileStorage(r,s){var c=r.contents?r.contents.length:0;if(!(c>=s)){var l=1024*1024;s=Math.max(s,c*(c<l?2:1.125)>>>0),c!=0&&(s=Math.max(s,256));var f=r.contents;r.contents=new Uint8Array(s),r.usedBytes>0&&r.contents.set(f.subarray(0,r.usedBytes),0)}},resizeFileStorage(r,s){if(r.usedBytes!=s)if(s==0)r.contents=null,r.usedBytes=0;else{var c=r.contents;r.contents=new Uint8Array(s),c&&r.contents.set(c.subarray(0,Math.min(s,r.usedBytes))),r.usedBytes=s}},node_ops:{getattr(r){var s={};return s.dev=M.isChrdev(r.mode)?r.id:1,s.ino=r.id,s.mode=r.mode,s.nlink=1,s.uid=0,s.gid=0,s.rdev=r.rdev,M.isDir(r.mode)?s.size=4096:M.isFile(r.mode)?s.size=r.usedBytes:M.isLink(r.mode)?s.size=r.link.length:s.size=0,s.atime=new Date(r.atime),s.mtime=new Date(r.mtime),s.ctime=new Date(r.ctime),s.blksize=4096,s.blocks=Math.ceil(s.size/s.blksize),s},setattr(r,s){for(const c of["mode","atime","mtime","ctime"])s[c]!=null&&(r[c]=s[c]);s.size!==void 0&&Ae.resizeFileStorage(r,s.size)},lookup(r,s){throw new M.ErrnoError(44)},mknod(r,s,c,l){return Ae.createNode(r,s,c,l)},rename(r,s,c){var l;try{l=M.lookupNode(s,c)}catch{}if(l){if(M.isDir(r.mode))for(var f in l.contents)throw new M.ErrnoError(55);M.hashRemoveNode(l)}delete r.parent.contents[r.name],s.contents[c]=r,r.name=c,s.ctime=s.mtime=r.parent.ctime=r.parent.mtime=Date.now()},unlink(r,s){delete r.contents[s],r.ctime=r.mtime=Date.now()},rmdir(r,s){var c=M.lookupNode(r,s);for(var l in c.contents)throw new M.ErrnoError(55);delete r.contents[s],r.ctime=r.mtime=Date.now()},readdir(r){return[".","..",...Object.keys(r.contents)]},symlink(r,s,c){var l=Ae.createNode(r,s,41471,0);return l.link=c,l},readlink(r){if(!M.isLink(r.mode))throw new M.ErrnoError(28);return r.link}},stream_ops:{read(r,s,c,l,f){var g=r.node.contents;if(f>=r.node.usedBytes)return 0;var T=Math.min(r.node.usedBytes-f,l);if(D(T>=0),T>8&&g.subarray)s.set(g.subarray(f,f+T),c);else for(var b=0;b<T;b++)s[c+b]=g[f+b];return T},write(r,s,c,l,f,g){if(D(!(s instanceof ArrayBuffer)),s.buffer===Je.buffer&&(g=!1),!l)return 0;var T=r.node;if(T.mtime=T.ctime=Date.now(),s.subarray&&(!T.contents||T.contents.subarray)){if(g)return D(f===0,"canOwn must imply no weird position inside the file"),T.contents=s.subarray(c,c+l),T.usedBytes=l,l;if(T.usedBytes===0&&f===0)return T.contents=s.slice(c,c+l),T.usedBytes=l,l;if(f+l<=T.usedBytes)return T.contents.set(s.subarray(c,c+l),f),l}if(Ae.expandFileStorage(T,f+l),T.contents.subarray&&s.subarray)T.contents.set(s.subarray(c,c+l),f);else for(var b=0;b<l;b++)T.contents[f+b]=s[c+b];return T.usedBytes=Math.max(T.usedBytes,f+l),l},llseek(r,s,c){var l=s;if(c===1?l+=r.position:c===2&&M.isFile(r.node.mode)&&(l+=r.node.usedBytes),l<0)throw new M.ErrnoError(28);return l},mmap(r,s,c,l,f){if(!M.isFile(r.node.mode))throw new M.ErrnoError(43);var g,T,b=r.node.contents;if(!(f&2)&&b&&b.buffer===Je.buffer)T=!1,g=b.byteOffset;else{if(T=!0,g=tt(),!g)throw new M.ErrnoError(48);b&&((c>0||c+s<b.length)&&(b.subarray?b=b.subarray(c,c+s):b=Array.prototype.slice.call(b,c,c+s)),Je.set(b,g))}return{ptr:g,allocated:T}},msync(r,s,c,l,f){return Ae.stream_ops.write(r,s,0,l,c,!1),0}}},Ze=async r=>{var s=await y(r);return D(s,`Loading data file "${r}" failed (no arrayBuffer).`),new Uint8Array(s)},dt=(...r)=>M.createDataFile(...r),wt=r=>{for(var s=r;;){if(!at[r])return r;r=s+Math.random()}},It=[],Pt=(r,s,c,l)=>{typeof Browser<"u"&&Browser.init();var f=!1;return It.forEach(g=>{f||g.canHandle(s)&&(g.handle(r,s,c,l),f=!0)}),f},bt=(r,s,c,l,f,g,T,b,F,X)=>{var K=s?ee.resolve(Tt.join2(r,s)):r,oe=wt(`cp ${K}`);function _e(ue){function xe(je){X==null||X(),b||dt(r,s,je,l,f,F),g==null||g(),S(oe)}Pt(ue,K,xe,()=>{T==null||T(),S(oe)})||xe(ue)}L(oe),typeof c=="string"?Ze(c).then(_e,T):_e(c)},et=r=>{var s={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},c=s[r];if(typeof c>"u")throw new Error(`Unknown file open mode: ${r}`);return c},Dt=(r,s)=>{var c=0;return r&&(c|=365),s&&(c|=146),c},xt=r=>lt(zc(r)),Kt={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},M={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{constructor(s){super(vt?xt(s):"");Tn(this,"name","ErrnoError");this.errno=s;for(var c in Kt)if(Kt[c]===s){this.code=c;break}}},FSStream:class{constructor(){Tn(this,"shared",{})}get object(){return this.node}set object(r){this.node=r}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(r){this.shared.flags=r}get position(){return this.shared.position}set position(r){this.shared.position=r}},FSNode:class{constructor(r,s,c,l){Tn(this,"node_ops",{});Tn(this,"stream_ops",{});Tn(this,"readMode",365);Tn(this,"writeMode",146);Tn(this,"mounted",null);r||(r=this),this.parent=r,this.mount=r.mount,this.id=M.nextInode++,this.name=s,this.mode=c,this.rdev=l,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(r){r?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(r){r?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return M.isDir(this.mode)}get isDevice(){return M.isChrdev(this.mode)}},lookupPath(r,s={}){if(!r)throw new M.ErrnoError(44);s.follow_mount??(s.follow_mount=!0),Tt.isAbs(r)||(r=M.cwd()+"/"+r);e:for(var c=0;c<40;c++){for(var l=r.split("/").filter(X=>!!X),f=M.root,g="/",T=0;T<l.length;T++){var b=T===l.length-1;if(b&&s.parent)break;if(l[T]!=="."){if(l[T]===".."){if(g=Tt.dirname(g),M.isRoot(f)){r=g+"/"+l.slice(T+1).join("/");continue e}else f=f.parent;continue}g=Tt.join2(g,l[T]);try{f=M.lookupNode(f,l[T])}catch(X){if((X==null?void 0:X.errno)===44&&b&&s.noent_okay)return{path:g};throw X}if(M.isMountpoint(f)&&(!b||s.follow_mount)&&(f=f.mounted.root),M.isLink(f.mode)&&(!b||s.follow)){if(!f.node_ops.readlink)throw new M.ErrnoError(52);var F=f.node_ops.readlink(f);Tt.isAbs(F)||(F=Tt.dirname(g)+"/"+F),r=F+"/"+l.slice(T+1).join("/");continue e}}}return{path:g,node:f}}throw new M.ErrnoError(32)},getPath(r){for(var s;;){if(M.isRoot(r)){var c=r.mount.mountpoint;return s?c[c.length-1]!=="/"?`${c}/${s}`:c+s:c}s=s?`${r.name}/${s}`:r.name,r=r.parent}},hashName(r,s){for(var c=0,l=0;l<s.length;l++)c=(c<<5)-c+s.charCodeAt(l)|0;return(r+c>>>0)%M.nameTable.length},hashAddNode(r){var s=M.hashName(r.parent.id,r.name);r.name_next=M.nameTable[s],M.nameTable[s]=r},hashRemoveNode(r){var s=M.hashName(r.parent.id,r.name);if(M.nameTable[s]===r)M.nameTable[s]=r.name_next;else for(var c=M.nameTable[s];c;){if(c.name_next===r){c.name_next=r.name_next;break}c=c.name_next}},lookupNode(r,s){var c=M.mayLookup(r);if(c)throw new M.ErrnoError(c);for(var l=M.hashName(r.id,s),f=M.nameTable[l];f;f=f.name_next){var g=f.name;if(f.parent.id===r.id&&g===s)return f}return M.lookup(r,s)},createNode(r,s,c,l){D(typeof r=="object");var f=new M.FSNode(r,s,c,l);return M.hashAddNode(f),f},destroyNode(r){M.hashRemoveNode(r)},isRoot(r){return r===r.parent},isMountpoint(r){return!!r.mounted},isFile(r){return(r&61440)===32768},isDir(r){return(r&61440)===16384},isLink(r){return(r&61440)===40960},isChrdev(r){return(r&61440)===8192},isBlkdev(r){return(r&61440)===24576},isFIFO(r){return(r&61440)===4096},isSocket(r){return(r&49152)===49152},flagsToPermissionString(r){var s=["r","w","rw"][r&3];return r&512&&(s+="w"),s},nodePermissions(r,s){return M.ignorePermissions?0:s.includes("r")&&!(r.mode&292)||s.includes("w")&&!(r.mode&146)||s.includes("x")&&!(r.mode&73)?2:0},mayLookup(r){if(!M.isDir(r.mode))return 54;var s=M.nodePermissions(r,"x");return s||(r.node_ops.lookup?0:2)},mayCreate(r,s){if(!M.isDir(r.mode))return 54;try{var c=M.lookupNode(r,s);return 20}catch{}return M.nodePermissions(r,"wx")},mayDelete(r,s,c){var l;try{l=M.lookupNode(r,s)}catch(g){return g.errno}var f=M.nodePermissions(r,"wx");if(f)return f;if(c){if(!M.isDir(l.mode))return 54;if(M.isRoot(l)||M.getPath(l)===M.cwd())return 10}else if(M.isDir(l.mode))return 31;return 0},mayOpen(r,s){return r?M.isLink(r.mode)?32:M.isDir(r.mode)&&(M.flagsToPermissionString(s)!=="r"||s&576)?31:M.nodePermissions(r,M.flagsToPermissionString(s)):44},checkOpExists(r,s){if(!r)throw new M.ErrnoError(s);return r},MAX_OPEN_FDS:4096,nextfd(){for(var r=0;r<=M.MAX_OPEN_FDS;r++)if(!M.streams[r])return r;throw new M.ErrnoError(33)},getStreamChecked(r){var s=M.getStream(r);if(!s)throw new M.ErrnoError(8);return s},getStream:r=>M.streams[r],createStream(r,s=-1){return D(s>=-1),r=Object.assign(new M.FSStream,r),s==-1&&(s=M.nextfd()),r.fd=s,M.streams[s]=r,r},closeStream(r){M.streams[r]=null},dupStream(r,s=-1){var l,f;var c=M.createStream(r,s);return(f=(l=c.stream_ops)==null?void 0:l.dup)==null||f.call(l,c),c},doSetAttr(r,s,c){var l=r==null?void 0:r.stream_ops.setattr,f=l?r:s;l??(l=s.node_ops.setattr),M.checkOpExists(l,63),l(f,c)},chrdev_stream_ops:{open(r){var c,l;var s=M.getDevice(r.node.rdev);r.stream_ops=s.stream_ops,(l=(c=r.stream_ops).open)==null||l.call(c,r)},llseek(){throw new M.ErrnoError(70)}},major:r=>r>>8,minor:r=>r&255,makedev:(r,s)=>r<<8|s,registerDevice(r,s){M.devices[r]={stream_ops:s}},getDevice:r=>M.devices[r],getMounts(r){for(var s=[],c=[r];c.length;){var l=c.pop();s.push(l),c.push(...l.mounts)}return s},syncfs(r,s){typeof r=="function"&&(s=r,r=!1),M.syncFSRequests++,M.syncFSRequests>1&&U(`warning: ${M.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var c=M.getMounts(M.root.mount),l=0;function f(T){return D(M.syncFSRequests>0),M.syncFSRequests--,s(T)}function g(T){if(T)return g.errored?void 0:(g.errored=!0,f(T));++l>=c.length&&f(null)}c.forEach(T=>{if(!T.type.syncfs)return g(null);T.type.syncfs(T,r,g)})},mount(r,s,c){if(typeof r=="string")throw r;var l=c==="/",f=!c,g;if(l&&M.root)throw new M.ErrnoError(10);if(!l&&!f){var T=M.lookupPath(c,{follow_mount:!1});if(c=T.path,g=T.node,M.isMountpoint(g))throw new M.ErrnoError(10);if(!M.isDir(g.mode))throw new M.ErrnoError(54)}var b={type:r,opts:s,mountpoint:c,mounts:[]},F=r.mount(b);return F.mount=b,b.root=F,l?M.root=F:g&&(g.mounted=b,g.mount&&g.mount.mounts.push(b)),F},unmount(r){var s=M.lookupPath(r,{follow_mount:!1});if(!M.isMountpoint(s.node))throw new M.ErrnoError(28);var c=s.node,l=c.mounted,f=M.getMounts(l);Object.keys(M.nameTable).forEach(T=>{for(var b=M.nameTable[T];b;){var F=b.name_next;f.includes(b.mount)&&M.destroyNode(b),b=F}}),c.mounted=null;var g=c.mount.mounts.indexOf(l);D(g!==-1),c.mount.mounts.splice(g,1)},lookup(r,s){return r.node_ops.lookup(r,s)},mknod(r,s,c){var l=M.lookupPath(r,{parent:!0}),f=l.node,g=Tt.basename(r);if(!g)throw new M.ErrnoError(28);if(g==="."||g==="..")throw new M.ErrnoError(20);var T=M.mayCreate(f,g);if(T)throw new M.ErrnoError(T);if(!f.node_ops.mknod)throw new M.ErrnoError(63);return f.node_ops.mknod(f,g,s,c)},statfs(r){return M.statfsNode(M.lookupPath(r,{follow:!0}).node)},statfsStream(r){return M.statfsNode(r.node)},statfsNode(r){var s={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:M.nextInode,ffree:M.nextInode-1,fsid:42,flags:2,namelen:255};return r.node_ops.statfs&&Object.assign(s,r.node_ops.statfs(r.mount.opts.root)),s},create(r,s=438){return s&=4095,s|=32768,M.mknod(r,s,0)},mkdir(r,s=511){return s&=1023,s|=16384,M.mknod(r,s,0)},mkdirTree(r,s){var c=r.split("/"),l="";for(var f of c)if(f){(l||Tt.isAbs(r))&&(l+="/"),l+=f;try{M.mkdir(l,s)}catch(g){if(g.errno!=20)throw g}}},mkdev(r,s,c){return typeof c>"u"&&(c=s,s=438),s|=8192,M.mknod(r,s,c)},symlink(r,s){if(!ee.resolve(r))throw new M.ErrnoError(44);var c=M.lookupPath(s,{parent:!0}),l=c.node;if(!l)throw new M.ErrnoError(44);var f=Tt.basename(s),g=M.mayCreate(l,f);if(g)throw new M.ErrnoError(g);if(!l.node_ops.symlink)throw new M.ErrnoError(63);return l.node_ops.symlink(l,f,r)},rename(r,s){var c=Tt.dirname(r),l=Tt.dirname(s),f=Tt.basename(r),g=Tt.basename(s),T,b,F;if(T=M.lookupPath(r,{parent:!0}),b=T.node,T=M.lookupPath(s,{parent:!0}),F=T.node,!b||!F)throw new M.ErrnoError(44);if(b.mount!==F.mount)throw new M.ErrnoError(75);var X=M.lookupNode(b,f),K=ee.relative(r,l);if(K.charAt(0)!==".")throw new M.ErrnoError(28);if(K=ee.relative(s,c),K.charAt(0)!==".")throw new M.ErrnoError(55);var oe;try{oe=M.lookupNode(F,g)}catch{}if(X!==oe){var _e=M.isDir(X.mode),ue=M.mayDelete(b,f,_e);if(ue)throw new M.ErrnoError(ue);if(ue=oe?M.mayDelete(F,g,_e):M.mayCreate(F,g),ue)throw new M.ErrnoError(ue);if(!b.node_ops.rename)throw new M.ErrnoError(63);if(M.isMountpoint(X)||oe&&M.isMountpoint(oe))throw new M.ErrnoError(10);if(F!==b&&(ue=M.nodePermissions(b,"w"),ue))throw new M.ErrnoError(ue);M.hashRemoveNode(X);try{b.node_ops.rename(X,F,g),X.parent=F}catch(xe){throw xe}finally{M.hashAddNode(X)}}},rmdir(r){var s=M.lookupPath(r,{parent:!0}),c=s.node,l=Tt.basename(r),f=M.lookupNode(c,l),g=M.mayDelete(c,l,!0);if(g)throw new M.ErrnoError(g);if(!c.node_ops.rmdir)throw new M.ErrnoError(63);if(M.isMountpoint(f))throw new M.ErrnoError(10);c.node_ops.rmdir(c,l),M.destroyNode(f)},readdir(r){var s=M.lookupPath(r,{follow:!0}),c=s.node,l=M.checkOpExists(c.node_ops.readdir,54);return l(c)},unlink(r){var s=M.lookupPath(r,{parent:!0}),c=s.node;if(!c)throw new M.ErrnoError(44);var l=Tt.basename(r),f=M.lookupNode(c,l),g=M.mayDelete(c,l,!1);if(g)throw new M.ErrnoError(g);if(!c.node_ops.unlink)throw new M.ErrnoError(63);if(M.isMountpoint(f))throw new M.ErrnoError(10);c.node_ops.unlink(c,l),M.destroyNode(f)},readlink(r){var s=M.lookupPath(r),c=s.node;if(!c)throw new M.ErrnoError(44);if(!c.node_ops.readlink)throw new M.ErrnoError(28);return c.node_ops.readlink(c)},stat(r,s){var c=M.lookupPath(r,{follow:!s}),l=c.node,f=M.checkOpExists(l.node_ops.getattr,63);return f(l)},fstat(r){var s=M.getStreamChecked(r),c=s.node,l=s.stream_ops.getattr,f=l?s:c;return l??(l=c.node_ops.getattr),M.checkOpExists(l,63),l(f)},lstat(r){return M.stat(r,!0)},doChmod(r,s,c,l){M.doSetAttr(r,s,{mode:c&4095|s.mode&-4096,ctime:Date.now(),dontFollow:l})},chmod(r,s,c){var l;if(typeof r=="string"){var f=M.lookupPath(r,{follow:!c});l=f.node}else l=r;M.doChmod(null,l,s,c)},lchmod(r,s){M.chmod(r,s,!0)},fchmod(r,s){var c=M.getStreamChecked(r);M.doChmod(c,c.node,s,!1)},doChown(r,s,c){M.doSetAttr(r,s,{timestamp:Date.now(),dontFollow:c})},chown(r,s,c,l){var f;if(typeof r=="string"){var g=M.lookupPath(r,{follow:!l});f=g.node}else f=r;M.doChown(null,f,l)},lchown(r,s,c){M.chown(r,s,c,!0)},fchown(r,s,c){var l=M.getStreamChecked(r);M.doChown(l,l.node,!1)},doTruncate(r,s,c){if(M.isDir(s.mode))throw new M.ErrnoError(31);if(!M.isFile(s.mode))throw new M.ErrnoError(28);var l=M.nodePermissions(s,"w");if(l)throw new M.ErrnoError(l);M.doSetAttr(r,s,{size:c,timestamp:Date.now()})},truncate(r,s){if(s<0)throw new M.ErrnoError(28);var c;if(typeof r=="string"){var l=M.lookupPath(r,{follow:!0});c=l.node}else c=r;M.doTruncate(null,c,s)},ftruncate(r,s){var c=M.getStreamChecked(r);if(s<0||!(c.flags&2097155))throw new M.ErrnoError(28);M.doTruncate(c,c.node,s)},utime(r,s,c){var l=M.lookupPath(r,{follow:!0}),f=l.node,g=M.checkOpExists(f.node_ops.setattr,63);g(f,{atime:s,mtime:c})},open(r,s,c=438){if(r==="")throw new M.ErrnoError(44);s=typeof s=="string"?et(s):s,s&64?c=c&4095|32768:c=0;var l,f;if(typeof r=="object")l=r;else{f=r.endsWith("/");var g=M.lookupPath(r,{follow:!(s&131072),noent_okay:!0});l=g.node,r=g.path}var T=!1;if(s&64)if(l){if(s&128)throw new M.ErrnoError(20)}else{if(f)throw new M.ErrnoError(31);l=M.mknod(r,c|511,0),T=!0}if(!l)throw new M.ErrnoError(44);if(M.isChrdev(l.mode)&&(s&=-513),s&65536&&!M.isDir(l.mode))throw new M.ErrnoError(54);if(!T){var b=M.mayOpen(l,s);if(b)throw new M.ErrnoError(b)}s&512&&!T&&M.truncate(l,0),s&=-131713;var F=M.createStream({node:l,path:M.getPath(l),flags:s,seekable:!0,position:0,stream_ops:l.stream_ops,ungotten:[],error:!1});return F.stream_ops.open&&F.stream_ops.open(F),T&&M.chmod(l,c&511),t.logReadFiles&&!(s&1)&&(r in M.readFiles||(M.readFiles[r]=1)),F},close(r){if(M.isClosed(r))throw new M.ErrnoError(8);r.getdents&&(r.getdents=null);try{r.stream_ops.close&&r.stream_ops.close(r)}catch(s){throw s}finally{M.closeStream(r.fd)}r.fd=null},isClosed(r){return r.fd===null},llseek(r,s,c){if(M.isClosed(r))throw new M.ErrnoError(8);if(!r.seekable||!r.stream_ops.llseek)throw new M.ErrnoError(70);if(c!=0&&c!=1&&c!=2)throw new M.ErrnoError(28);return r.position=r.stream_ops.llseek(r,s,c),r.ungotten=[],r.position},read(r,s,c,l,f){if(D(c>=0),l<0||f<0)throw new M.ErrnoError(28);if(M.isClosed(r))throw new M.ErrnoError(8);if((r.flags&2097155)===1)throw new M.ErrnoError(8);if(M.isDir(r.node.mode))throw new M.ErrnoError(31);if(!r.stream_ops.read)throw new M.ErrnoError(28);var g=typeof f<"u";if(!g)f=r.position;else if(!r.seekable)throw new M.ErrnoError(70);var T=r.stream_ops.read(r,s,c,l,f);return g||(r.position+=T),T},write(r,s,c,l,f,g){if(D(c>=0),l<0||f<0)throw new M.ErrnoError(28);if(M.isClosed(r))throw new M.ErrnoError(8);if(!(r.flags&2097155))throw new M.ErrnoError(8);if(M.isDir(r.node.mode))throw new M.ErrnoError(31);if(!r.stream_ops.write)throw new M.ErrnoError(28);r.seekable&&r.flags&1024&&M.llseek(r,0,2);var T=typeof f<"u";if(!T)f=r.position;else if(!r.seekable)throw new M.ErrnoError(70);var b=r.stream_ops.write(r,s,c,l,f,g);return T||(r.position+=b),b},mmap(r,s,c,l,f){if(l&2&&!(f&2)&&(r.flags&2097155)!==2)throw new M.ErrnoError(2);if((r.flags&2097155)===1)throw new M.ErrnoError(2);if(!r.stream_ops.mmap)throw new M.ErrnoError(43);if(!s)throw new M.ErrnoError(28);return r.stream_ops.mmap(r,s,c,l,f)},msync(r,s,c,l,f){return D(c>=0),r.stream_ops.msync?r.stream_ops.msync(r,s,c,l,f):0},ioctl(r,s,c){if(!r.stream_ops.ioctl)throw new M.ErrnoError(59);return r.stream_ops.ioctl(r,s,c)},readFile(r,s={}){if(s.flags=s.flags||0,s.encoding=s.encoding||"binary",s.encoding!=="utf8"&&s.encoding!=="binary")throw new Error(`Invalid encoding type "${s.encoding}"`);var c=M.open(r,s.flags),l=M.stat(r),f=l.size,g=new Uint8Array(f);return M.read(c,g,0,f,0),s.encoding==="utf8"&&(g=Et(g)),M.close(c),g},writeFile(r,s,c={}){c.flags=c.flags||577;var l=M.open(r,c.flags,c.mode);if(typeof s=="string"&&(s=new Uint8Array(Fe(s))),ArrayBuffer.isView(s))M.write(l,s,0,s.byteLength,void 0,c.canOwn);else throw new Error("Unsupported data type");M.close(l)},cwd:()=>M.currentPath,chdir(r){var s=M.lookupPath(r,{follow:!0});if(s.node===null)throw new M.ErrnoError(44);if(!M.isDir(s.node.mode))throw new M.ErrnoError(54);var c=M.nodePermissions(s.node,"x");if(c)throw new M.ErrnoError(c);M.currentPath=s.path},createDefaultDirectories(){M.mkdir("/tmp"),M.mkdir("/home"),M.mkdir("/home/web_user")},createDefaultDevices(){M.mkdir("/dev"),M.registerDevice(M.makedev(1,3),{read:()=>0,write:(l,f,g,T,b)=>T,llseek:()=>0}),M.mkdev("/dev/null",M.makedev(1,3)),Ne.register(M.makedev(5,0),Ne.default_tty_ops),Ne.register(M.makedev(6,0),Ne.default_tty1_ops),M.mkdev("/dev/tty",M.makedev(5,0)),M.mkdev("/dev/tty1",M.makedev(6,0));var r=new Uint8Array(1024),s=0,c=()=>(s===0&&($(r),s=r.byteLength),r[--s]);M.createDevice("/dev","random",c),M.createDevice("/dev","urandom",c),M.mkdir("/dev/shm"),M.mkdir("/dev/shm/tmp")},createSpecialDirectories(){M.mkdir("/proc");var r=M.mkdir("/proc/self");M.mkdir("/proc/self/fd"),M.mount({mount(){var s=M.createNode(r,"fd",16895,73);return s.stream_ops={llseek:Ae.stream_ops.llseek},s.node_ops={lookup(c,l){var f=+l,g=M.getStreamChecked(f),T={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>g.path},id:f+1};return T.parent=T,T},readdir(){return Array.from(M.streams.entries()).filter(([c,l])=>l).map(([c,l])=>c.toString())}},s}},{},"/proc/self/fd")},createStandardStreams(r,s,c){r?M.createDevice("/dev","stdin",r):M.symlink("/dev/tty","/dev/stdin"),s?M.createDevice("/dev","stdout",null,s):M.symlink("/dev/tty","/dev/stdout"),c?M.createDevice("/dev","stderr",null,c):M.symlink("/dev/tty1","/dev/stderr");var l=M.open("/dev/stdin",0),f=M.open("/dev/stdout",1),g=M.open("/dev/stderr",1);D(l.fd===0,`invalid handle for stdin (${l.fd})`),D(f.fd===1,`invalid handle for stdout (${f.fd})`),D(g.fd===2,`invalid handle for stderr (${g.fd})`)},staticInit(){M.nameTable=new Array(4096),M.mount(Ae,{},"/"),M.createDefaultDirectories(),M.createDefaultDevices(),M.createSpecialDirectories(),M.filesystems={MEMFS:Ae}},init(r,s,c){D(!M.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),M.initialized=!0,r??(r=t.stdin),s??(s=t.stdout),c??(c=t.stderr),M.createStandardStreams(r,s,c)},quit(){M.initialized=!1,mo(0);for(var r of M.streams)r&&M.close(r)},findObject(r,s){var c=M.analyzePath(r,s);return c.exists?c.object:null},analyzePath(r,s){try{var c=M.lookupPath(r,{follow:!s});r=c.path}catch{}var l={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var c=M.lookupPath(r,{parent:!0});l.parentExists=!0,l.parentPath=c.path,l.parentObject=c.node,l.name=Tt.basename(r),c=M.lookupPath(r,{follow:!s}),l.exists=!0,l.path=c.path,l.object=c.node,l.name=c.node.name,l.isRoot=c.path==="/"}catch(f){l.error=f.errno}return l},createPath(r,s,c,l){r=typeof r=="string"?r:M.getPath(r);for(var f=s.split("/").reverse();f.length;){var g=f.pop();if(g){var T=Tt.join2(r,g);try{M.mkdir(T)}catch(b){if(b.errno!=20)throw b}r=T}}return T},createFile(r,s,c,l,f){var g=Tt.join2(typeof r=="string"?r:M.getPath(r),s),T=Dt(l,f);return M.create(g,T)},createDataFile(r,s,c,l,f,g){var T=s;r&&(r=typeof r=="string"?r:M.getPath(r),T=s?Tt.join2(r,s):r);var b=Dt(l,f),F=M.create(T,b);if(c){if(typeof c=="string"){for(var X=new Array(c.length),K=0,oe=c.length;K<oe;++K)X[K]=c.charCodeAt(K);c=X}M.chmod(F,b|146);var _e=M.open(F,577);M.write(_e,c,0,c.length,0,g),M.close(_e),M.chmod(F,b)}},createDevice(r,s,c,l){var b;var f=Tt.join2(typeof r=="string"?r:M.getPath(r),s),g=Dt(!!c,!!l);(b=M.createDevice).major??(b.major=64);var T=M.makedev(M.createDevice.major++,0);return M.registerDevice(T,{open(F){F.seekable=!1},close(F){var X;(X=l==null?void 0:l.buffer)!=null&&X.length&&l(10)},read(F,X,K,oe,_e){for(var ue=0,xe=0;xe<oe;xe++){var je;try{je=c()}catch{throw new M.ErrnoError(29)}if(je===void 0&&ue===0)throw new M.ErrnoError(6);if(je==null)break;ue++,X[K+xe]=je}return ue&&(F.node.atime=Date.now()),ue},write(F,X,K,oe,_e){for(var ue=0;ue<oe;ue++)try{l(X[K+ue])}catch{throw new M.ErrnoError(29)}return oe&&(F.node.mtime=F.node.ctime=Date.now()),ue}}),M.mkdev(f,g,T)},forceLoadFile(r){if(r.isDevice||r.isFolder||r.link||r.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{r.contents=A(r.url),r.usedBytes=r.contents.length}catch{throw new M.ErrnoError(29)}},createLazyFile(r,s,c,l,f){class g{constructor(){Tn(this,"lengthKnown",!1);Tn(this,"chunks",[])}get(ue){if(!(ue>this.length-1||ue<0)){var xe=ue%this.chunkSize,je=ue/this.chunkSize|0;return this.getter(je)[xe]}}setDataGetter(ue){this.getter=ue}cacheLength(){var ue=new XMLHttpRequest;if(ue.open("HEAD",c,!1),ue.send(null),!(ue.status>=200&&ue.status<300||ue.status===304))throw new Error("Couldn't load "+c+". Status: "+ue.status);var xe=Number(ue.getResponseHeader("Content-length")),je,ut=(je=ue.getResponseHeader("Accept-Ranges"))&&je==="bytes",ht=(je=ue.getResponseHeader("Content-Encoding"))&&je==="gzip",Ft=1024*1024;ut||(Ft=xe);var St=(Gt,tn)=>{if(Gt>tn)throw new Error("invalid range ("+Gt+", "+tn+") or no bytes requested!");if(tn>xe-1)throw new Error("only "+xe+" bytes available! programmer error!");var Lt=new XMLHttpRequest;if(Lt.open("GET",c,!1),xe!==Ft&&Lt.setRequestHeader("Range","bytes="+Gt+"-"+tn),Lt.responseType="arraybuffer",Lt.overrideMimeType&&Lt.overrideMimeType("text/plain; charset=x-user-defined"),Lt.send(null),!(Lt.status>=200&&Lt.status<300||Lt.status===304))throw new Error("Couldn't load "+c+". Status: "+Lt.status);return Lt.response!==void 0?new Uint8Array(Lt.response||[]):Fe(Lt.responseText||"")},Jt=this;Jt.setDataGetter(Gt=>{var tn=Gt*Ft,Lt=(Gt+1)*Ft-1;if(Lt=Math.min(Lt,xe-1),typeof Jt.chunks[Gt]>"u"&&(Jt.chunks[Gt]=St(tn,Lt)),typeof Jt.chunks[Gt]>"u")throw new Error("doXHR failed!");return Jt.chunks[Gt]}),(ht||!xe)&&(Ft=xe=1,xe=this.getter(0).length,Ft=xe,N("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=xe,this._chunkSize=Ft,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!o)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var T=new g,b={isDevice:!1,contents:T}}else var b={isDevice:!1,url:c};var F=M.createFile(r,s,b,l,f);b.contents?F.contents=b.contents:b.url&&(F.contents=null,F.url=b.url),Object.defineProperties(F,{usedBytes:{get:function(){return this.contents.length}}});var X={},K=Object.keys(F.stream_ops);K.forEach(_e=>{var ue=F.stream_ops[_e];X[_e]=(...xe)=>(M.forceLoadFile(F),ue(...xe))});function oe(_e,ue,xe,je,ut){var ht=_e.node.contents;if(ut>=ht.length)return 0;var Ft=Math.min(ht.length-ut,je);if(D(Ft>=0),ht.slice)for(var St=0;St<Ft;St++)ue[xe+St]=ht[ut+St];else for(var St=0;St<Ft;St++)ue[xe+St]=ht.get(ut+St);return Ft}return X.read=(_e,ue,xe,je,ut)=>(M.forceLoadFile(F),oe(_e,ue,xe,je,ut)),X.mmap=(_e,ue,xe,je,ut)=>{M.forceLoadFile(F);var ht=tt();if(!ht)throw new M.ErrnoError(48);return oe(_e,Je,ht,ue,xe),{ptr:ht,allocated:!0}},F.stream_ops=X,F},absolutePath(){V("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){V("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){V("FS.createLink has been removed; use FS.symlink instead")},joinPath(){V("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){V("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){V("FS.standardizePath has been removed; use PATH.normalize instead")}},pt={DEFAULT_POLLMASK:5,calculateAt(r,s,c){if(Tt.isAbs(s))return s;var l;if(r===-100)l=M.cwd();else{var f=pt.getStreamFromFD(r);l=f.path}if(s.length==0){if(!c)throw new M.ErrnoError(44);return l}return l+"/"+s},writeStat(r,s){ae[r>>2]=s.dev,ae[r+4>>2]=s.mode,Me[r+8>>2]=s.nlink,ae[r+12>>2]=s.uid,ae[r+16>>2]=s.gid,ae[r+20>>2]=s.rdev,yt[r+24>>3]=BigInt(s.size),ae[r+32>>2]=4096,ae[r+36>>2]=s.blocks;var c=s.atime.getTime(),l=s.mtime.getTime(),f=s.ctime.getTime();return yt[r+40>>3]=BigInt(Math.floor(c/1e3)),Me[r+48>>2]=c%1e3*1e3*1e3,yt[r+56>>3]=BigInt(Math.floor(l/1e3)),Me[r+64>>2]=l%1e3*1e3*1e3,yt[r+72>>3]=BigInt(Math.floor(f/1e3)),Me[r+80>>2]=f%1e3*1e3*1e3,yt[r+88>>3]=BigInt(s.ino),0},writeStatFs(r,s){ae[r+4>>2]=s.bsize,ae[r+40>>2]=s.bsize,ae[r+8>>2]=s.blocks,ae[r+12>>2]=s.bfree,ae[r+16>>2]=s.bavail,ae[r+20>>2]=s.files,ae[r+24>>2]=s.ffree,ae[r+28>>2]=s.fsid,ae[r+44>>2]=s.flags,ae[r+36>>2]=s.namelen},doMsync(r,s,c,l,f){if(!M.isFile(s.node.mode))throw new M.ErrnoError(43);if(l&2)return 0;var g=Ke.slice(r,r+c);M.msync(s,g,f,c,l)},getStreamFromFD(r){var s=M.getStreamChecked(r);return s},varargs:void 0,getStr(r){var s=lt(r);return s}};function xi(r,s,c){try{var l=pt.getStreamFromFD(r);if(D(!c),l.fd===s)return-28;if(s<0||s>=M.MAX_OPEN_FDS)return-8;var f=M.getStream(s);return f&&M.close(f),M.dupStream(l,s).fd}catch(g){if(typeof M>"u"||g.name!=="ErrnoError")throw g;return-g.errno}}var At=()=>{D(pt.varargs!=null);var r=ae[+pt.varargs>>2];return pt.varargs+=4,r},Ht=At;function sn(r,s,c){pt.varargs=c;try{var l=pt.getStreamFromFD(r);switch(s){case 0:{var f=At();if(f<0)return-28;for(;M.streams[f];)f++;var g;return g=M.dupStream(l,f),g.fd}case 1:case 2:return 0;case 3:return l.flags;case 4:{var f=At();return l.flags|=f,0}case 12:{var f=Ht(),T=0;return le[f+T>>1]=2,0}case 13:case 14:return 0}return-28}catch(b){if(typeof M>"u"||b.name!=="ErrnoError")throw b;return-b.errno}}function Yt(r,s){try{return pt.writeStat(s,M.fstat(r))}catch(c){if(typeof M>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}function Zt(r,s,c){pt.varargs=c;try{var l=pt.getStreamFromFD(r);switch(s){case 21509:return l.tty?0:-59;case 21505:{if(!l.tty)return-59;if(l.tty.ops.ioctl_tcgets){var f=l.tty.ops.ioctl_tcgets(l),g=Ht();ae[g>>2]=f.c_iflag||0,ae[g+4>>2]=f.c_oflag||0,ae[g+8>>2]=f.c_cflag||0,ae[g+12>>2]=f.c_lflag||0;for(var T=0;T<32;T++)Je[g+T+17]=f.c_cc[T]||0;return 0}return 0}case 21510:case 21511:case 21512:return l.tty?0:-59;case 21506:case 21507:case 21508:{if(!l.tty)return-59;if(l.tty.ops.ioctl_tcsets){for(var g=Ht(),b=ae[g>>2],F=ae[g+4>>2],X=ae[g+8>>2],K=ae[g+12>>2],oe=[],T=0;T<32;T++)oe.push(Je[g+T+17]);return l.tty.ops.ioctl_tcsets(l.tty,s,{c_iflag:b,c_oflag:F,c_cflag:X,c_lflag:K,c_cc:oe})}return 0}case 21519:{if(!l.tty)return-59;var g=Ht();return ae[g>>2]=0,0}case 21520:return l.tty?-28:-59;case 21531:{var g=Ht();return M.ioctl(l,s,g)}case 21523:{if(!l.tty)return-59;if(l.tty.ops.ioctl_tiocgwinsz){var _e=l.tty.ops.ioctl_tiocgwinsz(l.tty),g=Ht();le[g>>1]=_e[0],le[g+2>>1]=_e[1]}return 0}case 21524:return l.tty?0:-59;case 21515:return l.tty?0:-59;default:return-28}}catch(ue){if(typeof M>"u"||ue.name!=="ErrnoError")throw ue;return-ue.errno}}function yr(r,s){try{return r=pt.getStr(r),pt.writeStat(s,M.lstat(r))}catch(c){if(typeof M>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}function $n(r,s,c,l){try{s=pt.getStr(s);var f=l&256,g=l&4096;return l=l&-6401,D(!l,`unknown flags in __syscall_newfstatat: ${l}`),s=pt.calculateAt(r,s,g),pt.writeStat(c,f?M.lstat(s):M.stat(s))}catch(T){if(typeof M>"u"||T.name!=="ErrnoError")throw T;return-T.errno}}function Ju(r,s,c,l){pt.varargs=l;try{s=pt.getStr(s),s=pt.calculateAt(r,s);var f=l?At():0;return M.open(s,c,f).fd}catch(g){if(typeof M>"u"||g.name!=="ErrnoError")throw g;return-g.errno}}function Qu(r,s){try{return r=pt.getStr(r),pt.writeStat(s,M.stat(r))}catch(c){if(typeof M>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}var eh=()=>V("native code called abort()"),Vt=r=>{for(var s="";;){var c=Ke[r++];if(!c)return s;s+=String.fromCharCode(c)}},Hi={},yi={},jr={},Er=class extends Error{constructor(s){super(s),this.name="BindingError"}},gt=r=>{throw new Er(r)};function th(r,s,c={}){var l=s.name;if(r||gt(`type "${l}" must have a positive integer typeid pointer`),yi.hasOwnProperty(r)){if(c.ignoreDuplicateRegistrations)return;gt(`Cannot register type '${l}' twice`)}if(yi[r]=s,delete jr[r],Hi.hasOwnProperty(r)){var f=Hi[r];delete Hi[r],f.forEach(g=>g())}}function _n(r,s,c={}){if(s.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return th(r,s,c)}var hc=(r,s,c)=>{switch(s){case 1:return c?l=>Je[l]:l=>Ke[l];case 2:return c?l=>le[l>>1]:l=>pe[l>>1];case 4:return c?l=>ae[l>>2]:l=>Me[l>>2];case 8:return c?l=>yt[l>>3]:l=>k[l>>3];default:throw new TypeError(`invalid integer width (${s}): ${r}`)}},Ei=r=>{if(r===null)return"null";var s=typeof r;return s==="object"||s==="array"||s==="function"?r.toString():""+r},fc=(r,s,c,l)=>{if(s<c||s>l)throw new TypeError(`Passing a number "${Ei(s)}" from JS side to C/C++ side to an argument of type "${r}", which is outside the valid range [${c}, ${l}]!`)},nh=(r,s,c,l,f)=>{s=Vt(s);const g=l===0n;let T=b=>b;if(g){const b=c*8;T=F=>BigInt.asUintN(b,F),f=T(f)}_n(r,{name:s,fromWireType:T,toWireType:(b,F)=>{if(typeof F=="number")F=BigInt(F);else if(typeof F!="bigint")throw new TypeError(`Cannot convert "${Ei(F)}" to ${this.name}`);return fc(s,F,l,f),F},argPackAdvance:In,readValueFromPointer:hc(s,c,!g),destructorFunction:null})},In=8,ih=(r,s,c,l)=>{s=Vt(s),_n(r,{name:s,fromWireType:function(f){return!!f},toWireType:function(f,g){return g?c:l},argPackAdvance:In,readValueFromPointer:function(f){return this.fromWireType(Ke[f])},destructorFunction:null})},rh=r=>({count:r.count,deleteScheduled:r.deleteScheduled,preservePointerOnDelete:r.preservePointerOnDelete,ptr:r.ptr,ptrType:r.ptrType,smartPtr:r.smartPtr,smartPtrType:r.smartPtrType}),ro=r=>{function s(c){return c.$$.ptrType.registeredClass.name}gt(s(r)+" instance already deleted")},so=!1,dc=r=>{},sh=r=>{r.smartPtr?r.smartPtrType.rawDestructor(r.smartPtr):r.ptrType.registeredClass.rawDestructor(r.ptr)},pc=r=>{r.count.value-=1;var s=r.count.value===0;s&&sh(r)},mc=(r,s,c)=>{if(s===c)return r;if(c.baseClass===void 0)return null;var l=mc(r,s,c.baseClass);return l===null?null:c.downcast(l)},_c={},oh={},ah=(r,s)=>{for(s===void 0&&gt("ptr should not be undefined");r.baseClass;)s=r.upcast(s),r=r.baseClass;return s},ch=(r,s)=>(s=ah(r,s),oh[s]),lh=class extends Error{constructor(s){super(s),this.name="InternalError"}},Yr=r=>{throw new lh(r)},Kr=(r,s)=>{(!s.ptrType||!s.ptr)&&Yr("makeClassHandle requires ptr and ptrType");var c=!!s.smartPtrType,l=!!s.smartPtr;return c!==l&&Yr("Both smartPtrType and smartPtr must be specified"),s.count={value:1},Sr(Object.create(r,{$$:{value:s,writable:!0}}))};function gc(r){var s=this.getPointee(r);if(!s)return this.destructor(r),null;var c=ch(this.registeredClass,s);if(c!==void 0){if(c.$$.count.value===0)return c.$$.ptr=s,c.$$.smartPtr=r,c.clone();var l=c.clone();return this.destructor(r),l}function f(){return this.isSmartPointer?Kr(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:s,smartPtrType:this,smartPtr:r}):Kr(this.registeredClass.instancePrototype,{ptrType:this,ptr:r})}var g=this.registeredClass.getActualType(s),T=_c[g];if(!T)return f.call(this);var b;this.isConst?b=T.constPointerType:b=T.pointerType;var F=mc(s,this.registeredClass,b.registeredClass);return F===null?f.call(this):this.isSmartPointer?Kr(b.registeredClass.instancePrototype,{ptrType:b,ptr:F,smartPtrType:this,smartPtr:r}):Kr(b.registeredClass.instancePrototype,{ptrType:b,ptr:F})}var Sr=r=>typeof FinalizationRegistry>"u"?(Sr=s=>s,r):(so=new FinalizationRegistry(s=>{console.warn(s.leakWarning),pc(s.$$)}),Sr=s=>{var c=s.$$,l=!!c.smartPtr;if(l){var f={$$:c},g=c.ptrType.registeredClass,T=new Error(`Embind found a leaked C++ instance ${g.name} <${ze(c.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(T,gc),f.leakWarning=T.stack.replace(/^Error: /,""),so.register(s,f,s)}return s},dc=s=>so.unregister(s),Sr(r)),uh=()=>{let r=Zr.prototype;Object.assign(r,{isAliasOf(c){if(!(this instanceof Zr)||!(c instanceof Zr))return!1;var l=this.$$.ptrType.registeredClass,f=this.$$.ptr;c.$$=c.$$;for(var g=c.$$.ptrType.registeredClass,T=c.$$.ptr;l.baseClass;)f=l.upcast(f),l=l.baseClass;for(;g.baseClass;)T=g.upcast(T),g=g.baseClass;return l===g&&f===T},clone(){if(this.$$.ptr||ro(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var c=Sr(Object.create(Object.getPrototypeOf(this),{$$:{value:rh(this.$$)}}));return c.$$.count.value+=1,c.$$.deleteScheduled=!1,c},delete(){this.$$.ptr||ro(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&gt("Object already scheduled for deletion"),dc(this),pc(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||ro(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&gt("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const s=Symbol.dispose;s&&(r[s]=r.delete)};function Zr(){}var Jr=(r,s)=>Object.defineProperty(s,"name",{value:r}),oo=(r,s,c)=>{if(r[s].overloadTable===void 0){var l=r[s];r[s]=function(...f){return r[s].overloadTable.hasOwnProperty(f.length)||gt(`Function '${c}' called with an invalid number of arguments (${f.length}) - expects one of (${r[s].overloadTable})!`),r[s].overloadTable[f.length].apply(this,f)},r[s].overloadTable=[],r[s].overloadTable[l.argCount]=l}},ao=(r,s,c)=>{t.hasOwnProperty(r)?((c===void 0||t[r].overloadTable!==void 0&&t[r].overloadTable[c]!==void 0)&&gt(`Cannot register public name '${r}' twice`),oo(t,r,r),t[r].overloadTable.hasOwnProperty(c)&&gt(`Cannot register multiple overloads of a function with the same number of arguments (${c})!`),t[r].overloadTable[c]=s):(t[r]=s,t[r].argCount=c)},hh=48,fh=57,dh=r=>{D(typeof r=="string"),r=r.replace(/[^a-zA-Z0-9_]/g,"$");var s=r.charCodeAt(0);return s>=hh&&s<=fh?`_${r}`:r};function ph(r,s,c,l,f,g,T,b){this.name=r,this.constructor=s,this.instancePrototype=c,this.rawDestructor=l,this.baseClass=f,this.getActualType=g,this.upcast=T,this.downcast=b,this.pureVirtualFunctions=[]}var Qr=(r,s,c)=>{for(;s!==c;)s.upcast||gt(`Expected null or instance of ${c.name}, got an instance of ${s.name}`),r=s.upcast(r),s=s.baseClass;return r};function mh(r,s){if(s===null)return this.isReference&&gt(`null is not a valid ${this.name}`),0;s.$$||gt(`Cannot pass "${Ei(s)}" as a ${this.name}`),s.$$.ptr||gt(`Cannot pass deleted object as a pointer of type ${this.name}`);var c=s.$$.ptrType.registeredClass,l=Qr(s.$$.ptr,c,this.registeredClass);return l}function _h(r,s){var c;if(s===null)return this.isReference&&gt(`null is not a valid ${this.name}`),this.isSmartPointer?(c=this.rawConstructor(),r!==null&&r.push(this.rawDestructor,c),c):0;(!s||!s.$$)&&gt(`Cannot pass "${Ei(s)}" as a ${this.name}`),s.$$.ptr||gt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&s.$$.ptrType.isConst&&gt(`Cannot convert argument of type ${s.$$.smartPtrType?s.$$.smartPtrType.name:s.$$.ptrType.name} to parameter type ${this.name}`);var l=s.$$.ptrType.registeredClass;if(c=Qr(s.$$.ptr,l,this.registeredClass),this.isSmartPointer)switch(s.$$.smartPtr===void 0&&gt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:s.$$.smartPtrType===this?c=s.$$.smartPtr:gt(`Cannot convert argument of type ${s.$$.smartPtrType?s.$$.smartPtrType.name:s.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:c=s.$$.smartPtr;break;case 2:if(s.$$.smartPtrType===this)c=s.$$.smartPtr;else{var f=s.clone();c=this.rawShare(c,Bt.toHandle(()=>f.delete())),r!==null&&r.push(this.rawDestructor,c)}break;default:gt("Unsupporting sharing policy")}return c}function gh(r,s){if(s===null)return this.isReference&&gt(`null is not a valid ${this.name}`),0;s.$$||gt(`Cannot pass "${Ei(s)}" as a ${this.name}`),s.$$.ptr||gt(`Cannot pass deleted object as a pointer of type ${this.name}`),s.$$.ptrType.isConst&&gt(`Cannot convert argument of type ${s.$$.ptrType.name} to parameter type ${this.name}`);var c=s.$$.ptrType.registeredClass,l=Qr(s.$$.ptr,c,this.registeredClass);return l}function es(r){return this.fromWireType(Me[r>>2])}var vh=()=>{Object.assign(ts.prototype,{getPointee(r){return this.rawGetPointee&&(r=this.rawGetPointee(r)),r},destructor(r){var s;(s=this.rawDestructor)==null||s.call(this,r)},argPackAdvance:In,readValueFromPointer:es,fromWireType:gc})};function ts(r,s,c,l,f,g,T,b,F,X,K){this.name=r,this.registeredClass=s,this.isReference=c,this.isConst=l,this.isSmartPointer=f,this.pointeeType=g,this.sharingPolicy=T,this.rawGetPointee=b,this.rawConstructor=F,this.rawShare=X,this.rawDestructor=K,!f&&s.baseClass===void 0?l?(this.toWireType=mh,this.destructorFunction=null):(this.toWireType=gh,this.destructorFunction=null):this.toWireType=_h}var vc=(r,s,c)=>{t.hasOwnProperty(r)||Yr("Replacing nonexistent public symbol"),t[r].overloadTable!==void 0&&c!==void 0?t[r].overloadTable[c]=s:(t[r]=s,t[r].argCount=c)},xc=[],ns,Ee=r=>{var s=xc[r];return s||(xc[r]=s=ns.get(r)),D(ns.get(r)==s,"JavaScript-side Wasm function table mirror is out of date!"),s},Un=(r,s,c=!1)=>{D(!c,"Async bindings are only supported with JSPI."),r=Vt(r);function l(){var g=Ee(s);return g}var f=l();return typeof f!="function"&&gt(`unknown function pointer with signature ${r}: ${s}`),f};class xh extends Error{}var yc=r=>{var s=Bc(r),c=Vt(s);return On(s),c},Si=(r,s)=>{var c=[],l={};function f(g){if(!l[g]&&!yi[g]){if(jr[g]){jr[g].forEach(f);return}c.push(g),l[g]=!0}}throw s.forEach(f),new xh(`${r}: `+c.map(yc).join([", "]))},Mn=(r,s,c)=>{r.forEach(b=>jr[b]=s);function l(b){var F=c(b);F.length!==r.length&&Yr("Mismatched type converter count");for(var X=0;X<r.length;++X)_n(r[X],F[X])}var f=new Array(s.length),g=[],T=0;s.forEach((b,F)=>{yi.hasOwnProperty(b)?f[F]=yi[b]:(g.push(b),Hi.hasOwnProperty(b)||(Hi[b]=[]),Hi[b].push(()=>{f[F]=yi[b],++T,T===g.length&&l(f)}))}),g.length===0&&l(f)},yh=(r,s,c,l,f,g,T,b,F,X,K,oe,_e)=>{K=Vt(K),g=Un(f,g),b&&(b=Un(T,b)),X&&(X=Un(F,X)),_e=Un(oe,_e);var ue=dh(K);ao(ue,function(){Si(`Cannot construct ${K} due to unbound types`,[l])}),Mn([r,s,c],l?[l]:[],xe=>{var Lt;xe=xe[0];var je,ut;l?(je=xe.registeredClass,ut=je.instancePrototype):ut=Zr.prototype;var ht=Jr(K,function(...ti){if(Object.getPrototypeOf(this)!==Ft)throw new Er(`Use 'new' to construct ${K}`);if(St.constructor_body===void 0)throw new Er(`${K} has no accessible constructor`);var ls=St.constructor_body[ti.length];if(ls===void 0)throw new Er(`Tried to invoke ctor of ${K} with invalid number of parameters (${ti.length}) - expected (${Object.keys(St.constructor_body).toString()}) parameters instead!`);return ls.apply(this,ti)}),Ft=Object.create(ut,{constructor:{value:ht}});ht.prototype=Ft;var St=new ph(K,ht,Ft,_e,je,g,b,X);St.baseClass&&((Lt=St.baseClass).__derivedClasses??(Lt.__derivedClasses=[]),St.baseClass.__derivedClasses.push(St));var Jt=new ts(K,St,!0,!1,!1),Gt=new ts(K+"*",St,!1,!1,!1),tn=new ts(K+" const*",St,!1,!0,!1);return _c[r]={pointerType:Gt,constPointerType:tn},vc(ue,ht),[Jt,Gt,tn]})},co=r=>{for(;r.length;){var s=r.pop(),c=r.pop();c(s)}};function Ec(r){for(var s=1;s<r.length;++s)if(r[s]!==null&&r[s].destructorFunction===void 0)return!0;return!1}function Eh(r,s,c,l,f){if(r<s||r>c){var g=s==c?s:`${s} to ${c}`;f(`function ${l} called with ${r} arguments, expected ${g}`)}}function Sh(r,s,c,l){var f=Ec(r),g=r.length-2,T=[],b=["fn"];s&&b.push("thisWired");for(var F=0;F<g;++F)T.push(`arg${F}`),b.push(`arg${F}Wired`);T=T.join(","),b=b.join(",");var X=`return function (${T}) {
`;X+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,f&&(X+=`var destructors = [];
`);var K=f?"destructors":"null",oe=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];s&&(X+=`var thisWired = classParam['toWireType'](${K}, this);
`);for(var F=0;F<g;++F)X+=`var arg${F}Wired = argType${F}['toWireType'](${K}, arg${F});
`,oe.push(`argType${F}`);if(X+=(c||l?"var rv = ":"")+`invoker(${b});
`,f)X+=`runDestructors(destructors);
`;else for(var F=s?1:2;F<r.length;++F){var _e=F===1?"thisWired":"arg"+(F-2)+"Wired";r[F].destructorFunction!==null&&(X+=`${_e}_dtor(${_e});
`,oe.push(`${_e}_dtor`))}return c&&(X+=`var ret = retType['fromWireType'](rv);
return ret;
`),X+=`}
`,oe.push("checkArgCount","minArgs","maxArgs"),X=`if (arguments.length !== ${oe.length}){ throw new Error(humanName + "Expected ${oe.length} closure arguments " + arguments.length + " given."); }
${X}`,[oe,X]}function Mh(r){for(var s=r.length-2,c=r.length-1;c>=2&&r[c].optional;--c)s--;return s}function is(r,s,c,l,f,g){var T=s.length;T<2&&gt("argTypes array size mismatch! Must at least get return value and 'this' types!"),D(!g,"Async bindings are only supported with JSPI.");for(var b=s[1]!==null&&c!==null,F=Ec(s),X=s[0].name!=="void",K=T-2,oe=Mh(s),_e=[r,gt,l,f,co,s[0],s[1]],ue=0;ue<T-2;++ue)_e.push(s[ue+2]);if(!F)for(var ue=b?1:2;ue<s.length;++ue)s[ue].destructorFunction!==null&&_e.push(s[ue].destructorFunction);_e.push(Eh,oe,K);let[xe,je]=Sh(s,b,X,g);var ut=new Function(...xe,je)(..._e);return Jr(r,ut)}var rs=(r,s)=>{for(var c=[],l=0;l<r;l++)c.push(Me[s+l*4>>2]);return c},lo=r=>{r=r.trim();const s=r.indexOf("(");return s===-1?r:(D(r.endsWith(")"),"Parentheses for argument names should match."),r.slice(0,s))},Th=(r,s,c,l,f,g,T,b,F)=>{var X=rs(c,l);s=Vt(s),s=lo(s),g=Un(f,g,b),Mn([],[r],K=>{K=K[0];var oe=`${K.name}.${s}`;function _e(){Si(`Cannot call ${oe} due to unbound types`,X)}s.startsWith("@@")&&(s=Symbol[s.substring(2)]);var ue=K.registeredClass.constructor;return ue[s]===void 0?(_e.argCount=c-1,ue[s]=_e):(oo(ue,s,oe),ue[s].overloadTable[c-1]=_e),Mn([],X,xe=>{var je=[xe[0],null].concat(xe.slice(1)),ut=is(oe,je,null,g,T,b);if(ue[s].overloadTable===void 0?(ut.argCount=c-1,ue[s]=ut):ue[s].overloadTable[c-1]=ut,K.registeredClass.__derivedClasses)for(const ht of K.registeredClass.__derivedClasses)ht.constructor.hasOwnProperty(s)||(ht.constructor[s]=ut);return[]}),[]})},wh=(r,s,c,l,f,g)=>{D(s>0);var T=rs(s,c);f=Un(l,f),Mn([],[r],b=>{b=b[0];var F=`constructor ${b.name}`;if(b.registeredClass.constructor_body===void 0&&(b.registeredClass.constructor_body=[]),b.registeredClass.constructor_body[s-1]!==void 0)throw new Er(`Cannot register multiple constructors with identical number of parameters (${s-1}) for class '${b.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return b.registeredClass.constructor_body[s-1]=()=>{Si(`Cannot construct ${b.name} due to unbound types`,T)},Mn([],T,X=>(X.splice(1,0,null),b.registeredClass.constructor_body[s-1]=is(F,X,null,f,g),[])),[]})},bh=(r,s,c,l,f,g,T,b,F,X)=>{var K=rs(c,l);s=Vt(s),s=lo(s),g=Un(f,g,F),Mn([],[r],oe=>{oe=oe[0];var _e=`${oe.name}.${s}`;s.startsWith("@@")&&(s=Symbol[s.substring(2)]),b&&oe.registeredClass.pureVirtualFunctions.push(s);function ue(){Si(`Cannot call ${_e} due to unbound types`,K)}var xe=oe.registeredClass.instancePrototype,je=xe[s];return je===void 0||je.overloadTable===void 0&&je.className!==oe.name&&je.argCount===c-2?(ue.argCount=c-2,ue.className=oe.name,xe[s]=ue):(oo(xe,s,_e),xe[s].overloadTable[c-2]=ue),Mn([],K,ut=>{var ht=is(_e,ut,oe,g,T,F);return xe[s].overloadTable===void 0?(ht.argCount=c-2,xe[s]=ht):xe[s].overloadTable[c-2]=ht,[]}),[]})},Sc=(r,s,c)=>(r instanceof Object||gt(`${c} with invalid "this": ${r}`),r instanceof s.registeredClass.constructor||gt(`${c} incompatible with "this" of type ${r.constructor.name}`),r.$$.ptr||gt(`cannot call emscripten binding method ${c} on deleted object`),Qr(r.$$.ptr,r.$$.ptrType.registeredClass,s.registeredClass)),Ah=(r,s,c,l,f,g,T,b,F,X)=>{s=Vt(s),f=Un(l,f),Mn([],[r],K=>{K=K[0];var oe=`${K.name}.${s}`,_e={get(){Si(`Cannot access ${oe} due to unbound types`,[c,T])},enumerable:!0,configurable:!0};return F?_e.set=()=>Si(`Cannot access ${oe} due to unbound types`,[c,T]):_e.set=ue=>gt(oe+" is a read-only property"),Object.defineProperty(K.registeredClass.instancePrototype,s,_e),Mn([],F?[c,T]:[c],ue=>{var xe=ue[0],je={get(){var ht=Sc(this,K,oe+" getter");return xe.fromWireType(f(g,ht))},enumerable:!0};if(F){F=Un(b,F);var ut=ue[1];je.set=function(ht){var Ft=Sc(this,K,oe+" setter"),St=[];F(X,Ft,ut.toWireType(St,ht)),co(St)}}return Object.defineProperty(K.registeredClass.instancePrototype,s,je),[]}),[]})},Rh=(r,s,c)=>{r=Vt(r),Mn([],[s],l=>(l=l[0],t[r]=l.fromWireType(c),[]))},Mc=[],Nn=[0,1,,1,null,1,!0,1,!1,1],uo=r=>{r>9&&--Nn[r+1]===0&&(D(Nn[r]!==void 0,"Decref for unallocated handle."),Nn[r]=void 0,Mc.push(r))},Bt={toValue:r=>(r||gt(`Cannot use deleted val. handle = ${r}`),D(r===2||Nn[r]!==void 0&&r%2===0,`invalid handle: ${r}`),Nn[r]),toHandle:r=>{switch(r){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const s=Mc.pop()||Nn.length;return Nn[s]=r,Nn[s+1]=1,s}}}},Tc={name:"emscripten::val",fromWireType:r=>{var s=Bt.toValue(r);return uo(r),s},toWireType:(r,s)=>Bt.toHandle(s),argPackAdvance:In,readValueFromPointer:es,destructorFunction:null},wc=r=>_n(r,Tc),Ch=(r,s,c)=>{switch(s){case 1:return c?function(l){return this.fromWireType(Je[l])}:function(l){return this.fromWireType(Ke[l])};case 2:return c?function(l){return this.fromWireType(le[l>>1])}:function(l){return this.fromWireType(pe[l>>1])};case 4:return c?function(l){return this.fromWireType(ae[l>>2])}:function(l){return this.fromWireType(Me[l>>2])};default:throw new TypeError(`invalid integer width (${s}): ${r}`)}},Ph=(r,s,c,l)=>{s=Vt(s);function f(){}f.values={},_n(r,{name:s,constructor:f,fromWireType:function(g){return this.constructor.values[g]},toWireType:(g,T)=>T.value,argPackAdvance:In,readValueFromPointer:Ch(s,c,l),destructorFunction:null}),ao(s,f)},Mr=(r,s)=>{var c=yi[r];return c===void 0&&gt(`${s} has unknown type ${yc(r)}`),c},Dh=(r,s,c)=>{var l=Mr(r,"enum");s=Vt(s);var f=l.constructor,g=Object.create(l.constructor.prototype,{value:{value:c},constructor:{value:Jr(`${l.name}_${s}`,function(){})}});f.values[c]=g,f[s]=g},Lh=(r,s)=>{switch(s){case 4:return function(c){return this.fromWireType(We[c>>2])};case 8:return function(c){return this.fromWireType(st[c>>3])};default:throw new TypeError(`invalid float width (${s}): ${r}`)}},Fh=(r,s,c)=>{s=Vt(s),_n(r,{name:s,fromWireType:l=>l,toWireType:(l,f)=>{if(typeof f!="number"&&typeof f!="boolean")throw new TypeError(`Cannot convert ${Ei(f)} to ${this.name}`);return f},argPackAdvance:In,readValueFromPointer:Lh(s,c),destructorFunction:null})},Ih=(r,s,c,l,f,g,T,b)=>{var F=rs(s,c);r=Vt(r),r=lo(r),f=Un(l,f,T),ao(r,function(){Si(`Cannot call ${r} due to unbound types`,F)},s-1),Mn([],F,X=>{var K=[X[0],null].concat(X.slice(1));return vc(r,is(r,K,null,f,g,T),s-1),[]})},Uh=(r,s,c,l,f)=>{s=Vt(s);const g=l===0;let T=F=>F;if(g){var b=32-8*c;T=F=>F<<b>>>b,f=T(f)}_n(r,{name:s,fromWireType:T,toWireType:(F,X)=>{if(typeof X!="number"&&typeof X!="boolean")throw new TypeError(`Cannot convert "${Ei(X)}" to ${s}`);return fc(s,X,l,f),X},argPackAdvance:In,readValueFromPointer:hc(s,c,l!==0),destructorFunction:null})},Nh=(r,s,c)=>{var l=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],f=l[s];function g(T){var b=Me[T>>2],F=Me[T+4>>2];return new f(Je.buffer,F,b)}c=Vt(c),_n(r,{name:c,fromWireType:g,argPackAdvance:In,readValueFromPointer:g},{ignoreDuplicateRegistrations:!0})},Oh=Object.assign({optional:!0},Tc),kh=(r,s)=>{_n(r,Oh)},Mi=(r,s,c)=>(D(typeof c=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),be(r,Ke,s,c)),Bh=(r,s)=>{s=Vt(s),_n(r,{name:s,fromWireType(c){for(var l=Me[c>>2],f=c+4,g,T,b=f,T=0;T<=l;++T){var F=f+T;if(T==l||Ke[F]==0){var X=F-b,K=lt(b,X);g===void 0?g=K:(g+="\0",g+=K),b=F+1}}return On(c),g},toWireType(c,l){l instanceof ArrayBuffer&&(l=new Uint8Array(l));var f,g=typeof l=="string";g||ArrayBuffer.isView(l)&&l.BYTES_PER_ELEMENT==1||gt("Cannot pass non-string to std::string"),g?f=q(l):f=l.length;var T=po(4+f+1),b=T+4;return Me[T>>2]=f,g?Mi(l,b,f+1):Ke.set(l,b),c!==null&&c.push(On,T),T},argPackAdvance:In,readValueFromPointer:es,destructorFunction(c){On(c)}})},bc=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,zh=(r,s)=>{D(r%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var c=r>>1,l=c+s/2,f=c;!(f>=l)&&pe[f];)++f;if(f-c>16&&bc)return bc.decode(pe.subarray(c,f));for(var g="",T=c;!(T>=l);++T){var b=pe[T];if(b==0)break;g+=String.fromCharCode(b)}return g},Hh=(r,s,c)=>{if(D(s%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),D(typeof c=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),c??(c=2147483647),c<2)return 0;c-=2;for(var l=s,f=c<r.length*2?c/2:r.length,g=0;g<f;++g){var T=r.charCodeAt(g);le[s>>1]=T,s+=2}return le[s>>1]=0,s-l},Vh=r=>r.length*2,Gh=(r,s)=>{D(r%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var c="",l=0;!(l>=s/4);l++){var f=ae[r+l*4>>2];if(!f)break;c+=String.fromCodePoint(f)}return c},Wh=(r,s,c)=>{if(D(s%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),D(typeof c=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),c??(c=2147483647),c<4)return 0;for(var l=s,f=l+c-4,g=0;g<r.length;++g){var T=r.codePointAt(g);if(T>65535&&g++,ae[s>>2]=T,s+=4,s+4>f)break}return ae[s>>2]=0,s-l},Xh=r=>{for(var s=0,c=0;c<r.length;++c){var l=r.codePointAt(c);l>65535&&c++,s+=4}return s},$h=(r,s,c)=>{c=Vt(c);var l,f,g,T;s===2?(l=zh,f=Hh,T=Vh,g=b=>pe[b>>1]):s===4&&(l=Gh,f=Wh,T=Xh,g=b=>Me[b>>2]),_n(r,{name:c,fromWireType:b=>{for(var F=Me[b>>2],X,K=b+4,oe=0;oe<=F;++oe){var _e=b+4+oe*s;if(oe==F||g(_e)==0){var ue=_e-K,xe=l(K,ue);X===void 0?X=xe:(X+="\0",X+=xe),K=_e+s}}return On(b),X},toWireType:(b,F)=>{typeof F!="string"&&gt(`Cannot pass non-string to C++ string type ${c}`);var X=T(F),K=po(4+X+s);return Me[K>>2]=X/s,f(F,K+4,X+s),b!==null&&b.push(On,K),K},argPackAdvance:In,readValueFromPointer:es,destructorFunction(b){On(b)}})},qh=(r,s)=>{wc(r)},jh=(r,s)=>{s=Vt(s),_n(r,{isVoid:!0,name:s,argPackAdvance:0,fromWireType:()=>{},toWireType:(c,l)=>{}})},Yh=()=>{throw new O},Ac=(r,s,c)=>{var l=[],f=r.toWireType(l,c);return l.length&&(Me[s>>2]=Bt.toHandle(l)),f},Kh=(r,s,c)=>(r=Bt.toValue(r),s=Mr(s,"emval::as"),Ac(s,c,r)),Zh=(r,s)=>(r=Bt.toValue(r),s=Mr(s,"emval::as"),s.toWireType(null,r)),ss=[],Jh=(r,s,c,l)=>(r=ss[r],s=Bt.toValue(s),r(null,s,c,l)),Qh={},ho=r=>{var s=Qh[r];return s===void 0?Vt(r):s},ef=(r,s,c,l,f)=>(r=ss[r],s=Bt.toValue(s),c=ho(c),r(s,s[c],l,f)),Rc=()=>globalThis,tf=r=>r===0?Bt.toHandle(Rc()):(r=ho(r),Bt.toHandle(Rc()[r])),nf=r=>{var s=ss.length;return ss.push(r),s},rf=(r,s)=>{for(var c=new Array(r),l=0;l<r;++l)c[l]=Mr(Me[s+l*4>>2],`parameter ${l}`);return c},sf=(r,s,c)=>{var l=rf(r,s),f=l.shift();r--;var g=`return function (obj, func, destructorsRef, args) {
`,T=0,b=[];c===0&&b.push("obj");for(var F=["retType"],X=[f],K=0;K<r;++K)b.push(`arg${K}`),F.push(`argType${K}`),X.push(l[K]),g+=`  var arg${K} = argType${K}.readValueFromPointer(args${T?"+"+T:""});
`,T+=l[K].argPackAdvance;var oe=c===1?"new func":"func.call";g+=`  var rv = ${oe}(${b.join(", ")});
`,f.isVoid||(F.push("emval_returnValue"),X.push(Ac),g+=`  return emval_returnValue(retType, destructorsRef, rv);
`),g+=`};
`;var _e=new Function(...F,g)(...X),ue=`methodCaller<(${l.map(xe=>xe.name).join(", ")}) => ${f.name}>`;return nf(Jr(ue,_e))},of=(r,s)=>(r=Bt.toValue(r),s=Bt.toValue(s),Bt.toHandle(r[s])),af=r=>{r>9&&(Nn[r+1]+=1)},cf=r=>(r=Bt.toValue(r),typeof r=="number"),lf=r=>(r=Bt.toValue(r),typeof r=="string"),uf=()=>Bt.toHandle([]),hf=r=>Bt.toHandle(ho(r)),ff=r=>{var s=Bt.toValue(r);co(s),uo(r)},df=(r,s)=>{r=Mr(r,"_emval_take_value");var c=r.readValueFromPointer(s);return Bt.toHandle(c)},pf=r=>{throw r=Bt.toValue(r),r},mf=r=>r%4===0&&(r%100!==0||r%400===0),_f=[0,31,60,91,121,152,182,213,244,274,305,335],gf=[0,31,59,90,120,151,181,212,243,273,304,334],Cc=r=>{var s=mf(r.getFullYear()),c=s?_f:gf,l=c[r.getMonth()]+r.getDate()-1;return l},vf=9007199254740992,xf=-9007199254740992,Pc=r=>r<xf||r>vf?NaN:Number(r);function yf(r,s){r=Pc(r);var c=new Date(r*1e3);ae[s>>2]=c.getSeconds(),ae[s+4>>2]=c.getMinutes(),ae[s+8>>2]=c.getHours(),ae[s+12>>2]=c.getDate(),ae[s+16>>2]=c.getMonth(),ae[s+20>>2]=c.getFullYear()-1900,ae[s+24>>2]=c.getDay();var l=Cc(c)|0;ae[s+28>>2]=l,ae[s+36>>2]=-(c.getTimezoneOffset()*60);var f=new Date(c.getFullYear(),0,1),g=new Date(c.getFullYear(),6,1).getTimezoneOffset(),T=f.getTimezoneOffset(),b=(g!=T&&c.getTimezoneOffset()==Math.min(T,g))|0;ae[s+32>>2]=b}var Ef=function(r){var s=(()=>{var c=new Date(ae[r+20>>2]+1900,ae[r+16>>2],ae[r+12>>2],ae[r+8>>2],ae[r+4>>2],ae[r>>2],0),l=ae[r+32>>2],f=c.getTimezoneOffset(),g=new Date(c.getFullYear(),0,1),T=new Date(c.getFullYear(),6,1).getTimezoneOffset(),b=g.getTimezoneOffset(),F=Math.min(b,T);if(l<0)ae[r+32>>2]=+(T!=b&&F==f);else if(l>0!=(F==f)){var X=Math.max(b,T),K=l>0?F:X;c.setTime(c.getTime()+(K-f)*6e4)}ae[r+24>>2]=c.getDay();var oe=Cc(c)|0;ae[r+28>>2]=oe,ae[r>>2]=c.getSeconds(),ae[r+4>>2]=c.getMinutes(),ae[r+8>>2]=c.getHours(),ae[r+12>>2]=c.getDate(),ae[r+16>>2]=c.getMonth(),ae[r+20>>2]=c.getYear();var _e=c.getTime();return isNaN(_e)?-1:_e/1e3})();return BigInt(s)},Sf=(r,s,c,l)=>{var f=new Date().getFullYear(),g=new Date(f,0,1),T=new Date(f,6,1),b=g.getTimezoneOffset(),F=T.getTimezoneOffset(),X=Math.max(b,F);Me[r>>2]=X*60,ae[s>>2]=+(b!=F);var K=ue=>{var xe=ue>=0?"-":"+",je=Math.abs(ue),ut=String(Math.floor(je/60)).padStart(2,"0"),ht=String(je%60).padStart(2,"0");return`UTC${xe}${ut}${ht}`},oe=K(b),_e=K(F);D(oe),D(_e),D(q(oe)<=16,`timezone name truncated to fit in TZNAME_MAX (${oe})`),D(q(_e)<=16,`timezone name truncated to fit in TZNAME_MAX (${_e})`),F<b?(Mi(oe,c,17),Mi(_e,l,17)):(Mi(oe,l,17),Mi(_e,c,17))},Dc=()=>performance.now(),Lc=()=>Date.now(),Mf=r=>r>=0&&r<=3;function Tf(r,s,c){if(!Mf(r))return 28;var l;r===0?l=Lc():l=Dc();var f=Math.round(l*1e3*1e3);return yt[c>>3]=BigInt(f),0}var os=[],wf=(r,s)=>{D(Array.isArray(os)),D(s%16==0),os.length=0;for(var c;c=Ke[r++];){var l=String.fromCharCode(c),f=["d","f","i","p"];f.push("j"),D(f.includes(l),`Invalid character ${c}("${l}") in readEmAsmArgs! Use only [${f}], and do not specify "v" for void return argument.`);var g=c!=105;g&=c!=112,s+=g&&s%8?4:0,os.push(c==112?Me[s>>2]:c==106?yt[s>>3]:c==105?ae[s>>2]:st[s>>3]),s+=g?8:4}return os},bf=(r,s,c)=>{var l=wf(s,c);return D(kc.hasOwnProperty(r),`No EM_ASM constant found at address ${r}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),kc[r](...l)},Af=(r,s,c)=>bf(r,s,c),Fc=()=>2147483648,Rf=()=>Fc(),Cf=(r,s)=>(D(s,"alignment argument is required"),Math.ceil(r/s)*s),Pf=r=>{var s=nt.buffer,c=(r-s.byteLength+65535)/65536|0;try{return nt.grow(c),it(),1}catch(l){U(`growMemory: Attempted to grow heap from ${s.byteLength} bytes to ${r} bytes, but got error: ${l}`)}},Df=r=>{var s=Ke.length;r>>>=0,D(r>s);var c=Fc();if(r>c)return U(`Cannot enlarge memory, requested ${r} bytes, but the limit is ${c} bytes!`),!1;for(var l=1;l<=4;l*=2){var f=s*(1+.2/l);f=Math.min(f,r+100663296);var g=Math.min(c,Cf(Math.max(r,f),65536)),T=Pf(g);if(T)return!0}return U(`Failed to grow the heap from ${s} bytes to ${g} bytes, not enough memory!`),!1},fo={},Lf=()=>p||"./this.program",Tr=()=>{if(!Tr.strings){var r=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",s={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:r,_:Lf()};for(var c in fo)fo[c]===void 0?delete s[c]:s[c]=fo[c];var l=[];for(var c in s)l.push(`${c}=${s[c]}`);Tr.strings=l}return Tr.strings},Ff=(r,s)=>{var c=0,l=0;for(var f of Tr()){var g=s+c;Me[r+l>>2]=g,c+=Mi(f,g,1/0)+1,l+=4}return 0},If=(r,s)=>{var c=Tr();Me[r>>2]=c.length;var l=0;for(var f of c)l+=q(f)+1;return Me[s>>2]=l,0},Ic=0,Uc=()=>Pe||Ic>0,Uf=r=>{var s;Uc()||((s=t.onExit)==null||s.call(t,r),B=!0),d(r,new Qe(r))},Nf=(r,s)=>{if(Jp(),Uc()&&!s){var c=`program exited (with status: ${r}), but keepRuntimeAlive() is set (counter=${Ic}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;$e==null||$e(c),U(c)}Uf(r)},Of=Nf;function kf(r){try{var s=pt.getStreamFromFD(r);return M.close(s),0}catch(c){if(typeof M>"u"||c.name!=="ErrnoError")throw c;return c.errno}}var Bf=(r,s,c,l)=>{for(var f=0,g=0;g<c;g++){var T=Me[s>>2],b=Me[s+4>>2];s+=8;var F=M.read(r,Je,T,b,l);if(F<0)return-1;if(f+=F,F<b)break}return f};function zf(r,s,c,l){try{var f=pt.getStreamFromFD(r),g=Bf(f,s,c);return Me[l>>2]=g,0}catch(T){if(typeof M>"u"||T.name!=="ErrnoError")throw T;return T.errno}}function Hf(r,s,c,l){s=Pc(s);try{if(isNaN(s))return 61;var f=pt.getStreamFromFD(r);return M.llseek(f,s,c),yt[l>>3]=BigInt(f.position),f.getdents&&s===0&&c===0&&(f.getdents=null),0}catch(g){if(typeof M>"u"||g.name!=="ErrnoError")throw g;return g.errno}}var Vf=(r,s,c,l)=>{for(var f=0,g=0;g<c;g++){var T=Me[s>>2],b=Me[s+4>>2];s+=8;var F=M.write(r,Je,T,b,l);if(F<0)return-1;if(f+=F,F<b)break}return f};function Gf(r,s,c,l){try{var f=pt.getStreamFromFD(r),g=Vf(f,s,c);return Me[l>>2]=g,0}catch(T){if(typeof M>"u"||T.name!=="ErrnoError")throw T;return T.errno}}var Wf=r=>r,Xf=r=>{var s=t["_"+r];return D(s,"Cannot call unknown function "+r+", make sure it is exported"),s},$f=(r,s)=>{D(r.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),Je.set(r,s)},as=r=>Wc(r),qf=r=>{var s=q(r)+1,c=as(s);return Mi(r,c,s),c},Nc=(r,s,c,l,f)=>{var g={string:xe=>{var je=0;return xe!=null&&xe!==0&&(je=qf(xe)),je},array:xe=>{var je=as(xe.length);return $f(xe,je),je}};function T(xe){return s==="string"?lt(xe):s==="boolean"?!!xe:xe}var b=Xf(r),F=[],X=0;if(D(s!=="array",'Return type should not be "array".'),l)for(var K=0;K<l.length;K++){var oe=g[c[K]];oe?(X===0&&(X=H()),F[K]=oe(l[K])):F[K]=l[K]}var _e=b(...F);function ue(xe){return X!==0&&W(X),T(xe)}return _e=ue(_e),_e},jf=(r,s,c,l)=>(...f)=>Nc(r,s,c,f),Yf=(...r)=>M.createPath(...r),Kf=(...r)=>M.unlink(...r),Zf=(...r)=>M.createLazyFile(...r),Jf=(...r)=>M.createDevice(...r),Qf=r=>cs(r),ed=r=>go(r),td=r=>{var s=H(),c=as(4),l=as(4);$c(r,c,l);var f=Me[c>>2],g=Me[l>>2],T=lt(f);On(f);var b;return g&&(b=lt(g),On(g)),W(s),[T,b]},Oc=r=>td(r);M.createPreloadedFile=bt,M.staticInit(),uh(),vh(),D(Nn.length===5*2),t.noExitRuntime&&(Pe=t.noExitRuntime),t.preloadPlugins&&(It=t.preloadPlugins),t.print&&(N=t.print),t.printErr&&(U=t.printErr),t.wasmBinary&&(I=t.wasmBinary),rd(),t.arguments&&t.arguments,t.thisProgram&&(p=t.thisProgram),D(typeof t.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),D(typeof t.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),D(typeof t.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),D(typeof t.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),D(typeof t.read>"u","Module.read option was removed"),D(typeof t.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),D(typeof t.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),D(typeof t.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),D(typeof t.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),D(typeof t.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),D(typeof t.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),D(typeof t.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),D(typeof t.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),t.addRunDependency=L,t.removeRunDependency=S,t.ccall=Nc,t.cwrap=jf,t.FS_createPreloadedFile=bt,t.FS_unlink=Kf,t.FS_createPath=Yf,t.FS_createDevice=Jf,t.FS=M,t.FS_createDataFile=dt,t.FS_createLazyFile=Zf,t.MEMFS=Ae;var nd=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","count_emval_handles"];nd.forEach(ge);var id=["run","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","keepRuntimeAlive","asyncLoad","alignMemory","mmapAlloc","wasmTable","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_forceLoadFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];id.forEach(Re),t.incrementExceptionRefcount=Qf,t.decrementExceptionRefcount=ed,t.getExceptionMessage=Oc;function rd(){he("fetchSettings")}var kc={701944:()=>{typeof t<"u"&&"mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING".split(" ").forEach(function(r){Object.defineProperty(t,r,{get:function(){return t["get_"+r]()},set:function(s){},enumerable:!0,configurable:!0})})}},Bc=Z("___getTypeName"),po=Z("_malloc"),mo=Z("_fflush"),On=Z("_free"),_o=Z("_emscripten_stack_get_end"),zc=Z("_strerror"),ve=Z("_setThrew"),Hc=Z("__emscripten_tempret_set"),Vc=Z("_emscripten_stack_init"),Gc=Z("__emscripten_stack_restore"),Wc=Z("__emscripten_stack_alloc"),Xc=Z("_emscripten_stack_get_current"),go=Z("___cxa_decrement_exception_refcount"),cs=Z("___cxa_increment_exception_refcount"),$c=Z("___get_exception_message"),qc=Z("___cxa_can_catch"),jc=Z("___cxa_get_exception_ptr");function sd(r){Bc=Q("__getTypeName",1),po=Q("malloc",1),mo=Q("fflush",1),On=Q("free",1),_o=r.emscripten_stack_get_end,r.emscripten_stack_get_base,zc=Q("strerror",1),ve=Q("setThrew",2),Hc=Q("_emscripten_tempret_set",1),Vc=r.emscripten_stack_init,r.emscripten_stack_get_free,Gc=r._emscripten_stack_restore,Wc=r._emscripten_stack_alloc,Xc=r.emscripten_stack_get_current,go=Q("__cxa_decrement_exception_refcount",1),cs=Q("__cxa_increment_exception_refcount",1),$c=Q("__get_exception_message",3),qc=Q("__cxa_can_catch",3),jc=Q("__cxa_get_exception_ptr",1)}var Yc={__assert_fail:Sn,__cxa_begin_catch:Wn,__cxa_current_primary_exception:xr,__cxa_end_catch:Wr,__cxa_find_matching_catch_2:Xr,__cxa_find_matching_catch_3:$r,__cxa_rethrow:qr,__cxa_rethrow_primary_exception:eo,__cxa_throw:to,__cxa_uncaught_exceptions:no,__resumeException:io,__syscall_dup3:xi,__syscall_fcntl64:sn,__syscall_fstat64:Yt,__syscall_ioctl:Zt,__syscall_lstat64:yr,__syscall_newfstatat:$n,__syscall_openat:Ju,__syscall_stat64:Qu,_abort_js:eh,_embind_register_bigint:nh,_embind_register_bool:ih,_embind_register_class:yh,_embind_register_class_class_function:Th,_embind_register_class_constructor:wh,_embind_register_class_function:bh,_embind_register_class_property:Ah,_embind_register_constant:Rh,_embind_register_emval:wc,_embind_register_enum:Ph,_embind_register_enum_value:Dh,_embind_register_float:Fh,_embind_register_function:Ih,_embind_register_integer:Uh,_embind_register_memory_view:Nh,_embind_register_optional:kh,_embind_register_std_string:Bh,_embind_register_std_wstring:$h,_embind_register_user_type:qh,_embind_register_void:jh,_emscripten_throw_longjmp:Yh,_emval_as:Kh,_emval_as_int64:Zh,_emval_call:Jh,_emval_call_method:ef,_emval_decref:uo,_emval_get_global:tf,_emval_get_method_caller:sf,_emval_get_property:of,_emval_incref:af,_emval_is_number:cf,_emval_is_string:lf,_emval_new_array:uf,_emval_new_cstring:hf,_emval_run_destructors:ff,_emval_take_value:df,_emval_throw:pf,_localtime_js:yf,_mktime_js:Ef,_tzset_js:Sf,clock_time_get:Tf,emscripten_asm_const_int:Af,emscripten_date_now:Lc,emscripten_get_heap_max:Rf,emscripten_get_now:Dc,emscripten_resize_heap:Df,environ_get:Ff,environ_sizes_get:If,exit:Of,fd_close:kf,fd_read:zf,fd_seek:Hf,fd_write:Gf,invoke_ddd:zp,invoke_dddi:Kd,invoke_dddidi:Zd,invoke_ddidi:Yd,invoke_di:Jd,invoke_didd:Cp,invoke_dii:zd,invoke_diii:yd,invoke_diiii:jd,invoke_diiiidd:$d,invoke_diiiidi:Md,invoke_diiiii:pd,invoke_diiiiii:Cd,invoke_diiiiiii:Qd,invoke_diiiiiiiii:Ad,invoke_diiiiiiiiiiii:Rd,invoke_fiii:jp,invoke_i:md,invoke_id:fp,invoke_ii:cd,invoke_iid:lp,invoke_iidiii:Od,invoke_iidiiid:Ud,invoke_iidiiiiidi:kd,invoke_iii:od,invoke_iiid:Bd,invoke_iiididdddddd:Nd,invoke_iiidiiiiiiii:Id,invoke_iiii:hd,invoke_iiiidddiiiii:tp,invoke_iiiii:xd,invoke_iiiiid:bp,invoke_iiiiii:gp,invoke_iiiiiii:hp,invoke_iiiiiiii:cp,invoke_iiiiiiiidd:Ap,invoke_iiiiiiiii:Xd,invoke_iiiiiiiiid:Bp,invoke_iiiiiiiiii:mp,invoke_iiiiiiiiiidddiiiiiiiii:Fd,invoke_iiiiiiiiiii:dp,invoke_iiiiiiiiiiii:Yp,invoke_iiiiiiiiiiiii:Pp,invoke_iiij:_p,invoke_iiji:pp,invoke_j:$p,invoke_ji:Op,invoke_jiiii:vp,invoke_jij:Dp,invoke_v:ud,invoke_vi:ld,invoke_vid:up,invoke_viddd:yp,invoke_vidddd:Ep,invoke_vidi:qd,invoke_vidiii:Dd,invoke_vif:Gp,invoke_vii:dd,invoke_viid:Gd,invoke_viiddi:wp,invoke_viiddidi:Tp,invoke_viiddii:ep,invoke_viidi:Vd,invoke_viidii:Sd,invoke_viidiii:op,invoke_viidiiid:rp,invoke_viidiiiii:Ld,invoke_viidiiiiidi:ap,invoke_viidiiiiiiii:Pd,invoke_viii:ad,invoke_viiid:wd,invoke_viiidd:Mp,invoke_viiidi:Hd,invoke_viiididdddddd:sp,invoke_viiidiiiiiiii:ip,invoke_viiii:gd,invoke_viiiiddd:Sp,invoke_viiiidi:Hp,invoke_viiiifi:Vp,invoke_viiiii:fd,invoke_viiiiid:Td,invoke_viiiiii:_d,invoke_viiiiiii:Ed,invoke_viiiiiiii:Wd,invoke_viiiiiiiii:Rp,invoke_viiiiiiiiii:Up,invoke_viiiiiiiiiidddiiiiiiiii:np,invoke_viiiiiiiiiii:kp,invoke_viiiiiiiiiiid:bd,invoke_viiiiiiiiiiiii:Fp,invoke_viiiiiiiiiiiiii:Ip,invoke_viiiiiiiiiiiiiii:Kp,invoke_viiiiiiiiiiiiiiiiii:Np,invoke_viiiij:Wp,invoke_viiij:vd,invoke_viij:Xp,invoke_viijii:qp,invoke_vij:Lp,invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:xp,llvm_eh_typeid_for:Wf},Ti=await Ie();function od(r,s,c){var l=H();try{return Ee(r)(s,c)}catch(f){if(W(l),!(f instanceof w))throw f;ve(1,0)}}function ad(r,s,c,l){var f=H();try{Ee(r)(s,c,l)}catch(g){if(W(f),!(g instanceof w))throw g;ve(1,0)}}function cd(r,s){var c=H();try{return Ee(r)(s)}catch(l){if(W(c),!(l instanceof w))throw l;ve(1,0)}}function ld(r,s){var c=H();try{Ee(r)(s)}catch(l){if(W(c),!(l instanceof w))throw l;ve(1,0)}}function ud(r){var s=H();try{Ee(r)()}catch(c){if(W(s),!(c instanceof w))throw c;ve(1,0)}}function hd(r,s,c,l){var f=H();try{return Ee(r)(s,c,l)}catch(g){if(W(f),!(g instanceof w))throw g;ve(1,0)}}function fd(r,s,c,l,f,g){var T=H();try{Ee(r)(s,c,l,f,g)}catch(b){if(W(T),!(b instanceof w))throw b;ve(1,0)}}function dd(r,s,c){var l=H();try{Ee(r)(s,c)}catch(f){if(W(l),!(f instanceof w))throw f;ve(1,0)}}function pd(r,s,c,l,f,g){var T=H();try{return Ee(r)(s,c,l,f,g)}catch(b){if(W(T),!(b instanceof w))throw b;ve(1,0)}}function md(r){var s=H();try{return Ee(r)()}catch(c){if(W(s),!(c instanceof w))throw c;ve(1,0)}}function _d(r,s,c,l,f,g,T){var b=H();try{Ee(r)(s,c,l,f,g,T)}catch(F){if(W(b),!(F instanceof w))throw F;ve(1,0)}}function gd(r,s,c,l,f){var g=H();try{Ee(r)(s,c,l,f)}catch(T){if(W(g),!(T instanceof w))throw T;ve(1,0)}}function vd(r,s,c,l,f){var g=H();try{Ee(r)(s,c,l,f)}catch(T){if(W(g),!(T instanceof w))throw T;ve(1,0)}}function xd(r,s,c,l,f){var g=H();try{return Ee(r)(s,c,l,f)}catch(T){if(W(g),!(T instanceof w))throw T;ve(1,0)}}function yd(r,s,c,l){var f=H();try{return Ee(r)(s,c,l)}catch(g){if(W(f),!(g instanceof w))throw g;ve(1,0)}}function Ed(r,s,c,l,f,g,T,b){var F=H();try{Ee(r)(s,c,l,f,g,T,b)}catch(X){if(W(F),!(X instanceof w))throw X;ve(1,0)}}function Sd(r,s,c,l,f,g){var T=H();try{Ee(r)(s,c,l,f,g)}catch(b){if(W(T),!(b instanceof w))throw b;ve(1,0)}}function Md(r,s,c,l,f,g,T){var b=H();try{return Ee(r)(s,c,l,f,g,T)}catch(F){if(W(b),!(F instanceof w))throw F;ve(1,0)}}function Td(r,s,c,l,f,g,T){var b=H();try{Ee(r)(s,c,l,f,g,T)}catch(F){if(W(b),!(F instanceof w))throw F;ve(1,0)}}function wd(r,s,c,l,f){var g=H();try{Ee(r)(s,c,l,f)}catch(T){if(W(g),!(T instanceof w))throw T;ve(1,0)}}function bd(r,s,c,l,f,g,T,b,F,X,K,oe,_e){var ue=H();try{Ee(r)(s,c,l,f,g,T,b,F,X,K,oe,_e)}catch(xe){if(W(ue),!(xe instanceof w))throw xe;ve(1,0)}}function Ad(r,s,c,l,f,g,T,b,F,X){var K=H();try{return Ee(r)(s,c,l,f,g,T,b,F,X)}catch(oe){if(W(K),!(oe instanceof w))throw oe;ve(1,0)}}function Rd(r,s,c,l,f,g,T,b,F,X,K,oe,_e){var ue=H();try{return Ee(r)(s,c,l,f,g,T,b,F,X,K,oe,_e)}catch(xe){if(W(ue),!(xe instanceof w))throw xe;ve(1,0)}}function Cd(r,s,c,l,f,g,T){var b=H();try{return Ee(r)(s,c,l,f,g,T)}catch(F){if(W(b),!(F instanceof w))throw F;ve(1,0)}}function Pd(r,s,c,l,f,g,T,b,F,X,K,oe){var _e=H();try{Ee(r)(s,c,l,f,g,T,b,F,X,K,oe)}catch(ue){if(W(_e),!(ue instanceof w))throw ue;ve(1,0)}}function Dd(r,s,c,l,f,g){var T=H();try{Ee(r)(s,c,l,f,g)}catch(b){if(W(T),!(b instanceof w))throw b;ve(1,0)}}function Ld(r,s,c,l,f,g,T,b,F){var X=H();try{Ee(r)(s,c,l,f,g,T,b,F)}catch(K){if(W(X),!(K instanceof w))throw K;ve(1,0)}}function Fd(r,s,c,l,f,g,T,b,F,X,K,oe,_e,ue,xe,je,ut,ht,Ft,St,Jt,Gt){var tn=H();try{return Ee(r)(s,c,l,f,g,T,b,F,X,K,oe,_e,ue,xe,je,ut,ht,Ft,St,Jt,Gt)}catch(Lt){if(W(tn),!(Lt instanceof w))throw Lt;ve(1,0)}}function Id(r,s,c,l,f,g,T,b,F,X,K,oe){var _e=H();try{return Ee(r)(s,c,l,f,g,T,b,F,X,K,oe)}catch(ue){if(W(_e),!(ue instanceof w))throw ue;ve(1,0)}}function Ud(r,s,c,l,f,g,T){var b=H();try{return Ee(r)(s,c,l,f,g,T)}catch(F){if(W(b),!(F instanceof w))throw F;ve(1,0)}}function Nd(r,s,c,l,f,g,T,b,F,X,K,oe){var _e=H();try{return Ee(r)(s,c,l,f,g,T,b,F,X,K,oe)}catch(ue){if(W(_e),!(ue instanceof w))throw ue;ve(1,0)}}function Od(r,s,c,l,f,g){var T=H();try{return Ee(r)(s,c,l,f,g)}catch(b){if(W(T),!(b instanceof w))throw b;ve(1,0)}}function kd(r,s,c,l,f,g,T,b,F,X){var K=H();try{return Ee(r)(s,c,l,f,g,T,b,F,X)}catch(oe){if(W(K),!(oe instanceof w))throw oe;ve(1,0)}}function Bd(r,s,c,l){var f=H();try{return Ee(r)(s,c,l)}catch(g){if(W(f),!(g instanceof w))throw g;ve(1,0)}}function zd(r,s,c){var l=H();try{return Ee(r)(s,c)}catch(f){if(W(l),!(f instanceof w))throw f;ve(1,0)}}function Hd(r,s,c,l,f,g){var T=H();try{Ee(r)(s,c,l,f,g)}catch(b){if(W(T),!(b instanceof w))throw b;ve(1,0)}}function Vd(r,s,c,l,f){var g=H();try{Ee(r)(s,c,l,f)}catch(T){if(W(g),!(T instanceof w))throw T;ve(1,0)}}function Gd(r,s,c,l){var f=H();try{Ee(r)(s,c,l)}catch(g){if(W(f),!(g instanceof w))throw g;ve(1,0)}}function Wd(r,s,c,l,f,g,T,b,F){var X=H();try{Ee(r)(s,c,l,f,g,T,b,F)}catch(K){if(W(X),!(K instanceof w))throw K;ve(1,0)}}function Xd(r,s,c,l,f,g,T,b,F){var X=H();try{return Ee(r)(s,c,l,f,g,T,b,F)}catch(K){if(W(X),!(K instanceof w))throw K;ve(1,0)}}function $d(r,s,c,l,f,g,T){var b=H();try{return Ee(r)(s,c,l,f,g,T)}catch(F){if(W(b),!(F instanceof w))throw F;ve(1,0)}}function qd(r,s,c,l){var f=H();try{Ee(r)(s,c,l)}catch(g){if(W(f),!(g instanceof w))throw g;ve(1,0)}}function jd(r,s,c,l,f){var g=H();try{return Ee(r)(s,c,l,f)}catch(T){if(W(g),!(T instanceof w))throw T;ve(1,0)}}function Yd(r,s,c,l,f){var g=H();try{return Ee(r)(s,c,l,f)}catch(T){if(W(g),!(T instanceof w))throw T;ve(1,0)}}function Kd(r,s,c,l){var f=H();try{return Ee(r)(s,c,l)}catch(g){if(W(f),!(g instanceof w))throw g;ve(1,0)}}function Zd(r,s,c,l,f,g){var T=H();try{return Ee(r)(s,c,l,f,g)}catch(b){if(W(T),!(b instanceof w))throw b;ve(1,0)}}function Jd(r,s){var c=H();try{return Ee(r)(s)}catch(l){if(W(c),!(l instanceof w))throw l;ve(1,0)}}function Qd(r,s,c,l,f,g,T,b){var F=H();try{return Ee(r)(s,c,l,f,g,T,b)}catch(X){if(W(F),!(X instanceof w))throw X;ve(1,0)}}function ep(r,s,c,l,f,g,T){var b=H();try{Ee(r)(s,c,l,f,g,T)}catch(F){if(W(b),!(F instanceof w))throw F;ve(1,0)}}function tp(r,s,c,l,f,g,T,b,F,X,K,oe){var _e=H();try{return Ee(r)(s,c,l,f,g,T,b,F,X,K,oe)}catch(ue){if(W(_e),!(ue instanceof w))throw ue;ve(1,0)}}function np(r,s,c,l,f,g,T,b,F,X,K,oe,_e,ue,xe,je,ut,ht,Ft,St,Jt,Gt,tn){var Lt=H();try{Ee(r)(s,c,l,f,g,T,b,F,X,K,oe,_e,ue,xe,je,ut,ht,Ft,St,Jt,Gt,tn)}catch(ti){if(W(Lt),!(ti instanceof w))throw ti;ve(1,0)}}function ip(r,s,c,l,f,g,T,b,F,X,K,oe,_e){var ue=H();try{Ee(r)(s,c,l,f,g,T,b,F,X,K,oe,_e)}catch(xe){if(W(ue),!(xe instanceof w))throw xe;ve(1,0)}}function rp(r,s,c,l,f,g,T,b){var F=H();try{Ee(r)(s,c,l,f,g,T,b)}catch(X){if(W(F),!(X instanceof w))throw X;ve(1,0)}}function sp(r,s,c,l,f,g,T,b,F,X,K,oe,_e){var ue=H();try{Ee(r)(s,c,l,f,g,T,b,F,X,K,oe,_e)}catch(xe){if(W(ue),!(xe instanceof w))throw xe;ve(1,0)}}function op(r,s,c,l,f,g,T){var b=H();try{Ee(r)(s,c,l,f,g,T)}catch(F){if(W(b),!(F instanceof w))throw F;ve(1,0)}}function ap(r,s,c,l,f,g,T,b,F,X,K){var oe=H();try{Ee(r)(s,c,l,f,g,T,b,F,X,K)}catch(_e){if(W(oe),!(_e instanceof w))throw _e;ve(1,0)}}function cp(r,s,c,l,f,g,T,b){var F=H();try{return Ee(r)(s,c,l,f,g,T,b)}catch(X){if(W(F),!(X instanceof w))throw X;ve(1,0)}}function lp(r,s,c){var l=H();try{return Ee(r)(s,c)}catch(f){if(W(l),!(f instanceof w))throw f;ve(1,0)}}function up(r,s,c){var l=H();try{Ee(r)(s,c)}catch(f){if(W(l),!(f instanceof w))throw f;ve(1,0)}}function hp(r,s,c,l,f,g,T){var b=H();try{return Ee(r)(s,c,l,f,g,T)}catch(F){if(W(b),!(F instanceof w))throw F;ve(1,0)}}function fp(r,s){var c=H();try{return Ee(r)(s)}catch(l){if(W(c),!(l instanceof w))throw l;ve(1,0)}}function dp(r,s,c,l,f,g,T,b,F,X,K){var oe=H();try{return Ee(r)(s,c,l,f,g,T,b,F,X,K)}catch(_e){if(W(oe),!(_e instanceof w))throw _e;ve(1,0)}}function pp(r,s,c,l){var f=H();try{return Ee(r)(s,c,l)}catch(g){if(W(f),!(g instanceof w))throw g;ve(1,0)}}function mp(r,s,c,l,f,g,T,b,F,X){var K=H();try{return Ee(r)(s,c,l,f,g,T,b,F,X)}catch(oe){if(W(K),!(oe instanceof w))throw oe;ve(1,0)}}function _p(r,s,c,l){var f=H();try{return Ee(r)(s,c,l)}catch(g){if(W(f),!(g instanceof w))throw g;ve(1,0)}}function gp(r,s,c,l,f,g){var T=H();try{return Ee(r)(s,c,l,f,g)}catch(b){if(W(T),!(b instanceof w))throw b;ve(1,0)}}function vp(r,s,c,l,f){var g=H();try{return Ee(r)(s,c,l,f)}catch(T){if(W(g),!(T instanceof w))throw T;return ve(1,0),0n}}function xp(r,s,c,l,f,g,T,b,F,X,K,oe,_e,ue,xe,je,ut,ht,Ft,St,Jt,Gt,tn,Lt,ti,ls,em,tm,nm,im,rm,sm,om,am,cm,lm,um,hm,fm,dm,pm,mm,_m,gm,vm,xm,ym,Em,Sm,Mm,Tm,wm,bm,Am,Rm,Cm,Pm,Dm,Lm,Fm,Im,Um,Nm,Om,km,Bm,zm,Hm,Vm,Gm,Wm,Xm,$m,qm,jm,Ym,Km,Zm,Jm,Qm,e_,t_,n_,i_,r_,s_){var o_=H();try{Ee(r)(s,c,l,f,g,T,b,F,X,K,oe,_e,ue,xe,je,ut,ht,Ft,St,Jt,Gt,tn,Lt,ti,ls,em,tm,nm,im,rm,sm,om,am,cm,lm,um,hm,fm,dm,pm,mm,_m,gm,vm,xm,ym,Em,Sm,Mm,Tm,wm,bm,Am,Rm,Cm,Pm,Dm,Lm,Fm,Im,Um,Nm,Om,km,Bm,zm,Hm,Vm,Gm,Wm,Xm,$m,qm,jm,Ym,Km,Zm,Jm,Qm,e_,t_,n_,i_,r_,s_)}catch(el){if(W(o_),!(el instanceof w))throw el;ve(1,0)}}function yp(r,s,c,l,f){var g=H();try{Ee(r)(s,c,l,f)}catch(T){if(W(g),!(T instanceof w))throw T;ve(1,0)}}function Ep(r,s,c,l,f,g){var T=H();try{Ee(r)(s,c,l,f,g)}catch(b){if(W(T),!(b instanceof w))throw b;ve(1,0)}}function Sp(r,s,c,l,f,g,T,b){var F=H();try{Ee(r)(s,c,l,f,g,T,b)}catch(X){if(W(F),!(X instanceof w))throw X;ve(1,0)}}function Mp(r,s,c,l,f,g){var T=H();try{Ee(r)(s,c,l,f,g)}catch(b){if(W(T),!(b instanceof w))throw b;ve(1,0)}}function Tp(r,s,c,l,f,g,T,b){var F=H();try{Ee(r)(s,c,l,f,g,T,b)}catch(X){if(W(F),!(X instanceof w))throw X;ve(1,0)}}function wp(r,s,c,l,f,g){var T=H();try{Ee(r)(s,c,l,f,g)}catch(b){if(W(T),!(b instanceof w))throw b;ve(1,0)}}function bp(r,s,c,l,f,g){var T=H();try{return Ee(r)(s,c,l,f,g)}catch(b){if(W(T),!(b instanceof w))throw b;ve(1,0)}}function Ap(r,s,c,l,f,g,T,b,F,X){var K=H();try{return Ee(r)(s,c,l,f,g,T,b,F,X)}catch(oe){if(W(K),!(oe instanceof w))throw oe;ve(1,0)}}function Rp(r,s,c,l,f,g,T,b,F,X){var K=H();try{Ee(r)(s,c,l,f,g,T,b,F,X)}catch(oe){if(W(K),!(oe instanceof w))throw oe;ve(1,0)}}function Cp(r,s,c,l){var f=H();try{return Ee(r)(s,c,l)}catch(g){if(W(f),!(g instanceof w))throw g;ve(1,0)}}function Pp(r,s,c,l,f,g,T,b,F,X,K,oe,_e){var ue=H();try{return Ee(r)(s,c,l,f,g,T,b,F,X,K,oe,_e)}catch(xe){if(W(ue),!(xe instanceof w))throw xe;ve(1,0)}}function Dp(r,s,c){var l=H();try{return Ee(r)(s,c)}catch(f){if(W(l),!(f instanceof w))throw f;return ve(1,0),0n}}function Lp(r,s,c){var l=H();try{Ee(r)(s,c)}catch(f){if(W(l),!(f instanceof w))throw f;ve(1,0)}}function Fp(r,s,c,l,f,g,T,b,F,X,K,oe,_e,ue){var xe=H();try{Ee(r)(s,c,l,f,g,T,b,F,X,K,oe,_e,ue)}catch(je){if(W(xe),!(je instanceof w))throw je;ve(1,0)}}function Ip(r,s,c,l,f,g,T,b,F,X,K,oe,_e,ue,xe){var je=H();try{Ee(r)(s,c,l,f,g,T,b,F,X,K,oe,_e,ue,xe)}catch(ut){if(W(je),!(ut instanceof w))throw ut;ve(1,0)}}function Up(r,s,c,l,f,g,T,b,F,X,K){var oe=H();try{Ee(r)(s,c,l,f,g,T,b,F,X,K)}catch(_e){if(W(oe),!(_e instanceof w))throw _e;ve(1,0)}}function Np(r,s,c,l,f,g,T,b,F,X,K,oe,_e,ue,xe,je,ut,ht,Ft){var St=H();try{Ee(r)(s,c,l,f,g,T,b,F,X,K,oe,_e,ue,xe,je,ut,ht,Ft)}catch(Jt){if(W(St),!(Jt instanceof w))throw Jt;ve(1,0)}}function Op(r,s){var c=H();try{return Ee(r)(s)}catch(l){if(W(c),!(l instanceof w))throw l;return ve(1,0),0n}}function kp(r,s,c,l,f,g,T,b,F,X,K,oe){var _e=H();try{Ee(r)(s,c,l,f,g,T,b,F,X,K,oe)}catch(ue){if(W(_e),!(ue instanceof w))throw ue;ve(1,0)}}function Bp(r,s,c,l,f,g,T,b,F,X){var K=H();try{return Ee(r)(s,c,l,f,g,T,b,F,X)}catch(oe){if(W(K),!(oe instanceof w))throw oe;ve(1,0)}}function zp(r,s,c){var l=H();try{return Ee(r)(s,c)}catch(f){if(W(l),!(f instanceof w))throw f;ve(1,0)}}function Hp(r,s,c,l,f,g,T){var b=H();try{Ee(r)(s,c,l,f,g,T)}catch(F){if(W(b),!(F instanceof w))throw F;ve(1,0)}}function Vp(r,s,c,l,f,g,T){var b=H();try{Ee(r)(s,c,l,f,g,T)}catch(F){if(W(b),!(F instanceof w))throw F;ve(1,0)}}function Gp(r,s,c){var l=H();try{Ee(r)(s,c)}catch(f){if(W(l),!(f instanceof w))throw f;ve(1,0)}}function Wp(r,s,c,l,f,g){var T=H();try{Ee(r)(s,c,l,f,g)}catch(b){if(W(T),!(b instanceof w))throw b;ve(1,0)}}function Xp(r,s,c,l){var f=H();try{Ee(r)(s,c,l)}catch(g){if(W(f),!(g instanceof w))throw g;ve(1,0)}}function $p(r){var s=H();try{return Ee(r)()}catch(c){if(W(s),!(c instanceof w))throw c;return ve(1,0),0n}}function qp(r,s,c,l,f,g){var T=H();try{Ee(r)(s,c,l,f,g)}catch(b){if(W(T),!(b instanceof w))throw b;ve(1,0)}}function jp(r,s,c,l){var f=H();try{return Ee(r)(s,c,l)}catch(g){if(W(f),!(g instanceof w))throw g;ve(1,0)}}function Yp(r,s,c,l,f,g,T,b,F,X,K,oe){var _e=H();try{return Ee(r)(s,c,l,f,g,T,b,F,X,K,oe)}catch(ue){if(W(_e),!(ue instanceof w))throw ue;ve(1,0)}}function Kp(r,s,c,l,f,g,T,b,F,X,K,oe,_e,ue,xe,je){var ut=H();try{Ee(r)(s,c,l,f,g,T,b,F,X,K,oe,_e,ue,xe,je)}catch(ht){if(W(ut),!(ht instanceof w))throw ht;ve(1,0)}}var Kc;function Zp(){Vc(),j()}function vo(){if(me>0){Le=vo;return}if(Zp(),ce(),me>0){Le=vo;return}function r(){var s;D(!Kc),Kc=!0,t.calledRun=!0,!B&&(fe(),Oe==null||Oe(t),(s=t.onRuntimeInitialized)==null||s.call(t),te("onRuntimeInitialized"),D(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),Ce())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),r()},1)):r(),P()}function Jp(){var r=N,s=U,c=!1;N=U=l=>{c=!0};try{mo(0),["stdout","stderr"].forEach(l=>{var F;var f=M.analyzePath("/dev/"+l);if(f){var g=f.object,T=g.rdev,b=Ne.ttys[T];(F=b==null?void 0:b.output)!=null&&F.length&&(c=!0)}})}catch{}N=r,U=s,c&&ke("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}function Qp(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();te("preInit")}Qp(),vo(),vt?e=t:e=new Promise((r,s)=>{Oe=r,$e=s});for(const r of Object.keys(t))r in i||Object.defineProperty(i,r,{configurable:!0,get(){V(`Access to module property ('${r}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e},mn=Uint8Array,cr=Uint16Array,zE=Int32Array,Wu=new mn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Xu=new mn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),HE=new mn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),$u=function(i,e){for(var t=new cr(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var o=new zE(t[30]),n=1;n<30;++n)for(var a=t[n];a<t[n+1];++a)o[a]=a-t[n]<<5|n;return{b:t,r:o}},qu=$u(Wu,2),ju=qu.b,VE=qu.r;ju[28]=258,VE[258]=28;var GE=$u(Xu,0),WE=GE.b,ja=new cr(32768);for(var Ut=0;Ut<32768;++Ut){var ci=(Ut&43690)>>1|(Ut&21845)<<1;ci=(ci&52428)>>2|(ci&13107)<<2,ci=(ci&61680)>>4|(ci&3855)<<4,ja[Ut]=((ci&65280)>>8|(ci&255)<<8)>>1}var Lr=function(i,e,t){for(var n=i.length,o=0,a=new cr(e);o<n;++o)i[o]&&++a[i[o]-1];var u=new cr(e);for(o=1;o<e;++o)u[o]=u[o-1]+a[o-1]<<1;var h;if(t){h=new cr(1<<e);var p=15-e;for(o=0;o<n;++o)if(i[o])for(var d=o<<4|i[o],v=e-i[o],m=u[i[o]-1]++<<v,x=m|(1<<v)-1;m<=x;++m)h[ja[m]>>p]=d}else for(h=new cr(n),o=0;o<n;++o)i[o]&&(h[o]=ja[u[i[o]-1]++]>>15-i[o]);return h},Gr=new mn(288);for(var Ut=0;Ut<144;++Ut)Gr[Ut]=8;for(var Ut=144;Ut<256;++Ut)Gr[Ut]=9;for(var Ut=256;Ut<280;++Ut)Gr[Ut]=7;for(var Ut=280;Ut<288;++Ut)Gr[Ut]=8;var Yu=new mn(32);for(var Ut=0;Ut<32;++Ut)Yu[Ut]=5;var XE=Lr(Gr,9,1),$E=Lr(Yu,5,1),Jo=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Rn=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},Qo=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},qE=function(i){return(i+7)/8|0},uc=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new mn(i.subarray(e,t))},jE=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],dn=function(i,e,t){var n=new Error(e||jE[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,dn),!t)throw n;return n},YE=function(i,e,t,n){var o=i.length,a=n?n.length:0;if(!o||e.f&&!e.l)return t||new mn(0);var u=!t,h=u||e.i!=2,p=e.i;u&&(t=new mn(o*3));var d=function(st){var yt=t.length;if(st>yt){var k=new mn(Math.max(yt*2,st));k.set(t),t=k}},v=e.f||0,m=e.p||0,x=e.b||0,y=e.l,A=e.d,R=e.m,E=e.n,_=o*8;do{if(!y){v=Rn(i,m,1);var N=Rn(i,m+1,3);if(m+=3,N)if(N==1)y=XE,A=$E,R=9,E=5;else if(N==2){var D=Rn(i,m,31)+257,z=Rn(i,m+10,15)+4,j=D+Rn(i,m+5,31)+1;m+=14;for(var P=new mn(j),w=new mn(19),O=0;O<z;++O)w[HE[O]]=Rn(i,m+O*3,7);m+=z*3;for(var Y=Jo(w),te=(1<<Y)-1,Z=Lr(w,Y,1),O=0;O<j;){var he=Z[Rn(i,m,te)];m+=he&15;var U=he>>4;if(U<16)P[O++]=U;else{var re=0,ye=0;for(U==16?(ye=3+Rn(i,m,3),m+=2,re=P[O-1]):U==17?(ye=3+Rn(i,m,7),m+=3):U==18&&(ye=11+Rn(i,m,127),m+=7);ye--;)P[O++]=re}}var ne=P.subarray(0,D),ge=P.subarray(D);R=Jo(ne),E=Jo(ge),y=Lr(ne,R,1),A=Lr(ge,E,1)}else dn(1);else{var U=qE(m)+4,I=i[U-4]|i[U-3]<<8,B=U+I;if(B>o){p&&dn(0);break}h&&d(x+I),t.set(i.subarray(U,B),x),e.b=x+=I,e.p=m=B*8,e.f=v;continue}if(m>_){p&&dn(0);break}}h&&d(x+131072);for(var Re=(1<<R)-1,Oe=(1<<E)-1,$e=m;;$e=m){var re=y[Qo(i,m)&Re],nt=re>>4;if(m+=re&15,m>_){p&&dn(0);break}if(re||dn(2),nt<256)t[x++]=nt;else if(nt==256){$e=m,y=null;break}else{var Je=nt-254;if(nt>264){var O=nt-257,Ke=Wu[O];Je=Rn(i,m,(1<<Ke)-1)+ju[O],m+=Ke}var le=A[Qo(i,m)&Oe],pe=le>>4;le||dn(3),m+=le&15;var ge=WE[pe];if(pe>3){var Ke=Xu[pe];ge+=Qo(i,m)&(1<<Ke)-1,m+=Ke}if(m>_){p&&dn(0);break}h&&d(x+131072);var ae=x+Je;if(x<ge){var Me=a-ge,We=Math.min(ge,ae);for(Me+x<0&&dn(3);x<We;++x)t[x]=n[Me+x]}for(;x<ae;++x)t[x]=t[x-ge]}}e.l=y,e.p=$e,e.b=x,e.f=v,y&&(v=1,e.m=R,e.d=A,e.n=E)}while(!v);return x!=t.length&&u?uc(t,0,x):t.subarray(0,x)},KE=new mn(0),Bn=function(i,e){return i[e]|i[e+1]<<8},vn=function(i,e){return(i[e]|i[e+1]<<8|i[e+2]<<16|i[e+3]<<24)>>>0},ea=function(i,e){return vn(i,e)+vn(i,e+4)*4294967296};function ZE(i,e){return YE(i,{i:2},e&&e.out,e&&e.dictionary)}var Ya=typeof TextDecoder<"u"&&new TextDecoder,JE=0;try{Ya.decode(KE,{stream:!0}),JE=1}catch{}var QE=function(i){for(var e="",t=0;;){var n=i[t++],o=(n>127)+(n>223)+(n>239);if(t+o>i.length)return{s:e,r:uc(i,t-1)};o?o==3?(n=((n&15)<<18|(i[t++]&63)<<12|(i[t++]&63)<<6|i[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):o&1?e+=String.fromCharCode((n&31)<<6|i[t++]&63):e+=String.fromCharCode((n&15)<<12|(i[t++]&63)<<6|i[t++]&63):e+=String.fromCharCode(n)}};function eS(i,e){if(e){for(var t="",n=0;n<i.length;n+=16384)t+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return t}else{if(Ya)return Ya.decode(i);var o=QE(i),a=o.s,t=o.r;return t.length&&dn(8),a}}var tS=function(i,e){return e+30+Bn(i,e+26)+Bn(i,e+28)},nS=function(i,e,t){var n=Bn(i,e+28),o=Bn(i,e+30),a=eS(i.subarray(e+46,e+46+n),!(Bn(i,e+8)&2048)),u=e+46+n,h=iS(i,u,o,t,vn(i,e+20),vn(i,e+24),vn(i,e+42)),p=h[0],d=h[1],v=h[2];return[Bn(i,e+10),p,d,a,u+o+Bn(i,e+32),v]},iS=function(i,e,t,n,o,a,u){var h=o==4294967295,p=a==4294967295,d=u==4294967295,v=e+t,m=h+p+d;if(n&&m){for(;e+4<v;e+=4+Bn(i,e+2))if(Bn(i,e)==1)return[h?ea(i,e+4+8*p):o,p?ea(i,e+4):a,d?ea(i,e+4+8*(p+h)):u,1];n<2&&dn(13)}return[o,a,u,0]};function rS(i,e){for(var t={},n=i.length-22;vn(i,n)!=101010256;--n)(!n||i.length-n>65558)&&dn(13);var o=Bn(i,n+8);if(!o)return{};var a=vn(i,n+16),u=vn(i,n-20)==117853008;if(u){var h=vn(i,n-12);u=vn(i,h)==101075792,u&&(o=vn(i,h+32),a=vn(i,h+48))}for(var p=0;p<o;++p){var d=nS(i,a,u),v=d[0],m=d[1],x=d[2],y=d[3],A=d[4],R=d[5],E=tS(i,R);a=A,v?v==8?t[y]=ZE(i.subarray(E,E+m),{out:new mn(x)}):dn(14,"unknown compression type "+v):t[y]=uc(i,E,E+m)}return t}function sS(i){var E,_;if(i.length<12||String.fromCharCode(...i.subarray(0,6))!=="NUMPY")throw new Error("NPZ 中包含无效的 NPY 数组");const e=new DataView(i.buffer,i.byteOffset,i.byteLength),t=i[6],n=t===1?e.getUint16(8,!0):e.getUint32(8,!0),o=t===1?10:12,a=new TextDecoder(t===3?"utf-8":"latin1").decode(i.subarray(o,o+n)),u=(E=/['"]descr['"]\s*:\s*['"]([^'"]+)['"]/.exec(a))==null?void 0:E[1],h=(_=/['"]shape['"]\s*:\s*\(([^)]*)\)/.exec(a))==null?void 0:_[1];if(!u||h==null||/['"]fortran_order['"]\s*:\s*True/.test(a))throw new Error("不支持的 NPY 数组布局");const p=h.split(",").map(N=>N.trim()).filter(Boolean).map(Number);if(p.some(N=>!Number.isSafeInteger(N)||N<0))throw new Error("NPY 数组形状无效");const d=p.reduce((N,U)=>N*U,1),v=u.slice(1),m=u[0]!==">",y={f4:4,f8:8,i4:4,i8:8,u4:4,u8:8}[v];if(!y||o+n+d*y>i.length)throw new Error(`不支持或损坏的 NPY 数值类型：${u}`);const A=o+n,R=new Float64Array(d);for(let N=0;N<d;N++){const U=A+N*y;v==="f4"?R[N]=e.getFloat32(U,m):v==="f8"?R[N]=e.getFloat64(U,m):v==="i4"?R[N]=e.getInt32(U,m):v==="u4"?R[N]=e.getUint32(U,m):v==="i8"?R[N]=Number(e.getBigInt64(U,m)):R[N]=Number(e.getBigUint64(U,m))}return{shape:p,numbers:R}}function ta(i,e){return i.length===e.length&&i.every((t,n)=>e[n]==null||t===e[n])}function au(i,e,t){var R;const n=rS(new Uint8Array(i)),o=E=>n[`${E}.npy`]?sS(n[`${E}.npy`]):null,a=o("fps"),u=a==null?void 0:a.numbers[0];if(!Number.isFinite(u)||u<=0||u>1e3)throw new Error("NPZ 缺少有效的 fps");const h=n["body_pos_w.npy"]&&n["body_quat_w.npy"]&&n["joint_pos.npy"],p=n["body_positions.npy"]&&n["body_rotations.npy"]&&n["dof_positions.npy"];if(!h&&!p)throw new Error("仅支持 S17 tracking 或当前数据集的 raw retarget NPZ");const d=o(h?"body_pos_w":"body_positions"),v=o(h?"body_quat_w":"body_rotations"),m=o(h?"joint_pos":"dof_positions"),x=d.shape[0],y=d.shape[1];if(!Number.isSafeInteger(x)||x<1||x>1e5||!ta(d.shape,[x,y,3])||!ta(v.shape,[x,y,4])||!ta(m.shape,[x,21])||p&&y!==22||((R=e.joint_qposadr)==null?void 0:R.length)!==21)throw new Error("NPZ 帧数、底座或 21 个关节的形状不符合 S17 模型");const A=new Float32Array(x*e.nq);for(let E=0;E<x;E++){const _=E*e.nq;A.set(t,_);const N=E*y*3,U=E*y*4;for(let B=0;B<3;B++)A[_+e.root_qposadr+B]=d.numbers[N+B];const I=Math.hypot(...v.numbers.subarray(U,U+4));if(!Number.isFinite(I)||I<1e-6)throw new Error(`第 ${E+1} 帧四元数无效`);for(let B=0;B<4;B++)A[_+e.root_qposadr+3+B]=v.numbers[U+B]/I;for(let B=0;B<21;B++)A[_+e.joint_qposadr[B]]=m.numbers[E*21+B]}if(!A.every(Number.isFinite))throw new Error("NPZ 中存在 NaN 或无限大数值");return{frames:A,count:x,fps:u}}const Us=9.81,oS=.8;function aS(i){return Math.max(0,Math.min(1,i))}async function cS(i,e,t,n,o){const a=new i.MjData(e),u=new Set(t.foot_body_ids),h=Math.max(2,Math.round(n.fps*.08)),p=n.count-h*2;if(p<1)return a.delete(),null;const d=Math.min(120,p),v=e.body_mass.reduce((B,D)=>B+D,0);let m=0,x=0,y=0,A=0,R=0;function E(B){a.qpos.set(n.frames.subarray(B*t.nq,(B+1)*t.nq)),i.mj_forward(e,a);const D=[0,0,0];for(let z=1;z<e.nbody;z++){const j=e.body_mass[z];for(let P=0;P<3;P++)D[P]+=j*a.xipos[z*3+P]}return D.map(z=>z/v)}try{for(let B=0;B<d;B++){if(o())return null;const D=h+Math.floor(B*p/d),z=E(D-h),j=t.foot_body_ids.map(ge=>[a.xpos[ge*3],a.xpos[ge*3+1]]),P=E(D+h),w=t.foot_body_ids.map(ge=>[a.xpos[ge*3],a.xpos[ge*3+1]]),O=E(D),Y=h/n.fps,te=O.map((ge,Re)=>(z[Re]-2*ge+P[Re])/(Y*Y)),Z=new Set;let he=0;const re=a.contact;for(let ge=0;ge<re.size();ge++){const Re=re.get(ge),[Oe,$e]=Re.geom,nt=Oe===t.floor_geom_id?$e:$e===t.floor_geom_id?Oe:-1;nt>=0&&u.has(e.geom_bodyid[nt])&&(Z.add(e.geom_bodyid[nt]),he=Math.max(he,-Re.dist)),Re.delete()}re.delete();const ye=Math.hypot(te[0],te[1]),ne=te[2]+Us;if(Z.size){const ge=Math.max(0,ne),Re=Math.max(0,-ne)/Us,Oe=Math.max(0,ye-oS*ge)/Us;m+=Math.exp(-Re-Oe);let $e=0;for(const nt of Z){const Je=t.foot_body_ids.indexOf(nt);$e=Math.max($e,Math.hypot(w[Je][0]-j[Je][0],w[Je][1]-j[Je][1])/(2*Y))}R=Math.max(R,$e),x+=Math.exp(-Math.max(0,$e-.08)/.5),A++}else m+=Math.exp(-Math.hypot(ye,ne)/Us),x+=1;y+=Math.exp(-Math.max(0,he-.005)/.04),B%12===11&&await new Promise(ge=>setTimeout(ge,0))}}finally{a.delete()}const _=m/d,N=x/d,U=y/d;return{score:Math.round(100*aS(.65*_+.25*N+.1*U)),sampleCount:d,force:_,slip:N,penetration:U,contactSamples:A,worstSlip:R}}const Xs=document.querySelector("#status"),na=document.querySelector("#viewport"),nr=document.querySelector("#toggle"),ia=document.querySelector("#prevFrame"),ra=document.querySelector("#nextFrame"),ir=document.querySelector("#seek"),lS=document.querySelector("#time"),uS=document.querySelector("#frame"),rr=document.querySelector("#contactToggle"),Di=document.querySelector("#motionList"),li=document.querySelector("#libraryStatus"),Ns=document.querySelector("#baseHeight"),Os=document.querySelector("#credibility"),ks=document.querySelector("#credibilityScore"),cu=document.querySelector("#rightFootChart"),lu=document.querySelector("#imuRollChart");function hS(i){return new Promise((e,t)=>i.readEntries(e,t))}async function Ku(i,e=""){if(i.isFile){const o=await new Promise((a,u)=>i.file(a,u));return o.name.toLowerCase().endsWith(".npz")?[{file:o,path:e+o.name}]:[]}if(!i.isDirectory)return[];const t=i.createReader(),n=[];for(;;){const o=await hS(t);if(!o.length)break;for(const a of o)n.push(...await Ku(a,`${e}${i.name}/`))}return n}async function sr(i,e="arrayBuffer"){const t=new URL(`./${i}`,document.baseURI);t.searchParams.set("v",new URL(import.meta.url).pathname);const n=await fetch(t,{cache:"no-store"});if(!n.ok)throw new Error(`${i}: HTTP ${n.status}`);return n[e]()}function fS(i,e){const t=i.mesh_vertadr[e]*3,n=i.mesh_vertnum[e],o=i.mesh_faceadr[e]*3,a=i.mesh_facenum[e],u=Float32Array.from(i.mesh_vert.subarray(t,t+n*3)),h=Uint32Array.from(i.mesh_face.subarray(o,o+a*3)),p=new Fn;return p.setAttribute("position",new En(u,3)),p.setIndex(new En(h,1)),p.computeVertexNormals(),p}function uu(i=""){return{name:i,folders:new Map,files:[]}}function dS(i){const e=uu();for(const t of i){const n=t.path.split("/").filter(Boolean);let o=e;for(const a of n.slice(0,-1))o.folders.has(a)||o.folders.set(a,uu(a)),o=o.folders.get(a);o.files.push(t)}return e}function Zu(i){return i.files.length+Array.from(i.folders.values()).reduce((e,t)=>e+Zu(t),0)}async function pS(){const i=await sr("motion/meta.json","json"),e=await sr("motion/frames.bin"),t=new Float32Array(e);if(t.length!==i.frames*i.nq)throw new Error("动作数据长度与元数据不一致");Xs.textContent="正在加载 MuJoCo WASM 与机器人模型…";const n=await BE();for(const ce of["/working","/working/xml","/working/meshes"])n.FS.mkdir(ce);const o=await sr("model/xml/scene_flat.xml","text"),a=await sr("model/xml/biped_s17.xml","text");n.FS.writeFile("/working/xml/scene_flat.xml",o),n.FS.writeFile("/working/xml/biped_s17.xml",a),await Promise.all(i.meshes.map(async ce=>{const fe=await sr(`model/meshes/${encodeURIComponent(ce)}`);n.FS.writeFile(`/working/meshes/${ce}`,new Uint8Array(fe))}));const u=n.MjModel.mj_loadXML("/working/xml/scene_flat.xml"),h=new n.MjData(u);if(u.nq!==i.nq)throw new Error(`模型 nq=${u.nq}，动作 nq=${i.nq}`);const p=Float32Array.from(h.qpos),d=new Tg;d.background=new _t("#2d3a48"),d.add(new Lg(15135231,3820646,2));const v=new Ug(16777215,2.4);v.position.set(-2,-3,6),d.add(v);const m=new yn(new Vr(200,200),new Cl({color:4412771,roughness:1}));m.position.z=-.004,d.add(m);const x=new Og(20,40,8956349,5796743);x.rotateX(Math.PI/2),x.position.z=.001,d.add(x);const y=new xn(45,1,.02,100);y.up.set(0,0,1),y.position.set(2.1,-2.8,1.8);const A=new EE({antialias:!0});A.setPixelRatio(Math.min(window.devicePixelRatio,2)),A.outputColorSpace=pn,na.appendChild(A.domElement);const R=new ME(y,A.domElement);R.target.set(0,0,.85),R.enableDamping=!0,R.update();const E=new ot(0,0),_=()=>{const{width:ce,height:fe}=na.getBoundingClientRect();A.setSize(ce,fe,!1),y.aspect=ce/fe,y.updateProjectionMatrix()};new ResizeObserver(_).observe(na),_();const N=new Map,U=[],I=n.mjtGeom.mjGEOM_MESH.value;for(let ce=0;ce<u.ngeom;ce++){if(u.geom_type[ce]!==I||u.geom_group[ce]!==1)continue;const fe=u.geom_dataid[ce];N.has(fe)||N.set(fe,fS(u,fe));const Ce=Array.from(u.geom_rgba.subarray(ce*4,ce*4+4)),me=new Cl({color:new _t(Ce[0],Ce[1],Ce[2]),roughness:.65,metalness:.12,side:Cn}),Le=new yn(N.get(fe),me);d.add(Le),U.push([ce,Le])}if(!U.length)throw new Error("模型没有可显示的 S17 网格");const B=new ac(.016,.016,.004,18);B.rotateX(Math.PI/2);const D=new sc({color:16767830,side:Cn}),z=[],j=new Set(i.foot_body_ids);let P=!0;function w(){for(const Ce of z)Ce.visible=!1;if(!P)return;const ce=h.contact;let fe=0;for(let Ce=0;Ce<ce.size();Ce++){const me=ce.get(Ce),[Le,at]=me.geom,Ye=Le===i.floor_geom_id?at:at===i.floor_geom_id?Le:-1;if(Ye>=0&&j.has(u.geom_bodyid[Ye])){if(!z[fe]){const S=new yn(B,D);S.renderOrder=2,d.add(S),z.push(S)}const L=me.pos;z[fe].position.set(L[0],L[1],Math.max(.003,L[2]+.004)),z[fe].visible=!0,fe++}me.delete()}ce.delete(),rr.textContent=`接触点：开 (C) · ${fe}`}let O={frames:t,count:i.frames,fps:i.fps,name:i.source},Y=.77,te=0,Z=0,he=!1,re=performance.now(),ye=0,ne=null,ge=0;function Re(ce,fe,Ce,me){if(!(fe!=null&&fe.length))return;const Le=ce.getBoundingClientRect();if(!Le.width||!Le.height)return;const at=Math.min(window.devicePixelRatio,2),Ye=Math.round(Le.width*at),L=Math.round(Le.height*at);(ce.width!==Ye||ce.height!==L)&&(ce.width=Ye,ce.height=L);const S=ce.getContext("2d");S.setTransform(at,0,0,at,0,0),S.clearRect(0,0,Le.width,Le.height);const V={left:4,right:4,top:15,bottom:16},Q=Le.width-V.left-V.right,de=Le.height-V.top-V.bottom,se=me==="m"?Y-ne.baseHeight:0;let Be=1/0,Se=-1/0;for(const qe of fe)Be=Math.min(Be,qe+se),Se=Math.max(Se,qe+se);const He=Math.max(Se-Be,me==="m"?.02:2);Be-=He*.12,Se+=He*.12;const Ve=qe=>V.left+qe/Math.max(1,fe.length-1)*Q,Te=qe=>V.top+(Se-(qe+se))/(Se-Be)*de;S.strokeStyle="#dce9f0",S.lineWidth=1;for(let qe=0;qe<=2;qe++){const G=V.top+de*qe/2;S.beginPath(),S.moveTo(V.left,G),S.lineTo(Le.width-V.right,G),S.stroke()}S.strokeStyle=Ce,S.lineWidth=1.6,S.beginPath();const Ie=Math.max(1,Math.ceil(fe.length/Math.max(1,Q*2)));for(let qe=0;qe<fe.length;qe+=Ie){const G=Ve(qe),we=Te(fe[qe]);qe===0?S.moveTo(G,we):S.lineTo(G,we)}S.lineTo(Ve(fe.length-1),Te(fe[fe.length-1])),S.stroke();const Qe=Ve(Math.min(Z,fe.length-1));S.strokeStyle="#ed8b46",S.lineWidth=1,S.beginPath(),S.moveTo(Qe,V.top),S.lineTo(Qe,V.top+de),S.stroke(),S.fillStyle="#718899",S.font="10px system-ui",S.fillText(`${Se.toFixed(me==="m"?2:0)} ${me}`,V.left,10);const Xe=(fe.length-1)/O.fps;S.fillText("0",V.left,Le.height-3);const De=`${Xe.toFixed(1)} s`;S.fillText(De,Le.width-V.right-S.measureText(De).width,Le.height-3)}function Oe(){ne&&(Re(cu,ne.rightFootZ,"#388ab8","m"),Re(lu,ne.roll,"#ed8b46","°"))}async function $e(){const ce=++ge,fe=O,Ce=Y,me=new n.MjData(u),Le=i.foot_body_ids[1],at=new Float32Array(fe.count),Ye=new Float32Array(fe.count),L=i.root_qposadr+2;try{for(let S=0;S<fe.count;S++){if(ce!==ge)return;const V=S*i.nq;me.qpos.set(fe.frames.subarray(V,V+i.nq)),me.qpos[L]+=Ce-fe.frames[V+L],n.mj_forward(u,me),at[S]=me.xpos[Le*3+2];const Q=me.qpos[i.root_qposadr+3],de=me.qpos[i.root_qposadr+4],se=me.qpos[i.root_qposadr+5],Be=me.qpos[i.root_qposadr+6];Ye[S]=Math.atan2(2*(Q*de+se*Be),1-2*(de*de+se*se))*180/Math.PI,S%32===31&&await new Promise(Se=>setTimeout(Se,0))}if(ce!==ge)return;ne={rightFootZ:at,roll:Ye,baseHeight:Ce},Oe()}finally{me.delete()}}new ResizeObserver(Oe).observe(cu),new ResizeObserver(Oe).observe(lu);let nt=0;async function Je(){const ce=++nt,fe=O;ks.textContent="…",Os.title="正在抽样评估动作…",await new Promise(Ce=>setTimeout(Ce,0));try{const Ce=await cS(n,u,i,fe,()=>ce!==nt);if(ce!==nt)return;if(!Ce){ks.textContent="—",Os.title="动作太短，无法估计加速度";return}ks.textContent=`${Ce.score}%`,Os.title=`抽样 ${Ce.sampleCount} 帧 · 浮动机身受力 ${Math.round(Ce.force*100)}% · 脚底防滑 ${Math.round(Ce.slip*100)}% · 穿地检查 ${Math.round(Ce.penetration*100)}% · 接触帧 ${Ce.contactSamples}/${Ce.sampleCount}。仅供参考，非严格动力学验证。`}catch(Ce){if(ce!==nt)return;console.error("动力学可信度评估失败",Ce),ks.textContent="—",Os.title=`评估失败：${Ce.message}`}}ir.max=String(O.count-1),ir.disabled=!1,nr.disabled=!1,ia.disabled=!1,ra.disabled=!1,rr.disabled=!1,Xs.textContent=`${O.name} · ${O.fps} FPS · ${U.length} 个网格`,Di.querySelector("[data-default]").textContent=`内置示例 · ${i.source}`;function Ke(){h.qpos.set(O.frames.subarray(Z*i.nq,(Z+1)*i.nq));const ce=i.root_qposadr+2,fe=Y-O.frames[ce];h.qpos[ce]+=fe,n.mj_forward(u,h);const Ce=h.qpos[0]-E.x,me=h.qpos[1]-E.y;y.position.x+=Ce,y.position.y+=me,R.target.x+=Ce,R.target.y+=me,E.set(h.qpos[0],h.qpos[1]);const Le=fe-te;y.position.z+=Le,R.target.z+=Le,te=fe;for(const[at,Ye]of U){const L=at*3,S=at*9,V=h.geom_xpos,Q=h.geom_xmat;Ye.matrixAutoUpdate=!1,Ye.matrix.set(Q[S],Q[S+1],Q[S+2],V[L],Q[S+3],Q[S+4],Q[S+5],V[L+1],Q[S+6],Q[S+7],Q[S+8],V[L+2],0,0,0,1),Ye.matrixWorldNeedsUpdate=!0}w(),ir.value=String(Z),lS.textContent=`${(Z/O.fps).toFixed(2)} / ${((O.count-1)/O.fps).toFixed(2)} s`,uS.textContent=`${Z+1} / ${O.count}`,ia.disabled=Z===0,ra.disabled=Z===O.count-1,Oe()}function le(ce){he=ce,nr.classList.toggle("is-playing",he),nr.setAttribute("aria-label",he?"暂停（空格）":"播放（空格）"),nr.setAttribute("title",he?"暂停（空格）":"播放（空格）"),nr.setAttribute("aria-pressed",String(he)),re=performance.now(),ye=0}function pe(ce){le(!1),Z=Math.max(0,Math.min(O.count-1,Z+ce)),Ke()}nr.addEventListener("click",()=>le(!he)),ia.addEventListener("click",()=>pe(-1)),ra.addEventListener("click",()=>pe(1)),rr.addEventListener("click",()=>{P=!P,rr.setAttribute("aria-pressed",String(P)),rr.textContent=P?"接触点：开 (C)":"接触点：关 (C)",w()}),Ns.addEventListener("change",()=>{const ce=Number(Ns.value);if(!Ns.value||!Number.isFinite(ce)||ce<0||ce>3){Ns.value=String(Y);return}Y=ce,Ke(),Oe()}),ir.addEventListener("input",()=>{le(!1),Z=Number(ir.value),Ke()}),window.addEventListener("keydown",ce=>{ce.target instanceof HTMLInputElement||(ce.code==="Space"&&(ce.preventDefault(),ce.repeat||le(!he)),ce.code==="KeyC"&&rr.click(),(ce.code==="ArrowRight"||ce.code==="ArrowLeft")&&(ce.preventDefault(),pe(ce.code==="ArrowRight"?1:-1)))});let ae=0;function Me(ce,fe,Ce,me){O={...ce,name:fe},Z=0,ir.max=String(O.count-1),Xs.textContent=`${O.name} · ${O.fps} FPS · ${U.length} 个网格`,Di.querySelectorAll("button").forEach(Le=>Le.classList.remove("active")),Ce.classList.add("active"),Ke(),le(!0),li.textContent=me,Je(),$e()}async function We(ce,fe){const Ce=++ae;le(!1),li.textContent=`正在读取 ${ce.path}…`;try{const me=await au(await ce.file.arrayBuffer(),i,p);if(Ce!==ae)return;Me(me,ce.file.name,fe,`已加载 ${me.count} 帧 · ${ce.path}`)}catch(me){if(Ce!==ae)return;console.error(me),li.textContent=`加载失败：${me.message}`}}function st(ce){const fe=ce.filter(Ye=>Ye.file.name.toLowerCase().endsWith(".npz")).sort((Ye,L)=>Ye.path.localeCompare(L.path,"zh-CN"));Di.querySelectorAll("[data-local]").forEach(Ye=>Ye.remove());const Ce=(Ye,L)=>Ye.localeCompare(L,"zh-CN",{numeric:!0});function me(Ye,L){const S=document.createElement("li"),V=document.createElement("button");return V.textContent=L.file.name,V.title=L.path,V.addEventListener("click",()=>We(L,V)),S.appendChild(V),Ye.appendChild(S),S}function Le(Ye,L,S){const V=document.createElement("li"),Q=document.createElement("details");Q.open=S===0;const de=document.createElement("summary");de.append(document.createTextNode(L.name));const se=document.createElement("span");se.className="count",se.textContent=String(Zu(L)),de.appendChild(se),Q.appendChild(de);const Be=document.createElement("ul");for(const Se of Array.from(L.folders.values()).sort((He,Ve)=>Ce(He.name,Ve.name)))Le(Be,Se,S+1);for(const Se of L.files.sort((He,Ve)=>Ce(He.file.name,Ve.file.name)))me(Be,Se);return Q.appendChild(Be),V.appendChild(Q),Ye.appendChild(V),V}const at=dS(fe);for(const Ye of Array.from(at.folders.values()).sort((L,S)=>Ce(L.name,S.name)))Le(Di,Ye,0).dataset.local="true";for(const Ye of at.files.sort((L,S)=>Ce(L.file.name,S.file.name)))me(Di,Ye).dataset.local="true";li.textContent=fe.length?`找到 ${fe.length} 个 NPZ，点击文件名播放`:"没有找到 NPZ 文件"}const yt=document.querySelector("#fileInput"),k=document.querySelector("#folderInput");document.querySelector("#chooseFiles").addEventListener("click",()=>yt.click()),document.querySelector("#chooseFolder").addEventListener("click",()=>k.click());for(const ce of[yt,k])ce.addEventListener("change",()=>{st(Array.from(ce.files,fe=>({file:fe,path:fe.webkitRelativePath||fe.name}))),ce.value=""});window.addEventListener("dragover",ce=>{ce.preventDefault(),document.body.classList.add("dragging")}),window.addEventListener("dragleave",ce=>{ce.relatedTarget||document.body.classList.remove("dragging")}),window.addEventListener("drop",async ce=>{ce.preventDefault(),document.body.classList.remove("dragging");const fe=Array.from(ce.dataTransfer.items,Ce=>{var me;return(me=Ce.webkitGetAsEntry)==null?void 0:me.call(Ce)}).filter(Boolean);if(!fe.length){st(Array.from(ce.dataTransfer.files,Ce=>({file:Ce,path:Ce.name})));return}li.textContent="正在扫描文件夹…";try{const Ce=(await Promise.all(fe.map(me=>Ku(me)))).flat();st(Ce)}catch(Ce){li.textContent=`读取文件夹失败：${Ce.message}`}}),Di.querySelector("[data-default]").addEventListener("click",ce=>{ae++,Me({frames:t,count:i.frames,fps:i.fps},i.source,ce.currentTarget,"内置示例已就绪")});let vt;Di.querySelector("[data-second]").addEventListener("click",async ce=>{const fe=ce.currentTarget,Ce=++ae;le(!1),li.textContent="正在读取 105_50fps.npz…";try{vt??(vt=sr("motion/105_50fps.npz").then(Le=>au(Le,i,p)));const me=await vt;if(Ce!==ae)return;Me(me,"105_50fps.npz",fe,`已加载 ${me.count} 帧 · 内置示例`)}catch(me){if(vt=null,Ce!==ae)return;console.error(me),li.textContent=`加载失败：${me.message}`}}),Ke(),le(!0),Je(),$e();function it(ce){if(requestAnimationFrame(it),he){ye+=Math.min((ce-re)/1e3,.25);const fe=Math.floor(ye*O.fps);fe&&(Z=(Z+fe)%O.count,ye-=fe/O.fps,Ke())}re=ce,R.update(),A.render(d,y)}requestAnimationFrame(it)}pS().catch(i=>{console.error(i),Xs.textContent=`加载失败：${i.message}`});const mS=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));

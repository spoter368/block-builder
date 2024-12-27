(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jo="171",yi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xc=0,Sa=1,Yc=2,Yl=1,qc=2,dn=3,Dn=0,Le=1,Me=2,Pn=0,Ei=1,ya=2,Ea=3,Ta=4,jc=5,Wn=100,Zc=101,Kc=102,$c=103,Jc=104,Qc=200,th=201,eh=202,nh=203,Qr=204,to=205,ih=206,sh=207,rh=208,oh=209,ah=210,lh=211,ch=212,hh=213,uh=214,eo=0,no=1,io=2,Ri=3,so=4,ro=5,oo=6,ao=7,Zo=0,fh=1,dh=2,Ln=0,ph=1,mh=2,_h=3,gh=4,vh=5,xh=6,Mh=7,ql=300,Ci=301,Pi=302,lo=303,co=304,lr=306,ho=1e3,Yn=1001,uo=1002,Qe=1003,Sh=1004,fs=1005,en=1006,pr=1007,qn=1008,xn=1009,jl=1010,Zl=1011,ts=1012,Ko=1013,jn=1014,pn=1015,os=1016,$o=1017,Jo=1018,Li=1020,Kl=35902,$l=1021,Jl=1022,Je=1023,Ql=1024,tc=1025,Ti=1026,Di=1027,ec=1028,Qo=1029,nc=1030,ta=1031,ea=1033,qs=33776,js=33777,Zs=33778,Ks=33779,fo=35840,po=35841,mo=35842,_o=35843,go=36196,vo=37492,xo=37496,Mo=37808,So=37809,yo=37810,Eo=37811,To=37812,bo=37813,Ao=37814,wo=37815,Ro=37816,Co=37817,Po=37818,Lo=37819,Do=37820,Uo=37821,$s=36492,Io=36494,No=36495,ic=36283,Fo=36284,Oo=36285,Bo=36286,yh=3200,Eh=3201,na=0,Th=1,Rn="",Oe="srgb",Ui="srgb-linear",er="linear",Qt="srgb",ii=7680,ba=519,bh=512,Ah=513,wh=514,sc=515,Rh=516,Ch=517,Ph=518,Lh=519,Aa=35044,wa="300 es",mn=2e3,nr=2001;class Qn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ra=1234567;const bi=Math.PI/180,es=180/Math.PI;function ti(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[i&255]+ye[i>>8&255]+ye[i>>16&255]+ye[i>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function Vt(i,t,e){return Math.max(t,Math.min(e,i))}function ia(i,t){return(i%t+t)%t}function Dh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Uh(i,t,e){return i!==t?(e-i)/(t-i):0}function Zi(i,t,e){return(1-e)*i+e*t}function Ih(i,t,e,n){return Zi(i,t,1-Math.exp(-e*n))}function Nh(i,t=1){return t-Math.abs(ia(i,t*2)-t)}function Fh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Oh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Bh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function zh(i,t){return i+Math.random()*(t-i)}function Hh(i){return i*(.5-Math.random())}function Vh(i){i!==void 0&&(Ra=i);let t=Ra+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kh(i){return i*bi}function Gh(i){return i*es}function Wh(i){return(i&i-1)===0&&i!==0}function Xh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qh(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),p=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*_,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*_,a*c);break;case"ZYZ":i.set(l*_,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const jh={DEG2RAD:bi,RAD2DEG:es,generateUUID:ti,clamp:Vt,euclideanModulo:ia,mapLinear:Dh,inverseLerp:Uh,lerp:Zi,damp:Ih,pingpong:Nh,smoothstep:Fh,smootherstep:Oh,randInt:Bh,randFloat:zh,randFloatSpread:Hh,seededRandom:Vh,degToRad:kh,radToDeg:Gh,isPowerOfTwo:Wh,ceilPowerOfTwo:Xh,floorPowerOfTwo:Yh,setQuaternionFromProperEuler:qh,normalize:Ae,denormalize:gi};class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,n,s,r,o,a,l,c){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],_=n[8],g=s[0],m=s[3],d=s[6],R=s[1],E=s[4],x=s[7],P=s[2],y=s[5],A=s[8];return r[0]=o*g+a*R+l*P,r[3]=o*m+a*E+l*y,r[6]=o*d+a*x+l*A,r[1]=c*g+h*R+u*P,r[4]=c*m+h*E+u*y,r[7]=c*d+h*x+u*A,r[2]=f*g+p*R+_*P,r[5]=f*m+p*E+_*y,r[8]=f*d+p*x+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,_=e*u+n*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(s*c-h*n)*g,t[2]=(a*n-s*o)*g,t[3]=f*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-a*e)*g,t[6]=p*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(mr.makeScale(t,e)),this}rotate(t){return this.premultiply(mr.makeRotation(-t)),this}translate(t,e){return this.premultiply(mr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const mr=new Bt;function rc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zh(){const i=ir("canvas");return i.style.display="block",i}const Ca={};function vi(i){i in Ca||(Ca[i]=!0,console.warn(i))}function Kh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function $h(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Jh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Pa=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),La=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qh(){const i={enabled:!0,workingColorSpace:Ui,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Qt&&(s.r=gn(s.r),s.g=gn(s.g),s.b=gn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Qt&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Rn?er:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ui]:{primaries:t,whitePoint:n,transfer:er,toXYZ:Pa,fromXYZ:La,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:t,whitePoint:n,transfer:Qt,toXYZ:Pa,fromXYZ:La,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}}),i}const jt=Qh();function gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ai(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let si;class tu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{si===void 0&&(si=ir("canvas")),si.width=t.width,si.height=t.height;const n=si.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=si}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ir("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gn(e[n]/255)*255):e[n]=gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let eu=0;class oc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=ti(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(_r(s[o].image)):r.push(_r(s[o]))}else r=_r(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function _r(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?tu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nu=0;class De extends Qn{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=Yn,s=Yn,r=en,o=qn,a=Je,l=xn,c=De.DEFAULT_ANISOTROPY,h=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=ti(),this.name="",this.source=new oc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ql)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ho:t.x=t.x-Math.floor(t.x);break;case Yn:t.x=t.x<0?0:1;break;case uo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ho:t.y=t.y-Math.floor(t.y);break;case Yn:t.y=t.y<0?0:1;break;case uo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=ql;De.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,s=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],_=l[9],g=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,x=(p+1)/2,P=(d+1)/2,y=(h+f)/4,A=(u+g)/4,C=(_+m)/4;return E>x&&E>P?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=y/n,r=A/n):x>P?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=y/s,r=C/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=A/r,s=C/r),this.set(n,s,r,e),this}let R=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(R)<.001&&(R=1),this.x=(m-_)/R,this.y=(u-g)/R,this.z=(f-h)/R,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iu extends Qn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new De(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new oc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends iu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ac extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class su extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],p=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==f||c!==p||h!==_){let m=1-a;const d=l*f+c*p+h*_+u*g,R=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const P=Math.sqrt(E),y=Math.atan2(P,d*R);m=Math.sin(m*y)/P,a=Math.sin(a*y)/P}const x=a*R;if(l=l*m+f*x,c=c*m+p*x,h=h*m+_*x,u=u*m+g*x,m===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],_=r[o+3];return t[e]=a*_+h*u+l*p-c*f,t[e+1]=l*_+h*f+c*u-a*p,t[e+2]=c*_+h*p+a*f-l*u,t[e+3]=h*_-a*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*_,this._y=c*p*u-f*h*_,this._z=c*h*_+f*p*u,this._w=c*h*u-f*p*_;break;case"YXZ":this._x=f*h*u+c*p*_,this._y=c*p*u-f*h*_,this._z=c*h*_-f*p*u,this._w=c*h*u+f*p*_;break;case"ZXY":this._x=f*h*u-c*p*_,this._y=c*p*u+f*h*_,this._z=c*h*_+f*p*u,this._w=c*h*u-f*p*_;break;case"ZYX":this._x=f*h*u-c*p*_,this._y=c*p*u+f*h*_,this._z=c*h*_-f*p*u,this._w=c*h*u+f*p*_;break;case"YZX":this._x=f*h*u+c*p*_,this._y=c*p*u+f*h*_,this._z=c*h*_-f*p*u,this._w=c*h*u-f*p*_;break;case"XZY":this._x=f*h*u-c*p*_,this._y=c*p*u-f*h*_,this._z=c*h*_+f*p*u,this._w=c*h*u+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Da.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Da.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return gr.copy(this).projectOnVector(t),this.sub(gr)}reflect(t){return this.sub(gr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gr=new D,Da=new Kn;class Bi{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,je):je.fromBufferAttribute(r,o),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ds.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ds.copy(n.boundingBox)),ds.applyMatrix4(t.matrixWorld),this.union(ds)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ki),ps.subVectors(this.max,ki),ri.subVectors(t.a,ki),oi.subVectors(t.b,ki),ai.subVectors(t.c,ki),Sn.subVectors(oi,ri),yn.subVectors(ai,oi),On.subVectors(ri,ai);let e=[0,-Sn.z,Sn.y,0,-yn.z,yn.y,0,-On.z,On.y,Sn.z,0,-Sn.x,yn.z,0,-yn.x,On.z,0,-On.x,-Sn.y,Sn.x,0,-yn.y,yn.x,0,-On.y,On.x,0];return!vr(e,ri,oi,ai,ps)||(e=[1,0,0,0,1,0,0,0,1],!vr(e,ri,oi,ai,ps))?!1:(ms.crossVectors(Sn,yn),e=[ms.x,ms.y,ms.z],vr(e,ri,oi,ai,ps))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(an),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const an=[new D,new D,new D,new D,new D,new D,new D,new D],je=new D,ds=new Bi,ri=new D,oi=new D,ai=new D,Sn=new D,yn=new D,On=new D,ki=new D,ps=new D,ms=new D,Bn=new D;function vr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Bn.fromArray(i,r);const a=s.x*Math.abs(Bn.x)+s.y*Math.abs(Bn.y)+s.z*Math.abs(Bn.z),l=t.dot(Bn),c=e.dot(Bn),h=n.dot(Bn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const ru=new Bi,Gi=new D,xr=new D;class as{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ru.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gi.subVectors(t,this.center);const e=Gi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Gi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gi.copy(t.center).add(xr)),this.expandByPoint(Gi.copy(t.center).sub(xr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new D,Mr=new D,_s=new D,En=new D,Sr=new D,gs=new D,yr=new D;class ls{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Mr.copy(t).add(e).multiplyScalar(.5),_s.copy(e).sub(t).normalize(),En.copy(this.origin).sub(Mr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(_s),a=En.dot(this.direction),l=-En.dot(_s),c=En.lengthSq(),h=Math.abs(1-o*o);let u,f,p,_;if(h>0)if(u=o*l-a,f=o*a-l,_=r*h,u>=0)if(f>=-_)if(f<=_){const g=1/h;u*=g,f*=g,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Mr).addScaledVector(_s,f),p}intersectSphere(t,e){ln.subVectors(t.center,this.origin);const n=ln.dot(this.direction),s=ln.dot(ln)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,n,s,r){Sr.subVectors(e,t),gs.subVectors(n,t),yr.crossVectors(Sr,gs);let o=this.direction.dot(yr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;En.subVectors(this.origin,t);const l=a*this.direction.dot(gs.crossVectors(En,gs));if(l<0)return null;const c=a*this.direction.dot(Sr.cross(En));if(c<0||l+c>o)return null;const h=-a*En.dot(yr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,s,r,o,a,l,c,h,u,f,p,_,g,m){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,p,_,g,m)}set(t,e,n,s,r,o,a,l,c,h,u,f,p,_,g,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=_,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/li.setFromMatrixColumn(t,0).length(),r=1/li.setFromMatrixColumn(t,1).length(),o=1/li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,p=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+_*c,e[5]=f-g*c,e[9]=-a*l,e[2]=g-f*c,e[6]=_+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,p=l*u,_=c*h,g=c*u;e[0]=f+g*a,e[4]=_*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-_,e[6]=g+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,p=l*u,_=c*h,g=c*u;e[0]=f-g*a,e[4]=-o*u,e[8]=_+p*a,e[1]=p+_*a,e[5]=o*h,e[9]=g-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,p=o*u,_=a*h,g=a*u;e[0]=l*h,e[4]=_*c-p,e[8]=f*c+g,e[1]=l*u,e[5]=g*c+f,e[9]=p*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=g-f*u,e[8]=_*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+_,e[10]=f-g*u}else if(t.order==="XZY"){const f=o*l,p=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+g,e[5]=o*h,e[9]=p*u-_,e[2]=_*u-p,e[6]=a*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ou,t,au)}lookAt(t,e,n){const s=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),Tn.crossVectors(n,Ne),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),Tn.crossVectors(n,Ne)),Tn.normalize(),vs.crossVectors(Ne,Tn),s[0]=Tn.x,s[4]=vs.x,s[8]=Ne.x,s[1]=Tn.y,s[5]=vs.y,s[9]=Ne.y,s[2]=Tn.z,s[6]=vs.z,s[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],_=n[2],g=n[6],m=n[10],d=n[14],R=n[3],E=n[7],x=n[11],P=n[15],y=s[0],A=s[4],C=s[8],T=s[12],S=s[1],L=s[5],H=s[9],O=s[13],W=s[2],j=s[6],G=s[10],$=s[14],V=s[3],at=s[7],mt=s[11],St=s[15];return r[0]=o*y+a*S+l*W+c*V,r[4]=o*A+a*L+l*j+c*at,r[8]=o*C+a*H+l*G+c*mt,r[12]=o*T+a*O+l*$+c*St,r[1]=h*y+u*S+f*W+p*V,r[5]=h*A+u*L+f*j+p*at,r[9]=h*C+u*H+f*G+p*mt,r[13]=h*T+u*O+f*$+p*St,r[2]=_*y+g*S+m*W+d*V,r[6]=_*A+g*L+m*j+d*at,r[10]=_*C+g*H+m*G+d*mt,r[14]=_*T+g*O+m*$+d*St,r[3]=R*y+E*S+x*W+P*V,r[7]=R*A+E*L+x*j+P*at,r[11]=R*C+E*H+x*G+P*mt,r[15]=R*T+E*O+x*$+P*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],_=t[3],g=t[7],m=t[11],d=t[15];return _*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*p-n*l*p)+g*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+d*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],_=t[12],g=t[13],m=t[14],d=t[15],R=u*m*c-g*f*c+g*l*p-a*m*p-u*l*d+a*f*d,E=_*f*c-h*m*c-_*l*p+o*m*p+h*l*d-o*f*d,x=h*g*c-_*u*c+_*a*p-o*g*p-h*a*d+o*u*d,P=_*u*l-h*g*l-_*a*f+o*g*f+h*a*m-o*u*m,y=e*R+n*E+s*x+r*P;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/y;return t[0]=R*A,t[1]=(g*f*r-u*m*r-g*s*p+n*m*p+u*s*d-n*f*d)*A,t[2]=(a*m*r-g*l*r+g*s*c-n*m*c-a*s*d+n*l*d)*A,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*p-n*l*p)*A,t[4]=E*A,t[5]=(h*m*r-_*f*r+_*s*p-e*m*p-h*s*d+e*f*d)*A,t[6]=(_*l*r-o*m*r-_*s*c+e*m*c+o*s*d-e*l*d)*A,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*p+e*l*p)*A,t[8]=x*A,t[9]=(_*u*r-h*g*r-_*n*p+e*g*p+h*n*d-e*u*d)*A,t[10]=(o*g*r-_*a*r+_*n*c-e*g*c-o*n*d+e*a*d)*A,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*A,t[12]=P*A,t[13]=(h*g*s-_*u*s+_*n*f-e*g*f-h*n*m+e*u*m)*A,t[14]=(_*a*s-o*g*s-_*n*l+e*g*l+o*n*m-e*a*m)*A,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,_=r*u,g=o*h,m=o*u,d=a*u,R=l*c,E=l*h,x=l*u,P=n.x,y=n.y,A=n.z;return s[0]=(1-(g+d))*P,s[1]=(p+x)*P,s[2]=(_-E)*P,s[3]=0,s[4]=(p-x)*y,s[5]=(1-(f+d))*y,s[6]=(m+R)*y,s[7]=0,s[8]=(_+E)*A,s[9]=(m-R)*A,s[10]=(1-(f+g))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=li.set(s[0],s[1],s[2]).length();const o=li.set(s[4],s[5],s[6]).length(),a=li.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ze.copy(this);const c=1/r,h=1/o,u=1/a;return Ze.elements[0]*=c,Ze.elements[1]*=c,Ze.elements[2]*=c,Ze.elements[4]*=h,Ze.elements[5]*=h,Ze.elements[6]*=h,Ze.elements[8]*=u,Ze.elements[9]*=u,Ze.elements[10]*=u,e.setFromRotationMatrix(Ze),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=mn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let p,_;if(a===mn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===nr)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=mn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,p=(n+s)*h;let _,g;if(a===mn)_=(o+r)*u,g=-2*u;else if(a===nr)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const li=new D,Ze=new ne,ou=new D(0,0,0),au=new D(1,1,1),Tn=new D,vs=new D,Ne=new D,Ua=new ne,Ia=new Kn;class Be{constructor(t=0,e=0,n=0,s=Be.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ua.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ua,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ia.setFromEuler(this),this.setFromQuaternion(Ia,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Be.DEFAULT_ORDER="XYZ";class sa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lu=0;const Na=new D,ci=new Kn,cn=new ne,xs=new D,Wi=new D,cu=new D,hu=new Kn,Fa=new D(1,0,0),Oa=new D(0,1,0),Ba=new D(0,0,1),za={type:"added"},uu={type:"removed"},hi={type:"childadded",child:null},Er={type:"childremoved",child:null};class pe extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DEFAULT_UP.clone();const t=new D,e=new Be,n=new Kn,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new Bt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.multiply(ci),this}rotateOnWorldAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.premultiply(ci),this}rotateX(t){return this.rotateOnAxis(Fa,t)}rotateY(t){return this.rotateOnAxis(Oa,t)}rotateZ(t){return this.rotateOnAxis(Ba,t)}translateOnAxis(t,e){return Na.copy(t).applyQuaternion(this.quaternion),this.position.add(Na.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fa,t)}translateY(t){return this.translateOnAxis(Oa,t)}translateZ(t){return this.translateOnAxis(Ba,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xs.copy(t):xs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Wi,xs,this.up):cn.lookAt(xs,Wi,this.up),this.quaternion.setFromRotationMatrix(cn),s&&(cn.extractRotation(s.matrixWorld),ci.setFromRotationMatrix(cn),this.quaternion.premultiply(ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(za),hi.child=t,this.dispatchEvent(hi),hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(uu),Er.child=t,this.dispatchEvent(Er),Er.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(za),hi.child=t,this.dispatchEvent(hi),hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,t,cu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,hu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}pe.DEFAULT_UP=new D(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ke=new D,hn=new D,Tr=new D,un=new D,ui=new D,fi=new D,Ha=new D,br=new D,Ar=new D,wr=new D,Rr=new ce,Cr=new ce,Pr=new ce;class Xe{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ke.subVectors(t,e),s.cross(Ke);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ke.subVectors(s,e),hn.subVectors(n,e),Tr.subVectors(t,e);const o=Ke.dot(Ke),a=Ke.dot(hn),l=Ke.dot(Tr),c=hn.dot(hn),h=hn.dot(Tr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,un.x),l.addScaledVector(o,un.y),l.addScaledVector(a,un.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Rr.setScalar(0),Cr.setScalar(0),Pr.setScalar(0),Rr.fromBufferAttribute(t,e),Cr.fromBufferAttribute(t,n),Pr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Rr,r.x),o.addScaledVector(Cr,r.y),o.addScaledVector(Pr,r.z),o}static isFrontFacing(t,e,n,s){return Ke.subVectors(n,e),hn.subVectors(t,e),Ke.cross(hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Ke.cross(hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Xe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Xe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ui.subVectors(s,n),fi.subVectors(r,n),br.subVectors(t,n);const l=ui.dot(br),c=fi.dot(br);if(l<=0&&c<=0)return e.copy(n);Ar.subVectors(t,s);const h=ui.dot(Ar),u=fi.dot(Ar);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ui,o);wr.subVectors(t,r);const p=ui.dot(wr),_=fi.dot(wr);if(_>=0&&p<=_)return e.copy(r);const g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(fi,a);const m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return Ha.subVectors(r,s),a=(u-h)/(u-h+(p-_)),e.copy(s).addScaledVector(Ha,a);const d=1/(m+g+f);return o=g*d,a=f*d,e.copy(n).addScaledVector(ui,o).addScaledVector(fi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const lc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function Lr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=ia(t,1),e=Vt(e,0,1),n=Vt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Lr(o,r,t+1/3),this.g=Lr(o,r,t),this.b=Lr(o,r,t-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const n=lc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gn(t.r),this.g=gn(t.g),this.b=gn(t.b),this}copyLinearToSRGB(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return jt.fromWorkingColorSpace(Ee.copy(this),t),Math.round(Vt(Ee.r*255,0,255))*65536+Math.round(Vt(Ee.g*255,0,255))*256+Math.round(Vt(Ee.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Ee.copy(this),e);const n=Ee.r,s=Ee.g,r=Ee.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=Oe){jt.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,n=Ee.g,s=Ee.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(bn),this.setHSL(bn.h+t,bn.s+e,bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bn),t.getHSL(Ms);const n=Zi(bn.h,Ms.h,e),s=Zi(bn.s,Ms.s,e),r=Zi(bn.l,Ms.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new kt;kt.NAMES=lc;let fu=0;class sn extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=Ei,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qr,this.blendDst=to,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ba,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qr&&(n.blendSrc=this.blendSrc),this.blendDst!==to&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ba&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class cr extends sn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new D,Ss=new nt;class nn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Aa,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ss.fromBufferAttribute(this,e),Ss.applyMatrix3(t),this.setXY(e,Ss.x,Ss.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Aa&&(t.usage=this.usage),t}}class cc extends nn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class hc extends nn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ie extends nn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let du=0;const Ve=new ne,Dr=new pe,di=new D,Fe=new Bi,Xi=new Bi,ge=new D;class Te extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rc(t)?hc:cc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,n){return Ve.makeTranslation(t,e,n),this.applyMatrix4(Ve),this}scale(t,e,n){return Ve.makeScale(t,e,n),this.applyMatrix4(Ve),this}lookAt(t){return Dr.lookAt(t),Dr.updateMatrix(),this.applyMatrix4(Dr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(di).negate(),this.translate(di.x,di.y,di.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Xi.setFromBufferAttribute(a),this.morphTargetsRelative?(ge.addVectors(Fe.min,Xi.min),Fe.expandByPoint(ge),ge.addVectors(Fe.max,Xi.max),Fe.expandByPoint(ge)):(Fe.expandByPoint(Xi.min),Fe.expandByPoint(Xi.max))}Fe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ge));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ge.fromBufferAttribute(a,c),l&&(di.fromBufferAttribute(t,c),ge.add(di)),s=Math.max(s,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new D,l[C]=new D;const c=new D,h=new D,u=new D,f=new nt,p=new nt,_=new nt,g=new D,m=new D;function d(C,T,S){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,T),_.fromBufferAttribute(r,S),h.sub(c),u.sub(c),p.sub(f),_.sub(f);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(L),a[C].add(g),a[T].add(g),a[S].add(g),l[C].add(m),l[T].add(m),l[S].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let C=0,T=R.length;C<T;++C){const S=R[C],L=S.start,H=S.count;for(let O=L,W=L+H;O<W;O+=3)d(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const E=new D,x=new D,P=new D,y=new D;function A(C){P.fromBufferAttribute(s,C),y.copy(P);const T=a[C];E.copy(T),E.sub(P.multiplyScalar(P.dot(T))).normalize(),x.crossVectors(y,T);const L=x.dot(l[C])<0?-1:1;o.setXYZW(C,E.x,E.y,E.z,L)}for(let C=0,T=R.length;C<T;++C){const S=R[C],L=S.start,H=S.count;for(let O=L,W=L+H;O<W;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let f=0,p=t.count;f<p;f+=3){const _=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*h;for(let d=0;d<h;d++)f[_++]=c[p++]}return new nn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Te,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Va=new ne,zn=new ls,ys=new as,ka=new D,Es=new D,Ts=new D,bs=new D,Ur=new D,As=new D,Ga=new D,ws=new D;class fe extends pe{constructor(t=new Te,e=new cr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){As.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ur.fromBufferAttribute(u,t),o?As.addScaledVector(Ur,h):As.addScaledVector(Ur.sub(e),h))}e.add(As)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(r),zn.copy(t.ray).recast(t.near),!(ys.containsPoint(zn.origin)===!1&&(zn.intersectSphere(ys,ka)===null||zn.origin.distanceToSquared(ka)>(t.far-t.near)**2))&&(Va.copy(r).invert(),zn.copy(t.ray).applyMatrix4(Va),!(n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],d=o[m.materialIndex],R=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=R,P=E;x<P;x+=3){const y=a.getX(x),A=a.getX(x+1),C=a.getX(x+2);s=Rs(this,d,t,n,c,h,u,y,A,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){const R=a.getX(m),E=a.getX(m+1),x=a.getX(m+2);s=Rs(this,o,t,n,c,h,u,R,E,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],d=o[m.materialIndex],R=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=R,P=E;x<P;x+=3){const y=x,A=x+1,C=x+2;s=Rs(this,d,t,n,c,h,u,y,A,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){const R=m,E=m+1,x=m+2;s=Rs(this,o,t,n,c,h,u,R,E,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function pu(i,t,e,n,s,r,o,a){let l;if(t.side===Le?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Dn,a),l===null)return null;ws.copy(a),ws.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ws);return c<e.near||c>e.far?null:{distance:c,point:ws.clone(),object:i}}function Rs(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Es),i.getVertexPosition(l,Ts),i.getVertexPosition(c,bs);const h=pu(i,t,e,n,Es,Ts,bs,Ga);if(h){const u=new D;Xe.getBarycoord(Ga,Es,Ts,bs,u),s&&(h.uv=Xe.getInterpolatedAttribute(s,a,l,c,u,new nt)),r&&(h.uv1=Xe.getInterpolatedAttribute(r,a,l,c,u,new nt)),o&&(h.normal=Xe.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new D,materialIndex:0};Xe.getNormal(Es,Ts,bs,f.normal),h.face=f,h.barycoord=u}return h}class zi extends Te{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,p=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function _(g,m,d,R,E,x,P,y,A,C,T){const S=x/A,L=P/C,H=x/2,O=P/2,W=y/2,j=A+1,G=C+1;let $=0,V=0;const at=new D;for(let mt=0;mt<G;mt++){const St=mt*L-O;for(let Ft=0;Ft<j;Ft++){const Zt=Ft*S-H;at[g]=Zt*R,at[m]=St*E,at[d]=W,c.push(at.x,at.y,at.z),at[g]=0,at[m]=0,at[d]=y>0?1:-1,h.push(at.x,at.y,at.z),u.push(Ft/A),u.push(1-mt/C),$+=1}}for(let mt=0;mt<C;mt++)for(let St=0;St<A;St++){const Ft=f+St+j*mt,Zt=f+St+j*(mt+1),q=f+(St+1)+j*(mt+1),st=f+(St+1)+j*mt;l.push(Ft,Zt,st),l.push(Zt,q,st),V+=6}a.addGroup(p,V,T),p+=V,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ii(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function we(i){const t={};for(let e=0;e<i.length;e++){const n=Ii(i[e]);for(const s in n)t[s]=n[s]}return t}function mu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function uc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const _u={clone:Ii,merge:we};var gu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends sn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gu,this.fragmentShader=vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ii(t.uniforms),this.uniformsGroups=mu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class fc extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const An=new D,Wa=new nt,Xa=new nt;class Ge extends fc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return es*2*Math.atan(Math.tan(bi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){An.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(An.x,An.y).multiplyScalar(-t/An.z),An.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(An.x,An.y).multiplyScalar(-t/An.z)}getViewSize(t,e){return this.getViewBounds(t,Wa,Xa),e.subVectors(Xa,Wa)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(bi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const pi=-90,mi=1;class xu extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ge(pi,mi,t,e);s.layers=this.layers,this.add(s);const r=new Ge(pi,mi,t,e);r.layers=this.layers,this.add(r);const o=new Ge(pi,mi,t,e);o.layers=this.layers,this.add(o);const a=new Ge(pi,mi,t,e);a.layers=this.layers,this.add(a);const l=new Ge(pi,mi,t,e);l.layers=this.layers,this.add(l);const c=new Ge(pi,mi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class dc extends De{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ci,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Mu extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new dc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zi(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:Pn});r.uniforms.tEquirect.value=e;const o=new fe(s,r),a=e.minFilter;return e.minFilter===qn&&(e.minFilter=en),new xu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class Su extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Be,this.environmentIntensity=1,this.environmentRotation=new Be,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ir=new D,yu=new D,Eu=new Bt;class wn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ir.subVectors(n,e).cross(yu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ir),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Eu.getNormalMatrix(t),s=this.coplanarPoint(Ir).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new as,Cs=new D;class ra{constructor(t=new wn,e=new wn,n=new wn,s=new wn,r=new wn,o=new wn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],_=s[9],g=s[10],m=s[11],d=s[12],R=s[13],E=s[14],x=s[15];if(n[0].setComponents(l-r,f-c,m-p,x-d).normalize(),n[1].setComponents(l+r,f+c,m+p,x+d).normalize(),n[2].setComponents(l+o,f+h,m+_,x+R).normalize(),n[3].setComponents(l-o,f-h,m-_,x-R).normalize(),n[4].setComponents(l-a,f-u,m-g,x-E).normalize(),e===mn)n[5].setComponents(l+a,f+u,m+g,x+E).normalize();else if(e===nr)n[5].setComponents(a,u,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(t){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Cs.x=s.normal.x>0?t.max.x:t.min.x,Cs.y=s.normal.y>0?t.max.y:t.min.y,Cs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Cs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wi extends sn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const sr=new D,rr=new D,Ya=new ne,Yi=new ls,Ps=new as,Nr=new D,qa=new D;class pc extends pe{constructor(t=new Te,e=new wi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)sr.fromBufferAttribute(e,s-1),rr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=sr.distanceTo(rr);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(s),Ps.radius+=r,t.ray.intersectsSphere(Ps)===!1)return;Ya.copy(s).invert(),Yi.copy(t.ray).applyMatrix4(Ya);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=p,m=_-1;g<m;g+=c){const d=h.getX(g),R=h.getX(g+1),E=Ls(this,t,Yi,l,d,R);E&&e.push(E)}if(this.isLineLoop){const g=h.getX(_-1),m=h.getX(p),d=Ls(this,t,Yi,l,g,m);d&&e.push(d)}}else{const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=p,m=_-1;g<m;g+=c){const d=Ls(this,t,Yi,l,g,g+1);d&&e.push(d)}if(this.isLineLoop){const g=Ls(this,t,Yi,l,_-1,p);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ls(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(sr.fromBufferAttribute(o,s),rr.fromBufferAttribute(o,r),e.distanceSqToSegment(sr,rr,Nr,qa)>n)return;Nr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Nr);if(!(l<t.near||l>t.far))return{distance:l,point:qa.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const ja=new D,Za=new D;class zo extends pc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ja.fromBufferAttribute(e,s),Za.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ja.distanceTo(Za);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qi extends sn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ka=new ne,Ho=new ls,Ds=new as,Us=new D;class Fr extends pe{constructor(t=new Te,e=new qi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(s),Ds.radius+=r,t.ray.intersectsSphere(Ds)===!1)return;Ka.copy(s).invert(),Ho.copy(t.ray).applyMatrix4(Ka);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=f,g=p;_<g;_++){const m=c.getX(_);Us.fromBufferAttribute(u,m),$a(Us,m,l,s,t,e,this)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,g=p;_<g;_++)Us.fromBufferAttribute(u,_),$a(Us,_,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function $a(i,t,e,n,s,r,o){const a=Ho.distanceSqToPoint(i);if(a<e){const l=new D;Ho.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Cn extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}class mc extends De{constructor(t,e,n,s,r,o,a,l,c,h=Ti){if(h!==Ti&&h!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ti&&(n=jn),n===void 0&&h===Di&&(n=Li),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Qe,this.minFilter=l!==void 0?l:Qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class rn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new nt:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,s=[],r=[],o=[],a=new D,l=new ne;for(let p=0;p<=t;p++){const _=p/t;s[p]=this.getTangentAt(_,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Vt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Vt(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class oa extends rn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new nt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Tu extends oa{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function aa(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,p*=h,s(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Is=new D,Or=new aa,Br=new aa,zr=new aa;class bu extends rn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Is.subVectors(s[0],s[1]).add(s[0]),c=Is);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Is.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Is),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),Or.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,_,g,m),Br.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,_,g,m),zr.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(Or.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Br.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),zr.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Or.calc(l),Br.calc(l),zr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ja(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Au(i,t){const e=1-i;return e*e*t}function wu(i,t){return 2*(1-i)*i*t}function Ru(i,t){return i*i*t}function Ki(i,t,e,n){return Au(i,t)+wu(i,e)+Ru(i,n)}function Cu(i,t){const e=1-i;return e*e*e*t}function Pu(i,t){const e=1-i;return 3*e*e*i*t}function Lu(i,t){return 3*(1-i)*i*i*t}function Du(i,t){return i*i*i*t}function $i(i,t,e,n,s){return Cu(i,t)+Pu(i,e)+Lu(i,n)+Du(i,s)}class _c extends rn{constructor(t=new nt,e=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($i(t,s.x,r.x,o.x,a.x),$i(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Uu extends rn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($i(t,s.x,r.x,o.x,a.x),$i(t,s.y,r.y,o.y,a.y),$i(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gc extends rn{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Iu extends rn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vc extends rn{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ki(t,s.x,r.x,o.x),Ki(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nu extends rn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ki(t,s.x,r.x,o.x),Ki(t,s.y,r.y,o.y),Ki(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xc extends rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Ja(a,l.x,c.x,h.x,u.x),Ja(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new nt().fromArray(s))}return this}}var Vo=Object.freeze({__proto__:null,ArcCurve:Tu,CatmullRomCurve3:bu,CubicBezierCurve:_c,CubicBezierCurve3:Uu,EllipseCurve:oa,LineCurve:gc,LineCurve3:Iu,QuadraticBezierCurve:vc,QuadraticBezierCurve3:Nu,SplineCurve:xc});class Fu extends rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Vo[s.type]().fromJSON(s))}return this}}class Qa extends Fu{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new gc(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new vc(this.currentPoint.clone(),new nt(t,e),new nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new _c(this.currentPoint.clone(),new nt(t,e),new nt(n,s),new nt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new xc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new oa(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class la extends Te{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let _=0;const g=[],m=n/2;let d=0;R(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(f,3)),this.setAttribute("uv",new ie(p,2));function R(){const x=new D,P=new D;let y=0;const A=(e-t)/n;for(let C=0;C<=r;C++){const T=[],S=C/r,L=S*(e-t)+t;for(let H=0;H<=s;H++){const O=H/s,W=O*l+a,j=Math.sin(W),G=Math.cos(W);P.x=L*j,P.y=-S*n+m,P.z=L*G,u.push(P.x,P.y,P.z),x.set(j,A,G).normalize(),f.push(x.x,x.y,x.z),p.push(O,1-S),T.push(_++)}g.push(T)}for(let C=0;C<s;C++)for(let T=0;T<r;T++){const S=g[T][C],L=g[T+1][C],H=g[T+1][C+1],O=g[T][C+1];(t>0||T!==0)&&(h.push(S,L,O),y+=3),(e>0||T!==r-1)&&(h.push(L,H,O),y+=3)}c.addGroup(d,y,0),d+=y}function E(x){const P=_,y=new nt,A=new D;let C=0;const T=x===!0?t:e,S=x===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),_++;const L=_;for(let H=0;H<=s;H++){const W=H/s*l+a,j=Math.cos(W),G=Math.sin(W);A.x=T*G,A.y=m*S,A.z=T*j,u.push(A.x,A.y,A.z),f.push(0,S,0),y.x=j*.5+.5,y.y=G*.5*S+.5,p.push(y.x,y.y),_++}for(let H=0;H<s;H++){const O=P+H,W=L+H;x===!0?h.push(W,W+1,O):h.push(W+1,W,O),C+=3}c.addGroup(d,C,x===!0?1:2),d+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new la(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Ns=new D,Fs=new D,Hr=new D,Os=new Xe;class Ou extends Te{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(bi*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},p=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:g,b:m,c:d}=Os;if(g.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),Os.getNormal(Hr),u[0]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let R=0;R<3;R++){const E=(R+1)%3,x=u[R],P=u[E],y=Os[h[R]],A=Os[h[E]],C=`${x}_${P}`,T=`${P}_${x}`;T in f&&f[T]?(Hr.dot(f[T].normal)<=r&&(p.push(y.x,y.y,y.z),p.push(A.x,A.y,A.z)),f[T]=null):C in f||(f[C]={index0:c[R],index1:c[E],normal:Hr.clone()})}}for(const _ in f)if(f[_]){const{index0:g,index1:m}=f[_];Ns.fromBufferAttribute(a,g),Fs.fromBufferAttribute(a,m),p.push(Ns.x,Ns.y,Ns.z),p.push(Fs.x,Fs.y,Fs.z)}this.setAttribute("position",new ie(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Ni extends Qa{constructor(t){super(t),this.uuid=ti(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Qa().fromJSON(s))}return this}}const Bu={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Mc(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,p;if(n&&(r=Gu(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let _=e;_<s;_+=e)u=i[_],f=i[_+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return ns(r,o,e,a,l,p,0),o}};function Mc(i,t,e,n,s){let r,o;if(s===tf(i,t,e,n)>0)for(r=t;r<e;r+=n)o=tl(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=tl(r,i[r],i[r+1],o);return o&&hr(o,o.next)&&(ss(o),o=o.next),o}function $n(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(hr(e,e.next)||oe(e.prev,e,e.next)===0)){if(ss(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ns(i,t,e,n,s,r,o){if(!i)return;!o&&r&&ju(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Hu(i,n,s,r):zu(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),ss(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Vu($n(i),t,e),ns(i,t,e,n,s,r,2)):o===2&&ku(i,t,e,n,s,r):ns($n(i),t,e,n,s,r,1);break}}}function zu(i){const t=i.prev,e=i,n=i.next;if(oe(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let _=n.next;for(;_!==t;){if(_.x>=h&&_.x<=f&&_.y>=u&&_.y<=p&&Mi(s,a,r,l,o,c,_.x,_.y)&&oe(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Hu(i,t,e,n){const s=i.prev,r=i,o=i.next;if(oe(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,_=h<u?h<f?h:f:u<f?u:f,g=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,d=ko(p,_,t,e,n),R=ko(g,m,t,e,n);let E=i.prevZ,x=i.nextZ;for(;E&&E.z>=d&&x&&x.z<=R;){if(E.x>=p&&E.x<=g&&E.y>=_&&E.y<=m&&E!==s&&E!==o&&Mi(a,h,l,u,c,f,E.x,E.y)&&oe(E.prev,E,E.next)>=0||(E=E.prevZ,x.x>=p&&x.x<=g&&x.y>=_&&x.y<=m&&x!==s&&x!==o&&Mi(a,h,l,u,c,f,x.x,x.y)&&oe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;E&&E.z>=d;){if(E.x>=p&&E.x<=g&&E.y>=_&&E.y<=m&&E!==s&&E!==o&&Mi(a,h,l,u,c,f,E.x,E.y)&&oe(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;x&&x.z<=R;){if(x.x>=p&&x.x<=g&&x.y>=_&&x.y<=m&&x!==s&&x!==o&&Mi(a,h,l,u,c,f,x.x,x.y)&&oe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Vu(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!hr(s,r)&&Sc(s,n,n.next,r)&&is(s,r)&&is(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),ss(n),ss(n.next),n=i=r),n=n.next}while(n!==i);return $n(n)}function ku(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$u(o,a)){let l=yc(o,a);o=$n(o,o.next),l=$n(l,l.next),ns(o,t,e,n,s,r,0),ns(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Gu(i,t,e,n){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Mc(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Ku(c));for(s.sort(Wu),r=0;r<s.length;r++)e=Xu(s[r],e);return e}function Wu(i,t){return i.x-t.x}function Xu(i,t){const e=Yu(i,t);if(!e)return t;const n=yc(e,i);return $n(n,n.next),$n(e,e.next)}function Yu(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Mi(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),is(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&qu(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function qu(i,t){return oe(i.prev,i,t.prev)<0&&oe(t.next,i,i.next)<0}function ju(i,t,e,n){let s=i;do s.z===0&&(s.z=ko(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Zu(s)}function Zu(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function ko(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ku(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Mi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function $u(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ju(i,t)&&(is(i,t)&&is(t,i)&&Qu(i,t)&&(oe(i.prev,i,t.prev)||oe(i,t.prev,t))||hr(i,t)&&oe(i.prev,i,i.next)>0&&oe(t.prev,t,t.next)>0)}function oe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function hr(i,t){return i.x===t.x&&i.y===t.y}function Sc(i,t,e,n){const s=zs(oe(i,t,e)),r=zs(oe(i,t,n)),o=zs(oe(e,n,i)),a=zs(oe(e,n,t));return!!(s!==r&&o!==a||s===0&&Bs(i,e,t)||r===0&&Bs(i,n,t)||o===0&&Bs(e,i,n)||a===0&&Bs(e,t,n))}function Bs(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function zs(i){return i>0?1:i<0?-1:0}function Ju(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Sc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function is(i,t){return oe(i.prev,i,i.next)<0?oe(i,t,i.next)>=0&&oe(i,i.prev,t)>=0:oe(i,t,i.prev)<0||oe(i,i.next,t)<0}function Qu(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function yc(i,t){const e=new Go(i.i,i.x,i.y),n=new Go(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function tl(i,t,e,n){const s=new Go(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ss(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Go(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function tf(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Ji{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ji.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];el(t),nl(n,t);let o=t.length;e.forEach(el);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,nl(n,e[l]);const a=Bu.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function el(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function nl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Jn extends Te{constructor(t=new Ni([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ie(s,3)),this.setAttribute("uv",new ie(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:p-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,R=e.UVGenerator!==void 0?e.UVGenerator:ef;let E,x=!1,P,y,A,C;d&&(E=d.getSpacedPoints(h),x=!0,f=!1,P=d.computeFrenetFrames(h,!1),y=new D,A=new D,C=new D),f||(m=0,p=0,_=0,g=0);const T=a.extractPoints(c);let S=T.shape;const L=T.holes;if(!Ji.isClockWise(S)){S=S.reverse();for(let K=0,it=L.length;K<it;K++){const w=L[K];Ji.isClockWise(w)&&(L[K]=w.reverse())}}const O=Ji.triangulateShape(S,L),W=S;for(let K=0,it=L.length;K<it;K++){const w=L[K];S=S.concat(w)}function j(K,it,w){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(it,w)}const G=S.length,$=O.length;function V(K,it,w){let bt,Q,gt;const rt=K.x-it.x,Pt=K.y-it.y,dt=w.x-K.x,b=w.y-K.y,v=rt*rt+Pt*Pt,F=rt*b-Pt*dt;if(Math.abs(F)>Number.EPSILON){const X=Math.sqrt(v),J=Math.sqrt(dt*dt+b*b),Y=it.x-Pt/X,Tt=it.y+rt/X,ct=w.x-b/J,_t=w.y+dt/J,Gt=((ct-Y)*b-(_t-Tt)*dt)/(rt*b-Pt*dt);bt=Y+rt*Gt-K.x,Q=Tt+Pt*Gt-K.y;const et=bt*bt+Q*Q;if(et<=2)return new nt(bt,Q);gt=Math.sqrt(et/2)}else{let X=!1;rt>Number.EPSILON?dt>Number.EPSILON&&(X=!0):rt<-Number.EPSILON?dt<-Number.EPSILON&&(X=!0):Math.sign(Pt)===Math.sign(b)&&(X=!0),X?(bt=-Pt,Q=rt,gt=Math.sqrt(v)):(bt=rt,Q=Pt,gt=Math.sqrt(v/2))}return new nt(bt/gt,Q/gt)}const at=[];for(let K=0,it=W.length,w=it-1,bt=K+1;K<it;K++,w++,bt++)w===it&&(w=0),bt===it&&(bt=0),at[K]=V(W[K],W[w],W[bt]);const mt=[];let St,Ft=at.concat();for(let K=0,it=L.length;K<it;K++){const w=L[K];St=[];for(let bt=0,Q=w.length,gt=Q-1,rt=bt+1;bt<Q;bt++,gt++,rt++)gt===Q&&(gt=0),rt===Q&&(rt=0),St[bt]=V(w[bt],w[gt],w[rt]);mt.push(St),Ft=Ft.concat(St)}for(let K=0;K<m;K++){const it=K/m,w=p*Math.cos(it*Math.PI/2),bt=_*Math.sin(it*Math.PI/2)+g;for(let Q=0,gt=W.length;Q<gt;Q++){const rt=j(W[Q],at[Q],bt);ot(rt.x,rt.y,-w)}for(let Q=0,gt=L.length;Q<gt;Q++){const rt=L[Q];St=mt[Q];for(let Pt=0,dt=rt.length;Pt<dt;Pt++){const b=j(rt[Pt],St[Pt],bt);ot(b.x,b.y,-w)}}}const Zt=_+g;for(let K=0;K<G;K++){const it=f?j(S[K],Ft[K],Zt):S[K];x?(A.copy(P.normals[0]).multiplyScalar(it.x),y.copy(P.binormals[0]).multiplyScalar(it.y),C.copy(E[0]).add(A).add(y),ot(C.x,C.y,C.z)):ot(it.x,it.y,0)}for(let K=1;K<=h;K++)for(let it=0;it<G;it++){const w=f?j(S[it],Ft[it],Zt):S[it];x?(A.copy(P.normals[K]).multiplyScalar(w.x),y.copy(P.binormals[K]).multiplyScalar(w.y),C.copy(E[K]).add(A).add(y),ot(C.x,C.y,C.z)):ot(w.x,w.y,u/h*K)}for(let K=m-1;K>=0;K--){const it=K/m,w=p*Math.cos(it*Math.PI/2),bt=_*Math.sin(it*Math.PI/2)+g;for(let Q=0,gt=W.length;Q<gt;Q++){const rt=j(W[Q],at[Q],bt);ot(rt.x,rt.y,u+w)}for(let Q=0,gt=L.length;Q<gt;Q++){const rt=L[Q];St=mt[Q];for(let Pt=0,dt=rt.length;Pt<dt;Pt++){const b=j(rt[Pt],St[Pt],bt);x?ot(b.x,b.y+E[h-1].y,E[h-1].x+w):ot(b.x,b.y,u+w)}}}q(),st();function q(){const K=s.length/3;if(f){let it=0,w=G*it;for(let bt=0;bt<$;bt++){const Q=O[bt];At(Q[2]+w,Q[1]+w,Q[0]+w)}it=h+m*2,w=G*it;for(let bt=0;bt<$;bt++){const Q=O[bt];At(Q[0]+w,Q[1]+w,Q[2]+w)}}else{for(let it=0;it<$;it++){const w=O[it];At(w[2],w[1],w[0])}for(let it=0;it<$;it++){const w=O[it];At(w[0]+G*h,w[1]+G*h,w[2]+G*h)}}n.addGroup(K,s.length/3-K,0)}function st(){const K=s.length/3;let it=0;Et(W,it),it+=W.length;for(let w=0,bt=L.length;w<bt;w++){const Q=L[w];Et(Q,it),it+=Q.length}n.addGroup(K,s.length/3-K,1)}function Et(K,it){let w=K.length;for(;--w>=0;){const bt=w;let Q=w-1;Q<0&&(Q=K.length-1);for(let gt=0,rt=h+m*2;gt<rt;gt++){const Pt=G*gt,dt=G*(gt+1),b=it+bt+Pt,v=it+Q+Pt,F=it+Q+dt,X=it+bt+dt;It(b,v,F,X)}}}function ot(K,it,w){l.push(K),l.push(it),l.push(w)}function At(K,it,w){Lt(K),Lt(it),Lt(w);const bt=s.length/3,Q=R.generateTopUV(n,s,bt-3,bt-2,bt-1);Xt(Q[0]),Xt(Q[1]),Xt(Q[2])}function It(K,it,w,bt){Lt(K),Lt(it),Lt(bt),Lt(it),Lt(w),Lt(bt);const Q=s.length/3,gt=R.generateSideWallUV(n,s,Q-6,Q-3,Q-2,Q-1);Xt(gt[0]),Xt(gt[1]),Xt(gt[3]),Xt(gt[1]),Xt(gt[2]),Xt(gt[3])}function Lt(K){s.push(l[K*3+0]),s.push(l[K*3+1]),s.push(l[K*3+2])}function Xt(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return nf(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Vo[s.type]().fromJSON(s)),new Jn(n,t.options)}}const ef={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new nt(r,o),new nt(a,l),new nt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],p=t[s*3+1],_=t[s*3+2],g=t[r*3],m=t[r*3+1],d=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new nt(o,1-l),new nt(c,1-u),new nt(f,1-_),new nt(g,1-d)]:[new nt(a,1-l),new nt(h,1-u),new nt(p,1-_),new nt(m,1-d)]}};function nf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class cs extends Te{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,p=[],_=[],g=[],m=[];for(let d=0;d<h;d++){const R=d*f-o;for(let E=0;E<c;E++){const x=E*u-r;_.push(x,-R,0),g.push(0,0,1),m.push(E/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let R=0;R<a;R++){const E=R+c*d,x=R+c*(d+1),P=R+1+c*(d+1),y=R+1+c*d;p.push(E,x,y),p.push(x,P,y)}this.setIndex(p),this.setAttribute("position",new ie(_,3)),this.setAttribute("normal",new ie(g,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.width,t.height,t.widthSegments,t.heightSegments)}}class ca extends Te{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new D,f=new D,p=[],_=[],g=[],m=[];for(let d=0;d<=n;d++){const R=[],E=d/n;let x=0;d===0&&o===0?x=.5/e:d===n&&l===Math.PI&&(x=-.5/e);for(let P=0;P<=e;P++){const y=P/e;u.x=-t*Math.cos(s+y*r)*Math.sin(o+E*a),u.y=t*Math.cos(o+E*a),u.z=t*Math.sin(s+y*r)*Math.sin(o+E*a),_.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),m.push(y+x,1-E),R.push(c++)}h.push(R)}for(let d=0;d<n;d++)for(let R=0;R<e;R++){const E=h[d][R+1],x=h[d][R],P=h[d+1][R],y=h[d+1][R+1];(d!==0||o>0)&&p.push(E,x,y),(d!==n-1||l<Math.PI)&&p.push(x,P,y)}this.setIndex(p),this.setAttribute("position",new ie(_,3)),this.setAttribute("normal",new ie(g,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ca(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Mn extends sn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=na,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sf extends sn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new kt(16777215),this.specular=new kt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=na,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class rf extends sn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class of extends sn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const il={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class af{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const p=c[u],_=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}}const lf=new af;class ha{constructor(t){this.manager=t!==void 0?t:lf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ha.DEFAULT_MATERIAL_NAME="__DEFAULT";const fn={};class cf extends Error{constructor(t,e){super(t),this.response=e}}class hf extends ha{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=il.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(fn[t]!==void 0){fn[t].push({onLoad:e,onProgress:n,onError:s});return}fn[t]=[],fn[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=fn[t],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,_=p!==0;let g=0;const m=new ReadableStream({start(d){R();function R(){u.read().then(({done:E,value:x})=>{if(E)d.close();else{g+=x.byteLength;const P=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:p});for(let y=0,A=h.length;y<A;y++){const C=h[y];C.onProgress&&C.onProgress(P)}d.enqueue(x),R()}},E=>{d.error(E)})}}});return new Response(m)}else throw new cf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{il.add(t,c);const h=fn[t];delete fn[t];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=fn[t];if(h===void 0)throw this.manager.itemError(t),c;delete fn[t];for(let u=0,f=h.length;u<f;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Ec extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Vr=new ne,sl=new D,rl=new D;class uf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ra,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;sl.setFromMatrixPosition(t.matrixWorld),e.position.copy(sl),rl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rl),e.updateMatrixWorld(),Vr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Tc extends fc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ff extends uf{constructor(){super(new Tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class df extends Ec{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new ff}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class pf extends Ec{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class mf extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}const ol=new ne;class bc{constructor(t,e,n=0,s=1/0){this.ray=new ls(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new sa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ol.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ol),this}intersectObject(t,e=!0,n=[]){return Wo(t,this,n,e),n.sort(al),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Wo(t[s],this,n,e);return n.sort(al),n}}function al(i,t){return i.distance-t.distance}function Wo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Wo(r[o],t,e,!0)}}class ll{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Vt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Vt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const cl=new D;let Hs,kr;class _f extends pe{constructor(t=new D(0,0,1),e=new D(0,0,0),n=1,s=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",Hs===void 0&&(Hs=new Te,Hs.setAttribute("position",new ie([0,0,0,0,1,0],3)),kr=new la(0,.5,1,5,1),kr.translate(0,-.5,0)),this.position.copy(e),this.line=new pc(Hs,new wi({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new fe(kr,new cr({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{cl.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(cl,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class gf extends Qn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function hl(i,t,e,n){const s=vf(n);switch(e){case $l:return i*t;case Ql:return i*t;case tc:return i*t*2;case ec:return i*t/s.components*s.byteLength;case Qo:return i*t/s.components*s.byteLength;case nc:return i*t*2/s.components*s.byteLength;case ta:return i*t*2/s.components*s.byteLength;case Jl:return i*t*3/s.components*s.byteLength;case Je:return i*t*4/s.components*s.byteLength;case ea:return i*t*4/s.components*s.byteLength;case qs:case js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zs:case Ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case po:case _o:return Math.max(i,16)*Math.max(t,8)/4;case fo:case mo:return Math.max(i,8)*Math.max(t,8)/2;case go:case vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case So:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case yo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case To:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case bo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case wo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Co:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Po:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Do:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Uo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case $s:case Io:case No:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ic:case Fo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Oo:case Bo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vf(i){switch(i){case xn:case jl:return{byteLength:1,components:1};case ts:case Zl:case os:return{byteLength:2,components:1};case $o:case Jo:return{byteLength:2,components:4};case jn:case Ko:case pn:return{byteLength:4,components:1};case Kl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jo);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ac(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function xf(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<u.length;p++){const _=u[f],g=u[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,u[f]=g)}u.length=f+1;for(let p=0,_=u.length;p<_;p++){const g=u[p];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sf=`#ifdef USE_ALPHAHASH
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
#endif`,yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ef=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Af=`#ifdef USE_AOMAP
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
#endif`,wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rf=`#ifdef USE_BATCHING
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
#endif`,Cf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Df=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Uf=`#ifdef USE_IRIDESCENCE
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
#endif`,If=`#ifdef USE_BUMPMAP
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
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gf=`#define PI 3.141592653589793
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
} // validated`,Wf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xf=`vec3 transformedNormal = objectNormal;
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
#endif`,Yf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",$f=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,td=`#ifdef USE_ENVMAP
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
#endif`,ed=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nd=`#ifdef USE_ENVMAP
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
#endif`,id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,od=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ad=`#ifdef USE_GRADIENTMAP
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
}`,ld=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ud=`uniform bool receiveShadow;
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
#endif`,fd=`#ifdef USE_ENVMAP
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
#endif`,dd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,md=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_d=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gd=`PhysicalMaterial material;
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
#endif`,vd=`struct PhysicalMaterial {
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
}`,xd=`
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
#endif`,Md=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ed=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Td=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ad=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cd=`#if defined( USE_POINTS_UV )
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
#endif`,Pd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ld=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ud=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Id=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nd=`#ifdef USE_MORPHTARGETS
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
#endif`,Fd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Od=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kd=`#ifdef USE_NORMALMAP
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
#endif`,Gd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$d=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sp=`float getShadowMask() {
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
}`,rp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,op=`#ifdef USE_SKINNING
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
#endif`,ap=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lp=`#ifdef USE_SKINNING
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
#endif`,cp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,up=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dp=`#ifdef USE_TRANSMISSION
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
#endif`,pp=`#ifdef USE_TRANSMISSION
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
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mp=`uniform sampler2D t2D;
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
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`#include <common>
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
}`,Ap=`#if DEPTH_PACKING == 3200
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
}`,wp=`#define DISTANCE
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
}`,Rp=`#define DISTANCE
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
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`uniform float scale;
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
}`,Dp=`uniform vec3 diffuse;
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
}`,Up=`#include <common>
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
}`,Ip=`uniform vec3 diffuse;
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
}`,Np=`#define LAMBERT
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
}`,Fp=`#define LAMBERT
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
}`,Op=`#define MATCAP
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
}`,Bp=`#define MATCAP
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
}`,zp=`#define NORMAL
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
}`,Hp=`#define NORMAL
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
}`,Vp=`#define PHONG
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
}`,kp=`#define PHONG
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
}`,Gp=`#define STANDARD
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
}`,Wp=`#define STANDARD
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
}`,Xp=`#define TOON
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
}`,Yp=`#define TOON
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
}`,qp=`uniform float size;
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
}`,jp=`uniform vec3 diffuse;
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
}`,Zp=`#include <common>
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
}`,Kp=`uniform vec3 color;
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
}`,$p=`uniform float rotation;
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
}`,Jp=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:Mf,alphahash_pars_fragment:Sf,alphamap_fragment:yf,alphamap_pars_fragment:Ef,alphatest_fragment:Tf,alphatest_pars_fragment:bf,aomap_fragment:Af,aomap_pars_fragment:wf,batching_pars_vertex:Rf,batching_vertex:Cf,begin_vertex:Pf,beginnormal_vertex:Lf,bsdfs:Df,iridescence_fragment:Uf,bumpmap_pars_fragment:If,clipping_planes_fragment:Nf,clipping_planes_pars_fragment:Ff,clipping_planes_pars_vertex:Of,clipping_planes_vertex:Bf,color_fragment:zf,color_pars_fragment:Hf,color_pars_vertex:Vf,color_vertex:kf,common:Gf,cube_uv_reflection_fragment:Wf,defaultnormal_vertex:Xf,displacementmap_pars_vertex:Yf,displacementmap_vertex:qf,emissivemap_fragment:jf,emissivemap_pars_fragment:Zf,colorspace_fragment:Kf,colorspace_pars_fragment:$f,envmap_fragment:Jf,envmap_common_pars_fragment:Qf,envmap_pars_fragment:td,envmap_pars_vertex:ed,envmap_physical_pars_fragment:fd,envmap_vertex:nd,fog_vertex:id,fog_pars_vertex:sd,fog_fragment:rd,fog_pars_fragment:od,gradientmap_pars_fragment:ad,lightmap_pars_fragment:ld,lights_lambert_fragment:cd,lights_lambert_pars_fragment:hd,lights_pars_begin:ud,lights_toon_fragment:dd,lights_toon_pars_fragment:pd,lights_phong_fragment:md,lights_phong_pars_fragment:_d,lights_physical_fragment:gd,lights_physical_pars_fragment:vd,lights_fragment_begin:xd,lights_fragment_maps:Md,lights_fragment_end:Sd,logdepthbuf_fragment:yd,logdepthbuf_pars_fragment:Ed,logdepthbuf_pars_vertex:Td,logdepthbuf_vertex:bd,map_fragment:Ad,map_pars_fragment:wd,map_particle_fragment:Rd,map_particle_pars_fragment:Cd,metalnessmap_fragment:Pd,metalnessmap_pars_fragment:Ld,morphinstance_vertex:Dd,morphcolor_vertex:Ud,morphnormal_vertex:Id,morphtarget_pars_vertex:Nd,morphtarget_vertex:Fd,normal_fragment_begin:Od,normal_fragment_maps:Bd,normal_pars_fragment:zd,normal_pars_vertex:Hd,normal_vertex:Vd,normalmap_pars_fragment:kd,clearcoat_normal_fragment_begin:Gd,clearcoat_normal_fragment_maps:Wd,clearcoat_pars_fragment:Xd,iridescence_pars_fragment:Yd,opaque_fragment:qd,packing:jd,premultiplied_alpha_fragment:Zd,project_vertex:Kd,dithering_fragment:$d,dithering_pars_fragment:Jd,roughnessmap_fragment:Qd,roughnessmap_pars_fragment:tp,shadowmap_pars_fragment:ep,shadowmap_pars_vertex:np,shadowmap_vertex:ip,shadowmask_pars_fragment:sp,skinbase_vertex:rp,skinning_pars_vertex:op,skinning_vertex:ap,skinnormal_vertex:lp,specularmap_fragment:cp,specularmap_pars_fragment:hp,tonemapping_fragment:up,tonemapping_pars_fragment:fp,transmission_fragment:dp,transmission_pars_fragment:pp,uv_pars_fragment:mp,uv_pars_vertex:_p,uv_vertex:gp,worldpos_vertex:vp,background_vert:xp,background_frag:Mp,backgroundCube_vert:Sp,backgroundCube_frag:yp,cube_vert:Ep,cube_frag:Tp,depth_vert:bp,depth_frag:Ap,distanceRGBA_vert:wp,distanceRGBA_frag:Rp,equirect_vert:Cp,equirect_frag:Pp,linedashed_vert:Lp,linedashed_frag:Dp,meshbasic_vert:Up,meshbasic_frag:Ip,meshlambert_vert:Np,meshlambert_frag:Fp,meshmatcap_vert:Op,meshmatcap_frag:Bp,meshnormal_vert:zp,meshnormal_frag:Hp,meshphong_vert:Vp,meshphong_frag:kp,meshphysical_vert:Gp,meshphysical_frag:Wp,meshtoon_vert:Xp,meshtoon_frag:Yp,points_vert:qp,points_frag:jp,shadow_vert:Zp,shadow_frag:Kp,sprite_vert:$p,sprite_frag:Jp},lt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},tn={basic:{uniforms:we([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:we([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:we([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:we([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:we([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:we([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:we([lt.points,lt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:we([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:we([lt.common,lt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:we([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:we([lt.sprite,lt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:we([lt.common,lt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:we([lt.lights,lt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};tn.physical={uniforms:we([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Vs={r:0,b:0,g:0},Vn=new Be,Qp=new ne;function tm(i,t,e,n,s,r,o){const a=new kt(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function _(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?e:t).get(x)),x}function g(E){let x=!1;const P=_(E);P===null?d(a,l):P&&P.isColor&&(d(P,1),x=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,x){const P=_(x);P&&(P.isCubeTexture||P.mapping===lr)?(h===void 0&&(h=new fe(new zi(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Ii(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(y,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Vn.copy(x.backgroundRotation),Vn.x*=-1,Vn.y*=-1,Vn.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Vn.y*=-1,Vn.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Qp.makeRotationFromEuler(Vn)),h.material.toneMapped=jt.getTransfer(P.colorSpace)!==Qt,(u!==P||f!==P.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=P,f=P.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new fe(new cs(2,2),new Un({name:"BackgroundMaterial",uniforms:Ii(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=jt.getTransfer(P.colorSpace)!==Qt,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(u!==P||f!==P.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=P,f=P.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,x){E.getRGB(Vs,uc(i)),n.buffers.color.setClear(Vs.r,Vs.g,Vs.b,x,o)}function R(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(E,x=1){a.set(E),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(a,l)},render:g,addToRenderList:m,dispose:R}}function em(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(S,L,H,O,W){let j=!1;const G=u(O,H,L);r!==G&&(r=G,c(r.object)),j=p(S,O,H,W),j&&_(S,O,H,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,x(S,L,H,O),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,L,H){const O=H.wireframe===!0;let W=n[S.id];W===void 0&&(W={},n[S.id]=W);let j=W[L.id];j===void 0&&(j={},W[L.id]=j);let G=j[O];return G===void 0&&(G=f(l()),j[O]=G),G}function f(S){const L=[],H=[],O=[];for(let W=0;W<e;W++)L[W]=0,H[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:O,object:S,attributes:{},index:null}}function p(S,L,H,O){const W=r.attributes,j=L.attributes;let G=0;const $=H.getAttributes();for(const V in $)if($[V].location>=0){const mt=W[V];let St=j[V];if(St===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(St=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(St=S.instanceColor)),mt===void 0||mt.attribute!==St||St&&mt.data!==St.data)return!0;G++}return r.attributesNum!==G||r.index!==O}function _(S,L,H,O){const W={},j=L.attributes;let G=0;const $=H.getAttributes();for(const V in $)if($[V].location>=0){let mt=j[V];mt===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(mt=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(mt=S.instanceColor));const St={};St.attribute=mt,mt&&mt.data&&(St.data=mt.data),W[V]=St,G++}r.attributes=W,r.attributesNum=G,r.index=O}function g(){const S=r.newAttributes;for(let L=0,H=S.length;L<H;L++)S[L]=0}function m(S){d(S,0)}function d(S,L){const H=r.newAttributes,O=r.enabledAttributes,W=r.attributeDivisors;H[S]=1,O[S]===0&&(i.enableVertexAttribArray(S),O[S]=1),W[S]!==L&&(i.vertexAttribDivisor(S,L),W[S]=L)}function R(){const S=r.newAttributes,L=r.enabledAttributes;for(let H=0,O=L.length;H<O;H++)L[H]!==S[H]&&(i.disableVertexAttribArray(H),L[H]=0)}function E(S,L,H,O,W,j,G){G===!0?i.vertexAttribIPointer(S,L,H,W,j):i.vertexAttribPointer(S,L,H,O,W,j)}function x(S,L,H,O){g();const W=O.attributes,j=H.getAttributes(),G=L.defaultAttributeValues;for(const $ in j){const V=j[$];if(V.location>=0){let at=W[$];if(at===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(at=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(at=S.instanceColor)),at!==void 0){const mt=at.normalized,St=at.itemSize,Ft=t.get(at);if(Ft===void 0)continue;const Zt=Ft.buffer,q=Ft.type,st=Ft.bytesPerElement,Et=q===i.INT||q===i.UNSIGNED_INT||at.gpuType===Ko;if(at.isInterleavedBufferAttribute){const ot=at.data,At=ot.stride,It=at.offset;if(ot.isInstancedInterleavedBuffer){for(let Lt=0;Lt<V.locationSize;Lt++)d(V.location+Lt,ot.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Lt=0;Lt<V.locationSize;Lt++)m(V.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let Lt=0;Lt<V.locationSize;Lt++)E(V.location+Lt,St/V.locationSize,q,mt,At*st,(It+St/V.locationSize*Lt)*st,Et)}else{if(at.isInstancedBufferAttribute){for(let ot=0;ot<V.locationSize;ot++)d(V.location+ot,at.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ot=0;ot<V.locationSize;ot++)m(V.location+ot);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let ot=0;ot<V.locationSize;ot++)E(V.location+ot,St/V.locationSize,q,mt,St*st,St/V.locationSize*ot*st,Et)}}else if(G!==void 0){const mt=G[$];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(V.location,mt);break;case 3:i.vertexAttrib3fv(V.location,mt);break;case 4:i.vertexAttrib4fv(V.location,mt);break;default:i.vertexAttrib1fv(V.location,mt)}}}}R()}function P(){C();for(const S in n){const L=n[S];for(const H in L){const O=L[H];for(const W in O)h(O[W].object),delete O[W];delete L[H]}delete n[S]}}function y(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const H in L){const O=L[H];for(const W in O)h(O[W].object),delete O[W];delete L[H]}delete n[S.id]}function A(S){for(const L in n){const H=n[L];if(H[S.id]===void 0)continue;const O=H[S.id];for(const W in O)h(O[W].object),delete O[W];delete H[S.id]}}function C(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:T,dispose:P,releaseStatesOfGeometry:y,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:R}}function nm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];e.update(p,n,1)}function l(c,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],h[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*f[g];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function im(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Je&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===os&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==xn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==pn&&!C)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,y=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:R,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:P,maxSamples:y}}function sm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new wn,a=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{const R=r?0:n,E=R*4;let x=d.clippingState||null;l.value=x,x=h(_,f,E,p);for(let P=0;P!==E;++P)x[P]=e[P];d.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const d=p+g*4,R=f.matrixWorldInverse;a.getNormalMatrix(R),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,x=p;E!==g;++E,x+=4)o.copy(u[E]).applyMatrix4(R,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function rm(i){let t=new WeakMap;function e(o,a){return a===lo?o.mapping=Ci:a===co&&(o.mapping=Pi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===lo||a===co)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Mu(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Si=4,ul=[.125,.215,.35,.446,.526,.582],Xn=20,Gr=new Tc,fl=new kt;let Wr=null,Xr=0,Yr=0,qr=!1;const Gn=(1+Math.sqrt(5))/2,_i=1/Gn,dl=[new D(-Gn,_i,0),new D(Gn,_i,0),new D(-_i,0,Gn),new D(_i,0,Gn),new D(0,Gn,-_i),new D(0,Gn,_i),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class pl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Wr=this._renderer.getRenderTarget(),Xr=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel(),qr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wr,Xr,Yr),this._renderer.xr.enabled=qr,t.scissorTest=!1,ks(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ci||t.mapping===Pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wr=this._renderer.getRenderTarget(),Xr=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel(),qr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:os,format:Je,colorSpace:Ui,depthBuffer:!1},s=ml(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ml(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=om(r)),this._blurMaterial=am(r,t,e)}return s}_compileMaterial(t){const e=new fe(this._lodPlanes[0],t);this._renderer.compile(e,Gr)}_sceneToCubeUV(t,e,n,s){const a=new Ge(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(fl),h.toneMapping=Ln,h.autoClear=!1;const p=new cr({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),_=new fe(new zi,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(fl),g=!0);for(let d=0;d<6;d++){const R=d%3;R===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):R===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const E=this._cubeSize;ks(s,R*E,d>2?E:0,E,E),h.setRenderTarget(s),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ci||t.mapping===Pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_l());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new fe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ks(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Gr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=dl[(s-r-1)%dl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new fe(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Xn-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):Xn;m>Xn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xn}`);const d=[];let R=0;for(let A=0;A<Xn;++A){const C=A/g,T=Math.exp(-C*C/2);d.push(T),A===0?R+=T:A<m&&(R+=2*T)}for(let A=0;A<d.length;A++)d[A]=d[A]/R;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=_,f.mipInt.value=E-n;const x=this._sizeLods[s],P=3*x*(s>E-Si?s-E+Si:0),y=4*(this._cubeSize-x);ks(e,P,y,3*x,2*x),l.setRenderTarget(e),l.render(u,Gr)}}function om(i){const t=[],e=[],n=[];let s=i;const r=i-Si+1+ul.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Si?l=ul[o-i+Si-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,g=3,m=2,d=1,R=new Float32Array(g*_*p),E=new Float32Array(m*_*p),x=new Float32Array(d*_*p);for(let y=0;y<p;y++){const A=y%3*2/3-1,C=y>2?0:-1,T=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];R.set(T,g*_*y),E.set(f,m*_*y);const S=[y,y,y,y,y,y];x.set(S,d*_*y)}const P=new Te;P.setAttribute("position",new nn(R,g)),P.setAttribute("uv",new nn(E,m)),P.setAttribute("faceIndex",new nn(x,d)),t.push(P),s>Si&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ml(i,t,e){const n=new Zn(i,t,e);return n.texture.mapping=lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ks(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function am(i,t,e){const n=new Float32Array(Xn),s=new D(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ua(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function _l(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ua(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function gl(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function ua(){return`

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
	`}function lm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===lo||l===co,h=l===Ci||l===Pi;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new pl(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new pl(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function cm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&vi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function hm(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)t.update(f[p],i.ARRAY_BUFFER)}function c(u){const f=[],p=u.index,_=u.attributes.position;let g=0;if(p!==null){const R=p.array;g=p.version;for(let E=0,x=R.length;E<x;E+=3){const P=R[E+0],y=R[E+1],A=R[E+2];f.push(P,y,y,A,A,P)}}else if(_!==void 0){const R=_.array;g=_.version;for(let E=0,x=R.length/3-1;E<x;E+=3){const P=E+0,y=E+1,A=E+2;f.push(P,y,y,A,A,P)}}else return;const m=new(rc(f)?hc:cc)(f,1);m.version=g;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function um(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*o),e.update(p,n,1)}function c(f,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,f*o,_),e.update(p,n,_))}function h(f,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];e.update(m,n,1)}function u(f,p,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],g[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,g,0,_);let d=0;for(let R=0;R<_;R++)d+=p[R]*g[R];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function fm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function dm(i,t,e){const n=new WeakMap,s=new ce;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],R=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),m===!0&&(x=3);let P=a.attributes.position.count*x,y=1;P>t.maxTextureSize&&(y=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const A=new Float32Array(P*y*4*u),C=new ac(A,P,y,u);C.type=pn,C.needsUpdate=!0;const T=x*4;for(let L=0;L<u;L++){const H=d[L],O=R[L],W=E[L],j=P*y*4*L;for(let G=0;G<H.count;G++){const $=G*T;_===!0&&(s.fromBufferAttribute(H,G),A[j+$+0]=s.x,A[j+$+1]=s.y,A[j+$+2]=s.z,A[j+$+3]=0),g===!0&&(s.fromBufferAttribute(O,G),A[j+$+4]=s.x,A[j+$+5]=s.y,A[j+$+6]=s.z,A[j+$+7]=0),m===!0&&(s.fromBufferAttribute(W,G),A[j+$+8]=s.x,A[j+$+9]=s.y,A[j+$+10]=s.z,A[j+$+11]=W.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new nt(P,y)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function pm(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const wc=new De,vl=new mc(1,1),Rc=new ac,Cc=new su,Pc=new dc,xl=[],Ml=[],Sl=new Float32Array(16),yl=new Float32Array(9),El=new Float32Array(4);function Hi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=xl[s];if(r===void 0&&(r=new Float32Array(s),xl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ur(i,t){let e=Ml[t];e===void 0&&(e=new Int32Array(t),Ml[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function mm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function _m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2fv(this.addr,t),_e(e,t)}}function gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;i.uniform3fv(this.addr,t),_e(e,t)}}function vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4fv(this.addr,t),_e(e,t)}}function xm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(me(e,n))return;El.set(n),i.uniformMatrix2fv(this.addr,!1,El),_e(e,n)}}function Mm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(me(e,n))return;yl.set(n),i.uniformMatrix3fv(this.addr,!1,yl),_e(e,n)}}function Sm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(me(e,n))return;Sl.set(n),i.uniformMatrix4fv(this.addr,!1,Sl),_e(e,n)}}function ym(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2iv(this.addr,t),_e(e,t)}}function Tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3iv(this.addr,t),_e(e,t)}}function bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4iv(this.addr,t),_e(e,t)}}function Am(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2uiv(this.addr,t),_e(e,t)}}function Rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3uiv(this.addr,t),_e(e,t)}}function Cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4uiv(this.addr,t),_e(e,t)}}function Pm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(vl.compareFunction=sc,r=vl):r=wc,e.setTexture2D(t||r,s)}function Lm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Cc,s)}function Dm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Pc,s)}function Um(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Rc,s)}function Im(i){switch(i){case 5126:return mm;case 35664:return _m;case 35665:return gm;case 35666:return vm;case 35674:return xm;case 35675:return Mm;case 35676:return Sm;case 5124:case 35670:return ym;case 35667:case 35671:return Em;case 35668:case 35672:return Tm;case 35669:case 35673:return bm;case 5125:return Am;case 36294:return wm;case 36295:return Rm;case 36296:return Cm;case 35678:case 36198:case 36298:case 36306:case 35682:return Pm;case 35679:case 36299:case 36307:return Lm;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Um}}function Nm(i,t){i.uniform1fv(this.addr,t)}function Fm(i,t){const e=Hi(t,this.size,2);i.uniform2fv(this.addr,e)}function Om(i,t){const e=Hi(t,this.size,3);i.uniform3fv(this.addr,e)}function Bm(i,t){const e=Hi(t,this.size,4);i.uniform4fv(this.addr,e)}function zm(i,t){const e=Hi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Hm(i,t){const e=Hi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Vm(i,t){const e=Hi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function km(i,t){i.uniform1iv(this.addr,t)}function Gm(i,t){i.uniform2iv(this.addr,t)}function Wm(i,t){i.uniform3iv(this.addr,t)}function Xm(i,t){i.uniform4iv(this.addr,t)}function Ym(i,t){i.uniform1uiv(this.addr,t)}function qm(i,t){i.uniform2uiv(this.addr,t)}function jm(i,t){i.uniform3uiv(this.addr,t)}function Zm(i,t){i.uniform4uiv(this.addr,t)}function Km(i,t,e){const n=this.cache,s=t.length,r=ur(e,s);me(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||wc,r[o])}function $m(i,t,e){const n=this.cache,s=t.length,r=ur(e,s);me(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Cc,r[o])}function Jm(i,t,e){const n=this.cache,s=t.length,r=ur(e,s);me(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Pc,r[o])}function Qm(i,t,e){const n=this.cache,s=t.length,r=ur(e,s);me(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Rc,r[o])}function t_(i){switch(i){case 5126:return Nm;case 35664:return Fm;case 35665:return Om;case 35666:return Bm;case 35674:return zm;case 35675:return Hm;case 35676:return Vm;case 5124:case 35670:return km;case 35667:case 35671:return Gm;case 35668:case 35672:return Wm;case 35669:case 35673:return Xm;case 5125:return Ym;case 36294:return qm;case 36295:return jm;case 36296:return Zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return $m;case 35680:case 36300:case 36308:case 36293:return Jm;case 36289:case 36303:case 36311:case 36292:return Qm}}class e_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Im(e.type)}}class n_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=t_(e.type)}}class i_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const jr=/(\w+)(\])?(\[|\.)?/g;function Tl(i,t){i.seq.push(t),i.map[t.id]=t}function s_(i,t,e){const n=i.name,s=n.length;for(jr.lastIndex=0;;){const r=jr.exec(n),o=jr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Tl(e,c===void 0?new e_(a,i,t):new n_(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new i_(a),Tl(e,u)),e=u}}}class Js{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);s_(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function bl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const r_=37297;let o_=0;function a_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Al=new Bt;function l_(i){jt._getMatrix(Al,jt.workingColorSpace,i);const t=`mat3( ${Al.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case er:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function wl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+a_(i.getShaderSource(t),o)}else return s}function c_(i,t){const e=l_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function h_(i,t){let e;switch(t){case ph:e="Linear";break;case mh:e="Reinhard";break;case _h:e="Cineon";break;case gh:e="ACESFilmic";break;case xh:e="AgX";break;case Mh:e="Neutral";break;case vh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Gs=new D;function u_(){jt.getLuminanceCoefficients(Gs);const i=Gs.x.toFixed(4),t=Gs.y.toFixed(4),e=Gs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ji).join(`
`)}function d_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function p_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ji(i){return i!==""}function Rl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const m_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xo(i){return i.replace(m_,g_)}const __=new Map;function g_(i,t){let e=Ht[t];if(e===void 0){const n=__.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Xo(e)}const v_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pl(i){return i.replace(v_,x_)}function x_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ll(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function M_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===qc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===dn&&(t="SHADOWMAP_TYPE_VSM"),t}function S_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ci:case Pi:t="ENVMAP_TYPE_CUBE";break;case lr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function y_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Pi:t="ENVMAP_MODE_REFRACTION";break}return t}function E_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zo:t="ENVMAP_BLENDING_MULTIPLY";break;case fh:t="ENVMAP_BLENDING_MIX";break;case dh:t="ENVMAP_BLENDING_ADD";break}return t}function T_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function b_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=M_(e),c=S_(e),h=y_(e),u=E_(e),f=T_(e),p=f_(e),_=d_(r),g=s.createProgram();let m,d,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ji).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ji).join(`
`),d.length>0&&(d+=`
`)):(m=[Ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ji).join(`
`),d=[Ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Ln?h_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,c_("linearToOutputTexel",e.outputColorSpace),u_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ji).join(`
`)),o=Xo(o),o=Rl(o,e),o=Cl(o,e),a=Xo(a),a=Rl(a,e),a=Cl(a,e),o=Pl(o),a=Pl(a),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===wa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=R+m+o,x=R+d+a,P=bl(s,s.VERTEX_SHADER,E),y=bl(s,s.FRAGMENT_SHADER,x);s.attachShader(g,P),s.attachShader(g,y),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(L){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(g).trim(),O=s.getShaderInfoLog(P).trim(),W=s.getShaderInfoLog(y).trim();let j=!0,G=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,P,y);else{const $=wl(s,P,"vertex"),V=wl(s,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+$+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(O===""||W==="")&&(G=!1);G&&(L.diagnostics={runnable:j,programLog:H,vertexShader:{log:O,prefix:m},fragmentShader:{log:W,prefix:d}})}s.deleteShader(P),s.deleteShader(y),C=new Js(s,g),T=p_(s,g)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(g,r_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=o_++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=y,this}let A_=0;class w_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new R_(t),e.set(t,n)),n}}class R_{constructor(t){this.id=A_++,this.code=t,this.usedTimes=0}}function C_(i,t,e,n,s,r,o){const a=new sa,l=new w_,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,S,L,H,O){const W=H.fog,j=O.geometry,G=T.isMeshStandardMaterial?H.environment:null,$=(T.isMeshStandardMaterial?e:t).get(T.envMap||G),V=$&&$.mapping===lr?$.image.height:null,at=_[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const mt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,St=mt!==void 0?mt.length:0;let Ft=0;j.morphAttributes.position!==void 0&&(Ft=1),j.morphAttributes.normal!==void 0&&(Ft=2),j.morphAttributes.color!==void 0&&(Ft=3);let Zt,q,st,Et;if(at){const Jt=tn[at];Zt=Jt.vertexShader,q=Jt.fragmentShader}else Zt=T.vertexShader,q=T.fragmentShader,l.update(T),st=l.getVertexShaderID(T),Et=l.getFragmentShaderID(T);const ot=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),It=O.isInstancedMesh===!0,Lt=O.isBatchedMesh===!0,Xt=!!T.map,K=!!T.matcap,it=!!$,w=!!T.aoMap,bt=!!T.lightMap,Q=!!T.bumpMap,gt=!!T.normalMap,rt=!!T.displacementMap,Pt=!!T.emissiveMap,dt=!!T.metalnessMap,b=!!T.roughnessMap,v=T.anisotropy>0,F=T.clearcoat>0,X=T.dispersion>0,J=T.iridescence>0,Y=T.sheen>0,Tt=T.transmission>0,ct=v&&!!T.anisotropyMap,_t=F&&!!T.clearcoatMap,Gt=F&&!!T.clearcoatNormalMap,et=F&&!!T.clearcoatRoughnessMap,xt=J&&!!T.iridescenceMap,Ct=J&&!!T.iridescenceThicknessMap,Dt=Y&&!!T.sheenColorMap,Mt=Y&&!!T.sheenRoughnessMap,Wt=!!T.specularMap,zt=!!T.specularColorMap,ee=!!T.specularIntensityMap,U=Tt&&!!T.transmissionMap,ht=Tt&&!!T.thicknessMap,k=!!T.gradientMap,Z=!!T.alphaMap,pt=T.alphaTest>0,ft=!!T.alphaHash,Ot=!!T.extensions;let ae=Ln;T.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ae=i.toneMapping);const Se={shaderID:at,shaderType:T.type,shaderName:T.name,vertexShader:Zt,fragmentShader:q,defines:T.defines,customVertexShaderID:st,customFragmentShaderID:Et,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Lt,batchingColor:Lt&&O._colorsTexture!==null,instancing:It,instancingColor:It&&O.instanceColor!==null,instancingMorph:It&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Ui,alphaToCoverage:!!T.alphaToCoverage,map:Xt,matcap:K,envMap:it,envMapMode:it&&$.mapping,envMapCubeUVHeight:V,aoMap:w,lightMap:bt,bumpMap:Q,normalMap:gt,displacementMap:f&&rt,emissiveMap:Pt,normalMapObjectSpace:gt&&T.normalMapType===Th,normalMapTangentSpace:gt&&T.normalMapType===na,metalnessMap:dt,roughnessMap:b,anisotropy:v,anisotropyMap:ct,clearcoat:F,clearcoatMap:_t,clearcoatNormalMap:Gt,clearcoatRoughnessMap:et,dispersion:X,iridescence:J,iridescenceMap:xt,iridescenceThicknessMap:Ct,sheen:Y,sheenColorMap:Dt,sheenRoughnessMap:Mt,specularMap:Wt,specularColorMap:zt,specularIntensityMap:ee,transmission:Tt,transmissionMap:U,thicknessMap:ht,gradientMap:k,opaque:T.transparent===!1&&T.blending===Ei&&T.alphaToCoverage===!1,alphaMap:Z,alphaTest:pt,alphaHash:ft,combine:T.combine,mapUv:Xt&&g(T.map.channel),aoMapUv:w&&g(T.aoMap.channel),lightMapUv:bt&&g(T.lightMap.channel),bumpMapUv:Q&&g(T.bumpMap.channel),normalMapUv:gt&&g(T.normalMap.channel),displacementMapUv:rt&&g(T.displacementMap.channel),emissiveMapUv:Pt&&g(T.emissiveMap.channel),metalnessMapUv:dt&&g(T.metalnessMap.channel),roughnessMapUv:b&&g(T.roughnessMap.channel),anisotropyMapUv:ct&&g(T.anisotropyMap.channel),clearcoatMapUv:_t&&g(T.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&g(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&g(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&g(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&g(T.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&g(T.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&g(T.sheenRoughnessMap.channel),specularMapUv:Wt&&g(T.specularMap.channel),specularColorMapUv:zt&&g(T.specularColorMap.channel),specularIntensityMapUv:ee&&g(T.specularIntensityMap.channel),transmissionMapUv:U&&g(T.transmissionMap.channel),thicknessMapUv:ht&&g(T.thicknessMap.channel),alphaMapUv:Z&&g(T.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(gt||v),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!j.attributes.uv&&(Xt||Z),fog:!!W,useFog:T.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:At,skinning:O.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Ft,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,decodeVideoTexture:Xt&&T.map.isVideoTexture===!0&&jt.getTransfer(T.map.colorSpace)===Qt,decodeVideoTextureEmissive:Pt&&T.emissiveMap.isVideoTexture===!0&&jt.getTransfer(T.emissiveMap.colorSpace)===Qt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Me,flipSided:T.side===Le,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ot&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&T.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function d(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)S.push(L),S.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(R(S,T),E(S,T),S.push(i.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function R(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function E(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const S=_[T.type];let L;if(S){const H=tn[S];L=_u.clone(H.uniforms)}else L=T.uniforms;return L}function P(T,S){let L;for(let H=0,O=h.length;H<O;H++){const W=h[H];if(W.cacheKey===S){L=W,++L.usedTimes;break}}return L===void 0&&(L=new b_(i,S,T,r),h.push(L)),L}function y(T){if(--T.usedTimes===0){const S=h.indexOf(T);h[S]=h[h.length-1],h.pop(),T.destroy()}}function A(T){l.remove(T)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:P,releaseProgram:y,releaseShaderCache:A,programs:h,dispose:C}}function P_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function L_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Dl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ul(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,p,_,g,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=g,d.group=m),t++,d}function a(u,f,p,_,g,m){const d=o(u,f,p,_,g,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(u,f,p,_,g,m){const d=o(u,f,p,_,g,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||L_),n.length>1&&n.sort(f||Dl),s.length>1&&s.sort(f||Dl)}function h(){for(let u=t,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function D_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ul,i.set(n,[o])):s>=r.length?(o=new Ul,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function U_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new kt};break;case"SpotLight":e={position:new D,direction:new D,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function I_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let N_=0;function F_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function O_(i){const t=new U_,e=I_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new ne,o=new ne;function a(c){let h=0,u=0,f=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,_=0,g=0,m=0,d=0,R=0,E=0,x=0,P=0,y=0,A=0;c.sort(F_);for(let T=0,S=c.length;T<S;T++){const L=c[T],H=L.color,O=L.intensity,W=L.distance,j=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=H.r*O,u+=H.g*O,f+=H.b*O;else if(L.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(L.sh.coefficients[G],O);A++}else if(L.isDirectionalLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const $=L.shadow,V=e.get(L);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=L.shadow.matrix,R++}n.directional[p]=G,p++}else if(L.isSpotLight){const G=t.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(H).multiplyScalar(O),G.distance=W,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,n.spot[g]=G;const $=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,$.updateMatrices(L),L.castShadow&&y++),n.spotLightMatrix[g]=$.matrix,L.castShadow){const V=e.get(L);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=j,x++}g++}else if(L.isRectAreaLight){const G=t.get(L);G.color.copy(H).multiplyScalar(O),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=G,m++}else if(L.isPointLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){const $=L.shadow,V=e.get(L);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=j,n.pointShadowMatrix[_]=L.shadow.matrix,E++}n.point[_]=G,_++}else if(L.isHemisphereLight){const G=t.get(L);G.skyColor.copy(L.color).multiplyScalar(O),G.groundColor.copy(L.groundColor).multiplyScalar(O),n.hemi[d]=G,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==p||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==R||C.numPointShadows!==E||C.numSpotShadows!==x||C.numSpotMaps!==P||C.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=x+P-y,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=A,C.directionalLength=p,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=R,C.numPointShadows=E,C.numSpotShadows=x,C.numSpotMaps=P,C.numLightProbes=A,n.version=N_++)}function l(c,h){let u=0,f=0,p=0,_=0,g=0;const m=h.matrixWorldInverse;for(let d=0,R=c.length;d<R;d++){const E=c[d];if(E.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(E.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Il(i){const t=new O_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function B_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Il(i),t.set(s,[a])):r>=o.length?(a=new Il(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const z_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H_=`uniform sampler2D shadow_pass;
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
}`;function V_(i,t,e){let n=new ra;const s=new nt,r=new nt,o=new ce,a=new rf({depthPacking:Eh}),l=new of,c={},h=e.maxTextureSize,u={[Dn]:Le,[Le]:Dn,[Me]:Me},f=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:z_,fragmentShader:H_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Te;_.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new fe(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yl;let d=this.type;this.render=function(y,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const T=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Pn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const O=d!==dn&&this.type===dn,W=d===dn&&this.type!==dn;for(let j=0,G=y.length;j<G;j++){const $=y[j],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const at=V.getFrameExtents();if(s.multiply(at),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,V.mapSize.y=r.y)),V.map===null||O===!0||W===!0){const St=this.type!==dn?{minFilter:Qe,magFilter:Qe}:{};V.map!==null&&V.map.dispose(),V.map=new Zn(s.x,s.y,St),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const mt=V.getViewportCount();for(let St=0;St<mt;St++){const Ft=V.getViewport(St);o.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),H.viewport(o),V.updateMatrices($,St),n=V.getFrustum(),x(A,C,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===dn&&R(V,C),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(T,S,L)};function R(y,A){const C=t.update(g);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Zn(s.x,s.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(A,null,C,f,g,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(A,null,C,p,g,null)}function E(y,A,C,T){let S=null;const L=C.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(L!==void 0)S=L;else if(S=C.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=S.uuid,O=A.uuid;let W=c[H];W===void 0&&(W={},c[H]=W);let j=W[O];j===void 0&&(j=S.clone(),W[O]=j,A.addEventListener("dispose",P)),S=j}if(S.visible=A.visible,S.wireframe=A.wireframe,T===dn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=i.properties.get(S);H.light=C}return S}function x(y,A,C,T,S){if(y.visible===!1)return;if(y.layers.test(A.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===dn)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,y.matrixWorld);const O=t.update(y),W=y.material;if(Array.isArray(W)){const j=O.groups;for(let G=0,$=j.length;G<$;G++){const V=j[G],at=W[V.materialIndex];if(at&&at.visible){const mt=E(y,at,T,S);y.onBeforeShadow(i,y,A,C,O,mt,V),i.renderBufferDirect(C,null,O,mt,y,V),y.onAfterShadow(i,y,A,C,O,mt,V)}}}else if(W.visible){const j=E(y,W,T,S);y.onBeforeShadow(i,y,A,C,O,j,null),i.renderBufferDirect(C,null,O,j,y,null),y.onAfterShadow(i,y,A,C,O,j,null)}}const H=y.children;for(let O=0,W=H.length;O<W;O++)x(H[O],A,C,T,S)}function P(y){y.target.removeEventListener("dispose",P);for(const C in c){const T=c[C],S=y.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const k_={[eo]:no,[io]:oo,[so]:ao,[Ri]:ro,[no]:eo,[oo]:io,[ao]:so,[ro]:Ri};function G_(i,t){function e(){let U=!1;const ht=new ce;let k=null;const Z=new ce(0,0,0,0);return{setMask:function(pt){k!==pt&&!U&&(i.colorMask(pt,pt,pt,pt),k=pt)},setLocked:function(pt){U=pt},setClear:function(pt,ft,Ot,ae,Se){Se===!0&&(pt*=ae,ft*=ae,Ot*=ae),ht.set(pt,ft,Ot,ae),Z.equals(ht)===!1&&(i.clearColor(pt,ft,Ot,ae),Z.copy(ht))},reset:function(){U=!1,k=null,Z.set(-1,0,0,0)}}}function n(){let U=!1,ht=!1,k=null,Z=null,pt=null;return{setReversed:function(ft){if(ht!==ft){const Ot=t.get("EXT_clip_control");ht?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);const ae=pt;pt=null,this.setClear(ae)}ht=ft},getReversed:function(){return ht},setTest:function(ft){ft?ot(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(ft){k!==ft&&!U&&(i.depthMask(ft),k=ft)},setFunc:function(ft){if(ht&&(ft=k_[ft]),Z!==ft){switch(ft){case eo:i.depthFunc(i.NEVER);break;case no:i.depthFunc(i.ALWAYS);break;case io:i.depthFunc(i.LESS);break;case Ri:i.depthFunc(i.LEQUAL);break;case so:i.depthFunc(i.EQUAL);break;case ro:i.depthFunc(i.GEQUAL);break;case oo:i.depthFunc(i.GREATER);break;case ao:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ft}},setLocked:function(ft){U=ft},setClear:function(ft){pt!==ft&&(ht&&(ft=1-ft),i.clearDepth(ft),pt=ft)},reset:function(){U=!1,k=null,Z=null,pt=null,ht=!1}}}function s(){let U=!1,ht=null,k=null,Z=null,pt=null,ft=null,Ot=null,ae=null,Se=null;return{setTest:function(Jt){U||(Jt?ot(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(Jt){ht!==Jt&&!U&&(i.stencilMask(Jt),ht=Jt)},setFunc:function(Jt,Ye,on){(k!==Jt||Z!==Ye||pt!==on)&&(i.stencilFunc(Jt,Ye,on),k=Jt,Z=Ye,pt=on)},setOp:function(Jt,Ye,on){(ft!==Jt||Ot!==Ye||ae!==on)&&(i.stencilOp(Jt,Ye,on),ft=Jt,Ot=Ye,ae=on)},setLocked:function(Jt){U=Jt},setClear:function(Jt){Se!==Jt&&(i.clearStencil(Jt),Se=Jt)},reset:function(){U=!1,ht=null,k=null,Z=null,pt=null,ft=null,Ot=null,ae=null,Se=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],_=null,g=!1,m=null,d=null,R=null,E=null,x=null,P=null,y=null,A=new kt(0,0,0),C=0,T=!1,S=null,L=null,H=null,O=null,W=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,$=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=$>=2);let at=null,mt={};const St=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),Zt=new ce().fromArray(St),q=new ce().fromArray(Ft);function st(U,ht,k,Z){const pt=new Uint8Array(4),ft=i.createTexture();i.bindTexture(U,ft),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<k;Ot++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(ht+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return ft}const Et={};Et[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),Et[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Et[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(i.DEPTH_TEST),o.setFunc(Ri),Q(!1),gt(Sa),ot(i.CULL_FACE),w(Pn);function ot(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function At(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function It(U,ht){return u[U]!==ht?(i.bindFramebuffer(U,ht),u[U]=ht,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ht),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function Lt(U,ht){let k=p,Z=!1;if(U){k=f.get(ht),k===void 0&&(k=[],f.set(ht,k));const pt=U.textures;if(k.length!==pt.length||k[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Ot=pt.length;ft<Ot;ft++)k[ft]=i.COLOR_ATTACHMENT0+ft;k.length=pt.length,Z=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,Z=!0);Z&&i.drawBuffers(k)}function Xt(U){return _!==U?(i.useProgram(U),_=U,!0):!1}const K={[Wn]:i.FUNC_ADD,[Zc]:i.FUNC_SUBTRACT,[Kc]:i.FUNC_REVERSE_SUBTRACT};K[$c]=i.MIN,K[Jc]=i.MAX;const it={[Qc]:i.ZERO,[th]:i.ONE,[eh]:i.SRC_COLOR,[Qr]:i.SRC_ALPHA,[ah]:i.SRC_ALPHA_SATURATE,[rh]:i.DST_COLOR,[ih]:i.DST_ALPHA,[nh]:i.ONE_MINUS_SRC_COLOR,[to]:i.ONE_MINUS_SRC_ALPHA,[oh]:i.ONE_MINUS_DST_COLOR,[sh]:i.ONE_MINUS_DST_ALPHA,[lh]:i.CONSTANT_COLOR,[ch]:i.ONE_MINUS_CONSTANT_COLOR,[hh]:i.CONSTANT_ALPHA,[uh]:i.ONE_MINUS_CONSTANT_ALPHA};function w(U,ht,k,Z,pt,ft,Ot,ae,Se,Jt){if(U===Pn){g===!0&&(At(i.BLEND),g=!1);return}if(g===!1&&(ot(i.BLEND),g=!0),U!==jc){if(U!==m||Jt!==T){if((d!==Wn||x!==Wn)&&(i.blendEquation(i.FUNC_ADD),d=Wn,x=Wn),Jt)switch(U){case Ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ya:i.blendFunc(i.ONE,i.ONE);break;case Ea:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ta:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ya:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ea:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ta:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}R=null,E=null,P=null,y=null,A.set(0,0,0),C=0,m=U,T=Jt}return}pt=pt||ht,ft=ft||k,Ot=Ot||Z,(ht!==d||pt!==x)&&(i.blendEquationSeparate(K[ht],K[pt]),d=ht,x=pt),(k!==R||Z!==E||ft!==P||Ot!==y)&&(i.blendFuncSeparate(it[k],it[Z],it[ft],it[Ot]),R=k,E=Z,P=ft,y=Ot),(ae.equals(A)===!1||Se!==C)&&(i.blendColor(ae.r,ae.g,ae.b,Se),A.copy(ae),C=Se),m=U,T=!1}function bt(U,ht){U.side===Me?At(i.CULL_FACE):ot(i.CULL_FACE);let k=U.side===Le;ht&&(k=!k),Q(k),U.blending===Ei&&U.transparent===!1?w(Pn):w(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const Z=U.stencilWrite;a.setTest(Z),Z&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Pt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(U){S!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),S=U)}function gt(U){U!==Xc?(ot(i.CULL_FACE),U!==L&&(U===Sa?i.cullFace(i.BACK):U===Yc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),L=U}function rt(U){U!==H&&(G&&i.lineWidth(U),H=U)}function Pt(U,ht,k){U?(ot(i.POLYGON_OFFSET_FILL),(O!==ht||W!==k)&&(i.polygonOffset(ht,k),O=ht,W=k)):At(i.POLYGON_OFFSET_FILL)}function dt(U){U?ot(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function b(U){U===void 0&&(U=i.TEXTURE0+j-1),at!==U&&(i.activeTexture(U),at=U)}function v(U,ht,k){k===void 0&&(at===null?k=i.TEXTURE0+j-1:k=at);let Z=mt[k];Z===void 0&&(Z={type:void 0,texture:void 0},mt[k]=Z),(Z.type!==U||Z.texture!==ht)&&(at!==k&&(i.activeTexture(k),at=k),i.bindTexture(U,ht||Et[U]),Z.type=U,Z.texture=ht)}function F(){const U=mt[at];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function X(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(U){Zt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Zt.copy(U))}function Mt(U){q.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),q.copy(U))}function Wt(U,ht){let k=c.get(ht);k===void 0&&(k=new WeakMap,c.set(ht,k));let Z=k.get(U);Z===void 0&&(Z=i.getUniformBlockIndex(ht,U.name),k.set(U,Z))}function zt(U,ht){const Z=c.get(ht).get(U);l.get(ht)!==Z&&(i.uniformBlockBinding(ht,Z,U.__bindingPointIndex),l.set(ht,Z))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},at=null,mt={},u={},f=new WeakMap,p=[],_=null,g=!1,m=null,d=null,R=null,E=null,x=null,P=null,y=null,A=new kt(0,0,0),C=0,T=!1,S=null,L=null,H=null,O=null,W=null,Zt.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:At,bindFramebuffer:It,drawBuffers:Lt,useProgram:Xt,setBlending:w,setMaterial:bt,setFlipSided:Q,setCullFace:gt,setLineWidth:rt,setPolygonOffset:Pt,setScissorTest:dt,activeTexture:b,bindTexture:v,unbindTexture:F,compressedTexImage2D:X,compressedTexImage3D:J,texImage2D:xt,texImage3D:Ct,updateUBOMapping:Wt,uniformBlockBinding:zt,texStorage2D:Gt,texStorage3D:et,texSubImage2D:Y,texSubImage3D:Tt,compressedTexSubImage2D:ct,compressedTexSubImage3D:_t,scissor:Dt,viewport:Mt,reset:ee}}function W_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,v){return p?new OffscreenCanvas(b,v):ir("canvas")}function g(b,v,F){let X=1;const J=dt(b);if((J.width>F||J.height>F)&&(X=F/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Y=Math.floor(X*J.width),Tt=Math.floor(X*J.height);u===void 0&&(u=_(Y,Tt));const ct=v?_(Y,Tt):u;return ct.width=Y,ct.height=Tt,ct.getContext("2d").drawImage(b,0,0,Y,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+Tt+")."),ct}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function m(b){return b.generateMipmaps}function d(b){i.generateMipmap(b)}function R(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(b,v,F,X,J=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Y=v;if(v===i.RED&&(F===i.FLOAT&&(Y=i.R32F),F===i.HALF_FLOAT&&(Y=i.R16F),F===i.UNSIGNED_BYTE&&(Y=i.R8)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.R8UI),F===i.UNSIGNED_SHORT&&(Y=i.R16UI),F===i.UNSIGNED_INT&&(Y=i.R32UI),F===i.BYTE&&(Y=i.R8I),F===i.SHORT&&(Y=i.R16I),F===i.INT&&(Y=i.R32I)),v===i.RG&&(F===i.FLOAT&&(Y=i.RG32F),F===i.HALF_FLOAT&&(Y=i.RG16F),F===i.UNSIGNED_BYTE&&(Y=i.RG8)),v===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RG8UI),F===i.UNSIGNED_SHORT&&(Y=i.RG16UI),F===i.UNSIGNED_INT&&(Y=i.RG32UI),F===i.BYTE&&(Y=i.RG8I),F===i.SHORT&&(Y=i.RG16I),F===i.INT&&(Y=i.RG32I)),v===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),F===i.UNSIGNED_INT&&(Y=i.RGB32UI),F===i.BYTE&&(Y=i.RGB8I),F===i.SHORT&&(Y=i.RGB16I),F===i.INT&&(Y=i.RGB32I)),v===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),F===i.UNSIGNED_INT&&(Y=i.RGBA32UI),F===i.BYTE&&(Y=i.RGBA8I),F===i.SHORT&&(Y=i.RGBA16I),F===i.INT&&(Y=i.RGBA32I)),v===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),v===i.RGBA){const Tt=J?er:jt.getTransfer(X);F===i.FLOAT&&(Y=i.RGBA32F),F===i.HALF_FLOAT&&(Y=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Y=Tt===Qt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(b,v){let F;return b?v===null||v===jn||v===Li?F=i.DEPTH24_STENCIL8:v===pn?F=i.DEPTH32F_STENCIL8:v===ts&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===jn||v===Li?F=i.DEPTH_COMPONENT24:v===pn?F=i.DEPTH_COMPONENT32F:v===ts&&(F=i.DEPTH_COMPONENT16),F}function P(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Qe&&b.minFilter!==en?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function y(b){const v=b.target;v.removeEventListener("dispose",y),C(v),v.isVideoTexture&&h.delete(v)}function A(b){const v=b.target;v.removeEventListener("dispose",A),S(v)}function C(b){const v=n.get(b);if(v.__webglInit===void 0)return;const F=b.source,X=f.get(F);if(X){const J=X[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&T(b),Object.keys(X).length===0&&f.delete(F)}n.remove(b)}function T(b){const v=n.get(b);i.deleteTexture(v.__webglTexture);const F=b.source,X=f.get(F);delete X[v.__cacheKey],o.memory.textures--}function S(b){const v=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let J=0;J<v.__webglFramebuffer[X].length;J++)i.deleteFramebuffer(v.__webglFramebuffer[X][J]);else i.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)i.deleteFramebuffer(v.__webglFramebuffer[X]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=b.textures;for(let X=0,J=F.length;X<J;X++){const Y=n.get(F[X]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(F[X])}n.remove(b)}let L=0;function H(){L=0}function O(){const b=L;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),L+=1,b}function W(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function j(b,v){const F=n.get(b);if(b.isVideoTexture&&rt(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const X=b.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,b,v);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function G(b,v){const F=n.get(b);if(b.version>0&&F.__version!==b.version){q(F,b,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function $(b,v){const F=n.get(b);if(b.version>0&&F.__version!==b.version){q(F,b,v);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function V(b,v){const F=n.get(b);if(b.version>0&&F.__version!==b.version){st(F,b,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}const at={[ho]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[uo]:i.MIRRORED_REPEAT},mt={[Qe]:i.NEAREST,[Sh]:i.NEAREST_MIPMAP_NEAREST,[fs]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[pr]:i.LINEAR_MIPMAP_NEAREST,[qn]:i.LINEAR_MIPMAP_LINEAR},St={[bh]:i.NEVER,[Lh]:i.ALWAYS,[Ah]:i.LESS,[sc]:i.LEQUAL,[wh]:i.EQUAL,[Ph]:i.GEQUAL,[Rh]:i.GREATER,[Ch]:i.NOTEQUAL};function Ft(b,v){if(v.type===pn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===en||v.magFilter===pr||v.magFilter===fs||v.magFilter===qn||v.minFilter===en||v.minFilter===pr||v.minFilter===fs||v.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,at[v.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,at[v.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,at[v.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,mt[v.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,mt[v.minFilter]),v.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,St[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Qe||v.minFilter!==fs&&v.minFilter!==qn||v.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Zt(b,v){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",y));const X=v.source;let J=f.get(X);J===void 0&&(J={},f.set(X,J));const Y=W(v);if(Y!==b.__cacheKey){J[Y]===void 0&&(J[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[Y].usedTimes++;const Tt=J[b.__cacheKey];Tt!==void 0&&(J[b.__cacheKey].usedTimes--,Tt.usedTimes===0&&T(v)),b.__cacheKey=Y,b.__webglTexture=J[Y].texture}return F}function q(b,v,F){let X=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=i.TEXTURE_3D);const J=Zt(b,v),Y=v.source;e.bindTexture(X,b.__webglTexture,i.TEXTURE0+F);const Tt=n.get(Y);if(Y.version!==Tt.__version||J===!0){e.activeTexture(i.TEXTURE0+F);const ct=jt.getPrimaries(jt.workingColorSpace),_t=v.colorSpace===Rn?null:jt.getPrimaries(v.colorSpace),Gt=v.colorSpace===Rn||ct===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let et=g(v.image,!1,s.maxTextureSize);et=Pt(v,et);const xt=r.convert(v.format,v.colorSpace),Ct=r.convert(v.type);let Dt=E(v.internalFormat,xt,Ct,v.colorSpace,v.isVideoTexture);Ft(X,v);let Mt;const Wt=v.mipmaps,zt=v.isVideoTexture!==!0,ee=Tt.__version===void 0||J===!0,U=Y.dataReady,ht=P(v,et);if(v.isDepthTexture)Dt=x(v.format===Di,v.type),ee&&(zt?e.texStorage2D(i.TEXTURE_2D,1,Dt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Dt,et.width,et.height,0,xt,Ct,null));else if(v.isDataTexture)if(Wt.length>0){zt&&ee&&e.texStorage2D(i.TEXTURE_2D,ht,Dt,Wt[0].width,Wt[0].height);for(let k=0,Z=Wt.length;k<Z;k++)Mt=Wt[k],zt?U&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,Mt.width,Mt.height,xt,Ct,Mt.data):e.texImage2D(i.TEXTURE_2D,k,Dt,Mt.width,Mt.height,0,xt,Ct,Mt.data);v.generateMipmaps=!1}else zt?(ee&&e.texStorage2D(i.TEXTURE_2D,ht,Dt,et.width,et.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,xt,Ct,et.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,et.width,et.height,0,xt,Ct,et.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){zt&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Dt,Wt[0].width,Wt[0].height,et.depth);for(let k=0,Z=Wt.length;k<Z;k++)if(Mt=Wt[k],v.format!==Je)if(xt!==null)if(zt){if(U)if(v.layerUpdates.size>0){const pt=hl(Mt.width,Mt.height,v.format,v.type);for(const ft of v.layerUpdates){const Ot=Mt.data.subarray(ft*pt/Mt.data.BYTES_PER_ELEMENT,(ft+1)*pt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,ft,Mt.width,Mt.height,1,xt,Ot)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,Mt.width,Mt.height,et.depth,xt,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,Dt,Mt.width,Mt.height,et.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,Mt.width,Mt.height,et.depth,xt,Ct,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,k,Dt,Mt.width,Mt.height,et.depth,0,xt,Ct,Mt.data)}else{zt&&ee&&e.texStorage2D(i.TEXTURE_2D,ht,Dt,Wt[0].width,Wt[0].height);for(let k=0,Z=Wt.length;k<Z;k++)Mt=Wt[k],v.format!==Je?xt!==null?zt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,Mt.width,Mt.height,xt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,k,Dt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?U&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,Mt.width,Mt.height,xt,Ct,Mt.data):e.texImage2D(i.TEXTURE_2D,k,Dt,Mt.width,Mt.height,0,xt,Ct,Mt.data)}else if(v.isDataArrayTexture)if(zt){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Dt,et.width,et.height,et.depth),U)if(v.layerUpdates.size>0){const k=hl(et.width,et.height,v.format,v.type);for(const Z of v.layerUpdates){const pt=et.data.subarray(Z*k/et.data.BYTES_PER_ELEMENT,(Z+1)*k/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,et.width,et.height,1,xt,Ct,pt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,xt,Ct,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,et.width,et.height,et.depth,0,xt,Ct,et.data);else if(v.isData3DTexture)zt?(ee&&e.texStorage3D(i.TEXTURE_3D,ht,Dt,et.width,et.height,et.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,xt,Ct,et.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,et.width,et.height,et.depth,0,xt,Ct,et.data);else if(v.isFramebufferTexture){if(ee)if(zt)e.texStorage2D(i.TEXTURE_2D,ht,Dt,et.width,et.height);else{let k=et.width,Z=et.height;for(let pt=0;pt<ht;pt++)e.texImage2D(i.TEXTURE_2D,pt,Dt,k,Z,0,xt,Ct,null),k>>=1,Z>>=1}}else if(Wt.length>0){if(zt&&ee){const k=dt(Wt[0]);e.texStorage2D(i.TEXTURE_2D,ht,Dt,k.width,k.height)}for(let k=0,Z=Wt.length;k<Z;k++)Mt=Wt[k],zt?U&&e.texSubImage2D(i.TEXTURE_2D,k,0,0,xt,Ct,Mt):e.texImage2D(i.TEXTURE_2D,k,Dt,xt,Ct,Mt);v.generateMipmaps=!1}else if(zt){if(ee){const k=dt(et);e.texStorage2D(i.TEXTURE_2D,ht,Dt,k.width,k.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Ct,et)}else e.texImage2D(i.TEXTURE_2D,0,Dt,xt,Ct,et);m(v)&&d(X),Tt.__version=Y.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function st(b,v,F){if(v.image.length!==6)return;const X=Zt(b,v),J=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+F);const Y=n.get(J);if(J.version!==Y.__version||X===!0){e.activeTexture(i.TEXTURE0+F);const Tt=jt.getPrimaries(jt.workingColorSpace),ct=v.colorSpace===Rn?null:jt.getPrimaries(v.colorSpace),_t=v.colorSpace===Rn||Tt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Gt=v.isCompressedTexture||v.image[0].isCompressedTexture,et=v.image[0]&&v.image[0].isDataTexture,xt=[];for(let Z=0;Z<6;Z++)!Gt&&!et?xt[Z]=g(v.image[Z],!0,s.maxCubemapSize):xt[Z]=et?v.image[Z].image:v.image[Z],xt[Z]=Pt(v,xt[Z]);const Ct=xt[0],Dt=r.convert(v.format,v.colorSpace),Mt=r.convert(v.type),Wt=E(v.internalFormat,Dt,Mt,v.colorSpace),zt=v.isVideoTexture!==!0,ee=Y.__version===void 0||X===!0,U=J.dataReady;let ht=P(v,Ct);Ft(i.TEXTURE_CUBE_MAP,v);let k;if(Gt){zt&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Wt,Ct.width,Ct.height);for(let Z=0;Z<6;Z++){k=xt[Z].mipmaps;for(let pt=0;pt<k.length;pt++){const ft=k[pt];v.format!==Je?Dt!==null?zt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,0,0,ft.width,ft.height,Dt,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,Wt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,0,0,ft.width,ft.height,Dt,Mt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,Wt,ft.width,ft.height,0,Dt,Mt,ft.data)}}}else{if(k=v.mipmaps,zt&&ee){k.length>0&&ht++;const Z=dt(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Wt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(et){zt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,xt[Z].width,xt[Z].height,Dt,Mt,xt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Wt,xt[Z].width,xt[Z].height,0,Dt,Mt,xt[Z].data);for(let pt=0;pt<k.length;pt++){const Ot=k[pt].image[Z].image;zt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,0,0,Ot.width,Ot.height,Dt,Mt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,Wt,Ot.width,Ot.height,0,Dt,Mt,Ot.data)}}else{zt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Dt,Mt,xt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Wt,Dt,Mt,xt[Z]);for(let pt=0;pt<k.length;pt++){const ft=k[pt];zt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,0,0,Dt,Mt,ft.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,Wt,Dt,Mt,ft.image[Z])}}}m(v)&&d(i.TEXTURE_CUBE_MAP),Y.__version=J.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Et(b,v,F,X,J,Y){const Tt=r.convert(F.format,F.colorSpace),ct=r.convert(F.type),_t=E(F.internalFormat,Tt,ct,F.colorSpace),Gt=n.get(v),et=n.get(F);if(et.__renderTarget=v,!Gt.__hasExternalTextures){const xt=Math.max(1,v.width>>Y),Ct=Math.max(1,v.height>>Y);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,Y,_t,xt,Ct,v.depth,0,Tt,ct,null):e.texImage2D(J,Y,_t,xt,Ct,0,Tt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),gt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,J,et.__webglTexture,0,Q(v)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,J,et.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(b,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,b),v.depthBuffer){const X=v.depthTexture,J=X&&X.isDepthTexture?X.type:null,Y=x(v.stencilBuffer,J),Tt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=Q(v);gt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,Y,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,Y,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Y,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,b)}else{const X=v.textures;for(let J=0;J<X.length;J++){const Y=X[J],Tt=r.convert(Y.format,Y.colorSpace),ct=r.convert(Y.type),_t=E(Y.internalFormat,Tt,ct,Y.colorSpace),Gt=Q(v);F&&gt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,_t,v.width,v.height):gt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,_t,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,_t,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(v.depthTexture);X.__renderTarget=v,(!X.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j(v.depthTexture,0);const J=X.__webglTexture,Y=Q(v);if(v.depthTexture.format===Ti)gt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(v.depthTexture.format===Di)gt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function It(b){const v=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const X=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=X}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");At(v.__webglFramebuffer,b)}else if(F){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=i.createRenderbuffer(),ot(v.__webglDepthbuffer[X],b,!1);else{const J=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ot(v.__webglDepthbuffer,b,!1);else{const X=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(b,v,F){const X=n.get(b);v!==void 0&&Et(X.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&It(b)}function Xt(b){const v=b.texture,F=n.get(b),X=n.get(v);b.addEventListener("dispose",A);const J=b.textures,Y=b.isWebGLCubeRenderTarget===!0,Tt=J.length>1;if(Tt||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=v.version,o.memory.textures++),Y){F.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[ct]=[];for(let _t=0;_t<v.mipmaps.length;_t++)F.__webglFramebuffer[ct][_t]=i.createFramebuffer()}else F.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let ct=0;ct<v.mipmaps.length;ct++)F.__webglFramebuffer[ct]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let ct=0,_t=J.length;ct<_t;ct++){const Gt=n.get(J[ct]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&gt(b)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ct=0;ct<J.length;ct++){const _t=J[ct];F.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ct]);const Gt=r.convert(_t.format,_t.colorSpace),et=r.convert(_t.type),xt=E(_t.internalFormat,Gt,et,_t.colorSpace,b.isXRRenderTarget===!0),Ct=Q(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,xt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,F.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(F.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,v);for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0)for(let _t=0;_t<v.mipmaps.length;_t++)Et(F.__webglFramebuffer[ct][_t],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,_t);else Et(F.__webglFramebuffer[ct],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(v)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ct=0,_t=J.length;ct<_t;ct++){const Gt=J[ct],et=n.get(Gt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),Ft(i.TEXTURE_2D,Gt),Et(F.__webglFramebuffer,b,Gt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),m(Gt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ct=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,X.__webglTexture),Ft(ct,v),v.mipmaps&&v.mipmaps.length>0)for(let _t=0;_t<v.mipmaps.length;_t++)Et(F.__webglFramebuffer[_t],b,v,i.COLOR_ATTACHMENT0,ct,_t);else Et(F.__webglFramebuffer,b,v,i.COLOR_ATTACHMENT0,ct,0);m(v)&&d(ct),e.unbindTexture()}b.depthBuffer&&It(b)}function K(b){const v=b.textures;for(let F=0,X=v.length;F<X;F++){const J=v[F];if(m(J)){const Y=R(b),Tt=n.get(J).__webglTexture;e.bindTexture(Y,Tt),d(Y),e.unbindTexture()}}}const it=[],w=[];function bt(b){if(b.samples>0){if(gt(b)===!1){const v=b.textures,F=b.width,X=b.height;let J=i.COLOR_BUFFER_BIT;const Y=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(b),ct=v.length>1;if(ct)for(let _t=0;_t<v.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let _t=0;_t<v.length;_t++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);const Gt=n.get(v[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,F,X,0,0,F,X,J,i.NEAREST),l===!0&&(it.length=0,w.length=0,it.push(i.COLOR_ATTACHMENT0+_t),b.depthBuffer&&b.resolveDepthBuffer===!1&&(it.push(Y),w.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let _t=0;_t<v.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);const Gt=n.get(v[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const v=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Q(b){return Math.min(s.maxSamples,b.samples)}function gt(b){const v=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function rt(b){const v=o.render.frame;h.get(b)!==v&&(h.set(b,v),b.update())}function Pt(b,v){const F=b.colorSpace,X=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==Ui&&F!==Rn&&(jt.getTransfer(F)===Qt?(X!==Je||J!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function dt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=H,this.setTexture2D=j,this.setTexture2DArray=G,this.setTexture3D=$,this.setTextureCube=V,this.rebindTextures=Lt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=gt}function X_(i,t){function e(n,s=Rn){let r;const o=jt.getTransfer(s);if(n===xn)return i.UNSIGNED_BYTE;if(n===$o)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Kl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jl)return i.BYTE;if(n===Zl)return i.SHORT;if(n===ts)return i.UNSIGNED_SHORT;if(n===Ko)return i.INT;if(n===jn)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===os)return i.HALF_FLOAT;if(n===$l)return i.ALPHA;if(n===Jl)return i.RGB;if(n===Je)return i.RGBA;if(n===Ql)return i.LUMINANCE;if(n===tc)return i.LUMINANCE_ALPHA;if(n===Ti)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===ec)return i.RED;if(n===Qo)return i.RED_INTEGER;if(n===nc)return i.RG;if(n===ta)return i.RG_INTEGER;if(n===ea)return i.RGBA_INTEGER;if(n===qs||n===js||n===Zs||n===Ks)if(o===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fo||n===po||n===mo||n===_o)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===po)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===go||n===vo||n===xo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===go||n===vo)return o===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xo)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mo||n===So||n===yo||n===Eo||n===To||n===bo||n===Ao||n===wo||n===Ro||n===Co||n===Po||n===Lo||n===Do||n===Uo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Mo)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===So)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yo)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Eo)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===To)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bo)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ao)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wo)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ro)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Co)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Po)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lo)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Do)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uo)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$s||n===Io||n===No)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===$s)return o===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Io)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===No)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ic||n===Fo||n===Oo||n===Bo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===$s)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Li?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Y_={type:"move"};class Zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),d=this._getHandJoint(c,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Y_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Cn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const q_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,j_=`
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

}`;class Z_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new De,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Un({vertexShader:q_,fragmentShader:j_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fe(new cs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class K_ extends Qn{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,_=null;const g=new Z_,m=e.getContextAttributes();let d=null,R=null;const E=[],x=[],P=new nt;let y=null;const A=new Ge;A.viewport=new ce;const C=new Ge;C.viewport=new ce;const T=[A,C],S=new mf;let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let st=E[q];return st===void 0&&(st=new Zr,E[q]=st),st.getTargetRaySpace()},this.getControllerGrip=function(q){let st=E[q];return st===void 0&&(st=new Zr,E[q]=st),st.getGripSpace()},this.getHand=function(q){let st=E[q];return st===void 0&&(st=new Zr,E[q]=st),st.getHandSpace()};function O(q){const st=x.indexOf(q.inputSource);if(st===-1)return;const Et=E[st];Et!==void 0&&(Et.update(q.inputSource,q.frame,c||o),Et.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",j);for(let q=0;q<E.length;q++){const st=x[q];st!==null&&(x[q]=null,E[q].disconnect(st))}L=null,H=null,g.reset(),t.setRenderTarget(d),p=null,f=null,u=null,s=null,R=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",W),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),R=new Zn(p.framebufferWidth,p.framebufferHeight,{format:Je,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,Et=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?Di:Ti,Et=m.stencil?Li:jn);const At={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(At),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),R=new Zn(f.textureWidth,f.textureHeight,{format:Je,type:xn,depthTexture:new mc(f.textureWidth,f.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(q){for(let st=0;st<q.removed.length;st++){const Et=q.removed[st],ot=x.indexOf(Et);ot>=0&&(x[ot]=null,E[ot].disconnect(Et))}for(let st=0;st<q.added.length;st++){const Et=q.added[st];let ot=x.indexOf(Et);if(ot===-1){for(let It=0;It<E.length;It++)if(It>=x.length){x.push(Et),ot=It;break}else if(x[It]===null){x[It]=Et,ot=It;break}if(ot===-1)break}const At=E[ot];At&&At.connect(Et)}}const G=new D,$=new D;function V(q,st,Et){G.setFromMatrixPosition(st.matrixWorld),$.setFromMatrixPosition(Et.matrixWorld);const ot=G.distanceTo($),At=st.projectionMatrix.elements,It=Et.projectionMatrix.elements,Lt=At[14]/(At[10]-1),Xt=At[14]/(At[10]+1),K=(At[9]+1)/At[5],it=(At[9]-1)/At[5],w=(At[8]-1)/At[0],bt=(It[8]+1)/It[0],Q=Lt*w,gt=Lt*bt,rt=ot/(-w+bt),Pt=rt*-w;if(st.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Pt),q.translateZ(rt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),At[10]===-1)q.projectionMatrix.copy(st.projectionMatrix),q.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const dt=Lt+rt,b=Xt+rt,v=Q-Pt,F=gt+(ot-Pt),X=K*Xt/b*dt,J=it*Xt/b*dt;q.projectionMatrix.makePerspective(v,F,X,J,dt,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function at(q,st){st===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(st.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let st=q.near,Et=q.far;g.texture!==null&&(g.depthNear>0&&(st=g.depthNear),g.depthFar>0&&(Et=g.depthFar)),S.near=C.near=A.near=st,S.far=C.far=A.far=Et,(L!==S.near||H!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,H=S.far),A.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,S.layers.mask=A.layers.mask|C.layers.mask;const ot=q.parent,At=S.cameras;at(S,ot);for(let It=0;It<At.length;It++)at(At[It],ot);At.length===2?V(S,A,C):S.projectionMatrix.copy(A.projectionMatrix),mt(q,S,ot)};function mt(q,st,Et){Et===null?q.matrix.copy(st.matrixWorld):(q.matrix.copy(Et.matrixWorld),q.matrix.invert(),q.matrix.multiply(st.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(st.projectionMatrix),q.projectionMatrixInverse.copy(st.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=es*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let St=null;function Ft(q,st){if(h=st.getViewerPose(c||o),_=st,h!==null){const Et=h.views;p!==null&&(t.setRenderTargetFramebuffer(R,p.framebuffer),t.setRenderTarget(R));let ot=!1;Et.length!==S.cameras.length&&(S.cameras.length=0,ot=!0);for(let It=0;It<Et.length;It++){const Lt=Et[It];let Xt=null;if(p!==null)Xt=p.getViewport(Lt);else{const it=u.getViewSubImage(f,Lt);Xt=it.viewport,It===0&&(t.setRenderTargetTextures(R,it.colorTexture,f.ignoreDepthValues?void 0:it.depthStencilTexture),t.setRenderTarget(R))}let K=T[It];K===void 0&&(K=new Ge,K.layers.enable(It),K.viewport=new ce,T[It]=K),K.matrix.fromArray(Lt.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Lt.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),It===0&&(S.matrix.copy(K.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ot===!0&&S.cameras.push(K)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")){const It=u.getDepthInformation(Et[0]);It&&It.isValid&&It.texture&&g.init(t,It,s.renderState)}}for(let Et=0;Et<E.length;Et++){const ot=x[Et],At=E[Et];ot!==null&&At!==void 0&&At.update(ot,st,c||o)}St&&St(q,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),_=null}const Zt=new Ac;Zt.setAnimationLoop(Ft),this.setAnimationLoop=function(q){St=q},this.dispose=function(){}}}const kn=new Be,$_=new ne;function J_(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,uc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,R,E,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),g(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,R,E):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Le&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Le&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const R=t.get(d),E=R.envMap,x=R.envMapRotation;E&&(m.envMap.value=E,kn.copy(x),kn.x*=-1,kn.y*=-1,kn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),m.envMapRotation.value.setFromMatrix4($_.makeRotationFromEuler(kn)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,R,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*R,m.scale.value=E*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,R){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Le&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const R=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Q_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,E){const x=E.program;n.uniformBlockBinding(R,x)}function c(R,E){let x=s[R.id];x===void 0&&(_(R),x=h(R),s[R.id]=x,R.addEventListener("dispose",m));const P=E.program;n.updateUBOMapping(R,P);const y=t.render.frame;r[R.id]!==y&&(f(R),r[R.id]=y)}function h(R){const E=u();R.__bindingPointIndex=E;const x=i.createBuffer(),P=R.__size,y=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,P,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,x),x}function u(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){const E=s[R.id],x=R.uniforms,P=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let y=0,A=x.length;y<A;y++){const C=Array.isArray(x[y])?x[y]:[x[y]];for(let T=0,S=C.length;T<S;T++){const L=C[T];if(p(L,y,T,P)===!0){const H=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let j=0;j<O.length;j++){const G=O[j],$=g(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,H+W,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,W),W+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(R,E,x,P){const y=R.value,A=E+"_"+x;if(P[A]===void 0)return typeof y=="number"||typeof y=="boolean"?P[A]=y:P[A]=y.clone(),!0;{const C=P[A];if(typeof y=="number"||typeof y=="boolean"){if(C!==y)return P[A]=y,!0}else if(C.equals(y)===!1)return C.copy(y),!0}return!1}function _(R){const E=R.uniforms;let x=0;const P=16;for(let A=0,C=E.length;A<C;A++){const T=Array.isArray(E[A])?E[A]:[E[A]];for(let S=0,L=T.length;S<L;S++){const H=T[S],O=Array.isArray(H.value)?H.value:[H.value];for(let W=0,j=O.length;W<j;W++){const G=O[W],$=g(G),V=x%P,at=V%$.boundary,mt=V+at;x+=at,mt!==0&&P-mt<$.storage&&(x+=P-mt),H.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=$.storage}}}const y=x%P;return y>0&&(x+=P-y),R.__size=x,R.__cache={},this}function g(R){const E={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(E.boundary=4,E.storage=4):R.isVector2?(E.boundary=8,E.storage=8):R.isVector3||R.isColor?(E.boundary=16,E.storage=12):R.isVector4?(E.boundary=16,E.storage=16):R.isMatrix3?(E.boundary=48,E.storage=48):R.isMatrix4?(E.boundary=64,E.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),E}function m(R){const E=R.target;E.removeEventListener("dispose",m);const x=o.indexOf(E.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function d(){for(const R in s)i.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class tg{constructor(t={}){const{canvas:e=Zh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,d=null;const R=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this.toneMapping=Ln,this.toneMappingExposure=1;const x=this;let P=!1,y=0,A=0,C=null,T=-1,S=null;const L=new ce,H=new ce;let O=null;const W=new kt(0);let j=0,G=e.width,$=e.height,V=1,at=null,mt=null;const St=new ce(0,0,G,$),Ft=new ce(0,0,G,$);let Zt=!1;const q=new ra;let st=!1,Et=!1;const ot=new ne,At=new ne,It=new D,Lt=new ce,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let K=!1;function it(){return C===null?V:1}let w=n;function bt(M,I){return e.getContext(M,I)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${jo}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),w===null){const I="webgl2";if(w=bt(I,M),w===null)throw bt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Q,gt,rt,Pt,dt,b,v,F,X,J,Y,Tt,ct,_t,Gt,et,xt,Ct,Dt,Mt,Wt,zt,ee,U;function ht(){Q=new cm(w),Q.init(),zt=new X_(w,Q),gt=new im(w,Q,t,zt),rt=new G_(w,Q),gt.reverseDepthBuffer&&f&&rt.buffers.depth.setReversed(!0),Pt=new fm(w),dt=new P_,b=new W_(w,Q,rt,dt,gt,zt,Pt),v=new rm(x),F=new lm(x),X=new xf(w),ee=new em(w,X),J=new hm(w,X,Pt,ee),Y=new pm(w,J,X,Pt),Dt=new dm(w,gt,b),et=new sm(dt),Tt=new C_(x,v,F,Q,gt,ee,et),ct=new J_(x,dt),_t=new D_,Gt=new B_(Q),Ct=new tm(x,v,F,rt,Y,p,l),xt=new V_(x,Y,gt),U=new Q_(w,Pt,gt,rt),Mt=new nm(w,Q,Pt),Wt=new um(w,Q,Pt),Pt.programs=Tt.programs,x.capabilities=gt,x.extensions=Q,x.properties=dt,x.renderLists=_t,x.shadowMap=xt,x.state=rt,x.info=Pt}ht();const k=new K_(x,w);this.xr=k,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const M=Q.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Q.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(M){M!==void 0&&(V=M,this.setSize(G,$,!1))},this.getSize=function(M){return M.set(G,$)},this.setSize=function(M,I,B=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=M,$=I,e.width=Math.floor(M*V),e.height=Math.floor(I*V),B===!0&&(e.style.width=M+"px",e.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(G*V,$*V).floor()},this.setDrawingBufferSize=function(M,I,B){G=M,$=I,V=B,e.width=Math.floor(M*B),e.height=Math.floor(I*B),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(St)},this.setViewport=function(M,I,B,z){M.isVector4?St.set(M.x,M.y,M.z,M.w):St.set(M,I,B,z),rt.viewport(L.copy(St).multiplyScalar(V).round())},this.getScissor=function(M){return M.copy(Ft)},this.setScissor=function(M,I,B,z){M.isVector4?Ft.set(M.x,M.y,M.z,M.w):Ft.set(M,I,B,z),rt.scissor(H.copy(Ft).multiplyScalar(V).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(M){rt.setScissorTest(Zt=M)},this.setOpaqueSort=function(M){at=M},this.setTransparentSort=function(M){mt=M},this.getClearColor=function(M){return M.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(M=!0,I=!0,B=!0){let z=0;if(M){let N=!1;if(C!==null){const tt=C.texture.format;N=tt===ea||tt===ta||tt===Qo}if(N){const tt=C.texture.type,ut=tt===xn||tt===jn||tt===ts||tt===Li||tt===$o||tt===Jo,vt=Ct.getClearColor(),yt=Ct.getClearAlpha(),Ut=vt.r,Nt=vt.g,wt=vt.b;ut?(_[0]=Ut,_[1]=Nt,_[2]=wt,_[3]=yt,w.clearBufferuiv(w.COLOR,0,_)):(g[0]=Ut,g[1]=Nt,g[2]=wt,g[3]=yt,w.clearBufferiv(w.COLOR,0,g))}else z|=w.COLOR_BUFFER_BIT}I&&(z|=w.DEPTH_BUFFER_BIT),B&&(z|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),Ct.dispose(),_t.dispose(),Gt.dispose(),dt.dispose(),v.dispose(),F.dispose(),Y.dispose(),ee.dispose(),U.dispose(),Tt.dispose(),k.dispose(),k.removeEventListener("sessionstart",pa),k.removeEventListener("sessionend",ma),Nn.stop()};function Z(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const M=Pt.autoReset,I=xt.enabled,B=xt.autoUpdate,z=xt.needsUpdate,N=xt.type;ht(),Pt.autoReset=M,xt.enabled=I,xt.autoUpdate=B,xt.needsUpdate=z,xt.type=N}function ft(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ot(M){const I=M.target;I.removeEventListener("dispose",Ot),ae(I)}function ae(M){Se(M),dt.remove(M)}function Se(M){const I=dt.get(M).programs;I!==void 0&&(I.forEach(function(B){Tt.releaseProgram(B)}),M.isShaderMaterial&&Tt.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,B,z,N,tt){I===null&&(I=Xt);const ut=N.isMesh&&N.matrixWorld.determinant()<0,vt=Hc(M,I,B,z,N);rt.setMaterial(z,ut);let yt=B.index,Ut=1;if(z.wireframe===!0){if(yt=J.getWireframeAttribute(B),yt===void 0)return;Ut=2}const Nt=B.drawRange,wt=B.attributes.position;let Yt=Nt.start*Ut,Kt=(Nt.start+Nt.count)*Ut;tt!==null&&(Yt=Math.max(Yt,tt.start*Ut),Kt=Math.min(Kt,(tt.start+tt.count)*Ut)),yt!==null?(Yt=Math.max(Yt,0),Kt=Math.min(Kt,yt.count)):wt!=null&&(Yt=Math.max(Yt,0),Kt=Math.min(Kt,wt.count));const he=Kt-Yt;if(he<0||he===1/0)return;ee.setup(N,z,vt,B,yt);let le,qt=Mt;if(yt!==null&&(le=X.get(yt),qt=Wt,qt.setIndex(le)),N.isMesh)z.wireframe===!0?(rt.setLineWidth(z.wireframeLinewidth*it()),qt.setMode(w.LINES)):qt.setMode(w.TRIANGLES);else if(N.isLine){let Rt=z.linewidth;Rt===void 0&&(Rt=1),rt.setLineWidth(Rt*it()),N.isLineSegments?qt.setMode(w.LINES):N.isLineLoop?qt.setMode(w.LINE_LOOP):qt.setMode(w.LINE_STRIP)}else N.isPoints?qt.setMode(w.POINTS):N.isSprite&&qt.setMode(w.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)qt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))qt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Rt=N._multiDrawStarts,ve=N._multiDrawCounts,$t=N._multiDrawCount,qe=yt?X.get(yt).bytesPerElement:1,ni=dt.get(z).currentProgram.getUniforms();for(let Ie=0;Ie<$t;Ie++)ni.setValue(w,"_gl_DrawID",Ie),qt.render(Rt[Ie]/qe,ve[Ie])}else if(N.isInstancedMesh)qt.renderInstances(Yt,he,N.count);else if(B.isInstancedBufferGeometry){const Rt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ve=Math.min(B.instanceCount,Rt);qt.renderInstances(Yt,he,ve)}else qt.render(Yt,he)};function Jt(M,I,B){M.transparent===!0&&M.side===Me&&M.forceSinglePass===!1?(M.side=Le,M.needsUpdate=!0,us(M,I,B),M.side=Dn,M.needsUpdate=!0,us(M,I,B),M.side=Me):us(M,I,B)}this.compile=function(M,I,B=null){B===null&&(B=M),d=Gt.get(B),d.init(I),E.push(d),B.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),M!==B&&M.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();const z=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const tt=N.material;if(tt)if(Array.isArray(tt))for(let ut=0;ut<tt.length;ut++){const vt=tt[ut];Jt(vt,B,N),z.add(vt)}else Jt(tt,B,N),z.add(tt)}),E.pop(),d=null,z},this.compileAsync=function(M,I,B=null){const z=this.compile(M,I,B);return new Promise(N=>{function tt(){if(z.forEach(function(ut){dt.get(ut).currentProgram.isReady()&&z.delete(ut)}),z.size===0){N(M);return}setTimeout(tt,10)}Q.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Ye=null;function on(M){Ye&&Ye(M)}function pa(){Nn.stop()}function ma(){Nn.start()}const Nn=new Ac;Nn.setAnimationLoop(on),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(M){Ye=M,k.setAnimationLoop(M),M===null?Nn.stop():Nn.start()},k.addEventListener("sessionstart",pa),k.addEventListener("sessionend",ma),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(k.cameraAutoUpdate===!0&&k.updateCamera(I),I=k.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,I,C),d=Gt.get(M,E.length),d.init(I),E.push(d),At.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),q.setFromProjectionMatrix(At),Et=this.localClippingEnabled,st=et.init(this.clippingPlanes,Et),m=_t.get(M,R.length),m.init(),R.push(m),k.enabled===!0&&k.isPresenting===!0){const tt=x.xr.getDepthSensingMesh();tt!==null&&fr(tt,I,-1/0,x.sortObjects)}fr(M,I,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(at,mt),K=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,K&&Ct.addToRenderList(m,M),this.info.render.frame++,st===!0&&et.beginShadows();const B=d.state.shadowsArray;xt.render(B,M,I),st===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,N=m.transmissive;if(d.setupLights(),I.isArrayCamera){const tt=I.cameras;if(N.length>0)for(let ut=0,vt=tt.length;ut<vt;ut++){const yt=tt[ut];ga(z,N,M,yt)}K&&Ct.render(M);for(let ut=0,vt=tt.length;ut<vt;ut++){const yt=tt[ut];_a(m,M,yt,yt.viewport)}}else N.length>0&&ga(z,N,M,I),K&&Ct.render(M),_a(m,M,I);C!==null&&(b.updateMultisampleRenderTarget(C),b.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(x,M,I),ee.resetDefaultState(),T=-1,S=null,E.pop(),E.length>0?(d=E[E.length-1],st===!0&&et.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function fr(M,I,B,z){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||q.intersectsSprite(M)){z&&Lt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(At);const ut=Y.update(M),vt=M.material;vt.visible&&m.push(M,ut,vt,B,Lt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||q.intersectsObject(M))){const ut=Y.update(M),vt=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Lt.copy(M.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Lt.copy(ut.boundingSphere.center)),Lt.applyMatrix4(M.matrixWorld).applyMatrix4(At)),Array.isArray(vt)){const yt=ut.groups;for(let Ut=0,Nt=yt.length;Ut<Nt;Ut++){const wt=yt[Ut],Yt=vt[wt.materialIndex];Yt&&Yt.visible&&m.push(M,ut,Yt,B,Lt.z,wt)}}else vt.visible&&m.push(M,ut,vt,B,Lt.z,null)}}const tt=M.children;for(let ut=0,vt=tt.length;ut<vt;ut++)fr(tt[ut],I,B,z)}function _a(M,I,B,z){const N=M.opaque,tt=M.transmissive,ut=M.transparent;d.setupLightsView(B),st===!0&&et.setGlobalState(x.clippingPlanes,B),z&&rt.viewport(L.copy(z)),N.length>0&&hs(N,I,B),tt.length>0&&hs(tt,I,B),ut.length>0&&hs(ut,I,B),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function ga(M,I,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[z.id]===void 0&&(d.state.transmissionRenderTarget[z.id]=new Zn(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?os:xn,minFilter:qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const tt=d.state.transmissionRenderTarget[z.id],ut=z.viewport||L;tt.setSize(ut.z,ut.w);const vt=x.getRenderTarget();x.setRenderTarget(tt),x.getClearColor(W),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),K&&Ct.render(B);const yt=x.toneMapping;x.toneMapping=Ln;const Ut=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),d.setupLightsView(z),st===!0&&et.setGlobalState(x.clippingPlanes,z),hs(M,B,z),b.updateMultisampleRenderTarget(tt),b.updateRenderTargetMipmap(tt),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let wt=0,Yt=I.length;wt<Yt;wt++){const Kt=I[wt],he=Kt.object,le=Kt.geometry,qt=Kt.material,Rt=Kt.group;if(qt.side===Me&&he.layers.test(z.layers)){const ve=qt.side;qt.side=Le,qt.needsUpdate=!0,va(he,B,z,le,qt,Rt),qt.side=ve,qt.needsUpdate=!0,Nt=!0}}Nt===!0&&(b.updateMultisampleRenderTarget(tt),b.updateRenderTargetMipmap(tt))}x.setRenderTarget(vt),x.setClearColor(W,j),Ut!==void 0&&(z.viewport=Ut),x.toneMapping=yt}function hs(M,I,B){const z=I.isScene===!0?I.overrideMaterial:null;for(let N=0,tt=M.length;N<tt;N++){const ut=M[N],vt=ut.object,yt=ut.geometry,Ut=z===null?ut.material:z,Nt=ut.group;vt.layers.test(B.layers)&&va(vt,I,B,yt,Ut,Nt)}}function va(M,I,B,z,N,tt){M.onBeforeRender(x,I,B,z,N,tt),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(x,I,B,z,M,tt),N.transparent===!0&&N.side===Me&&N.forceSinglePass===!1?(N.side=Le,N.needsUpdate=!0,x.renderBufferDirect(B,I,z,N,M,tt),N.side=Dn,N.needsUpdate=!0,x.renderBufferDirect(B,I,z,N,M,tt),N.side=Me):x.renderBufferDirect(B,I,z,N,M,tt),M.onAfterRender(x,I,B,z,N,tt)}function us(M,I,B){I.isScene!==!0&&(I=Xt);const z=dt.get(M),N=d.state.lights,tt=d.state.shadowsArray,ut=N.state.version,vt=Tt.getParameters(M,N.state,tt,I,B),yt=Tt.getProgramCacheKey(vt);let Ut=z.programs;z.environment=M.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(M.isMeshStandardMaterial?F:v).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Ut===void 0&&(M.addEventListener("dispose",Ot),Ut=new Map,z.programs=Ut);let Nt=Ut.get(yt);if(Nt!==void 0){if(z.currentProgram===Nt&&z.lightsStateVersion===ut)return Ma(M,vt),Nt}else vt.uniforms=Tt.getUniforms(M),M.onBeforeCompile(vt,x),Nt=Tt.acquireProgram(vt,yt),Ut.set(yt,Nt),z.uniforms=vt.uniforms;const wt=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(wt.clippingPlanes=et.uniform),Ma(M,vt),z.needsLights=kc(M),z.lightsStateVersion=ut,z.needsLights&&(wt.ambientLightColor.value=N.state.ambient,wt.lightProbe.value=N.state.probe,wt.directionalLights.value=N.state.directional,wt.directionalLightShadows.value=N.state.directionalShadow,wt.spotLights.value=N.state.spot,wt.spotLightShadows.value=N.state.spotShadow,wt.rectAreaLights.value=N.state.rectArea,wt.ltc_1.value=N.state.rectAreaLTC1,wt.ltc_2.value=N.state.rectAreaLTC2,wt.pointLights.value=N.state.point,wt.pointLightShadows.value=N.state.pointShadow,wt.hemisphereLights.value=N.state.hemi,wt.directionalShadowMap.value=N.state.directionalShadowMap,wt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,wt.spotShadowMap.value=N.state.spotShadowMap,wt.spotLightMatrix.value=N.state.spotLightMatrix,wt.spotLightMap.value=N.state.spotLightMap,wt.pointShadowMap.value=N.state.pointShadowMap,wt.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Nt,z.uniformsList=null,Nt}function xa(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=Js.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function Ma(M,I){const B=dt.get(M);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.batchingColor=I.batchingColor,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function Hc(M,I,B,z,N){I.isScene!==!0&&(I=Xt),b.resetTextureUnits();const tt=I.fog,ut=z.isMeshStandardMaterial?I.environment:null,vt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ui,yt=(z.isMeshStandardMaterial?F:v).get(z.envMap||ut),Ut=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Nt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),wt=!!B.morphAttributes.position,Yt=!!B.morphAttributes.normal,Kt=!!B.morphAttributes.color;let he=Ln;z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(he=x.toneMapping);const le=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,qt=le!==void 0?le.length:0,Rt=dt.get(z),ve=d.state.lights;if(st===!0&&(Et===!0||M!==S)){const be=M===S&&z.id===T;et.setState(z,M,be)}let $t=!1;z.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==ve.state.version||Rt.outputColorSpace!==vt||N.isBatchedMesh&&Rt.batching===!1||!N.isBatchedMesh&&Rt.batching===!0||N.isBatchedMesh&&Rt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Rt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Rt.instancing===!1||!N.isInstancedMesh&&Rt.instancing===!0||N.isSkinnedMesh&&Rt.skinning===!1||!N.isSkinnedMesh&&Rt.skinning===!0||N.isInstancedMesh&&Rt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Rt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Rt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Rt.instancingMorph===!1&&N.morphTexture!==null||Rt.envMap!==yt||z.fog===!0&&Rt.fog!==tt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==et.numPlanes||Rt.numIntersection!==et.numIntersection)||Rt.vertexAlphas!==Ut||Rt.vertexTangents!==Nt||Rt.morphTargets!==wt||Rt.morphNormals!==Yt||Rt.morphColors!==Kt||Rt.toneMapping!==he||Rt.morphTargetsCount!==qt)&&($t=!0):($t=!0,Rt.__version=z.version);let qe=Rt.currentProgram;$t===!0&&(qe=us(z,I,N));let ni=!1,Ie=!1,Vi=!1;const se=qe.getUniforms(),ze=Rt.uniforms;if(rt.useProgram(qe.program)&&(ni=!0,Ie=!0,Vi=!0),z.id!==T&&(T=z.id,Ie=!0),ni||S!==M){rt.buffers.depth.getReversed()?(ot.copy(M.projectionMatrix),$h(ot),Jh(ot),se.setValue(w,"projectionMatrix",ot)):se.setValue(w,"projectionMatrix",M.projectionMatrix),se.setValue(w,"viewMatrix",M.matrixWorldInverse);const Re=se.map.cameraPosition;Re!==void 0&&Re.setValue(w,It.setFromMatrixPosition(M.matrixWorld)),gt.logarithmicDepthBuffer&&se.setValue(w,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&se.setValue(w,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Ie=!0,Vi=!0)}if(N.isSkinnedMesh){se.setOptional(w,N,"bindMatrix"),se.setOptional(w,N,"bindMatrixInverse");const be=N.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),se.setValue(w,"boneTexture",be.boneTexture,b))}N.isBatchedMesh&&(se.setOptional(w,N,"batchingTexture"),se.setValue(w,"batchingTexture",N._matricesTexture,b),se.setOptional(w,N,"batchingIdTexture"),se.setValue(w,"batchingIdTexture",N._indirectTexture,b),se.setOptional(w,N,"batchingColorTexture"),N._colorsTexture!==null&&se.setValue(w,"batchingColorTexture",N._colorsTexture,b));const He=B.morphAttributes;if((He.position!==void 0||He.normal!==void 0||He.color!==void 0)&&Dt.update(N,B,qe),(Ie||Rt.receiveShadow!==N.receiveShadow)&&(Rt.receiveShadow=N.receiveShadow,se.setValue(w,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(ze.envMap.value=yt,ze.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&I.environment!==null&&(ze.envMapIntensity.value=I.environmentIntensity),Ie&&(se.setValue(w,"toneMappingExposure",x.toneMappingExposure),Rt.needsLights&&Vc(ze,Vi),tt&&z.fog===!0&&ct.refreshFogUniforms(ze,tt),ct.refreshMaterialUniforms(ze,z,V,$,d.state.transmissionRenderTarget[M.id]),Js.upload(w,xa(Rt),ze,b)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Js.upload(w,xa(Rt),ze,b),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&se.setValue(w,"center",N.center),se.setValue(w,"modelViewMatrix",N.modelViewMatrix),se.setValue(w,"normalMatrix",N.normalMatrix),se.setValue(w,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const be=z.uniformsGroups;for(let Re=0,dr=be.length;Re<dr;Re++){const Fn=be[Re];U.update(Fn,qe),U.bind(Fn,qe)}}return qe}function Vc(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function kc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,I,B){dt.get(M.texture).__webglTexture=I,dt.get(M.depthTexture).__webglTexture=B;const z=dt.get(M);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,I){const B=dt.get(M);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,B=0){C=M,y=I,A=B;let z=!0,N=null,tt=!1,ut=!1;if(M){const yt=dt.get(M);if(yt.__useDefaultFramebuffer!==void 0)rt.bindFramebuffer(w.FRAMEBUFFER,null),z=!1;else if(yt.__webglFramebuffer===void 0)b.setupRenderTarget(M);else if(yt.__hasExternalTextures)b.rebindTextures(M,dt.get(M.texture).__webglTexture,dt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const wt=M.depthTexture;if(yt.__boundDepthTexture!==wt){if(wt!==null&&dt.has(wt)&&(M.width!==wt.image.width||M.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(M)}}const Ut=M.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(ut=!0);const Nt=dt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Nt[I])?N=Nt[I][B]:N=Nt[I],tt=!0):M.samples>0&&b.useMultisampledRTT(M)===!1?N=dt.get(M).__webglMultisampledFramebuffer:Array.isArray(Nt)?N=Nt[B]:N=Nt,L.copy(M.viewport),H.copy(M.scissor),O=M.scissorTest}else L.copy(St).multiplyScalar(V).floor(),H.copy(Ft).multiplyScalar(V).floor(),O=Zt;if(rt.bindFramebuffer(w.FRAMEBUFFER,N)&&z&&rt.drawBuffers(M,N),rt.viewport(L),rt.scissor(H),rt.setScissorTest(O),tt){const yt=dt.get(M.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+I,yt.__webglTexture,B)}else if(ut){const yt=dt.get(M.texture),Ut=I||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,yt.__webglTexture,B||0,Ut)}T=-1},this.readRenderTargetPixels=function(M,I,B,z,N,tt,ut){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=dt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ut!==void 0&&(vt=vt[ut]),vt){rt.bindFramebuffer(w.FRAMEBUFFER,vt);try{const yt=M.texture,Ut=yt.format,Nt=yt.type;if(!gt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-z&&B>=0&&B<=M.height-N&&w.readPixels(I,B,z,N,zt.convert(Ut),zt.convert(Nt),tt)}finally{const yt=C!==null?dt.get(C).__webglFramebuffer:null;rt.bindFramebuffer(w.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(M,I,B,z,N,tt,ut){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=dt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ut!==void 0&&(vt=vt[ut]),vt){const yt=M.texture,Ut=yt.format,Nt=yt.type;if(!gt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=M.width-z&&B>=0&&B<=M.height-N){rt.bindFramebuffer(w.FRAMEBUFFER,vt);const wt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,wt),w.bufferData(w.PIXEL_PACK_BUFFER,tt.byteLength,w.STREAM_READ),w.readPixels(I,B,z,N,zt.convert(Ut),zt.convert(Nt),0);const Yt=C!==null?dt.get(C).__webglFramebuffer:null;rt.bindFramebuffer(w.FRAMEBUFFER,Yt);const Kt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Kh(w,Kt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,wt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,tt),w.deleteBuffer(wt),w.deleteSync(Kt),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,I=null,B=0){M.isTexture!==!0&&(vi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,M=arguments[1]);const z=Math.pow(2,-B),N=Math.floor(M.image.width*z),tt=Math.floor(M.image.height*z),ut=I!==null?I.x:0,vt=I!==null?I.y:0;b.setTexture2D(M,0),w.copyTexSubImage2D(w.TEXTURE_2D,B,0,0,ut,vt,N,tt),rt.unbindTexture()};const Gc=w.createFramebuffer(),Wc=w.createFramebuffer();this.copyTextureToTexture=function(M,I,B=null,z=null,N=0,tt=null){M.isTexture!==!0&&(vi("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,M=arguments[1],I=arguments[2],tt=arguments[3]||0,B=null),tt===null&&(N!==0?(vi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=N,N=0):tt=0);let ut,vt,yt,Ut,Nt,wt,Yt,Kt,he;const le=M.isCompressedTexture?M.mipmaps[tt]:M.image;if(B!==null)ut=B.max.x-B.min.x,vt=B.max.y-B.min.y,yt=B.isBox3?B.max.z-B.min.z:1,Ut=B.min.x,Nt=B.min.y,wt=B.isBox3?B.min.z:0;else{const He=Math.pow(2,-N);ut=Math.floor(le.width*He),vt=Math.floor(le.height*He),M.isDataArrayTexture?yt=le.depth:M.isData3DTexture?yt=Math.floor(le.depth*He):yt=1,Ut=0,Nt=0,wt=0}z!==null?(Yt=z.x,Kt=z.y,he=z.z):(Yt=0,Kt=0,he=0);const qt=zt.convert(I.format),Rt=zt.convert(I.type);let ve;I.isData3DTexture?(b.setTexture3D(I,0),ve=w.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(b.setTexture2DArray(I,0),ve=w.TEXTURE_2D_ARRAY):(b.setTexture2D(I,0),ve=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,I.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,I.unpackAlignment);const $t=w.getParameter(w.UNPACK_ROW_LENGTH),qe=w.getParameter(w.UNPACK_IMAGE_HEIGHT),ni=w.getParameter(w.UNPACK_SKIP_PIXELS),Ie=w.getParameter(w.UNPACK_SKIP_ROWS),Vi=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,le.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,le.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ut),w.pixelStorei(w.UNPACK_SKIP_ROWS,Nt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,wt);const se=M.isDataArrayTexture||M.isData3DTexture,ze=I.isDataArrayTexture||I.isData3DTexture;if(M.isDepthTexture){const He=dt.get(M),be=dt.get(I),Re=dt.get(He.__renderTarget),dr=dt.get(be.__renderTarget);rt.bindFramebuffer(w.READ_FRAMEBUFFER,Re.__webglFramebuffer),rt.bindFramebuffer(w.DRAW_FRAMEBUFFER,dr.__webglFramebuffer);for(let Fn=0;Fn<yt;Fn++)se&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,dt.get(M).__webglTexture,N,wt+Fn),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,dt.get(I).__webglTexture,tt,he+Fn)),w.blitFramebuffer(Ut,Nt,ut,vt,Yt,Kt,ut,vt,w.DEPTH_BUFFER_BIT,w.NEAREST);rt.bindFramebuffer(w.READ_FRAMEBUFFER,null),rt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(N!==0||M.isRenderTargetTexture||dt.has(M)){const He=dt.get(M),be=dt.get(I);rt.bindFramebuffer(w.READ_FRAMEBUFFER,Gc),rt.bindFramebuffer(w.DRAW_FRAMEBUFFER,Wc);for(let Re=0;Re<yt;Re++)se?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,He.__webglTexture,N,wt+Re):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,He.__webglTexture,N),ze?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,be.__webglTexture,tt,he+Re):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,be.__webglTexture,tt),N!==0?w.blitFramebuffer(Ut,Nt,ut,vt,Yt,Kt,ut,vt,w.COLOR_BUFFER_BIT,w.NEAREST):ze?w.copyTexSubImage3D(ve,tt,Yt,Kt,he+Re,Ut,Nt,ut,vt):w.copyTexSubImage2D(ve,tt,Yt,Kt,Ut,Nt,ut,vt);rt.bindFramebuffer(w.READ_FRAMEBUFFER,null),rt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else ze?M.isDataTexture||M.isData3DTexture?w.texSubImage3D(ve,tt,Yt,Kt,he,ut,vt,yt,qt,Rt,le.data):I.isCompressedArrayTexture?w.compressedTexSubImage3D(ve,tt,Yt,Kt,he,ut,vt,yt,qt,le.data):w.texSubImage3D(ve,tt,Yt,Kt,he,ut,vt,yt,qt,Rt,le):M.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,tt,Yt,Kt,ut,vt,qt,Rt,le.data):M.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,tt,Yt,Kt,le.width,le.height,qt,le.data):w.texSubImage2D(w.TEXTURE_2D,tt,Yt,Kt,ut,vt,qt,Rt,le);w.pixelStorei(w.UNPACK_ROW_LENGTH,$t),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,qe),w.pixelStorei(w.UNPACK_SKIP_PIXELS,ni),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ie),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Vi),tt===0&&I.generateMipmaps&&w.generateMipmap(ve),rt.unbindTexture()},this.copyTextureToTexture3D=function(M,I,B=null,z=null,N=0){return M.isTexture!==!0&&(vi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,M=arguments[2],I=arguments[3],N=arguments[4]||0),vi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,I,B,z,N)},this.initRenderTarget=function(M){dt.get(M).__webglFramebuffer===void 0&&b.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?b.setTextureCube(M,0):M.isData3DTexture?b.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?b.setTexture2DArray(M,0):b.setTexture2D(M,0),rt.unbindTexture()},this.resetState=function(){y=0,A=0,C=null,rt.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}const eg=/^[og]\s*(.+)?/,ng=/^mtllib /,ig=/^usemtl /,sg=/^usemap /,Nl=/\s+/,Fl=new D,Kr=new D,Ol=new D,Bl=new D,ke=new D,Ws=new kt;function rg(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);const a={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[t+0],s[t+1],s[t+2]),r.push(s[e+0],s[e+1],s[e+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const s=this.normals,r=this.object.geometry.normals;r.push(s[t+0],s[t+1],s[t+2]),r.push(s[e+0],s[e+1],s[e+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(t,e,n){const s=this.vertices,r=this.object.geometry.normals;Fl.fromArray(s,t),Kr.fromArray(s,e),Ol.fromArray(s,n),ke.subVectors(Ol,Kr),Bl.subVectors(Fl,Kr),ke.cross(Bl),ke.normalize(),r.push(ke.x,ke.y,ke.z),r.push(ke.x,ke.y,ke.z),r.push(ke.x,ke.y,ke.z)},addColor:function(t,e,n){const s=this.colors,r=this.object.geometry.colors;s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(t,e,n){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[t+0],s[t+1]),r.push(s[e+0],s[e+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,s,r,o,a,l,c){const h=this.vertices.length;let u=this.parseVertexIndex(t,h),f=this.parseVertexIndex(e,h),p=this.parseVertexIndex(n,h);if(this.addVertex(u,f,p),this.addColor(u,f,p),a!==void 0&&a!==""){const _=this.normals.length;u=this.parseNormalIndex(a,_),f=this.parseNormalIndex(l,_),p=this.parseNormalIndex(c,_),this.addNormal(u,f,p)}else this.addFaceNormal(u,f,p);if(s!==void 0&&s!==""){const _=this.uvs.length;u=this.parseUVIndex(s,_),f=this.parseUVIndex(r,_),p=this.parseUVIndex(o,_),this.addUV(u,f,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,s=t.length;n<s;n++){const r=this.parseVertexIndex(t[n],e);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,s=this.uvs.length;for(let r=0,o=t.length;r<o;r++)this.addVertexLine(this.parseVertexIndex(t[r],n));for(let r=0,o=e.length;r<o;r++)this.addUVLine(this.parseUVIndex(e[r],s))}};return i.startObject("",!1),i}class Lc extends ha{constructor(t){super(t),this.materials=null}load(t,e,n,s){const r=this,o=new hf(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(t)}},n,s)}setMaterials(t){return this.materials=t,this}parse(t){const e=new rg;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const n=t.split(`
`);let s=[];for(let a=0,l=n.length;a<l;a++){const c=n[a].trimStart();if(c.length===0)continue;const h=c.charAt(0);if(h!=="#")if(h==="v"){const u=c.split(Nl);switch(u[0]){case"v":e.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(Ws.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),Oe),e.colors.push(Ws.r,Ws.g,Ws.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":e.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){const f=c.slice(1).trim().split(Nl),p=[];for(let g=0,m=f.length;g<m;g++){const d=f[g];if(d.length>0){const R=d.split("/");p.push(R)}}const _=p[0];for(let g=1,m=p.length-1;g<m;g++){const d=p[g],R=p[g+1];e.addFace(_[0],d[0],R[0],_[1],d[1],R[1],_[2],d[2],R[2])}}else if(h==="l"){const u=c.substring(1).trim().split(" ");let f=[];const p=[];if(c.indexOf("/")===-1)f=u;else for(let _=0,g=u.length;_<g;_++){const m=u[_].split("/");m[0]!==""&&f.push(m[0]),m[1]!==""&&p.push(m[1])}e.addLineGeometry(f,p)}else if(h==="p"){const f=c.slice(1).trim().split(" ");e.addPointGeometry(f)}else if((s=eg.exec(c))!==null){const u=(" "+s[0].slice(1).trim()).slice(1);e.startObject(u)}else if(ig.test(c))e.object.startMaterial(c.substring(7).trim(),e.materialLibraries);else if(ng.test(c))e.materialLibraries.push(c.substring(7).trim());else if(sg.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(s=c.split(" "),s.length>1){const f=s[1].trim().toLowerCase();e.object.smooth=f!=="0"&&f!=="off"}else e.object.smooth=!0;const u=e.object.currentMaterial();u&&(u.smooth=e.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}e.finalize();const r=new Cn;if(r.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=e.objects.length;a<l;a++){const c=e.objects[a],h=c.geometry,u=c.materials,f=h.type==="Line",p=h.type==="Points";let _=!1;if(h.vertices.length===0)continue;const g=new Te;g.setAttribute("position",new ie(h.vertices,3)),h.normals.length>0&&g.setAttribute("normal",new ie(h.normals,3)),h.colors.length>0&&(_=!0,g.setAttribute("color",new ie(h.colors,3))),h.hasUVIndices===!0&&g.setAttribute("uv",new ie(h.uvs,2));const m=[];for(let R=0,E=u.length;R<E;R++){const x=u[R],P=x.name+"_"+x.smooth+"_"+_;let y=e.materials[P];if(this.materials!==null){if(y=this.materials.create(x.name),f&&y&&!(y instanceof wi)){const A=new wi;sn.prototype.copy.call(A,y),A.color.copy(y.color),y=A}else if(p&&y&&!(y instanceof qi)){const A=new qi({size:10,sizeAttenuation:!1});sn.prototype.copy.call(A,y),A.color.copy(y.color),A.map=y.map,y=A}}y===void 0&&(f?y=new wi:p?y=new qi({size:1,sizeAttenuation:!1}):y=new sf,y.name=x.name,y.flatShading=!x.smooth,y.vertexColors=_,e.materials[P]=y),m.push(y)}let d;if(m.length>1){for(let R=0,E=u.length;R<E;R++){const x=u[R];g.addGroup(x.groupStart,x.groupCount,R)}f?d=new zo(g,m):p?d=new Fr(g,m):d=new fe(g,m)}else f?d=new zo(g,m[0]):p?d=new Fr(g,m[0]):d=new fe(g,m[0]);d.name=c.name,r.add(d)}else if(e.vertices.length>0){const a=new qi({size:1,sizeAttenuation:!1}),l=new Te;l.setAttribute("position",new ie(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(l.setAttribute("color",new ie(e.colors,3)),a.vertexColors=!0);const c=new Fr(l,a);r.add(c)}return r}}const zl={type:"change"},fa={type:"start"},Dc={type:"end"},Xs=new ls,Hl=new wn,og=Math.cos(70*jh.DEG2RAD),de=new D,Ce=2*Math.PI,te={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$r=1e-6;class ag extends gf{constructor(t,e=null){super(t,e),this.state=te.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yi.ROTATE,MIDDLE:yi.DOLLY,RIGHT:yi.PAN},this.touches={ONE:xi.ROTATE,TWO:xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Kn,this._lastTargetPosition=new D,this._quat=new Kn().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ll,this._sphericalDelta=new ll,this._scale=1,this._panOffset=new D,this._rotateStart=new nt,this._rotateEnd=new nt,this._rotateDelta=new nt,this._panStart=new nt,this._panEnd=new nt,this._panDelta=new nt,this._dollyStart=new nt,this._dollyEnd=new nt,this._dollyDelta=new nt,this._dollyDirection=new D,this._mouse=new nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cg.bind(this),this._onPointerDown=lg.bind(this),this._onPointerUp=hg.bind(this),this._onContextMenu=gg.bind(this),this._onMouseWheel=dg.bind(this),this._onKeyDown=pg.bind(this),this._onTouchStart=mg.bind(this),this._onTouchMove=_g.bind(this),this._onMouseDown=ug.bind(this),this._onMouseMove=fg.bind(this),this._interceptControlDown=vg.bind(this),this._interceptControlUp=xg.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(zl),this.update(),this.state=te.NONE}update(t=null){const e=this.object.position;de.copy(e).sub(this.target),de.applyQuaternion(this._quat),this._spherical.setFromVector3(de),this.autoRotate&&this.state===te.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ce:n>Math.PI&&(n-=Ce),s<-Math.PI?s+=Ce:s>Math.PI&&(s-=Ce),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(de.setFromSpherical(this._spherical),de.applyQuaternion(this._quatInverse),e.copy(this.target).add(de),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=de.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=de.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Xs.origin.copy(this.object.position),Xs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Xs.direction))<og?this.object.lookAt(this.target):(Hl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Xs.intersectPlane(Hl,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>$r||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$r||this._lastTargetPosition.distanceToSquared(this.target)>$r?(this.dispatchEvent(zl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ce/60*this.autoRotateSpeed*t:Ce/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){de.setFromMatrixColumn(e,0),de.multiplyScalar(-t),this._panOffset.add(de)}_panUp(t,e){this.screenSpacePanning===!0?de.setFromMatrixColumn(e,1):(de.setFromMatrixColumn(e,0),de.crossVectors(this.object.up,de)),de.multiplyScalar(t),this._panOffset.add(de)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;de.copy(s).sub(this.target);let r=de.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ce*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ce*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ce*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ce*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ce*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ce*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ce*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ce*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new nt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function lg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function cg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function hg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Dc),this.state=te.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function ug(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case yi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=te.DOLLY;break;case yi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=te.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=te.ROTATE}break;case yi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=te.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=te.PAN}break;default:this.state=te.NONE}this.state!==te.NONE&&this.dispatchEvent(fa)}function fg(i){switch(this.state){case te.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case te.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case te.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function dg(i){this.enabled===!1||this.enableZoom===!1||this.state!==te.NONE||(i.preventDefault(),this.dispatchEvent(fa),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Dc))}function pg(i){this.enabled!==!1&&this._handleKeyDown(i)}function mg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case xi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=te.TOUCH_ROTATE;break;case xi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=te.TOUCH_PAN;break;default:this.state=te.NONE}break;case 2:switch(this.touches.TWO){case xi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=te.TOUCH_DOLLY_PAN;break;case xi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=te.TOUCH_DOLLY_ROTATE;break;default:this.state=te.NONE}break;default:this.state=te.NONE}this.state!==te.NONE&&this.dispatchEvent(fa)}function _g(i){switch(this._trackPointer(i),this.state){case te.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case te.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case te.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case te.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=te.NONE}}function gg(i){this.enabled!==!1&&i.preventDefault()}function vg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function xg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Mg(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Qs={exports:{}};Qs.exports;var Vl;function Sg(){return Vl||(Vl=1,function(i){var t=function(){var e=String.fromCharCode,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",r={};function o(l,c){if(!r[l]){r[l]={};for(var h=0;h<l.length;h++)r[l][l.charAt(h)]=h}return r[l][c]}var a={compressToBase64:function(l){if(l==null)return"";var c=a._compress(l,6,function(h){return n.charAt(h)});switch(c.length%4){default:case 0:return c;case 1:return c+"===";case 2:return c+"==";case 3:return c+"="}},decompressFromBase64:function(l){return l==null?"":l==""?null:a._decompress(l.length,32,function(c){return o(n,l.charAt(c))})},compressToUTF16:function(l){return l==null?"":a._compress(l,15,function(c){return e(c+32)})+" "},decompressFromUTF16:function(l){return l==null?"":l==""?null:a._decompress(l.length,16384,function(c){return l.charCodeAt(c)-32})},compressToUint8Array:function(l){for(var c=a.compress(l),h=new Uint8Array(c.length*2),u=0,f=c.length;u<f;u++){var p=c.charCodeAt(u);h[u*2]=p>>>8,h[u*2+1]=p%256}return h},decompressFromUint8Array:function(l){if(l==null)return a.decompress(l);for(var c=new Array(l.length/2),h=0,u=c.length;h<u;h++)c[h]=l[h*2]*256+l[h*2+1];var f=[];return c.forEach(function(p){f.push(e(p))}),a.decompress(f.join(""))},compressToEncodedURIComponent:function(l){return l==null?"":a._compress(l,6,function(c){return s.charAt(c)})},decompressFromEncodedURIComponent:function(l){return l==null?"":l==""?null:(l=l.replace(/ /g,"+"),a._decompress(l.length,32,function(c){return o(s,l.charAt(c))}))},compress:function(l){return a._compress(l,16,function(c){return e(c)})},_compress:function(l,c,h){if(l==null)return"";var u,f,p={},_={},g="",m="",d="",R=2,E=3,x=2,P=[],y=0,A=0,C;for(C=0;C<l.length;C+=1)if(g=l.charAt(C),Object.prototype.hasOwnProperty.call(p,g)||(p[g]=E++,_[g]=!0),m=d+g,Object.prototype.hasOwnProperty.call(p,m))d=m;else{if(Object.prototype.hasOwnProperty.call(_,d)){if(d.charCodeAt(0)<256){for(u=0;u<x;u++)y=y<<1,A==c-1?(A=0,P.push(h(y)),y=0):A++;for(f=d.charCodeAt(0),u=0;u<8;u++)y=y<<1|f&1,A==c-1?(A=0,P.push(h(y)),y=0):A++,f=f>>1}else{for(f=1,u=0;u<x;u++)y=y<<1|f,A==c-1?(A=0,P.push(h(y)),y=0):A++,f=0;for(f=d.charCodeAt(0),u=0;u<16;u++)y=y<<1|f&1,A==c-1?(A=0,P.push(h(y)),y=0):A++,f=f>>1}R--,R==0&&(R=Math.pow(2,x),x++),delete _[d]}else for(f=p[d],u=0;u<x;u++)y=y<<1|f&1,A==c-1?(A=0,P.push(h(y)),y=0):A++,f=f>>1;R--,R==0&&(R=Math.pow(2,x),x++),p[m]=E++,d=String(g)}if(d!==""){if(Object.prototype.hasOwnProperty.call(_,d)){if(d.charCodeAt(0)<256){for(u=0;u<x;u++)y=y<<1,A==c-1?(A=0,P.push(h(y)),y=0):A++;for(f=d.charCodeAt(0),u=0;u<8;u++)y=y<<1|f&1,A==c-1?(A=0,P.push(h(y)),y=0):A++,f=f>>1}else{for(f=1,u=0;u<x;u++)y=y<<1|f,A==c-1?(A=0,P.push(h(y)),y=0):A++,f=0;for(f=d.charCodeAt(0),u=0;u<16;u++)y=y<<1|f&1,A==c-1?(A=0,P.push(h(y)),y=0):A++,f=f>>1}R--,R==0&&(R=Math.pow(2,x),x++),delete _[d]}else for(f=p[d],u=0;u<x;u++)y=y<<1|f&1,A==c-1?(A=0,P.push(h(y)),y=0):A++,f=f>>1;R--,R==0&&(R=Math.pow(2,x),x++)}for(f=2,u=0;u<x;u++)y=y<<1|f&1,A==c-1?(A=0,P.push(h(y)),y=0):A++,f=f>>1;for(;;)if(y=y<<1,A==c-1){P.push(h(y));break}else A++;return P.join("")},decompress:function(l){return l==null?"":l==""?null:a._decompress(l.length,32768,function(c){return l.charCodeAt(c)})},_decompress:function(l,c,h){var u=[],f=4,p=4,_=3,g="",m=[],d,R,E,x,P,y,A,C={val:h(0),position:c,index:1};for(d=0;d<3;d+=1)u[d]=d;for(E=0,P=Math.pow(2,2),y=1;y!=P;)x=C.val&C.position,C.position>>=1,C.position==0&&(C.position=c,C.val=h(C.index++)),E|=(x>0?1:0)*y,y<<=1;switch(E){case 0:for(E=0,P=Math.pow(2,8),y=1;y!=P;)x=C.val&C.position,C.position>>=1,C.position==0&&(C.position=c,C.val=h(C.index++)),E|=(x>0?1:0)*y,y<<=1;A=e(E);break;case 1:for(E=0,P=Math.pow(2,16),y=1;y!=P;)x=C.val&C.position,C.position>>=1,C.position==0&&(C.position=c,C.val=h(C.index++)),E|=(x>0?1:0)*y,y<<=1;A=e(E);break;case 2:return""}for(u[3]=A,R=A,m.push(A);;){if(C.index>l)return"";for(E=0,P=Math.pow(2,_),y=1;y!=P;)x=C.val&C.position,C.position>>=1,C.position==0&&(C.position=c,C.val=h(C.index++)),E|=(x>0?1:0)*y,y<<=1;switch(A=E){case 0:for(E=0,P=Math.pow(2,8),y=1;y!=P;)x=C.val&C.position,C.position>>=1,C.position==0&&(C.position=c,C.val=h(C.index++)),E|=(x>0?1:0)*y,y<<=1;u[p++]=e(E),A=p-1,f--;break;case 1:for(E=0,P=Math.pow(2,16),y=1;y!=P;)x=C.val&C.position,C.position>>=1,C.position==0&&(C.position=c,C.val=h(C.index++)),E|=(x>0?1:0)*y,y<<=1;u[p++]=e(E),A=p-1,f--;break;case 2:return m.join("")}if(f==0&&(f=Math.pow(2,_),_++),u[A])g=u[A];else if(A===p)g=R+R.charAt(0);else return null;m.push(g),u[p++]=R+g.charAt(0),f--,R=g,f==0&&(f=Math.pow(2,_),_++)}}};return a}();i!=null?i.exports=t:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return t})}(Qs)),Qs.exports}var yg=Sg();const Uc=Mg(yg);let Pe,_n,$e,tr,Jr,Fi=[],Ue=[],re=null,Yo=new nt,Ic=0,Ys=null,da="NONE",We=0;const xe=1,rs=.4,or=.7,Eg=14.04,vn=Eg*Math.PI/180;let Qi=new Cn;Qi.name="sceneAttachmentHelpers";Tg();Ag();Hg();function Tg(){Pe=new Su,Pe.background=new kt(13421772),_n=new Ge(60,window.innerWidth/window.innerHeight,.1,1e3),_n.position.set(-30,30,30),_n.lookAt(0,0,0),$e=new tg({antialias:!0}),$e.setSize(window.innerWidth*.75-4,window.innerHeight-4),document.querySelector(".right-pane").appendChild($e.domElement),Jr=new ag(_n,$e.domElement),Jr.target.set(0,0,0),Jr.update();const i=new pf(16777215,.6);Pe.add(i);const t=new df(16777215,.8);t.position.set(5,10,7),Pe.add(t);const e=new cs(50,50),n=new Mn({color:11184810});tr=new fe(e,n),tr.rotation.x=-Math.PI/2,Pe.add(tr),Pe.add(Qi),$e.domElement.addEventListener("mousemove",Cg),$e.domElement.addEventListener("mousedown",Pg),$e.domElement.addEventListener("mouseup",Lg),window.addEventListener("keydown",Dg),window.addEventListener("resize",bg),document.getElementById("saveSceneBtn").addEventListener("click",Ng),document.getElementById("loadSceneBtn").addEventListener("click",Fg),Nc()}function Nc(){requestAnimationFrame(Nc),$e.render(Pe,_n)}function bg(){const i=window.innerWidth*.75-4,t=window.innerHeight-4;_n.aspect=i/t,_n.updateProjectionMatrix(),$e.setSize(i,t)}async function Ag(){try{Fi=await(await fetch("blocks.json")).json(),wg(Fi)}catch(i){console.error("Failed to load blocks.json:",i)}}function wg(i){const t=document.getElementById("categoryContainer");if(!t){console.warn("#categoryContainer not found in HTML!");return}t.innerHTML="",Object.keys(i).forEach(e=>{const n=document.createElement("div");n.classList.add("collapsible-section");const s=document.createElement("h3");s.classList.add("collapsible-header"),s.classList.add("collapsible"),s.dataset.collapsed="true",s.textContent=e,s.addEventListener("click",()=>{s.dataset.collapsed==="true"?(r.style.display="block",s.dataset.collapsed="false",s.classList.add("active")):(r.style.display="none",s.dataset.collapsed="true",s.classList.remove("active"))});const r=document.createElement("div");r.classList.add("collapsible-content"),r.style.display="none";const o=document.createElement("div");o.classList.add("block-list"),i[e].forEach(a=>{const l=document.createElement("div");if(l.classList.add("block-item"),l.textContent=a.name,a.previewImage){const c=document.createElement("img");c.src=a.previewImage,l.appendChild(c)}l.setAttribute("draggable",!0),l.dataset.blockId=a.id,l.addEventListener("dragstart",c=>{c.dataTransfer.setData("application/block-id",a.id)}),o.appendChild(l)}),r.appendChild(o),n.appendChild(s),n.appendChild(r),t.appendChild(n)})}const Oi=document.querySelector(".right-pane");Oi.addEventListener("dragover",i=>{i.preventDefault(),Oi.classList.add("drop-highlight")});Oi.addEventListener("dragleave",()=>{Oi.classList.remove("drop-highlight")});Oi.addEventListener("drop",i=>{i.preventDefault(),Oi.classList.remove("drop-highlight");const t=i.dataTransfer.getData("application/block-id");if(!t)return;let e=null;for(let n in Fi){const r=Fi[n].find(o=>o.id===t);if(r){e=r;break}}if(!e){console.warn("Block not found in blocksData for ID:",t);return}Rg(e,i)});function qo(i,t,e){i.traverse(n=>{n.isMesh&&(n.material=new Mn({color:t,side:Me}),In(n,e))})}function Rg(i,t){re&&(Pe.remove(re),re=null),new Lc().load(i.geometryFile,n=>{qo(n,13465655,7287041),n.scale.set(3.28084,3.28084,3.28084),n.position.set(0,0,0),n.userData.blockId=i.id,n.userData.blockName=i.name,n.userData.cost=i.cost||0,Array.isArray(i.attachmentPoints)?n.userData.attachmentPoints=i.attachmentPoints.map(r=>{const o=r.isSnapped===void 0?!1:r.isSnapped;return{position:new D(r.position.x/3.28084,r.position.y/3.28084,r.position.z/3.28084),vector:new D(r.vector.x,r.vector.y,r.vector.z),isSnapped:o}}):n.userData.attachmentPoints=[],Pe.add(n),re=n;const s=Bc(t);s&&re.position.copy(s.point),ei()},void 0,n=>{console.error("Error loading OBJ:",n)})}function In(i,t=0){if(!i.geometry)return;const e=new Ou(i.geometry,1),n=new wi({color:t}),s=new zo(e,n);s.name="edgesOutline",s.renderOrder=999,s.material.depthTest=!0,s.raycast=()=>{},i.add(s)}function ei(){Qi.clear(),Ue.forEach(i=>kl(i,Qi)),re&&kl(re,Qi)}function kl(i,t){(i.userData.attachmentPoints||[]).forEach(n=>{if(n.isSnapped)return;const s=n.position.clone();i.localToWorld(s);const r=n.vector.clone().applyQuaternion(i.quaternion).normalize(),o=new ca(.2,16,16),a=new cr({color:16711680}),l=new fe(o,a);l.position.copy(s);const c=.5,h=new _f(r,s,c,65280);t.add(l),t.add(h)})}function Cg(i){if(!re)return;const t=Bc(i);t&&re.position.copy(t.point),ei()}function Fc(i){const t=$e.domElement.getBoundingClientRect(),e=(i.clientX-t.left)/t.width*2-1,n=-((i.clientY-t.top)/t.height)*2+1,s=new bc;s.setFromCamera(new nt(e,n),_n);let r=[];Ue.forEach(a=>{a.traverse(l=>{l.isMesh&&r.push(l)})});const o=s.intersectObjects(r,!0);return o.length>0?o[0].object.parent:null}let Oc=null;function Pg(i){Yo.set(i.clientX,i.clientY),Ic=performance.now(),re||(Oc=Fc(i))}function Lg(i){const t=Math.hypot(i.clientX-Yo.x,i.clientY-Yo.y),e=performance.now()-Ic;if(t<5&&e<1e3)if(re)Gl(re,"snap"),Ue.push(re),qo(re,16777215,0),ar(),ei(),re=null;else{let n=Fc(i);n!=null&&n.uuid&&n.uuid===Oc.uuid&&(re=n,Ue=Ue.filter(s=>s.uuid!=re.uuid),Gl(re,"unsnap"),qo(re,13465655,7287041),ar())}}function Dg(i){re?i.key.toLowerCase()==="r"?(i.shiftKey?re.rotateY(-Math.PI/2):re.rotateY(Math.PI/2),ei()):i.key==="Delete"&&Ug():i.key.toLowerCase()==="r"&&(i.shiftKey?We<3?We++:We=0:We>0?We--:We=3,zc(da))}function Ug(){Pe.remove(re),re=null,ei()}function Bc(i){const t=$e.domElement.getBoundingClientRect(),e=(i.clientX-t.left)/t.width*2-1,n=-((i.clientY-t.top)/t.height)*2+1,s=new nt(e,n),r=new bc;r.setFromCamera(s,_n);const o=[tr,...Ue],a=r.intersectObjects(o,!0);return a.length>0?a[0]:null}function Gl(i,t){const n=(i.userData.attachmentPoints||[]).map(r=>{const o=r.position.clone();i.localToWorld(o);const a=r.vector.clone().applyQuaternion(i.quaternion).normalize();return{position:o,vector:a,ref:r}}),s=[];for(let r=0;r<Ue.length;r++){const o=Ue[r];if(o===i)continue;const l=(o.userData.attachmentPoints||[]).map(c=>{const h=c.position.clone();o.localToWorld(h);const u=c.vector.clone().applyQuaternion(o.quaternion).normalize();return{position:h,vector:u,ref:c}});for(let c of n)if(!(t==="snap"&&c.ref.isSnapped||t==="unsnap"&&!c.ref.isSnapped))for(let h of l){if(t==="snap"&&h.ref.isSnapped||t==="unsnap"&&!h.ref.isSnapped)continue;const u=c.position.distanceTo(h.position);if(u<.77&&c.vector.dot(h.vector)<=-.99){const p=h.position.clone().sub(c.position);s.push({dist:u,A:c,B:h,offset:p})}}}if(s.length!==0){if(t==="snap"){let r=1/0,o=null;for(let a of s)a.dist<r&&(r=a.dist,o=a);i.position.add(o.offset)}for(let r of s)t==="snap"?(r.A.ref.isSnapped=!0,r.B.ref.isSnapped=!0):t==="unsnap"&&(r.A.ref.isSnapped=!1,r.B.ref.isSnapped=!1)}}function ar(){const i={};Ue.forEach(s=>{const r=s.userData.blockId,o=s.userData.cost||0,a=s.userData.blockName||"Unknown";i[r]||(i[r]={count:0,costEach:o,name:a}),i[r].count++});let t=0,e="";Object.keys(i).forEach(s=>{const r=i[s],o=r.count*r.costEach;t+=o,e+=`${r.count} x ${r.name} @ $${r.costEach} = $${o}<br/>`}),e+=`<b>Total Cost = $${t}</b>`;const n=document.getElementById("costCalculator");n&&(n.innerHTML=e)}function Ig(){const i=Ue.map(n=>{const s=n.userData.blockId,r=n.userData.blockName,o=n.userData.cost||0,a=n.position.clone(),l=n.quaternion.clone(),c=new Be().setFromQuaternion(l,"XYZ"),u=(n.userData.attachmentPoints||[]).map(f=>({position:{x:f.position.x,y:f.position.y,z:f.position.z},vector:{x:f.vector.x,y:f.vector.y,z:f.vector.z},isSnapped:f.isSnapped}));return{blockId:s,blockName:r,cost:o,position:{x:a.x,y:a.y,z:a.z},rotation:{x:c.x,y:c.y,z:c.z},attachmentPoints:u}}),t=JSON.stringify({blocks:i,roof:da,roofRot:We});return Uc.compressToBase64(t)}function Ng(){const i=Ig();navigator.clipboard.writeText(i).then(()=>{const t=document.getElementById("savePopup");t&&(t.style.display="block",setTimeout(()=>{t.style.display="none"},5770))})}async function Fg(){const i=document.getElementById("loadSceneInput");if(!i)return;const t=i.value.trim();if(!t)return;let e;try{if(e=Uc.decompressFromBase64(t),!e){console.error("Failed to decompress data (invalid base64?).");return}}catch(r){console.error("Error decompressing data:",r);return}let n;try{n=JSON.parse(e)}catch(r){console.error("Failed to parse scene JSON:",r);return}if(!n.blocks||!Array.isArray(n.blocks)){console.error('Malformed scene data: missing "blocks" array.');return}Ue.forEach(r=>Pe.remove(r)),Ue=[];for(const r of n.blocks)await Bg(r);ar(),ei(),We=n.roofRot;const s=document.querySelector(`input[name="roofChoiceInput"][value="${n.roof}"]`);s.checked=!0,s.dispatchEvent(new Event("change"))}function Og(i,t){return new Promise((e,n)=>{i.load(t,s=>e(s),void 0,s=>n(s))})}async function Bg(i){let t=null;for(let n in Fi){const r=Fi[n].find(o=>o.id===i.blockId);if(r){t=r;break}}if(!t){console.warn("Block not found in blocksData for ID:",i.blockId);return}const e=new Lc;try{const n=await Og(e,t.geometryFile);n.traverse(r=>{r.isMesh&&(r.material=new Mn({color:16777215,side:Me}),In(r,0))}),n.scale.set(3.28084,3.28084,3.28084),n.position.set(i.position.x,i.position.y,i.position.z);const s=new Be(i.rotation.x,i.rotation.y,i.rotation.z,"XYZ");n.quaternion.setFromEuler(s),n.userData.blockId=i.blockId,n.userData.blockName=i.blockName,n.userData.cost=i.cost,n.userData.attachmentPoints=(i.attachmentPoints||[]).map(r=>({position:new D(r.position.x,r.position.y,r.position.z),vector:new D(r.vector.x,r.vector.y,r.vector.z),isSnapped:r.isSnapped})),Pe.add(n),Ue.push(n),ar(),ei()}catch(n){console.error("Error loading OBJ file:",n)}}function zg(){let i=1/0,t=1/0,e=1/0,n=-1/0,s=-1/0,r=-1/0;return Ue.forEach(o=>{const a=new Bi().setFromObject(o);a.isEmpty()||(a.min.x<i&&(i=a.min.x),a.min.y<t&&(t=a.min.y),a.min.z<e&&(e=a.min.z),a.max.x>n&&(n=a.max.x),a.max.y>s&&(s=a.max.y),a.max.z>r&&(r=a.max.z))}),i===1/0&&(i=t=e=0,n=s=r=0),{minx:i,maxx:n,miny:t,maxy:s,minz:e,maxz:r}}function Hg(){document.querySelectorAll('input[name="roofChoiceInput"]').forEach(i=>{i.addEventListener("change",t=>{const e=t.target.value;zc(e)})})}function zc(i){if(da=i,Ys&&(Pe.remove(Ys),Ys=null),i==="NONE")return;const t=zg();if(t.minx===1/0){console.warn("No blocks => cannot create roof.");return}let e=0,n=0;We==0||We==2?(e=t.maxx-t.minx,n=t.maxz-t.minz):(e=t.maxz-t.minz,n=t.maxx-t.minx);const s=t.maxy,r=(t.minx+t.maxx)/2,o=(t.minz+t.maxz)/2;let a=null;switch(i){case"AFRAME":a=Vg(e,n);break;case"OFFSET":a=kg(e,n);break;case"FLAT":a=Gg(e,n);break;default:console.warn("Unknown roof choice:",i);return}a&&(a.position.set(r,s,o),We>0&&a.rotateY(Math.PI/2*We),Pe.add(a),Ys=a)}function Vg(i,t){const e=new Cn,n=Math.tan(vn)*(i/2),s=new Ni;s.moveTo(-i/2,0),s.lineTo(i/2,0),s.lineTo(0,n),s.closePath();const r=new Jn(s,{depth:t,bevelEnabled:!1}),o=new Mn({color:16711680,side:Me}),a=new fe(r,o);a.position.set(0,0,-t/2),In(a),e.add(a);const l=Wl("left",i,t);e.add(l);const c=Wl("right",i,t);return e.add(c),e}function Wl(i,t,e){const n=Math.tan(vn)*(t/2),s=new Ni;s.moveTo(0,0),s.lineTo(-xe,-Math.tan(vn)*xe),s.lineTo(-xe,-Math.tan(vn)*xe+rs),s.lineTo(t/2,n+rs),s.lineTo(t/2,n),s.closePath();const r=new Jn(s,{depth:e+2*xe,bevelEnabled:!1}),o=new Mn({color:16711935,side:Me}),a=new fe(r,o);let l=i=="left"?1:-1;a.scale.set(l,1,1);let c=i=="left"?-t/2:t/2;return a.position.set(c,0,-e/2-xe),In(a),a}function kg(i,t){const e=i*or,n=Math.tan(vn)*e,s=i*(1-or),r=Math.tan(vn)*s,o=new Cn,a=new Ni;a.moveTo(0,0),a.lineTo(e,0),a.lineTo(e,n),a.closePath();const l=new Jn(a,{depth:t,bevelEnabled:!1}),c=new Mn({color:65280,side:Me}),h=new fe(l,c);h.position.set(-i/2,0,-t/2),In(h),o.add(h);const u=new Ni;u.moveTo(0,0),u.lineTo(-s,0),u.lineTo(-s,r),u.closePath();const f=new Jn(u,{depth:t,bevelEnabled:!1}),p=new Mn({color:16776960,side:Me}),_=new fe(f,p);_.position.set(i/2,0,-t/2),In(_),o.add(_);const g=Xl("left",i,t);o.add(g);const m=Xl("right",i,t);return o.add(m),o}function Xl(i,t,e){const n=i=="left"?or:1-or,s=t*n,r=Math.tan(vn)*(s+xe),o=new Ni;o.moveTo(0,0),o.lineTo(-xe,-Math.tan(vn)*xe),o.lineTo(-xe,-Math.tan(vn)*xe+rs),o.lineTo(s+xe,r+rs),o.lineTo(s+xe,r),o.closePath();const a=new Jn(o,{depth:e+2*xe,bevelEnabled:!1}),l=new Mn({color:16711935,side:Me}),c=new fe(a,l);let h=i=="left"?1:-1;c.scale.set(h,1,1);let u=i=="left"?-t/2:t/2;return c.position.set(u,0,-e/2-xe),In(c),c}function Gg(i,t){const e=rs,n=new zi(i+2*xe,e,t+2*xe),s=new Mn({color:255,side:Me}),r=new fe(n,s);return r.position.set(0,e,0),In(r),r}

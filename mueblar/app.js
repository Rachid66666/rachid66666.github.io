(()=>{var Ii={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ku=0,Oc=1,Qu=2;var rs=1,ed=2,Qs=3,ai=0,Vt=1,nn=2,Wn=0,Yi=1,Bc=2,zc=3,kc=4,td=5;var bi=100,nd=101,id=102,sd=103,rd=104,ad=200,od=201,ld=202,cd=203,Ka=204,Qa=205,hd=206,ud=207,dd=208,fd=209,pd=210,md=211,gd=212,xd=213,_d=214,eo=0,to=1,no=2,Zi=3,io=4,so=5,ro=6,ao=7,Fo=0,vd=1,yd=2,Fn=0,Vc=1,Hc=2,Gc=3,Wc=4,Xc=5,qc=6,ea=7;var $c=300,Li=301,as=302,Oo=303,Bo=304,ta=306,Si=1e3,bn=1001,ks=1002,Rt=1003,zo=1004;var os=1005;var It=1006,er=1007;var Xn=1008;var sn=1009,Yc=1010,Zc=1011,tr=1012,ko=1013,On=1014,wn=1015,qn=1016,Vo=1017,Ho=1018,nr=1020,Jc=35902,jc=35899,Kc=1021,Qc=1022,rn=1023,Vn=1026,Di=1027,Go=1028,Wo=1029,ls=1030,Xo=1031;var qo=1033,na=33776,ia=33777,sa=33778,ra=33779,$o=35840,Yo=35841,Zo=35842,Jo=35843,jo=36196,Ko=37492,Qo=37496,el=37488,tl=37489,nl=37490,il=37491,sl=37808,rl=37809,al=37810,ol=37811,ll=37812,cl=37813,hl=37814,ul=37815,dl=37816,fl=37817,pl=37818,ml=37819,gl=37820,xl=37821,_l=36492,vl=36494,yl=36495,Ml=36283,bl=36284,Sl=36285,wl=36286;var Ji=2300,Vs=2301,ja=2302,wc=2303,Tc=2400,Ec=2401,Ac=2402;var Md=3200;var Tl=0,bd=1,gn="",At="srgb",ji="srgb-linear",Sr="linear",ot="srgb";var qi=7680;var Cc=519,Sd=512,wd=513,Td=514,El=515,Ed=516,Ad=517,Al=518,Cd=519,Rc=35044;var eh="300 es",Nn=2e3,Hs=2001;function Ep(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ap(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rd(){let i=wr("canvas");return i.style.display="block",i}var bu={},Gs=null;function th(...i){let e="THREE."+i.shift();Gs?Gs("log",e,...i):console.log(e,...i)}function Id(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ve(...i){i=Id(i);let e="THREE."+i.shift();if(Gs)Gs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function We(...i){i=Id(i);let e="THREE."+i.shift();if(Gs)Gs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Tr(...i){let e=i.join(" ");e in bu||(bu[e]=!0,Ve(...i))}function Pd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Ld={[eo]:to,[no]:ro,[io]:ao,[Zi]:so,[to]:eo,[ro]:no,[ao]:io,[so]:Zi},Hn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Su=1234567,vr=Math.PI/180,Ws=180/Math.PI;function cs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function je(i,e,t){return Math.max(e,Math.min(t,i))}function nh(i,e){return(i%e+e)%e}function Cp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Rp(i,e,t){return i!==e?(t-i)/(e-i):0}function yr(i,e,t){return(1-t)*i+t*e}function Ip(i,e,t,n){return yr(i,e,1-Math.exp(-t*n))}function Pp(i,e=1){return e-Math.abs(nh(i,e*2)-e)}function Lp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Dp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Np(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Up(i,e){return i+Math.random()*(e-i)}function Fp(i){return i*(.5-Math.random())}function Op(i){i!==void 0&&(Su=i);let e=Su+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bp(i){return i*vr}function zp(i){return i*Ws}function kp(i){return(i&i-1)===0&&i!==0}function Vp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gp(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var hs={DEG2RAD:vr,RAD2DEG:Ws,generateUUID:cs,clamp:je,euclideanModulo:nh,mapLinear:Cp,inverseLerp:Rp,lerp:yr,damp:Ip,pingpong:Pp,smoothstep:Lp,smootherstep:Dp,randInt:Np,randFloat:Up,randFloatSpread:Fp,seededRandom:Op,degToRad:Bp,radToDeg:zp,isPowerOfTwo:kp,ceilPowerOfTwo:Vp,floorPowerOfTwo:Hp,setQuaternionFromProperEuler:Gp,normalize:Qt,denormalize:Bs},de=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},en=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(d!==x||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*x;m<0&&(u=-u,f=-f,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){let y=Math.acos(m),b=Math.sin(y);p=Math.sin(p*y)/b,o=Math.sin(o*y)/b,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+x*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+x*o;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kl.copy(this).projectOnVector(e),this.sub(Kl)}reflect(e){return this.sub(Kl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Kl=new P,wu=new en,Je=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],y=s[1],b=s[4],M=s[7],T=s[2],E=s[5],I=s[8];return r[0]=a*x+o*y+l*T,r[3]=a*m+o*b+l*E,r[6]=a*p+o*M+l*I,r[1]=c*x+h*y+d*T,r[4]=c*m+h*b+d*E,r[7]=c*p+h*M+d*I,r[2]=u*x+f*y+g*T,r[5]=u*m+f*b+g*E,r[8]=u*p+f*M+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ql.makeScale(e,t)),this}rotate(e){return this.premultiply(Ql.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ql.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ql=new Je,Tu=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eu=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wp(){let i={enabled:!0,workingColorSpace:ji,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ot&&(s.r=ri(s.r),s.g=ri(s.g),s.b=ri(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(s.r=zs(s.r),s.g=zs(s.g),s.b=zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gn?Sr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Tr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Tr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ji]:{primaries:e,whitePoint:n,transfer:Sr,toXYZ:Tu,fromXYZ:Eu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:n,transfer:ot,toXYZ:Tu,fromXYZ:Eu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),i}var nt=Wp();function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ts,Xs=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ts===void 0&&(Ts=wr("canvas")),Ts.width=e.width,Ts.height=e.height;let s=Ts.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ts}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=wr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ri(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ri(t[n]/255)*255):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xp=0,wi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=cs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ec(s[a].image)):r.push(ec(s[a]))}else r=ec(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ec(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xs.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}var qp=0,tc=new P,Zt=class i extends Hn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=bn,s=bn,r=It,a=Xn,o=rn,l=sn,c=i.DEFAULT_ANISOTROPY,h=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=cs(),this.name="",this.source=new wi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(tc).x}get height(){return this.source.getSize(tc).y}get depth(){return this.source.getSize(tc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$c)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Si:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case ks:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Si:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case ks:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=$c;Zt.DEFAULT_ANISOTROPY=1;var Mt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,M=(f+1)/2,T=(p+1)/2,E=(h+u)/4,I=(d+x)/4,_=(g+m)/4;return b>M&&b>T?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=E/n,r=I/n):M>T?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=_/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=I/r,s=_/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-x)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},oo=class extends Hn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Zt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new wi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},un=class extends oo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Er=class extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var lo=class extends Zt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var lt=class i{constructor(e,t,n,s,r,a,o,l,c,h,d,u,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,u,f,g,x,m)}set(e,t,n,s,r,a,o,l,c,h,d,u,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Es.setFromMatrixColumn(e,0).length(),r=1/Es.setFromMatrixColumn(e,1).length(),a=1/Es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,x=c*d;t[0]=u+x*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,x=c*d;t[0]=u-x*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-x*d}else if(e.order==="XZY"){let u=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($p,e,Yp)}lookAt(e,t,n){let s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),mi.crossVectors(n,cn),mi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),mi.crossVectors(n,cn)),mi.normalize(),Ta.crossVectors(cn,mi),s[0]=mi.x,s[4]=Ta.x,s[8]=cn.x,s[1]=mi.y,s[5]=Ta.y,s[9]=cn.y,s[2]=mi.z,s[6]=Ta.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],b=n[7],M=n[11],T=n[15],E=s[0],I=s[4],_=s[8],S=s[12],k=s[1],C=s[5],L=s[9],N=s[13],z=s[2],D=s[6],B=s[10],U=s[14],ie=s[3],ne=s[7],_e=s[11],ue=s[15];return r[0]=a*E+o*k+l*z+c*ie,r[4]=a*I+o*C+l*D+c*ne,r[8]=a*_+o*L+l*B+c*_e,r[12]=a*S+o*N+l*U+c*ue,r[1]=h*E+d*k+u*z+f*ie,r[5]=h*I+d*C+u*D+f*ne,r[9]=h*_+d*L+u*B+f*_e,r[13]=h*S+d*N+u*U+f*ue,r[2]=g*E+x*k+m*z+p*ie,r[6]=g*I+x*C+m*D+p*ne,r[10]=g*_+x*L+m*B+p*_e,r[14]=g*S+x*N+m*U+p*ue,r[3]=y*E+b*k+M*z+T*ie,r[7]=y*I+b*C+M*D+T*ne,r[11]=y*_+b*L+M*B+T*_e,r[15]=y*S+b*N+M*U+T*ue,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15],y=l*f-c*u,b=o*f-c*d,M=o*u-l*d,T=a*f-c*h,E=a*u-l*h,I=a*d-o*h;return t*(x*y-m*b+p*M)-n*(g*y-m*T+p*E)+s*(g*b-x*T+p*I)-r*(g*M-x*E+m*I)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],y=t*o-n*a,b=t*l-s*a,M=t*c-r*a,T=n*l-s*o,E=n*c-r*o,I=s*c-r*l,_=h*x-d*g,S=h*m-u*g,k=h*p-f*g,C=d*m-u*x,L=d*p-f*x,N=u*p-f*m,z=y*N-b*L+M*C+T*k-E*S+I*_;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/z;return e[0]=(o*N-l*L+c*C)*D,e[1]=(s*L-n*N-r*C)*D,e[2]=(x*I-m*E+p*T)*D,e[3]=(u*E-d*I-f*T)*D,e[4]=(l*k-a*N-c*S)*D,e[5]=(t*N-s*k+r*S)*D,e[6]=(m*M-g*I-p*b)*D,e[7]=(h*I-u*M+f*b)*D,e[8]=(a*L-o*k+c*_)*D,e[9]=(n*k-t*L-r*_)*D,e[10]=(g*E-x*M+p*y)*D,e[11]=(d*M-h*E-f*y)*D,e[12]=(o*S-a*C-l*_)*D,e[13]=(t*C-n*S+s*_)*D,e[14]=(x*b-g*T-m*y)*D,e[15]=(h*T-d*b+u*y)*D,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,x=a*h,m=a*d,p=o*d,y=l*c,b=l*h,M=l*d,T=n.x,E=n.y,I=n.z;return s[0]=(1-(x+p))*T,s[1]=(f+M)*T,s[2]=(g-b)*T,s[3]=0,s[4]=(f-M)*E,s[5]=(1-(u+p))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(g+b)*I,s[9]=(m-y)*I,s[10]=(1-(u+x))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Es.set(s[0],s[1],s[2]).length(),o=Es.set(s[4],s[5],s[6]).length(),l=Es.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Pn.copy(this);let c=1/a,h=1/o,d=1/l;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=d,Pn.elements[9]*=d,Pn.elements[10]*=d,t.setFromRotationMatrix(Pn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Nn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===Nn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Hs)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Nn,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===Nn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Hs)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Es=new P,Pn=new lt,$p=new P(0,0,0),Yp=new P(1,1,1),mi=new P,Ta=new P,cn=new P,Au=new lt,Cu=new en,Sn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Au.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Au,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cu.setFromEuler(this),this.setFromQuaternion(Cu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var Ar=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Zp=0,Ru=new P,As=new en,ei=new lt,Ea=new P,ur=new P,Jp=new P,jp=new en,Iu=new P(1,0,0),Pu=new P(0,1,0),Lu=new P(0,0,1),Du={type:"added"},Kp={type:"removed"},Cs={type:"childadded",child:null},nc={type:"childremoved",child:null},Ft=class i extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new Sn,n=new en,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new Je}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(Iu,e)}rotateY(e){return this.rotateOnAxis(Pu,e)}rotateZ(e){return this.rotateOnAxis(Lu,e)}translateOnAxis(e,t){return Ru.copy(e).applyQuaternion(this.quaternion),this.position.add(Ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Iu,e)}translateY(e){return this.translateOnAxis(Pu,e)}translateZ(e){return this.translateOnAxis(Lu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ea.copy(e):Ea.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(ur,Ea,this.up):ei.lookAt(Ea,ur,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),As.setFromRotationMatrix(ei),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Du),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kp),nc.child=e,this.dispatchEvent(nc),nc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Du),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,Jp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,jp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ft.DEFAULT_UP=new P(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ct=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qp={type:"move"},qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function ic(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=nh(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ic(a,r,e+1/3),this.g=ic(a,r,e),this.b=ic(a,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let n=Dd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return nt.workingToColorSpace(Yt.copy(this),e),Math.round(je(Yt.r*255,0,255))*65536+Math.round(je(Yt.g*255,0,255))*256+Math.round(je(Yt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Yt.copy(this),t);let n=Yt.r,s=Yt.g,r=Yt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=At){nt.workingToColorSpace(Yt.copy(this),e);let t=Yt.r,n=Yt.g,s=Yt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(Aa);let n=yr(gi.h,Aa.h,t),s=yr(gi.s,Aa.s,t),r=yr(gi.l,Aa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yt=new qe;qe.NAMES=Dd;var Gn=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ln=new P,ti=new P,sc=new P,ni=new P,Rs=new P,Is=new P,Nu=new P,rc=new P,ac=new P,oc=new P,lc=new Mt,cc=new Mt,hc=new Mt,Mi=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ln.subVectors(e,t),s.cross(Ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ln.subVectors(s,t),ti.subVectors(n,t),sc.subVectors(e,t);let a=Ln.dot(Ln),o=Ln.dot(ti),l=Ln.dot(sc),c=ti.dot(ti),h=ti.dot(sc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ni.x),l.addScaledVector(a,ni.y),l.addScaledVector(o,ni.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return lc.setScalar(0),cc.setScalar(0),hc.setScalar(0),lc.fromBufferAttribute(e,t),cc.fromBufferAttribute(e,n),hc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(lc,r.x),a.addScaledVector(cc,r.y),a.addScaledVector(hc,r.z),a}static isFrontFacing(e,t,n,s){return Ln.subVectors(n,t),ti.subVectors(e,t),Ln.cross(ti).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Ln.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Rs.subVectors(s,n),Is.subVectors(r,n),rc.subVectors(e,n);let l=Rs.dot(rc),c=Is.dot(rc);if(l<=0&&c<=0)return t.copy(n);ac.subVectors(e,s);let h=Rs.dot(ac),d=Is.dot(ac);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Rs,a);oc.subVectors(e,r);let f=Rs.dot(oc),g=Is.dot(oc);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Is,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Nu.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(Nu,o);let p=1/(m+x+u);return a=x*p,o=u*p,t.copy(n).addScaledVector(Rs,a).addScaledVector(Is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},zt=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Dn):Dn.fromBufferAttribute(r,a),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ca.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ca.copy(n.boundingBox)),Ca.applyMatrix4(e.matrixWorld),this.union(Ca)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),Ra.subVectors(this.max,dr),Ps.subVectors(e.a,dr),Ls.subVectors(e.b,dr),Ds.subVectors(e.c,dr),xi.subVectors(Ls,Ps),_i.subVectors(Ds,Ls),Hi.subVectors(Ps,Ds);let t=[0,-xi.z,xi.y,0,-_i.z,_i.y,0,-Hi.z,Hi.y,xi.z,0,-xi.x,_i.z,0,-_i.x,Hi.z,0,-Hi.x,-xi.y,xi.x,0,-_i.y,_i.x,0,-Hi.y,Hi.x,0];return!uc(t,Ps,Ls,Ds,Ra)||(t=[1,0,0,0,1,0,0,0,1],!uc(t,Ps,Ls,Ds,Ra))?!1:(Ia.crossVectors(xi,_i),t=[Ia.x,Ia.y,Ia.z],uc(t,Ps,Ls,Ds,Ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ii=[new P,new P,new P,new P,new P,new P,new P,new P],Dn=new P,Ca=new zt,Ps=new P,Ls=new P,Ds=new P,xi=new P,_i=new P,Hi=new P,dr=new P,Ra=new P,Ia=new P,Gi=new P;function uc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Gi.fromArray(i,r);let o=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),l=e.dot(Gi),c=t.dot(Gi),h=n.dot(Gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Et=new P,Pa=new de,em=0,xt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:em++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Rc,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pa.fromBufferAttribute(this,t),Pa.applyMatrix3(e),this.setXY(t,Pa.x,Pa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array),s=Qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rc&&(e.usage=this.usage),e}};var Cr=class extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Rr=class extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var St=class extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}},tm=new zt,fr=new P,dc=new P,oi=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):tm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fr.subVectors(e,this.center);let t=fr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(fr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fr.copy(e.center).add(dc)),this.expandByPoint(fr.copy(e.center).sub(dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},nm=0,yn=new lt,fc=new Ft,Ns=new P,hn=new zt,pr=new zt,Ut=new P,Jt=class i extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ep(e)?Rr:Cr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return fc.lookAt(e),fc.updateMatrix(),this.applyMatrix4(fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new St(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];pr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(hn.min,pr.min),hn.expandByPoint(Ut),Ut.addVectors(hn.max,pr.max),hn.expandByPoint(Ut)):(hn.expandByPoint(pr.min),hn.expandByPoint(pr.max))}hn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ut));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ut.fromBufferAttribute(o,c),l&&(Ns.fromBufferAttribute(e,c),Ut.add(Ns)),s=Math.max(s,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new P,l[_]=new P;let c=new P,h=new P,d=new P,u=new de,f=new de,g=new de,x=new P,m=new P;function p(_,S,k){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,k),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,k),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(C),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),o[_].add(x),o[S].add(x),o[k].add(x),l[_].add(m),l[S].add(m),l[k].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,S=y.length;_<S;++_){let k=y[_],C=k.start,L=k.count;for(let N=C,z=C+L;N<z;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let b=new P,M=new P,T=new P,E=new P;function I(_){T.fromBufferAttribute(s,_),E.copy(T);let S=o[_];b.copy(S),b.sub(T.multiplyScalar(T.dot(S))).normalize(),M.crossVectors(E,S);let C=M.dot(l[_])<0?-1:1;a.setXYZW(_,b.x,b.y,b.z,C)}for(let _=0,S=y.length;_<S;++_){let k=y[_],C=k.start,L=k.count;for(let N=C,z=C+L;N<z;N+=3)I(e.getX(N+0)),I(e.getX(N+1)),I(e.getX(N+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new xt(u,h,d)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var im=0,Un=class extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=Yi,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ka,this.blendDst=Qa,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ka&&(n.blendSrc=this.blendSrc),this.blendDst!==Qa&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var si=new P,pc=new P,La=new P,vi=new P,mc=new P,Da=new P,gc=new P,Ki=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){pc.copy(e).add(t).multiplyScalar(.5),La.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(pc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(La),o=vi.dot(this.direction),l=-vi.dot(La),c=vi.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(pc).addScaledVector(La,u),f}intersectSphere(e,t){si.subVectors(e.center,this.origin);let n=si.dot(this.direction),s=si.dot(si)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,n,s,r){mc.subVectors(t,e),Da.subVectors(n,e),gc.crossVectors(mc,Da);let a=this.direction.dot(gc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vi.subVectors(this.origin,e);let l=o*this.direction.dot(Da.crossVectors(vi,Da));if(l<0)return null;let c=o*this.direction.dot(mc.cross(vi));if(c<0||l+c>a)return null;let h=-o*vi.dot(gc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qi=class extends Un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Uu=new lt,Wi=new Ki,Na=new oi,Fu=new P,Ua=new P,Fa=new P,Oa=new P,xc=new P,Ba=new P,Ou=new P,za=new P,ht=class extends Ft{constructor(e=new Jt,t=new Qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ba.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(xc.fromBufferAttribute(d,e),a?Ba.addScaledVector(xc,h):Ba.addScaledVector(xc.sub(t),h))}t.add(Ba)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(r),Wi.copy(e.ray).recast(e.near),!(Na.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(Na,Fu)===null||Wi.origin.distanceToSquared(Fu)>(e.far-e.near)**2))&&(Uu.copy(r).invert(),Wi.copy(e.ray).applyMatrix4(Uu),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,T=b;M<T;M+=3){let E=o.getX(M),I=o.getX(M+1),_=o.getX(M+2);s=ka(this,p,e,n,c,h,d,E,I,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=o.getX(m),b=o.getX(m+1),M=o.getX(m+2);s=ka(this,a,e,n,c,h,d,y,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,T=b;M<T;M+=3){let E=M,I=M+1,_=M+2;s=ka(this,p,e,n,c,h,d,E,I,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=m,b=m+1,M=m+2;s=ka(this,a,e,n,c,h,d,y,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function sm(i,e,t,n,s,r,a,o){let l;if(e.side===Vt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ai,o),l===null)return null;za.copy(o),za.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(za);return c<t.near||c>t.far?null:{distance:c,point:za.clone(),object:i}}function ka(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ua),i.getVertexPosition(l,Fa),i.getVertexPosition(c,Oa);let h=sm(i,e,t,n,Ua,Fa,Oa,Ou);if(h){let d=new P;Mi.getBarycoord(Ou,Ua,Fa,Oa,d),s&&(h.uv=Mi.getInterpolatedAttribute(s,o,l,c,d,new de)),r&&(h.uv1=Mi.getInterpolatedAttribute(r,o,l,c,d,new de)),a&&(h.normal=Mi.getInterpolatedAttribute(a,o,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new P,materialIndex:0};Mi.getNormal(Ua,Fa,Oa,u.normal),h.face=u,h.barycoord=d}return h}var Ir=class extends Zt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Rt,h=Rt,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pr=class extends xt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Us=new lt,Bu=new lt,Va=[],zu=new zt,rm=new lt,mr=new ht,gr=new oi,Lr=class extends ht{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pr(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,rm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Us),zu.copy(e.boundingBox).applyMatrix4(Us),this.boundingBox.union(zu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Us),gr.copy(e.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(gr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(mr.geometry=this.geometry,mr.material=this.material,mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gr.copy(this.boundingSphere),gr.applyMatrix4(n),e.ray.intersectsSphere(gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Us),Bu.multiplyMatrices(n,Us),mr.matrixWorld=Bu,mr.raycast(e,Va);for(let a=0,o=Va.length;a<o;a++){let l=Va[a];l.instanceId=r,l.object=this,t.push(l)}Va.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Pr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ir(new Float32Array(s*this.count),s,this.count,Go,wn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},_c=new P,am=new P,om=new Je,Mn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=_c.subVectors(n,t).cross(am.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(_c),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||om.getNormalMatrix(e),s=this.coplanarPoint(_c).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xi=new oi,lm=new de(.5,.5),Ha=new P,$s=class{constructor(e=new Mn,t=new Mn,n=new Mn,s=new Mn,r=new Mn,a=new Mn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Nn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],y=r[12],b=r[13],M=r[14],T=r[15];if(s[0].setComponents(c-a,f-h,p-g,T-y).normalize(),s[1].setComponents(c+a,f+h,p+g,T+y).normalize(),s[2].setComponents(c+o,f+d,p+x,T+b).normalize(),s[3].setComponents(c-o,f-d,p-x,T-b).normalize(),n)s[4].setComponents(l,u,m,M).normalize(),s[5].setComponents(c-l,f-u,p-m,T-M).normalize();else if(s[4].setComponents(c-l,f-u,p-m,T-M).normalize(),t===Nn)s[5].setComponents(c+l,f+u,p+m,T+M).normalize();else if(t===Hs)s[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){Xi.center.set(0,0,0);let t=lm.distanceTo(e.center);return Xi.radius=.7071067811865476+t,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ha.x=s.normal.x>0?e.max.x:e.min.x,Ha.y=s.normal.y>0?e.max.y:e.min.y,Ha.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var es=class extends Un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},co=new P,ho=new P,ku=new lt,xr=new Ki,Ga=new oi,vc=new P,Vu=new P,uo=class extends Ft{constructor(e=new Jt,t=new es){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)co.fromBufferAttribute(t,s-1),ho.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=co.distanceTo(ho);e.setAttribute("lineDistance",new St(n,1))}else Ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(s),Ga.radius+=r,e.ray.intersectsSphere(Ga)===!1)return;ku.copy(s).invert(),xr.copy(e.ray).applyMatrix4(ku);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=h.getX(x),y=h.getX(x+1),b=Wa(this,e,xr,l,p,y,x);b&&t.push(b)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=Wa(this,e,xr,l,x,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){let p=Wa(this,e,xr,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Wa(this,e,xr,l,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Wa(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(co.fromBufferAttribute(o,s),ho.fromBufferAttribute(o,r),t.distanceSqToSegment(co,ho,vc,Vu)>n)return;vc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(vc);if(!(c<e.near||c>e.far))return{distance:c,point:Vu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Hu=new P,Gu=new P,Dr=class extends uo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Hu.fromBufferAttribute(t,s),Gu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Hu.distanceTo(Gu);e.setAttribute("lineDistance",new St(n,1))}else Ve("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ts=class extends Zt{constructor(e,t,n,s,r,a,o,l,c,h,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}};var Nr=class extends Zt{constructor(e=[],t=Li,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ns=class extends Zt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ti=class extends Zt{constructor(e,t,n=On,s,r,a,o=Rt,l=Rt,c,h=Vn,d=1){if(h!==Vn&&h!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},fo=class extends Ti{constructor(e,t=On,n=Li,s,r,a=Rt,o=Rt,l,c=Vn){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ur=class extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Tt=class i extends Jt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(h,3)),this.setAttribute("uv",new St(d,2));function g(x,m,p,y,b,M,T,E,I,_,S){let k=M/I,C=T/_,L=M/2,N=T/2,z=E/2,D=I+1,B=_+1,U=0,ie=0,ne=new P;for(let _e=0;_e<B;_e++){let ue=_e*C-N;for(let q=0;q<D;q++){let se=q*k-L;ne[x]=se*y,ne[m]=ue*b,ne[p]=z,c.push(ne.x,ne.y,ne.z),ne[x]=0,ne[m]=0,ne[p]=E>0?1:-1,h.push(ne.x,ne.y,ne.z),d.push(q/I),d.push(1-_e/_),U+=1}}for(let _e=0;_e<_;_e++)for(let ue=0;ue<I;ue++){let q=u+ue+D*_e,se=u+ue+D*(_e+1),oe=u+(ue+1)+D*(_e+1),ee=u+(ue+1)+D*_e;l.push(q,se,ee),l.push(se,oe,ee),ie+=6}o.addGroup(f,ie,S),f+=ie,u+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var dn=class i extends Jt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,x=[],m=n/2,p=0;y(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new St(d,3)),this.setAttribute("normal",new St(u,3)),this.setAttribute("uv",new St(f,2));function y(){let M=new P,T=new P,E=0,I=(t-e)/n;for(let _=0;_<=r;_++){let S=[],k=_/r,C=k*(t-e)+e;for(let L=0;L<=s;L++){let N=L/s,z=N*l+o,D=Math.sin(z),B=Math.cos(z);T.x=C*D,T.y=-k*n+m,T.z=C*B,d.push(T.x,T.y,T.z),M.set(D,I,B).normalize(),u.push(M.x,M.y,M.z),f.push(N,1-k),S.push(g++)}x.push(S)}for(let _=0;_<s;_++)for(let S=0;S<r;S++){let k=x[S][_],C=x[S+1][_],L=x[S+1][_+1],N=x[S][_+1];(e>0||S!==0)&&(h.push(k,C,N),E+=3),(t>0||S!==r-1)&&(h.push(C,L,N),E+=3)}c.addGroup(p,E,0),p+=E}function b(M){let T=g,E=new de,I=new P,_=0,S=M===!0?e:t,k=M===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,m*k,0),u.push(0,k,0),f.push(.5,.5),g++;let C=g;for(let L=0;L<=s;L++){let z=L/s*l+o,D=Math.cos(z),B=Math.sin(z);I.x=S*B,I.y=m*k,I.z=S*D,d.push(I.x,I.y,I.z),u.push(0,k,0),E.x=D*.5+.5,E.y=B*.5*k+.5,f.push(E.x,E.y),g++}for(let L=0;L<s;L++){let N=T+L,z=C+L;M===!0?h.push(z,z+1,N):h.push(z+1,z,N),_+=3}c.addGroup(p,_,M===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ve("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new de:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],a=[],o=new P,l=new lt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(je(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(je(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ys=class extends fn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new de){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},po=class extends Ys{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ih(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Xa=new P,yc=new ih,Mc=new ih,bc=new ih,mo=class extends fn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Xa.subVectors(s[0],s[1]).add(s[0]),c=Xa);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Xa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),yc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,x,m),Mc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,x,m),bc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(yc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Mc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),bc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(yc.calc(l),Mc.calc(l),bc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Wu(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function cm(i,e){let t=1-i;return t*t*e}function hm(i,e){return 2*(1-i)*i*e}function um(i,e){return i*i*e}function Mr(i,e,t,n){return cm(i,e)+hm(i,t)+um(i,n)}function dm(i,e){let t=1-i;return t*t*t*e}function fm(i,e){let t=1-i;return 3*t*t*i*e}function pm(i,e){return 3*(1-i)*i*i*e}function mm(i,e){return i*i*i*e}function br(i,e,t,n,s){return dm(i,e)+fm(i,t)+pm(i,n)+mm(i,s)}var Fr=class extends fn{constructor(e=new de,t=new de,n=new de,s=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new de){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(br(e,s.x,r.x,a.x,o.x),br(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},go=class extends fn{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(br(e,s.x,r.x,a.x,o.x),br(e,s.y,r.y,a.y,o.y),br(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Or=class extends fn{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xo=class extends fn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Br=class extends fn{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Mr(e,s.x,r.x,a.x),Mr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_o=class extends fn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Mr(e,s.x,r.x,a.x),Mr(e,s.y,r.y,a.y),Mr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zr=class extends fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Wu(o,l.x,c.x,h.x,d.x),Wu(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new de().fromArray(s))}return this}},Ic=Object.freeze({__proto__:null,ArcCurve:po,CatmullRomCurve3:mo,CubicBezierCurve:Fr,CubicBezierCurve3:go,EllipseCurve:Ys,LineCurve:Or,LineCurve3:xo,QuadraticBezierCurve:Br,QuadraticBezierCurve3:_o,SplineCurve:zr}),vo=class extends fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ic[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Ic[s.type]().fromJSON(s))}return this}},is=class extends vo{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Or(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Br(this.currentPoint.clone(),new de(e,t),new de(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Fr(this.currentPoint.clone(),new de(e,t),new de(n,s),new de(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new zr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Ys(e,t,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Zs=class extends is{constructor(e){super(e),this.uuid=cs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new is().fromJSON(s))}return this}};function gm(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Nd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Mm(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,d=l;for(let u=t;u<s;u+=t){let f=i[u],g=i[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return kr(r,a,t,o,l,c,0),a}function Nd(i,e,t,n,s){let r;if(s===Lm(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Xu(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Xu(a/n|0,i[a],i[a+1],r);return r&&Js(r,r.next)&&(Hr(r),r=r.next),r}function ss(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Js(t,t.next)||yt(t.prev,t,t.next)===0)){if(Hr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function kr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Em(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?_m(i,n,s,r):xm(i)){e.push(l.i,i.i,c.i),Hr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=vm(ss(i),e),kr(i,e,t,n,s,r,2)):a===2&&ym(i,e,t,n,s,r):kr(ss(i),e,t,n,s,r,1);break}}}function xm(i){let e=i.prev,t=i,n=i.next;if(yt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&_r(s,o,r,l,a,c,g.x,g.y)&&yt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function _m(i,e,t,n){let s=i.prev,r=i,a=i.next;if(yt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),x=Math.max(o,l,c),m=Math.max(h,d,u),p=Pc(f,g,e,t,n),y=Pc(x,m,e,t,n),b=i.prevZ,M=i.nextZ;for(;b&&b.z>=p&&M&&M.z<=y;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&_r(o,h,l,d,c,u,b.x,b.y)&&yt(b.prev,b,b.next)>=0||(b=b.prevZ,M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&_r(o,h,l,d,c,u,M.x,M.y)&&yt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&_r(o,h,l,d,c,u,b.x,b.y)&&yt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&_r(o,h,l,d,c,u,M.x,M.y)&&yt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function vm(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Js(n,s)&&Fd(n,t,t.next,s)&&Vr(n,s)&&Vr(s,n)&&(e.push(n.i,t.i,s.i),Hr(t),Hr(t.next),t=i=s),t=t.next}while(t!==i);return ss(t)}function ym(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Rm(a,o)){let l=Od(a,o);a=ss(a,a.next),l=ss(l,l.next),kr(a,e,t,n,s,r,0),kr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Mm(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Nd(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Cm(c))}s.sort(bm);for(let r=0;r<s.length;r++)t=Sm(s[r],t);return t}function bm(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Sm(i,e){let t=wm(i,e);if(!t)return e;let n=Od(t,i);return ss(n,n.next),ss(t,t.next)}function wm(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Js(i,t))return t;do{if(Js(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Ud(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);Vr(t,i)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&Tm(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function Tm(i,e){return yt(i.prev,i,e.prev)<0&&yt(e.next,i,i.next)<0}function Em(i,e,t,n){let s=i;do s.z===0&&(s.z=Pc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Am(s)}function Am(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Pc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Cm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ud(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function _r(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Ud(i,e,t,n,s,r,a,o)}function Rm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Im(i,e)&&(Vr(i,e)&&Vr(e,i)&&Pm(i,e)&&(yt(i.prev,i,e.prev)||yt(i,e.prev,e))||Js(i,e)&&yt(i.prev,i,i.next)>0&&yt(e.prev,e,e.next)>0)}function yt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Js(i,e){return i.x===e.x&&i.y===e.y}function Fd(i,e,t,n){let s=$a(yt(i,e,t)),r=$a(yt(i,e,n)),a=$a(yt(t,n,i)),o=$a(yt(t,n,e));return!!(s!==r&&a!==o||s===0&&qa(i,t,e)||r===0&&qa(i,n,e)||a===0&&qa(t,i,n)||o===0&&qa(t,e,n))}function qa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function $a(i){return i>0?1:i<0?-1:0}function Im(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Fd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Vr(i,e){return yt(i.prev,i,i.next)<0?yt(i,e,i.next)>=0&&yt(i,i.prev,e)>=0:yt(i,e,i.prev)<0||yt(i,i.next,e)<0}function Pm(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Od(i,e){let t=Lc(i.i,i.x,i.y),n=Lc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Xu(i,e,t,n){let s=Lc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Hr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Lc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Lm(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Dc=class{static triangulate(e,t,n=2){return gm(e,t,n)}},$i=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];qu(e),$u(n,e);let a=e.length;t.forEach(qu);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,$u(n,t[l]);let o=Dc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function qu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function $u(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Gr=class i extends Jt{constructor(e=new Zs([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new St(s,3)),this.setAttribute("uv",new St(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Dm,b,M=!1,T,E,I,_;if(p){b=p.getSpacedPoints(h),M=!0,u=!1;let Z=p.isCatmullRomCurve3?p.closed:!1;T=p.computeFrenetFrames(h,Z),E=new P,I=new P,_=new P}u||(m=0,f=0,g=0,x=0);let S=o.extractPoints(c),k=S.shape,C=S.holes;if(!$i.isClockWise(k)){k=k.reverse();for(let Z=0,ae=C.length;Z<ae;Z++){let te=C[Z];$i.isClockWise(te)&&(C[Z]=te.reverse())}}function N(Z){let te=10000000000000001e-36,me=Z[0];for(let R=1;R<=Z.length;R++){let ke=R%Z.length,Ee=Z[ke],He=Ee.x-me.x,ge=Ee.y-me.y,A=He*He+ge*ge,v=Math.max(Math.abs(Ee.x),Math.abs(Ee.y),Math.abs(me.x),Math.abs(me.y)),O=te*v*v;if(A<=O){Z.splice(ke,1),R--;continue}me=Ee}}N(k),C.forEach(N);let z=C.length,D=k;for(let Z=0;Z<z;Z++){let ae=C[Z];k=k.concat(ae)}function B(Z,ae,te){return ae||We("ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(ae,te)}let U=k.length;function ie(Z,ae,te){let me,R,ke,Ee=Z.x-ae.x,He=Z.y-ae.y,ge=te.x-Z.x,A=te.y-Z.y,v=Ee*Ee+He*He,O=Ee*A-He*ge;if(Math.abs(O)>Number.EPSILON){let Y=Math.sqrt(v),re=Math.sqrt(ge*ge+A*A),J=ae.x-He/Y,Ie=ae.y+Ee/Y,xe=te.x-A/re,Be=te.y+ge/re,Ge=((xe-J)*A-(Be-Ie)*ge)/(Ee*A-He*ge);me=J+Ee*Ge-Z.x,R=Ie+He*Ge-Z.y;let le=me*me+R*R;if(le<=2)return new de(me,R);ke=Math.sqrt(le/2)}else{let Y=!1;Ee>Number.EPSILON?ge>Number.EPSILON&&(Y=!0):Ee<-Number.EPSILON?ge<-Number.EPSILON&&(Y=!0):Math.sign(He)===Math.sign(A)&&(Y=!0),Y?(me=-He,R=Ee,ke=Math.sqrt(v)):(me=Ee,R=He,ke=Math.sqrt(v/2))}return new de(me/ke,R/ke)}let ne=[];for(let Z=0,ae=D.length,te=ae-1,me=Z+1;Z<ae;Z++,te++,me++)te===ae&&(te=0),me===ae&&(me=0),ne[Z]=ie(D[Z],D[te],D[me]);let _e=[],ue,q=ne.concat();for(let Z=0,ae=z;Z<ae;Z++){let te=C[Z];ue=[];for(let me=0,R=te.length,ke=R-1,Ee=me+1;me<R;me++,ke++,Ee++)ke===R&&(ke=0),Ee===R&&(Ee=0),ue[me]=ie(te[me],te[ke],te[Ee]);_e.push(ue),q=q.concat(ue)}let se;if(m===0)se=$i.triangulateShape(D,C);else{let Z=[],ae=[];for(let te=0;te<m;te++){let me=te/m,R=f*Math.cos(me*Math.PI/2),ke=g*Math.sin(me*Math.PI/2)+x;for(let Ee=0,He=D.length;Ee<He;Ee++){let ge=B(D[Ee],ne[Ee],ke);ve(ge.x,ge.y,-R),me===0&&Z.push(ge)}for(let Ee=0,He=z;Ee<He;Ee++){let ge=C[Ee];ue=_e[Ee];let A=[];for(let v=0,O=ge.length;v<O;v++){let Y=B(ge[v],ue[v],ke);ve(Y.x,Y.y,-R),me===0&&A.push(Y)}me===0&&ae.push(A)}}se=$i.triangulateShape(Z,ae)}let oe=se.length,ee=g+x;for(let Z=0;Z<U;Z++){let ae=u?B(k[Z],q[Z],ee):k[Z];M?(I.copy(T.normals[0]).multiplyScalar(ae.x),E.copy(T.binormals[0]).multiplyScalar(ae.y),_.copy(b[0]).add(I).add(E),ve(_.x,_.y,_.z)):ve(ae.x,ae.y,0)}for(let Z=1;Z<=h;Z++)for(let ae=0;ae<U;ae++){let te=u?B(k[ae],q[ae],ee):k[ae];M?(I.copy(T.normals[Z]).multiplyScalar(te.x),E.copy(T.binormals[Z]).multiplyScalar(te.y),_.copy(b[Z]).add(I).add(E),ve(_.x,_.y,_.z)):ve(te.x,te.y,d/h*Z)}for(let Z=m-1;Z>=0;Z--){let ae=Z/m,te=f*Math.cos(ae*Math.PI/2),me=g*Math.sin(ae*Math.PI/2)+x;for(let R=0,ke=D.length;R<ke;R++){let Ee=B(D[R],ne[R],me);ve(Ee.x,Ee.y,d+te)}for(let R=0,ke=C.length;R<ke;R++){let Ee=C[R];ue=_e[R];for(let He=0,ge=Ee.length;He<ge;He++){let A=B(Ee[He],ue[He],me);M?ve(A.x,A.y+b[h-1].y,b[h-1].x+te):ve(A.x,A.y,d+te)}}}H(),K();function H(){let Z=s.length/3;if(u){let ae=0,te=U*ae;for(let me=0;me<oe;me++){let R=se[me];he(R[2]+te,R[1]+te,R[0]+te)}ae=h+m*2,te=U*ae;for(let me=0;me<oe;me++){let R=se[me];he(R[0]+te,R[1]+te,R[2]+te)}}else{for(let ae=0;ae<oe;ae++){let te=se[ae];he(te[2],te[1],te[0])}for(let ae=0;ae<oe;ae++){let te=se[ae];he(te[0]+U*h,te[1]+U*h,te[2]+U*h)}}n.addGroup(Z,s.length/3-Z,0)}function K(){let Z=s.length/3,ae=0;Q(D,ae),ae+=D.length;for(let te=0,me=C.length;te<me;te++){let R=C[te];Q(R,ae),ae+=R.length}n.addGroup(Z,s.length/3-Z,1)}function Q(Z,ae){let te=Z.length;for(;--te>=0;){let me=te,R=te-1;R<0&&(R=Z.length-1);for(let ke=0,Ee=h+m*2;ke<Ee;ke++){let He=U*ke,ge=U*(ke+1),A=ae+me+He,v=ae+R+He,O=ae+R+ge,Y=ae+me+ge;Me(A,v,O,Y)}}}function ve(Z,ae,te){l.push(Z),l.push(ae),l.push(te)}function he(Z,ae,te){Fe(Z),Fe(ae),Fe(te);let me=s.length/3,R=y.generateTopUV(n,s,me-3,me-2,me-1);Te(R[0]),Te(R[1]),Te(R[2])}function Me(Z,ae,te,me){Fe(Z),Fe(ae),Fe(me),Fe(ae),Fe(te),Fe(me);let R=s.length/3,ke=y.generateSideWallUV(n,s,R-6,R-3,R-2,R-1);Te(ke[0]),Te(ke[1]),Te(ke[3]),Te(ke[1]),Te(ke[2]),Te(ke[3])}function Fe(Z){s.push(l[Z*3+0]),s.push(l[Z*3+1]),s.push(l[Z*3+2])}function Te(Z){r.push(Z.x),r.push(Z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Nm(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ic[s.type]().fromJSON(s)),new i(n,e.options)}},Dm={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new de(r,a),new de(o,l),new de(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new de(a,1-l),new de(c,1-d),new de(u,1-g),new de(x,1-p)]:[new de(o,1-l),new de(h,1-d),new de(f,1-g),new de(m,1-p)]}};function Nm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ei=class i extends Jt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*u-a;for(let b=0;b<c;b++){let M=b*d-r;g.push(M,-y,0),x.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let b=y+c*p,M=y+c*(p+1),T=y+1+c*(p+1),E=y+1+c*p;f.push(b,M,E),f.push(M,T,E)}this.setIndex(f),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(x,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Wr=class i extends Jt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new P,u=new P,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],b=p/n,M=0;p===0&&a===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let T=0;T<=t;T++){let E=T/t;d.x=-e*Math.cos(s+E*r)*Math.sin(a+b*o),d.y=e*Math.cos(a+b*o),d.z=e*Math.sin(s+E*r)*Math.sin(a+b*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(E+M,1-b),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let b=h[p][y+1],M=h[p][y],T=h[p+1][y],E=h[p+1][y+1];(p!==0||a>0)&&f.push(b,M,E),(p!==n-1||l<Math.PI)&&f.push(M,T,E)}this.setIndex(f),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(x,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Xr=class extends Un{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new qe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function us(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function jt(i){let e={};for(let t=0;t<i.length;t++){let n=us(i[t]);for(let s in n)e[s]=n[s]}return e}function Um(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var Bd={clone:us,merge:jt},Fm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Om=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pn=class extends Un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fm,this.fragmentShader=Om,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=Um(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},yo=class extends pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},kt=class extends Un{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tl,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var qr=class extends Un{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tl,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Fo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Mo=class extends Un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bo=class extends Un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var $r=class extends es{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Ya(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}var Ai=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},So=class extends Ai{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tc,endingEnd:Tc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ec:r=e,o=2*t-n;break;case Ac:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ec:a=e,l=2*n-t;break;case Ac:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,y=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,b=(-1-f)*m+(1.5+f)*x+.5*g,M=f*m-f*x;for(let T=0;T!==o;++T)r[T]=p*a[h+T]+y*a[c+T]+b*a[l+T]+M*a[d+T];return r}},wo=class extends Ai{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},To=class extends Ai{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Eo=class extends Ai{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.settings||this.DefaultSettings_,d=h.inTangents,u=h.outTangents;if(!d||!u){let x=(n-t)/(s-t),m=1-x;for(let p=0;p!==o;++p)r[p]=a[c+p]*m+a[l+p]*x;return r}let f=o*2,g=e-1;for(let x=0;x!==o;++x){let m=a[c+x],p=a[l+x],y=g*f+x*2,b=u[y],M=u[y+1],T=e*f+x*2,E=d[T],I=d[T+1],_=(n-t)/(s-t),S,k,C,L,N;for(let z=0;z<8;z++){S=_*_,k=S*_,C=1-_,L=C*C,N=L*C;let B=N*t+3*L*_*b+3*C*S*E+k*s-n;if(Math.abs(B)<1e-10)break;let U=3*L*(b-t)+6*C*_*(E-b)+3*S*(s-E);if(Math.abs(U)<1e-10)break;_=_-B/U,_=Math.max(0,Math.min(1,_))}r[x]=N*m+3*L*_*M+3*C*S*I+k*p}return r}},mn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ya(t,this.TimeBufferType),this.values=Ya(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ya(e.times,Array),values:Ya(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new To(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new So(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Eo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Ji:t=this.InterpolantFactoryMethodDiscrete;break;case Vs:t=this.InterpolantFactoryMethodLinear;break;case ja:t=this.InterpolantFactoryMethodSmooth;break;case wc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ve("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ji;case this.InterpolantFactoryMethodLinear:return Vs;case this.InterpolantFactoryMethodSmooth:return ja;case this.InterpolantFactoryMethodBezier:return wc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){We("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){We("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Ap(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){We("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ja,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let x=t[d+g];if(x!==t[u+g]||x!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};mn.prototype.ValueTypeName="";mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=Vs;var Ci=class extends mn{constructor(e,t,n){super(e,t,n)}};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Ji;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Ao=class extends mn{constructor(e,t,n,s){super(e,t,n,s)}};Ao.prototype.ValueTypeName="color";var Co=class extends mn{constructor(e,t,n,s){super(e,t,n,s)}};Co.prototype.ValueTypeName="number";var Ro=class extends Ai{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)en.slerpFlat(r,0,a,c-o,a,c,l);return r}},Yr=class extends mn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ro(this.times,this.values,this.getValueSize(),e)}};Yr.prototype.ValueTypeName="quaternion";Yr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends mn{constructor(e,t,n){super(e,t,n)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Ji;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Io=class extends mn{constructor(e,t,n,s){super(e,t,n,s)}};Io.prototype.ValueTypeName="vector";var Po=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},zd=new Po,Lo=class{constructor(e){this.manager=e!==void 0?e:zd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Lo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zr=class extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Sc=new lt,Yu=new P,Zu=new P,Do=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $s,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Yu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yu),Zu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zu),t.updateMatrixWorld(),Sc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Hs||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Za=new P,Ja=new en,kn=new P,Jr=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Za,Ja,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Za,Ja,kn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Za,Ja,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Za,Ja,kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},yi=new P,Ju=new de,ju=new de,Bt=class extends Jr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ws*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,t){return this.getViewBounds(e,Ju,ju),t.subVectors(ju,Ju)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(vr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Nc=class extends Do{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0}},jr=class extends Zr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Nc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},js=class extends Jr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Uc=class extends Do{constructor(){super(new js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Kr=class extends Zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Uc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Fs=-90,Os=1,No=class extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bt(Fs,Os,e,t);s.layers=this.layers,this.add(s);let r=new Bt(Fs,Os,e,t);r.layers=this.layers,this.add(r);let a=new Bt(Fs,Os,e,t);a.layers=this.layers,this.add(a);let o=new Bt(Fs,Os,e,t);o.layers=this.layers,this.add(o);let l=new Bt(Fs,Os,e,t);l.layers=this.layers,this.add(l);let c=new Bt(Fs,Os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Uo=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var rh="\\[\\]\\.:\\/",Bm=new RegExp("["+rh+"]","g"),ah="[^"+rh+"]",zm="[^"+rh.replace("\\.","")+"]",km=/((?:WC+[\/:])*)/.source.replace("WC",ah),Vm=/(WCOD+)?/.source.replace("WCOD",zm),Hm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ah),Gm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ah),Wm=new RegExp("^"+km+Vm+Hm+Gm+"$"),Xm=["material","materials","bones","map"],Fc=class{constructor(e,t,n){let s=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},at=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bm,"")}static parseTrackName(e){let t=Wm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Xm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;We("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};at.Composite=Fc;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xM=new Float32Array(1);var Ks=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Qr=class extends Hn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ve("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function oh(i,e,t,n){let s=qm(n);switch(t){case Kc:return i*e;case Go:return i*e/s.components*s.byteLength;case Wo:return i*e/s.components*s.byteLength;case ls:return i*e*2/s.components*s.byteLength;case Xo:return i*e*2/s.components*s.byteLength;case Qc:return i*e*3/s.components*s.byteLength;case rn:return i*e*4/s.components*s.byteLength;case qo:return i*e*4/s.components*s.byteLength;case na:case ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case sa:case ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yo:case Jo:return Math.max(i,16)*Math.max(e,8)/4;case $o:case Zo:return Math.max(i,8)*Math.max(e,8)/2;case jo:case Ko:case el:case tl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qo:case nl:case il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case al:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ol:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ll:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case cl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case hl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ul:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case dl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case fl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case pl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ml:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case gl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case xl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _l:case vl:case yl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ml:case bl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Sl:case wl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qm(i){switch(i){case sn:case Yc:return{byteLength:1,components:1};case tr:case Zc:case qn:return{byteLength:2,components:1};case Vo:case Ho:return{byteLength:2,components:4};case On:case ko:case wn:return{byteLength:4,components:1};case Jc:case jc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");function cf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function $m(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ym=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zm=`#ifdef USE_ALPHAHASH
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
#endif`,Jm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Km=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eg=`#ifdef USE_AOMAP
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
#endif`,tg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ng=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ig=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ag=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,og=`#ifdef USE_IRIDESCENCE
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
#endif`,lg=`#ifdef USE_BUMPMAP
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
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,xg=`#define PI 3.141592653589793
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
} // validated`,_g=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vg=`vec3 transformedNormal = objectNormal;
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
#endif`,yg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Eg=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ag=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cg=`#ifdef USE_ENVMAP
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
#endif`,Rg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ig=`#ifdef USE_ENVMAP
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
#endif`,Pg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ng=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ug=`#ifdef USE_GRADIENTMAP
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
}`,Fg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Og=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zg=`uniform bool receiveShadow;
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
#endif`,kg=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,Vg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,qg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$g=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,Yg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,Zg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,e0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,t0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,n0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,i0=`#if defined( USE_POINTS_UV )
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
#endif`,s0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,a0=`#ifdef USE_INSTANCING_MORPH
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
#endif`,l0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c0=`#ifdef USE_MORPHTARGETS
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
#endif`,h0=`#ifdef USE_MORPHTARGETS
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
vec3 nonPerturbedNormal = normal;`,d0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,p0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,g0=`#ifdef USE_NORMALMAP
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
#endif`,x0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_0=`#ifdef USE_CLEARCOAT_NORMALMAP
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
#endif`,y0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,M0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,S0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L0=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,D0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N0=`#ifdef USE_SKINNING
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
#endif`,U0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F0=`#ifdef USE_SKINNING
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
#endif`,O0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,V0=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y0=`uniform sampler2D t2D;
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
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q0=`#include <common>
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
}`,ex=`#if DEPTH_PACKING == 3200
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
}`,tx=`#define DISTANCE
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
}`,nx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sx=`uniform sampler2D tEquirect;
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
}`,ax=`uniform vec3 diffuse;
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
}`,lx=`uniform vec3 diffuse;
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
}`,cx=`#define LAMBERT
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
}`,hx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,dx=`#define MATCAP
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
}`,px=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mx=`#define PHONG
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
}`,gx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,xx=`#define STANDARD
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
}`,_x=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,yx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Mx=`uniform float size;
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
}`,bx=`uniform vec3 diffuse;
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
}`,wx=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
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
}`,Ex=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Ym,alphahash_pars_fragment:Zm,alphamap_fragment:Jm,alphamap_pars_fragment:jm,alphatest_fragment:Km,alphatest_pars_fragment:Qm,aomap_fragment:eg,aomap_pars_fragment:tg,batching_pars_vertex:ng,batching_vertex:ig,begin_vertex:sg,beginnormal_vertex:rg,bsdfs:ag,iridescence_fragment:og,bumpmap_pars_fragment:lg,clipping_planes_fragment:cg,clipping_planes_pars_fragment:hg,clipping_planes_pars_vertex:ug,clipping_planes_vertex:dg,color_fragment:fg,color_pars_fragment:pg,color_pars_vertex:mg,color_vertex:gg,common:xg,cube_uv_reflection_fragment:_g,defaultnormal_vertex:vg,displacementmap_pars_vertex:yg,displacementmap_vertex:Mg,emissivemap_fragment:bg,emissivemap_pars_fragment:Sg,colorspace_fragment:wg,colorspace_pars_fragment:Tg,envmap_fragment:Eg,envmap_common_pars_fragment:Ag,envmap_pars_fragment:Cg,envmap_pars_vertex:Rg,envmap_physical_pars_fragment:kg,envmap_vertex:Ig,fog_vertex:Pg,fog_pars_vertex:Lg,fog_fragment:Dg,fog_pars_fragment:Ng,gradientmap_pars_fragment:Ug,lightmap_pars_fragment:Fg,lights_lambert_fragment:Og,lights_lambert_pars_fragment:Bg,lights_pars_begin:zg,lights_toon_fragment:Vg,lights_toon_pars_fragment:Hg,lights_phong_fragment:Gg,lights_phong_pars_fragment:Wg,lights_physical_fragment:Xg,lights_physical_pars_fragment:qg,lights_fragment_begin:$g,lights_fragment_maps:Yg,lights_fragment_end:Zg,logdepthbuf_fragment:Jg,logdepthbuf_pars_fragment:jg,logdepthbuf_pars_vertex:Kg,logdepthbuf_vertex:Qg,map_fragment:e0,map_pars_fragment:t0,map_particle_fragment:n0,map_particle_pars_fragment:i0,metalnessmap_fragment:s0,metalnessmap_pars_fragment:r0,morphinstance_vertex:a0,morphcolor_vertex:o0,morphnormal_vertex:l0,morphtarget_pars_vertex:c0,morphtarget_vertex:h0,normal_fragment_begin:u0,normal_fragment_maps:d0,normal_pars_fragment:f0,normal_pars_vertex:p0,normal_vertex:m0,normalmap_pars_fragment:g0,clearcoat_normal_fragment_begin:x0,clearcoat_normal_fragment_maps:_0,clearcoat_pars_fragment:v0,iridescence_pars_fragment:y0,opaque_fragment:M0,packing:b0,premultiplied_alpha_fragment:S0,project_vertex:w0,dithering_fragment:T0,dithering_pars_fragment:E0,roughnessmap_fragment:A0,roughnessmap_pars_fragment:C0,shadowmap_pars_fragment:R0,shadowmap_pars_vertex:I0,shadowmap_vertex:P0,shadowmask_pars_fragment:L0,skinbase_vertex:D0,skinning_pars_vertex:N0,skinning_vertex:U0,skinnormal_vertex:F0,specularmap_fragment:O0,specularmap_pars_fragment:B0,tonemapping_fragment:z0,tonemapping_pars_fragment:k0,transmission_fragment:V0,transmission_pars_fragment:H0,uv_pars_fragment:G0,uv_pars_vertex:W0,uv_vertex:X0,worldpos_vertex:q0,background_vert:$0,background_frag:Y0,backgroundCube_vert:Z0,backgroundCube_frag:J0,cube_vert:j0,cube_frag:K0,depth_vert:Q0,depth_frag:ex,distance_vert:tx,distance_frag:nx,equirect_vert:ix,equirect_frag:sx,linedashed_vert:rx,linedashed_frag:ax,meshbasic_vert:ox,meshbasic_frag:lx,meshlambert_vert:cx,meshlambert_frag:hx,meshmatcap_vert:ux,meshmatcap_frag:dx,meshnormal_vert:fx,meshnormal_frag:px,meshphong_vert:mx,meshphong_frag:gx,meshphysical_vert:xx,meshphysical_frag:_x,meshtoon_vert:vx,meshtoon_frag:yx,points_vert:Mx,points_frag:bx,shadow_vert:Sx,shadow_frag:wx,sprite_vert:Tx,sprite_frag:Ex},be={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Yn={basic:{uniforms:jt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:jt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:jt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:jt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:jt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:jt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:jt([be.points,be.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:jt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:jt([be.common,be.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:jt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:jt([be.sprite,be.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:jt([be.common,be.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:jt([be.lights,be.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Yn.physical={uniforms:jt([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var Cl={r:0,b:0,g:0},ds=new Sn,Ax=new lt;function Cx(i,e,t,n,s,r){let a=new qe(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let M=y.backgroundBlurriness>0;b=e.get(b,M)}return b}function g(y){let b=!1,M=f(y);M===null?m(a,o):M&&M.isColor&&(m(M,1),b=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,b){let M=f(b);M&&(M.isCubeTexture||M.mapping===ta)?(c===void 0&&(c=new ht(new Tt(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:us(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),ds.copy(b.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(ds)),c.material.toneMapped=nt.getTransfer(M.colorSpace)!==ot,(h!==M||d!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ht(new Ei(2,2),new pn({name:"BackgroundMaterial",uniforms:us(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=nt.getTransfer(M.colorSpace)!==ot,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,b){y.getRGB(Cl,sh(i)),t.buffers.color.setClear(Cl.r,Cl.g,Cl.b,b,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,b=1){a.set(y),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:g,addToRenderList:x,dispose:p}}function Rx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(C,L,N,z,D){let B=!1,U=d(C,z,N,L);r!==U&&(r=U,c(r.object)),B=f(C,z,N,D),B&&g(C,z,N,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,M(C,L,N,z),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function d(C,L,N,z){let D=z.wireframe===!0,B=n[L.id];B===void 0&&(B={},n[L.id]=B);let U=C.isInstancedMesh===!0?C.id:0,ie=B[U];ie===void 0&&(ie={},B[U]=ie);let ne=ie[N.id];ne===void 0&&(ne={},ie[N.id]=ne);let _e=ne[D];return _e===void 0&&(_e=u(l()),ne[D]=_e),_e}function u(C){let L=[],N=[],z=[];for(let D=0;D<t;D++)L[D]=0,N[D]=0,z[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:z,object:C,attributes:{},index:null}}function f(C,L,N,z){let D=r.attributes,B=L.attributes,U=0,ie=N.getAttributes();for(let ne in ie)if(ie[ne].location>=0){let ue=D[ne],q=B[ne];if(q===void 0&&(ne==="instanceMatrix"&&C.instanceMatrix&&(q=C.instanceMatrix),ne==="instanceColor"&&C.instanceColor&&(q=C.instanceColor)),ue===void 0||ue.attribute!==q||q&&ue.data!==q.data)return!0;U++}return r.attributesNum!==U||r.index!==z}function g(C,L,N,z){let D={},B=L.attributes,U=0,ie=N.getAttributes();for(let ne in ie)if(ie[ne].location>=0){let ue=B[ne];ue===void 0&&(ne==="instanceMatrix"&&C.instanceMatrix&&(ue=C.instanceMatrix),ne==="instanceColor"&&C.instanceColor&&(ue=C.instanceColor));let q={};q.attribute=ue,ue&&ue.data&&(q.data=ue.data),D[ne]=q,U++}r.attributes=D,r.attributesNum=U,r.index=z}function x(){let C=r.newAttributes;for(let L=0,N=C.length;L<N;L++)C[L]=0}function m(C){p(C,0)}function p(C,L){let N=r.newAttributes,z=r.enabledAttributes,D=r.attributeDivisors;N[C]=1,z[C]===0&&(i.enableVertexAttribArray(C),z[C]=1),D[C]!==L&&(i.vertexAttribDivisor(C,L),D[C]=L)}function y(){let C=r.newAttributes,L=r.enabledAttributes;for(let N=0,z=L.length;N<z;N++)L[N]!==C[N]&&(i.disableVertexAttribArray(N),L[N]=0)}function b(C,L,N,z,D,B,U){U===!0?i.vertexAttribIPointer(C,L,N,D,B):i.vertexAttribPointer(C,L,N,z,D,B)}function M(C,L,N,z){x();let D=z.attributes,B=N.getAttributes(),U=L.defaultAttributeValues;for(let ie in B){let ne=B[ie];if(ne.location>=0){let _e=D[ie];if(_e===void 0&&(ie==="instanceMatrix"&&C.instanceMatrix&&(_e=C.instanceMatrix),ie==="instanceColor"&&C.instanceColor&&(_e=C.instanceColor)),_e!==void 0){let ue=_e.normalized,q=_e.itemSize,se=e.get(_e);if(se===void 0)continue;let oe=se.buffer,ee=se.type,H=se.bytesPerElement,K=ee===i.INT||ee===i.UNSIGNED_INT||_e.gpuType===ko;if(_e.isInterleavedBufferAttribute){let Q=_e.data,ve=Q.stride,he=_e.offset;if(Q.isInstancedInterleavedBuffer){for(let Me=0;Me<ne.locationSize;Me++)p(ne.location+Me,Q.meshPerAttribute);C.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Me=0;Me<ne.locationSize;Me++)m(ne.location+Me);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let Me=0;Me<ne.locationSize;Me++)b(ne.location+Me,q/ne.locationSize,ee,ue,ve*H,(he+q/ne.locationSize*Me)*H,K)}else{if(_e.isInstancedBufferAttribute){for(let Q=0;Q<ne.locationSize;Q++)p(ne.location+Q,_e.meshPerAttribute);C.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Q=0;Q<ne.locationSize;Q++)m(ne.location+Q);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let Q=0;Q<ne.locationSize;Q++)b(ne.location+Q,q/ne.locationSize,ee,ue,q*H,q/ne.locationSize*Q*H,K)}}else if(U!==void 0){let ue=U[ie];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(ne.location,ue);break;case 3:i.vertexAttrib3fv(ne.location,ue);break;case 4:i.vertexAttrib4fv(ne.location,ue);break;default:i.vertexAttrib1fv(ne.location,ue)}}}}y()}function T(){S();for(let C in n){let L=n[C];for(let N in L){let z=L[N];for(let D in z){let B=z[D];for(let U in B)h(B[U].object),delete B[U];delete z[D]}}delete n[C]}}function E(C){if(n[C.id]===void 0)return;let L=n[C.id];for(let N in L){let z=L[N];for(let D in z){let B=z[D];for(let U in B)h(B[U].object),delete B[U];delete z[D]}}delete n[C.id]}function I(C){for(let L in n){let N=n[L];for(let z in N){let D=N[z];if(D[C.id]===void 0)continue;let B=D[C.id];for(let U in B)h(B[U].object),delete B[U];delete D[C.id]}}}function _(C){for(let L in n){let N=n[L],z=C.isInstancedMesh===!0?C.id:0,D=N[z];if(D!==void 0){for(let B in D){let U=D[B];for(let ie in U)h(U[ie].object),delete U[ie];delete D[B]}delete N[z],Object.keys(N).length===0&&delete n[L]}}}function S(){k(),a=!0,r!==s&&(r=s,c(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:S,resetDefaultState:k,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Ix(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,n,1)}function l(c,h,d,u){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*u[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Px(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==rn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let _=I===qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==sn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==wn&&!_)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ve("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:M,maxSamples:T,samples:E}}function Lx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Mn,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,b=y*4,M=p.clippingState||null;l.value=M,M=h(g,u,b,f);for(let T=0;T!==b;++T)M[T]=t[T];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,M=f;b!==x;++b,M+=4)a.copy(d[b]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Ni=4,kd=[.125,.215,.35,.446,.526,.582],ps=20,Dx=256,aa=new js,Vd=new qe,lh=null,ch=0,hh=0,uh=!1,Nx=new P,rr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Nx}=r;lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lh,ch,hh),this._renderer.xr.enabled=uh,e.scissorTest=!1,ir(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Li||e.mapping===as?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:qn,format:rn,colorSpace:ji,depthBuffer:!1},s=Hd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hd(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ux(r)),this._blurMaterial=Ox(r,e,t),this._ggxMaterial=Fx(r,e,t)}return s}_compileMaterial(e){let t=new ht(new Jt,e);this._renderer.compile(t,aa)}_sceneToCubeUV(e,t,n,s,r){let l=new Bt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Vd),d.toneMapping=Fn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ht(new Tt,new Qi({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(Vd),p=!0);for(let b=0;b<6;b++){let M=b%3;M===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):M===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let T=this._cubeSize;ir(s,M*T,b>2?T:0,T,T),d.setRenderTarget(s),p&&d.render(x,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Li||e.mapping===as;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ir(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,aa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=0+c*1.25,f=d*u,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-Ni?n-g+Ni:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,ir(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(o,aa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,ir(e,m,p,3*x,2*x),s.setRenderTarget(e),s.render(o,aa)}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&We("blur direction must be either latitudinal or longitudinal!");let h=3,d=this._lodMeshes[s];d.material=c;let u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ps-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ps;m>ps&&Ve(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ps}`);let p=[],y=0;for(let I=0;I<ps;++I){let _=I/x,S=Math.exp(-_*_/2);p.push(S),I===0?y+=S:I<m&&(y+=2*S)}for(let I=0;I<p.length;I++)p[I]=p[I]/y;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-n;let M=this._sizeLods[s],T=3*M*(s>b-Ni?s-b+Ni:0),E=4*(this._cubeSize-M);ir(t,T,E,3*M,2*M),l.setRenderTarget(t),l.render(d,aa)}};function Ux(i){let e=[],t=[],n=[],s=i,r=i-Ni+1+kd.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ni?l=kd[a-i+Ni-1]:a===0&&(l=0),t.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*f),b=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let E=0;E<f;E++){let I=E%3*2/3-1,_=E>2?0:-1,S=[I,_,0,I+2/3,_,0,I+2/3,_+1,0,I,_,0,I+2/3,_+1,0,I,_+1,0];y.set(S,x*g*E),b.set(u,m*g*E);let k=[E,E,E,E,E,E];M.set(k,p*g*E)}let T=new Jt;T.setAttribute("position",new xt(y,x)),T.setAttribute("uv",new xt(b,m)),T.setAttribute("faceIndex",new xt(M,p)),n.push(new ht(T,null)),s>Ni&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Hd(i,e,t){let n=new un(i,e,t);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ir(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Fx(i,e,t){return new pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Dx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ll(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Ox(i,e,t){let n=new Float32Array(ps),s=new P(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ll(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Gd(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ll(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Wd(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Ll(){return`

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
	`}var Il=class extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Nr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Tt(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:Wn});r.uniforms.tEquirect.value=t;let a=new ht(s,r),o=t.minFilter;return t.minFilter===Xn&&(t.minFilter=It),new No(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Bx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Oo||f===Bo)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new Il(g.height);return x.fromEquirectangularTexture(i,u),e.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===Oo||f===Bo,x=f===Li||f===as;if(g||x){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new rr(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let y=u.image;return g&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new rr(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Oo?u.mapping=Li:f===Bo&&(u.mapping=as),u}function l(u){let f=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function zx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Tr("WebGLRenderer: "+n+" extension not supported."),s}}}function kx(i,e,t,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,x=0;if(g===void 0)return;if(f!==null){let y=f.array;x=f.version;for(let b=0,M=y.length;b<M;b+=3){let T=y[b+0],E=y[b+1],I=y[b+2];u.push(T,E,E,I,I,T)}}else{let y=g.array;x=g.version;for(let b=0,M=y.length/3-1;b<M;b+=3){let T=b+0,E=b+1,I=b+2;u.push(T,E,E,I,I,T)}}let m=new(g.count>=65535?Rr:Cr)(u,1);m.version=x;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Vx(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),t.update(f,n,1)}function c(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,u*a,g),t.update(f,n,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function d(u,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*x[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Hx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:We("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Gx(i,e,t){let n=new WeakMap,s=new Mt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let S=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let M=o.attributes.position.count*b,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let E=new Float32Array(M*T*4*d),I=new Er(E,M,T,d);I.type=wn,I.needsUpdate=!0;let _=b*4;for(let k=0;k<d;k++){let C=m[k],L=p[k],N=y[k],z=M*T*4*k;for(let D=0;D<C.count;D++){let B=D*_;f===!0&&(s.fromBufferAttribute(C,D),E[z+B+0]=s.x,E[z+B+1]=s.y,E[z+B+2]=s.z,E[z+B+3]=0),g===!0&&(s.fromBufferAttribute(L,D),E[z+B+4]=s.x,E[z+B+5]=s.y,E[z+B+6]=s.z,E[z+B+7]=0),x===!0&&(s.fromBufferAttribute(N,D),E[z+B+8]=s.x,E[z+B+9]=s.y,E[z+B+10]=s.z,E[z+B+11]=N.itemSize===4?s.w:1)}}u={count:d,texture:I,size:new de(M,T)},n.set(o,u),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Wx(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Xx={[Vc]:"LINEAR_TONE_MAPPING",[Hc]:"REINHARD_TONE_MAPPING",[Gc]:"CINEON_TONE_MAPPING",[Wc]:"ACES_FILMIC_TONE_MAPPING",[qc]:"AGX_TONE_MAPPING",[ea]:"NEUTRAL_TONE_MAPPING",[Xc]:"CUSTOM_TONE_MAPPING"};function qx(i,e,t,n,s){let r=new un(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),a=new un(e,t,{type:qn,depthBuffer:!1,stencilBuffer:!1}),o=new Jt;o.setAttribute("position",new St([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new St([0,2,0,0,2,0],2));let l=new yo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new ht(o,l),h=new js(-1,1,1,-1,0,1),d=null,u=null,f=!1,g,x=null,m=[],p=!1;this.setSize=function(y,b){r.setSize(y,b),a.setSize(y,b);for(let M=0;M<m.length;M++){let T=m[M];T.setSize&&T.setSize(y,b)}},this.setEffects=function(y){m=y,p=m.length>0&&m[0].isRenderPass===!0;let b=r.width,M=r.height;for(let T=0;T<m.length;T++){let E=m[T];E.setSize&&E.setSize(b,M)}},this.begin=function(y,b){if(f||y.toneMapping===Fn&&m.length===0)return!1;if(x=b,b!==null){let M=b.width,T=b.height;(r.width!==M||r.height!==T)&&this.setSize(M,T)}return p===!1&&y.setRenderTarget(r),g=y.toneMapping,y.toneMapping=Fn,!0},this.hasRenderPass=function(){return p},this.end=function(y,b){y.toneMapping=g,f=!0;let M=r,T=a;for(let E=0;E<m.length;E++){let I=m[E];if(I.enabled!==!1&&(I.render(y,T,M,b),I.needsSwap!==!1)){let _=M;M=T,T=_}}if(d!==y.outputColorSpace||u!==y.toneMapping){d=y.outputColorSpace,u=y.toneMapping,l.defines={},nt.getTransfer(d)===ot&&(l.defines.SRGB_TRANSFER="");let E=Xx[u];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(x),y.render(c,h),x=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}var hf=new Zt,ph=new Ti(1,1),uf=new Er,df=new lo,ff=new Nr,Xd=[],qd=[],$d=new Float32Array(16),Yd=new Float32Array(9),Zd=new Float32Array(4);function ar(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Xd[s];if(r===void 0&&(r=new Float32Array(s),Xd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Dl(i,e){let t=qd[e];t===void 0&&(t=new Int32Array(e),qd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function $x(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Yx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function Zx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function Jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function jx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Zd.set(n),i.uniformMatrix2fv(this.addr,!1,Zd),Lt(t,n)}}function Kx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Yd.set(n),i.uniformMatrix3fv(this.addr,!1,Yd),Lt(t,n)}}function Qx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;$d.set(n),i.uniformMatrix4fv(this.addr,!1,$d),Lt(t,n)}}function e_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function t_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function n_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function i_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function s_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function r_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function a_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function o_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function l_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ph.compareFunction=t.isReversedDepthBuffer()?Al:El,r=ph):r=hf,t.setTexture2D(e||r,s)}function c_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||df,s)}function h_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ff,s)}function u_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||uf,s)}function d_(i){switch(i){case 5126:return $x;case 35664:return Yx;case 35665:return Zx;case 35666:return Jx;case 35674:return jx;case 35675:return Kx;case 35676:return Qx;case 5124:case 35670:return e_;case 35667:case 35671:return t_;case 35668:case 35672:return n_;case 35669:case 35673:return i_;case 5125:return s_;case 36294:return r_;case 36295:return a_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return l_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return h_;case 36289:case 36303:case 36311:case 36292:return u_}}function f_(i,e){i.uniform1fv(this.addr,e)}function p_(i,e){let t=ar(e,this.size,2);i.uniform2fv(this.addr,t)}function m_(i,e){let t=ar(e,this.size,3);i.uniform3fv(this.addr,t)}function g_(i,e){let t=ar(e,this.size,4);i.uniform4fv(this.addr,t)}function x_(i,e){let t=ar(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function __(i,e){let t=ar(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function v_(i,e){let t=ar(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function y_(i,e){i.uniform1iv(this.addr,e)}function M_(i,e){i.uniform2iv(this.addr,e)}function b_(i,e){i.uniform3iv(this.addr,e)}function S_(i,e){i.uniform4iv(this.addr,e)}function w_(i,e){i.uniform1uiv(this.addr,e)}function T_(i,e){i.uniform2uiv(this.addr,e)}function E_(i,e){i.uniform3uiv(this.addr,e)}function A_(i,e){i.uniform4uiv(this.addr,e)}function C_(i,e,t){let n=this.cache,s=e.length,r=Dl(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ph:a=hf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function R_(i,e,t){let n=this.cache,s=e.length,r=Dl(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||df,r[a])}function I_(i,e,t){let n=this.cache,s=e.length,r=Dl(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||ff,r[a])}function P_(i,e,t){let n=this.cache,s=e.length,r=Dl(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||uf,r[a])}function L_(i){switch(i){case 5126:return f_;case 35664:return p_;case 35665:return m_;case 35666:return g_;case 35674:return x_;case 35675:return __;case 35676:return v_;case 5124:case 35670:return y_;case 35667:case 35671:return M_;case 35668:case 35672:return b_;case 35669:case 35673:return S_;case 5125:return w_;case 36294:return T_;case 36295:return E_;case 36296:return A_;case 35678:case 36198:case 36298:case 36306:case 35682:return C_;case 35679:case 36299:case 36307:return R_;case 35680:case 36300:case 36308:case 36293:return I_;case 36289:case 36303:case 36311:case 36292:return P_}}var mh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=d_(t.type)}},gh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=L_(t.type)}},xh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},dh=/(\w+)(\])?(\[|\.)?/g;function Jd(i,e){i.seq.push(e),i.map[e.id]=e}function D_(i,e,t){let n=i.name,s=n.length;for(dh.lastIndex=0;;){let r=dh.exec(n),a=dh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Jd(t,c===void 0?new mh(o,i,e):new gh(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new xh(o),Jd(t,d)),t=d}}}var sr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);D_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function jd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var N_=37297,U_=0;function F_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Kd=new Je;function O_(i){nt._getMatrix(Kd,nt.workingColorSpace,i);let e=`mat3( ${Kd.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case Sr:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Qd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+F_(i.getShaderSource(e),o)}else return r}function B_(i,e){let t=O_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var z_={[Vc]:"Linear",[Hc]:"Reinhard",[Gc]:"Cineon",[Wc]:"ACESFilmic",[qc]:"AgX",[ea]:"Neutral",[Xc]:"Custom"};function k_(i,e){let t=z_[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Rl=new P;function V_(){nt.getLuminanceCoefficients(Rl);let i=Rl.x.toFixed(4),e=Rl.y.toFixed(4),t=Rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function G_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function W_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function la(i){return i!==""}function ef(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var X_=/^[ \t]*#include +<([\w\d./]+)>/gm;function _h(i){return i.replace(X_,$_)}var q_=new Map;function $_(i,e){let t=Ke[e];if(t===void 0){let n=q_.get(e);if(n!==void 0)t=Ke[n],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _h(t)}var Y_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nf(i){return i.replace(Y_,Z_)}function Z_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var J_={[rs]:"SHADOWMAP_TYPE_PCF",[Qs]:"SHADOWMAP_TYPE_VSM"};function j_(i){return J_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var K_={[Li]:"ENVMAP_TYPE_CUBE",[as]:"ENVMAP_TYPE_CUBE",[ta]:"ENVMAP_TYPE_CUBE_UV"};function Q_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":K_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var ev={[as]:"ENVMAP_MODE_REFRACTION"};function tv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ev[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var nv={[Fo]:"ENVMAP_BLENDING_MULTIPLY",[vd]:"ENVMAP_BLENDING_MIX",[yd]:"ENVMAP_BLENDING_ADD"};function iv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":nv[i.combine]||"ENVMAP_BLENDING_NONE"}function sv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function rv(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=j_(t),c=Q_(t),h=tv(t),d=iv(t),u=sv(t),f=H_(t),g=G_(r),x=s.createProgram(),m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(la).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(la).join(`
`),p.length>0&&(p+=`
`)):(m=[sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),p=[sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Fn?k_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,B_("linearToOutputTexel",t.outputColorSpace),V_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(la).join(`
`)),a=_h(a),a=ef(a,t),a=tf(a,t),o=_h(o),o=ef(o,t),o=tf(o,t),a=nf(a),o=nf(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=y+m+a,M=y+p+o,T=jd(s,s.VERTEX_SHADER,b),E=jd(s,s.FRAGMENT_SHADER,M);s.attachShader(x,T),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(C){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(x)||"",N=s.getShaderInfoLog(T)||"",z=s.getShaderInfoLog(E)||"",D=L.trim(),B=N.trim(),U=z.trim(),ie=!0,ne=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,T,E);else{let _e=Qd(s,T,"vertex"),ue=Qd(s,E,"fragment");We("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+D+`
`+_e+`
`+ue)}else D!==""?Ve("WebGLProgram: Program Info Log:",D):(B===""||U==="")&&(ne=!1);ne&&(C.diagnostics={runnable:ie,programLog:D,vertexShader:{log:B,prefix:m},fragmentShader:{log:U,prefix:p}})}s.deleteShader(T),s.deleteShader(E),_=new sr(s,x),S=W_(s,x)}let _;this.getUniforms=function(){return _===void 0&&I(this),_};let S;this.getAttributes=function(){return S===void 0&&I(this),S};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(x,N_)),k},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=U_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=E,this}var av=0,vh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new yh(e),t.set(e,n)),n}},yh=class{constructor(e){this.id=av++,this.code=e,this.usedTimes=0}};function ov(i,e,t,n,s,r){let a=new Ar,o=new vh,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,S,k,C,L){let N=C.fog,z=L.geometry,D=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,U=e.get(_.envMap||D,B),ie=U&&U.mapping===ta?U.image.height:null,ne=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Ve("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let _e=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ue=_e!==void 0?_e.length:0,q=0;z.morphAttributes.position!==void 0&&(q=1),z.morphAttributes.normal!==void 0&&(q=2),z.morphAttributes.color!==void 0&&(q=3);let se,oe,ee,H;if(ne){let ct=Yn[ne];se=ct.vertexShader,oe=ct.fragmentShader}else se=_.vertexShader,oe=_.fragmentShader,o.update(_),ee=o.getVertexShaderID(_),H=o.getFragmentShaderID(_);let K=i.getRenderTarget(),Q=i.state.buffers.depth.getReversed(),ve=L.isInstancedMesh===!0,he=L.isBatchedMesh===!0,Me=!!_.map,Fe=!!_.matcap,Te=!!U,Z=!!_.aoMap,ae=!!_.lightMap,te=!!_.bumpMap,me=!!_.normalMap,R=!!_.displacementMap,ke=!!_.emissiveMap,Ee=!!_.metalnessMap,He=!!_.roughnessMap,ge=_.anisotropy>0,A=_.clearcoat>0,v=_.dispersion>0,O=_.iridescence>0,Y=_.sheen>0,re=_.transmission>0,J=ge&&!!_.anisotropyMap,Ie=A&&!!_.clearcoatMap,xe=A&&!!_.clearcoatNormalMap,Be=A&&!!_.clearcoatRoughnessMap,Ge=O&&!!_.iridescenceMap,le=O&&!!_.iridescenceThicknessMap,fe=Y&&!!_.sheenColorMap,Pe=Y&&!!_.sheenRoughnessMap,De=!!_.specularMap,Ae=!!_.specularColorMap,Qe=!!_.specularIntensityMap,F=re&&!!_.transmissionMap,ye=re&&!!_.thicknessMap,pe=!!_.gradientMap,Re=!!_.alphaMap,ce=_.alphaTest>0,j=!!_.alphaHash,Le=!!_.extensions,Ye=Fn;_.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ye=i.toneMapping);let gt={shaderID:ne,shaderType:_.type,shaderName:_.name,vertexShader:se,fragmentShader:oe,defines:_.defines,customVertexShaderID:ee,customFragmentShaderID:H,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:he,batchingColor:he&&L._colorsTexture!==null,instancing:ve,instancingColor:ve&&L.instanceColor!==null,instancingMorph:ve&&L.morphTexture!==null,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ji,alphaToCoverage:!!_.alphaToCoverage,map:Me,matcap:Fe,envMap:Te,envMapMode:Te&&U.mapping,envMapCubeUVHeight:ie,aoMap:Z,lightMap:ae,bumpMap:te,normalMap:me,displacementMap:R,emissiveMap:ke,normalMapObjectSpace:me&&_.normalMapType===bd,normalMapTangentSpace:me&&_.normalMapType===Tl,metalnessMap:Ee,roughnessMap:He,anisotropy:ge,anisotropyMap:J,clearcoat:A,clearcoatMap:Ie,clearcoatNormalMap:xe,clearcoatRoughnessMap:Be,dispersion:v,iridescence:O,iridescenceMap:Ge,iridescenceThicknessMap:le,sheen:Y,sheenColorMap:fe,sheenRoughnessMap:Pe,specularMap:De,specularColorMap:Ae,specularIntensityMap:Qe,transmission:re,transmissionMap:F,thicknessMap:ye,gradientMap:pe,opaque:_.transparent===!1&&_.blending===Yi&&_.alphaToCoverage===!1,alphaMap:Re,alphaTest:ce,alphaHash:j,combine:_.combine,mapUv:Me&&g(_.map.channel),aoMapUv:Z&&g(_.aoMap.channel),lightMapUv:ae&&g(_.lightMap.channel),bumpMapUv:te&&g(_.bumpMap.channel),normalMapUv:me&&g(_.normalMap.channel),displacementMapUv:R&&g(_.displacementMap.channel),emissiveMapUv:ke&&g(_.emissiveMap.channel),metalnessMapUv:Ee&&g(_.metalnessMap.channel),roughnessMapUv:He&&g(_.roughnessMap.channel),anisotropyMapUv:J&&g(_.anisotropyMap.channel),clearcoatMapUv:Ie&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:xe&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:le&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&g(_.sheenRoughnessMap.channel),specularMapUv:De&&g(_.specularMap.channel),specularColorMapUv:Ae&&g(_.specularColorMap.channel),specularIntensityMapUv:Qe&&g(_.specularIntensityMap.channel),transmissionMapUv:F&&g(_.transmissionMap.channel),thicknessMapUv:ye&&g(_.thicknessMap.channel),alphaMapUv:Re&&g(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(me||ge),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!z.attributes.uv&&(Me||Re),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||z.attributes.normal===void 0&&me===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Q,skinning:L.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:q,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Me&&_.map.isVideoTexture===!0&&nt.getTransfer(_.map.colorSpace)===ot,decodeVideoTextureEmissive:ke&&_.emissiveMap.isVideoTexture===!0&&nt.getTransfer(_.emissiveMap.colorSpace)===ot,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===nn,flipSided:_.side===Vt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Le&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&_.extensions.multiDraw===!0||he)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return gt.vertexUv1s=l.has(1),gt.vertexUv2s=l.has(2),gt.vertexUv3s=l.has(3),l.clear(),gt}function m(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let k in _.defines)S.push(k),S.push(_.defines[k]);return _.isRawShaderMaterial===!1&&(p(S,_),y(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function p(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function y(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),_.push(a.mask)}function b(_){let S=f[_.type],k;if(S){let C=Yn[S];k=Bd.clone(C.uniforms)}else k=_.uniforms;return k}function M(_,S){let k=h.get(S);return k!==void 0?++k.usedTimes:(k=new rv(i,S,_,s),c.push(k),h.set(S,k)),k}function T(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function I(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:b,acquireProgram:M,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:I}}function lv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function cv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function rf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function af(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,x,m,p){let y=i[e];return y===void 0?(y={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:p},i[e]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=g,y.materialVariant=a(u),y.groupOrder=x,y.renderOrder=u.renderOrder,y.z=m,y.group=p),e++,y}function l(u,f,g,x,m,p){let y=o(u,f,g,x,m,p);g.transmission>0?n.push(y):g.transparent===!0?s.push(y):t.push(y)}function c(u,f,g,x,m,p){let y=o(u,f,g,x,m,p);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):t.unshift(y)}function h(u,f){t.length>1&&t.sort(u||cv),n.length>1&&n.sort(f||rf),s.length>1&&s.sort(f||rf)}function d(){for(let u=e,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function hv(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new af,i.set(n,[a])):s>=r.length?(a=new af,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function uv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new qe};break;case"SpotLight":t={position:new P,direction:new P,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function dv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var fv=0;function pv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function mv(i){let e=new uv,t=dv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new lt,a=new lt;function o(c){let h=0,d=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,y=0,b=0,M=0,T=0,E=0,I=0;c.sort(pv);for(let S=0,k=c.length;S<k;S++){let C=c[S],L=C.color,N=C.intensity,z=C.distance,D=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===ls?D=C.shadow.map.texture:D=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=L.r*N,d+=L.g*N,u+=L.b*N;else if(C.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(C.sh.coefficients[B],N);I++}else if(C.isDirectionalLight){let B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let U=C.shadow,ie=t.get(C);ie.shadowIntensity=U.intensity,ie.shadowBias=U.bias,ie.shadowNormalBias=U.normalBias,ie.shadowRadius=U.radius,ie.shadowMapSize=U.mapSize,n.directionalShadow[f]=ie,n.directionalShadowMap[f]=D,n.directionalShadowMatrix[f]=C.shadow.matrix,y++}n.directional[f]=B,f++}else if(C.isSpotLight){let B=e.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(L).multiplyScalar(N),B.distance=z,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,n.spot[x]=B;let U=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,U.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[x]=U.matrix,C.castShadow){let ie=t.get(C);ie.shadowIntensity=U.intensity,ie.shadowBias=U.bias,ie.shadowNormalBias=U.normalBias,ie.shadowRadius=U.radius,ie.shadowMapSize=U.mapSize,n.spotShadow[x]=ie,n.spotShadowMap[x]=D,M++}x++}else if(C.isRectAreaLight){let B=e.get(C);B.color.copy(L).multiplyScalar(N),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=B,m++}else if(C.isPointLight){let B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){let U=C.shadow,ie=t.get(C);ie.shadowIntensity=U.intensity,ie.shadowBias=U.bias,ie.shadowNormalBias=U.normalBias,ie.shadowRadius=U.radius,ie.shadowMapSize=U.mapSize,ie.shadowCameraNear=U.camera.near,ie.shadowCameraFar=U.camera.far,n.pointShadow[g]=ie,n.pointShadowMap[g]=D,n.pointShadowMatrix[g]=C.shadow.matrix,b++}n.point[g]=B,g++}else if(C.isHemisphereLight){let B=e.get(C);B.skyColor.copy(C.color).multiplyScalar(N),B.groundColor.copy(C.groundColor).multiplyScalar(N),n.hemi[p]=B,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let _=n.hash;(_.directionalLength!==f||_.pointLength!==g||_.spotLength!==x||_.rectAreaLength!==m||_.hemiLength!==p||_.numDirectionalShadows!==y||_.numPointShadows!==b||_.numSpotShadows!==M||_.numSpotMaps!==T||_.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=I,_.directionalLength=f,_.pointLength=g,_.spotLength=x,_.rectAreaLength=m,_.hemiLength=p,_.numDirectionalShadows=y,_.numPointShadows=b,_.numSpotShadows=M,_.numSpotMaps=T,_.numLightProbes=I,n.version=fv++)}function l(c,h){let d=0,u=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let b=c[p];if(b.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(b.isSpotLight){let M=n.spot[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){let M=n.point[u];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){let M=n.hemi[x];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function of(i){let e=new mv(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function gv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new of(i),e.set(s,[o])):r>=a.length?(o=new of(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_v=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,vv=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],yv=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],lf=new lt,oa=new P,fh=new P;function Mv(i,e,t){let n=new $s,s=new de,r=new de,a=new Mt,o=new Mo,l=new bo,c={},h=t.maxTextureSize,d={[ai]:Vt,[Vt]:ai,[nn]:nn},u=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:xv,fragmentShader:_v}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Jt;g.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ht(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rs;let p=this.type;this.render=function(E,I,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===ed&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=rs);let S=i.getRenderTarget(),k=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Wn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let N=p!==this.type;N&&I.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(D=>D.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,D=E.length;z<D;z++){let B=E[z],U=B.shadow;if(U===void 0){Ve("WebGLShadowMap:",B,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let ie=U.getFrameExtents();s.multiply(ie),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,U.mapSize.y=r.y));let ne=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=ne,U.map===null||N===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Qs){if(B.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new un(s.x,s.y,{format:ls,type:qn,minFilter:It,magFilter:It,generateMipmaps:!1}),U.map.texture.name=B.name+".shadowMap",U.map.depthTexture=new Ti(s.x,s.y,wn),U.map.depthTexture.name=B.name+".shadowMapDepth",U.map.depthTexture.format=Vn,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Rt,U.map.depthTexture.magFilter=Rt}else B.isPointLight?(U.map=new Il(s.x),U.map.depthTexture=new fo(s.x,On)):(U.map=new un(s.x,s.y),U.map.depthTexture=new Ti(s.x,s.y,On)),U.map.depthTexture.name=B.name+".shadowMap",U.map.depthTexture.format=Vn,this.type===rs?(U.map.depthTexture.compareFunction=ne?Al:El,U.map.depthTexture.minFilter=It,U.map.depthTexture.magFilter=It):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Rt,U.map.depthTexture.magFilter=Rt);U.camera.updateProjectionMatrix()}let _e=U.map.isWebGLCubeRenderTarget?6:1;for(let ue=0;ue<_e;ue++){if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,ue),i.clear();else{ue===0&&(i.setRenderTarget(U.map),i.clear());let q=U.getViewport(ue);a.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),L.viewport(a)}if(B.isPointLight){let q=U.camera,se=U.matrix,oe=B.distance||q.far;oe!==q.far&&(q.far=oe,q.updateProjectionMatrix()),oa.setFromMatrixPosition(B.matrixWorld),q.position.copy(oa),fh.copy(q.position),fh.add(vv[ue]),q.up.copy(yv[ue]),q.lookAt(fh),q.updateMatrixWorld(),se.makeTranslation(-oa.x,-oa.y,-oa.z),lf.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),U._frustum.setFromProjectionMatrix(lf,q.coordinateSystem,q.reversedDepth)}else U.updateMatrices(B);n=U.getFrustum(),M(I,_,U.camera,B,this.type)}U.isPointLightShadow!==!0&&this.type===Qs&&y(U,_),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,k,C)};function y(E,I){let _=e.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new un(s.x,s.y,{format:ls,type:qn})),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(I,null,_,u,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(I,null,_,f,x,null)}function b(E,I,_,S){let k=null,C=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)k=C;else if(k=_.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let L=k.uuid,N=I.uuid,z=c[L];z===void 0&&(z={},c[L]=z);let D=z[N];D===void 0&&(D=k.clone(),z[N]=D,I.addEventListener("dispose",T)),k=D}if(k.visible=I.visible,k.wireframe=I.wireframe,S===Qs?k.side=I.shadowSide!==null?I.shadowSide:I.side:k.side=I.shadowSide!==null?I.shadowSide:d[I.side],k.alphaMap=I.alphaMap,k.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,k.map=I.map,k.clipShadows=I.clipShadows,k.clippingPlanes=I.clippingPlanes,k.clipIntersection=I.clipIntersection,k.displacementMap=I.displacementMap,k.displacementScale=I.displacementScale,k.displacementBias=I.displacementBias,k.wireframeLinewidth=I.wireframeLinewidth,k.linewidth=I.linewidth,_.isPointLight===!0&&k.isMeshDistanceMaterial===!0){let L=i.properties.get(k);L.light=_}return k}function M(E,I,_,S,k){if(E.visible===!1)return;if(E.layers.test(I.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&k===Qs)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let N=e.update(E),z=E.material;if(Array.isArray(z)){let D=N.groups;for(let B=0,U=D.length;B<U;B++){let ie=D[B],ne=z[ie.materialIndex];if(ne&&ne.visible){let _e=b(E,ne,S,k);E.onBeforeShadow(i,E,I,_,N,_e,ie),i.renderBufferDirect(_,null,N,_e,E,ie),E.onAfterShadow(i,E,I,_,N,_e,ie)}}}else if(z.visible){let D=b(E,z,S,k);E.onBeforeShadow(i,E,I,_,N,D,null),i.renderBufferDirect(_,null,N,D,E,null),E.onAfterShadow(i,E,I,_,N,D,null)}}let L=E.children;for(let N=0,z=L.length;N<z;N++)M(L[N],I,_,S,k)}function T(E){E.target.removeEventListener("dispose",T);for(let _ in c){let S=c[_],k=E.target.uuid;k in S&&(S[k].dispose(),delete S[k])}}}function bv(i,e){function t(){let F=!1,ye=new Mt,pe=null,Re=new Mt(0,0,0,0);return{setMask:function(ce){pe!==ce&&!F&&(i.colorMask(ce,ce,ce,ce),pe=ce)},setLocked:function(ce){F=ce},setClear:function(ce,j,Le,Ye,gt){gt===!0&&(ce*=Ye,j*=Ye,Le*=Ye),ye.set(ce,j,Le,Ye),Re.equals(ye)===!1&&(i.clearColor(ce,j,Le,Ye),Re.copy(ye))},reset:function(){F=!1,pe=null,Re.set(-1,0,0,0)}}}function n(){let F=!1,ye=!1,pe=null,Re=null,ce=null;return{setReversed:function(j){if(ye!==j){let Le=e.get("EXT_clip_control");j?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),ye=j;let Ye=ce;ce=null,this.setClear(Ye)}},getReversed:function(){return ye},setTest:function(j){j?K(i.DEPTH_TEST):Q(i.DEPTH_TEST)},setMask:function(j){pe!==j&&!F&&(i.depthMask(j),pe=j)},setFunc:function(j){if(ye&&(j=Ld[j]),Re!==j){switch(j){case eo:i.depthFunc(i.NEVER);break;case to:i.depthFunc(i.ALWAYS);break;case no:i.depthFunc(i.LESS);break;case Zi:i.depthFunc(i.LEQUAL);break;case io:i.depthFunc(i.EQUAL);break;case so:i.depthFunc(i.GEQUAL);break;case ro:i.depthFunc(i.GREATER);break;case ao:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Re=j}},setLocked:function(j){F=j},setClear:function(j){ce!==j&&(ce=j,ye&&(j=1-j),i.clearDepth(j))},reset:function(){F=!1,pe=null,Re=null,ce=null,ye=!1}}}function s(){let F=!1,ye=null,pe=null,Re=null,ce=null,j=null,Le=null,Ye=null,gt=null;return{setTest:function(ct){F||(ct?K(i.STENCIL_TEST):Q(i.STENCIL_TEST))},setMask:function(ct){ye!==ct&&!F&&(i.stencilMask(ct),ye=ct)},setFunc:function(ct,Kn,Qn){(pe!==ct||Re!==Kn||ce!==Qn)&&(i.stencilFunc(ct,Kn,Qn),pe=ct,Re=Kn,ce=Qn)},setOp:function(ct,Kn,Qn){(j!==ct||Le!==Kn||Ye!==Qn)&&(i.stencilOp(ct,Kn,Qn),j=ct,Le=Kn,Ye=Qn)},setLocked:function(ct){F=ct},setClear:function(ct){gt!==ct&&(i.clearStencil(ct),gt=ct)},reset:function(){F=!1,ye=null,pe=null,Re=null,ce=null,j=null,Le=null,Ye=null,gt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,b=null,M=null,T=null,E=null,I=new qe(0,0,0),_=0,S=!1,k=null,C=null,L=null,N=null,z=null,D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,U=0,ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(ie)[1]),B=U>=1):ie.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),B=U>=2);let ne=null,_e={},ue=i.getParameter(i.SCISSOR_BOX),q=i.getParameter(i.VIEWPORT),se=new Mt().fromArray(ue),oe=new Mt().fromArray(q);function ee(F,ye,pe,Re){let ce=new Uint8Array(4),j=i.createTexture();i.bindTexture(F,j),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<pe;Le++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(ye+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return j}let H={};H[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(Zi),te(!1),me(Oc),K(i.CULL_FACE),Z(Wn);function K(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Q(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function ve(F,ye){return d[F]!==ye?(i.bindFramebuffer(F,ye),d[F]=ye,F===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ye),F===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function he(F,ye){let pe=f,Re=!1;if(F){pe=u.get(ye),pe===void 0&&(pe=[],u.set(ye,pe));let ce=F.textures;if(pe.length!==ce.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let j=0,Le=ce.length;j<Le;j++)pe[j]=i.COLOR_ATTACHMENT0+j;pe.length=ce.length,Re=!0}}else pe[0]!==i.BACK&&(pe[0]=i.BACK,Re=!0);Re&&i.drawBuffers(pe)}function Me(F){return g!==F?(i.useProgram(F),g=F,!0):!1}let Fe={[bi]:i.FUNC_ADD,[nd]:i.FUNC_SUBTRACT,[id]:i.FUNC_REVERSE_SUBTRACT};Fe[sd]=i.MIN,Fe[rd]=i.MAX;let Te={[ad]:i.ZERO,[od]:i.ONE,[ld]:i.SRC_COLOR,[Ka]:i.SRC_ALPHA,[pd]:i.SRC_ALPHA_SATURATE,[dd]:i.DST_COLOR,[hd]:i.DST_ALPHA,[cd]:i.ONE_MINUS_SRC_COLOR,[Qa]:i.ONE_MINUS_SRC_ALPHA,[fd]:i.ONE_MINUS_DST_COLOR,[ud]:i.ONE_MINUS_DST_ALPHA,[md]:i.CONSTANT_COLOR,[gd]:i.ONE_MINUS_CONSTANT_COLOR,[xd]:i.CONSTANT_ALPHA,[_d]:i.ONE_MINUS_CONSTANT_ALPHA};function Z(F,ye,pe,Re,ce,j,Le,Ye,gt,ct){if(F===Wn){x===!0&&(Q(i.BLEND),x=!1);return}if(x===!1&&(K(i.BLEND),x=!0),F!==td){if(F!==m||ct!==S){if((p!==bi||M!==bi)&&(i.blendEquation(i.FUNC_ADD),p=bi,M=bi),ct)switch(F){case Yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bc:i.blendFunc(i.ONE,i.ONE);break;case zc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:We("WebGLState: Invalid blending: ",F);break}else switch(F){case Yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zc:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kc:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",F);break}y=null,b=null,T=null,E=null,I.set(0,0,0),_=0,m=F,S=ct}return}ce=ce||ye,j=j||pe,Le=Le||Re,(ye!==p||ce!==M)&&(i.blendEquationSeparate(Fe[ye],Fe[ce]),p=ye,M=ce),(pe!==y||Re!==b||j!==T||Le!==E)&&(i.blendFuncSeparate(Te[pe],Te[Re],Te[j],Te[Le]),y=pe,b=Re,T=j,E=Le),(Ye.equals(I)===!1||gt!==_)&&(i.blendColor(Ye.r,Ye.g,Ye.b,gt),I.copy(Ye),_=gt),m=F,S=!1}function ae(F,ye){F.side===nn?Q(i.CULL_FACE):K(i.CULL_FACE);let pe=F.side===Vt;ye&&(pe=!pe),te(pe),F.blending===Yi&&F.transparent===!1?Z(Wn):Z(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let Re=F.stencilWrite;o.setTest(Re),Re&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ke(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):Q(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(F){k!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),k=F)}function me(F){F!==Ku?(K(i.CULL_FACE),F!==C&&(F===Oc?i.cullFace(i.BACK):F===Qu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Q(i.CULL_FACE),C=F}function R(F){F!==L&&(B&&i.lineWidth(F),L=F)}function ke(F,ye,pe){F?(K(i.POLYGON_OFFSET_FILL),(N!==ye||z!==pe)&&(N=ye,z=pe,a.getReversed()&&(ye=-ye),i.polygonOffset(ye,pe))):Q(i.POLYGON_OFFSET_FILL)}function Ee(F){F?K(i.SCISSOR_TEST):Q(i.SCISSOR_TEST)}function He(F){F===void 0&&(F=i.TEXTURE0+D-1),ne!==F&&(i.activeTexture(F),ne=F)}function ge(F,ye,pe){pe===void 0&&(ne===null?pe=i.TEXTURE0+D-1:pe=ne);let Re=_e[pe];Re===void 0&&(Re={type:void 0,texture:void 0},_e[pe]=Re),(Re.type!==F||Re.texture!==ye)&&(ne!==pe&&(i.activeTexture(pe),ne=pe),i.bindTexture(F,ye||H[F]),Re.type=F,Re.texture=ye)}function A(){let F=_e[ne];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(F){We("WebGLState:",F)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(F){We("WebGLState:",F)}}function Y(){try{i.texSubImage2D(...arguments)}catch(F){We("WebGLState:",F)}}function re(){try{i.texSubImage3D(...arguments)}catch(F){We("WebGLState:",F)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(F){We("WebGLState:",F)}}function Ie(){try{i.compressedTexSubImage3D(...arguments)}catch(F){We("WebGLState:",F)}}function xe(){try{i.texStorage2D(...arguments)}catch(F){We("WebGLState:",F)}}function Be(){try{i.texStorage3D(...arguments)}catch(F){We("WebGLState:",F)}}function Ge(){try{i.texImage2D(...arguments)}catch(F){We("WebGLState:",F)}}function le(){try{i.texImage3D(...arguments)}catch(F){We("WebGLState:",F)}}function fe(F){se.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),se.copy(F))}function Pe(F){oe.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),oe.copy(F))}function De(F,ye){let pe=c.get(ye);pe===void 0&&(pe=new WeakMap,c.set(ye,pe));let Re=pe.get(F);Re===void 0&&(Re=i.getUniformBlockIndex(ye,F.name),pe.set(F,Re))}function Ae(F,ye){let Re=c.get(ye).get(F);l.get(ye)!==Re&&(i.uniformBlockBinding(ye,Re,F.__bindingPointIndex),l.set(ye,Re))}function Qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ne=null,_e={},d={},u=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,b=null,M=null,T=null,E=null,I=new qe(0,0,0),_=0,S=!1,k=null,C=null,L=null,N=null,z=null,se.set(0,0,i.canvas.width,i.canvas.height),oe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:Q,bindFramebuffer:ve,drawBuffers:he,useProgram:Me,setBlending:Z,setMaterial:ae,setFlipSided:te,setCullFace:me,setLineWidth:R,setPolygonOffset:ke,setScissorTest:Ee,activeTexture:He,bindTexture:ge,unbindTexture:A,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:Ge,texImage3D:le,updateUBOMapping:De,uniformBlockBinding:Ae,texStorage2D:xe,texStorage3D:Be,texSubImage2D:Y,texSubImage3D:re,compressedTexSubImage2D:J,compressedTexSubImage3D:Ie,scissor:fe,viewport:Pe,reset:Qe}}function Sv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return f?new OffscreenCanvas(A,v):wr("canvas")}function x(A,v,O){let Y=1,re=ge(A);if((re.width>O||re.height>O)&&(Y=O/Math.max(re.width,re.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let J=Math.floor(Y*re.width),Ie=Math.floor(Y*re.height);d===void 0&&(d=g(J,Ie));let xe=v?g(J,Ie):d;return xe.width=J,xe.height=Ie,xe.getContext("2d").drawImage(A,0,0,J,Ie),Ve("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+J+"x"+Ie+")."),xe}else return"data"in A&&Ve("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(A,v,O,Y,re=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=v;if(v===i.RED&&(O===i.FLOAT&&(J=i.R32F),O===i.HALF_FLOAT&&(J=i.R16F),O===i.UNSIGNED_BYTE&&(J=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.R8UI),O===i.UNSIGNED_SHORT&&(J=i.R16UI),O===i.UNSIGNED_INT&&(J=i.R32UI),O===i.BYTE&&(J=i.R8I),O===i.SHORT&&(J=i.R16I),O===i.INT&&(J=i.R32I)),v===i.RG&&(O===i.FLOAT&&(J=i.RG32F),O===i.HALF_FLOAT&&(J=i.RG16F),O===i.UNSIGNED_BYTE&&(J=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RG8UI),O===i.UNSIGNED_SHORT&&(J=i.RG16UI),O===i.UNSIGNED_INT&&(J=i.RG32UI),O===i.BYTE&&(J=i.RG8I),O===i.SHORT&&(J=i.RG16I),O===i.INT&&(J=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGB8UI),O===i.UNSIGNED_SHORT&&(J=i.RGB16UI),O===i.UNSIGNED_INT&&(J=i.RGB32UI),O===i.BYTE&&(J=i.RGB8I),O===i.SHORT&&(J=i.RGB16I),O===i.INT&&(J=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),O===i.UNSIGNED_INT&&(J=i.RGBA32UI),O===i.BYTE&&(J=i.RGBA8I),O===i.SHORT&&(J=i.RGBA16I),O===i.INT&&(J=i.RGBA32I)),v===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),v===i.RGBA){let Ie=re?Sr:nt.getTransfer(Y);O===i.FLOAT&&(J=i.RGBA32F),O===i.HALF_FLOAT&&(J=i.RGBA16F),O===i.UNSIGNED_BYTE&&(J=Ie===ot?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function M(A,v){let O;return A?v===null||v===On||v===nr?O=i.DEPTH24_STENCIL8:v===wn?O=i.DEPTH32F_STENCIL8:v===tr&&(O=i.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===On||v===nr?O=i.DEPTH_COMPONENT24:v===wn?O=i.DEPTH_COMPONENT32F:v===tr&&(O=i.DEPTH_COMPONENT16),O}function T(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Rt&&A.minFilter!==It?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function E(A){let v=A.target;v.removeEventListener("dispose",E),_(v),v.isVideoTexture&&h.delete(v)}function I(A){let v=A.target;v.removeEventListener("dispose",I),k(v)}function _(A){let v=n.get(A);if(v.__webglInit===void 0)return;let O=A.source,Y=u.get(O);if(Y){let re=Y[v.__cacheKey];re.usedTimes--,re.usedTimes===0&&S(A),Object.keys(Y).length===0&&u.delete(O)}n.remove(A)}function S(A){let v=n.get(A);i.deleteTexture(v.__webglTexture);let O=A.source,Y=u.get(O);delete Y[v.__cacheKey],a.memory.textures--}function k(A){let v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let re=0;re<v.__webglFramebuffer[Y].length;re++)i.deleteFramebuffer(v.__webglFramebuffer[Y][re]);else i.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)i.deleteFramebuffer(v.__webglFramebuffer[Y]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=A.textures;for(let Y=0,re=O.length;Y<re;Y++){let J=n.get(O[Y]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(O[Y])}n.remove(A)}let C=0;function L(){C=0}function N(){let A=C;return A>=s.maxTextures&&Ve("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),C+=1,A}function z(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function D(A,v){let O=n.get(A);if(A.isVideoTexture&&Ee(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){let Y=A.image;if(Y===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{H(O,A,v);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function B(A,v){let O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){H(O,A,v);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function U(A,v){let O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){H(O,A,v);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function ie(A,v){let O=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&O.__version!==A.version){K(O,A,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}let ne={[Si]:i.REPEAT,[bn]:i.CLAMP_TO_EDGE,[ks]:i.MIRRORED_REPEAT},_e={[Rt]:i.NEAREST,[zo]:i.NEAREST_MIPMAP_NEAREST,[os]:i.NEAREST_MIPMAP_LINEAR,[It]:i.LINEAR,[er]:i.LINEAR_MIPMAP_NEAREST,[Xn]:i.LINEAR_MIPMAP_LINEAR},ue={[Sd]:i.NEVER,[Cd]:i.ALWAYS,[wd]:i.LESS,[El]:i.LEQUAL,[Td]:i.EQUAL,[Al]:i.GEQUAL,[Ed]:i.GREATER,[Ad]:i.NOTEQUAL};function q(A,v){if(v.type===wn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===It||v.magFilter===er||v.magFilter===os||v.magFilter===Xn||v.minFilter===It||v.minFilter===er||v.minFilter===os||v.minFilter===Xn)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ne[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ne[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ne[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,_e[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,_e[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ue[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Rt||v.minFilter!==os&&v.minFilter!==Xn||v.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function se(A,v){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",E));let Y=v.source,re=u.get(Y);re===void 0&&(re={},u.set(Y,re));let J=z(v);if(J!==A.__cacheKey){re[J]===void 0&&(re[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),re[J].usedTimes++;let Ie=re[A.__cacheKey];Ie!==void 0&&(re[A.__cacheKey].usedTimes--,Ie.usedTimes===0&&S(v)),A.__cacheKey=J,A.__webglTexture=re[J].texture}return O}function oe(A,v,O){return Math.floor(Math.floor(A/O)/v)}function ee(A,v,O,Y){let J=A.updateRanges;if(J.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,O,Y,v.data);else{J.sort((le,fe)=>le.start-fe.start);let Ie=0;for(let le=1;le<J.length;le++){let fe=J[Ie],Pe=J[le],De=fe.start+fe.count,Ae=oe(Pe.start,v.width,4),Qe=oe(fe.start,v.width,4);Pe.start<=De+1&&Ae===Qe&&oe(Pe.start+Pe.count-1,v.width,4)===Ae?fe.count=Math.max(fe.count,Pe.start+Pe.count-fe.start):(++Ie,J[Ie]=Pe)}J.length=Ie+1;let xe=i.getParameter(i.UNPACK_ROW_LENGTH),Be=i.getParameter(i.UNPACK_SKIP_PIXELS),Ge=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let le=0,fe=J.length;le<fe;le++){let Pe=J[le],De=Math.floor(Pe.start/4),Ae=Math.ceil(Pe.count/4),Qe=De%v.width,F=Math.floor(De/v.width),ye=Ae,pe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Qe),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,Qe,F,ye,pe,O,Y,v.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,xe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ge)}}function H(A,v,O){let Y=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=i.TEXTURE_3D);let re=se(A,v),J=v.source;t.bindTexture(Y,A.__webglTexture,i.TEXTURE0+O);let Ie=n.get(J);if(J.version!==Ie.__version||re===!0){t.activeTexture(i.TEXTURE0+O);let xe=nt.getPrimaries(nt.workingColorSpace),Be=v.colorSpace===gn?null:nt.getPrimaries(v.colorSpace),Ge=v.colorSpace===gn||xe===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let le=x(v.image,!1,s.maxTextureSize);le=He(v,le);let fe=r.convert(v.format,v.colorSpace),Pe=r.convert(v.type),De=b(v.internalFormat,fe,Pe,v.colorSpace,v.isVideoTexture);q(Y,v);let Ae,Qe=v.mipmaps,F=v.isVideoTexture!==!0,ye=Ie.__version===void 0||re===!0,pe=J.dataReady,Re=T(v,le);if(v.isDepthTexture)De=M(v.format===Di,v.type),ye&&(F?t.texStorage2D(i.TEXTURE_2D,1,De,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,De,le.width,le.height,0,fe,Pe,null));else if(v.isDataTexture)if(Qe.length>0){F&&ye&&t.texStorage2D(i.TEXTURE_2D,Re,De,Qe[0].width,Qe[0].height);for(let ce=0,j=Qe.length;ce<j;ce++)Ae=Qe[ce],F?pe&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,Ae.width,Ae.height,fe,Pe,Ae.data):t.texImage2D(i.TEXTURE_2D,ce,De,Ae.width,Ae.height,0,fe,Pe,Ae.data);v.generateMipmaps=!1}else F?(ye&&t.texStorage2D(i.TEXTURE_2D,Re,De,le.width,le.height),pe&&ee(v,le,fe,Pe)):t.texImage2D(i.TEXTURE_2D,0,De,le.width,le.height,0,fe,Pe,le.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){F&&ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,De,Qe[0].width,Qe[0].height,le.depth);for(let ce=0,j=Qe.length;ce<j;ce++)if(Ae=Qe[ce],v.format!==rn)if(fe!==null)if(F){if(pe)if(v.layerUpdates.size>0){let Le=oh(Ae.width,Ae.height,v.format,v.type);for(let Ye of v.layerUpdates){let gt=Ae.data.subarray(Ye*Le/Ae.data.BYTES_PER_ELEMENT,(Ye+1)*Le/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,Ye,Ae.width,Ae.height,1,fe,gt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,Ae.width,Ae.height,le.depth,fe,Ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,De,Ae.width,Ae.height,le.depth,0,Ae.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,Ae.width,Ae.height,le.depth,fe,Pe,Ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,De,Ae.width,Ae.height,le.depth,0,fe,Pe,Ae.data)}else{F&&ye&&t.texStorage2D(i.TEXTURE_2D,Re,De,Qe[0].width,Qe[0].height);for(let ce=0,j=Qe.length;ce<j;ce++)Ae=Qe[ce],v.format!==rn?fe!==null?F?pe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,Ae.width,Ae.height,fe,Ae.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,De,Ae.width,Ae.height,0,Ae.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?pe&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,Ae.width,Ae.height,fe,Pe,Ae.data):t.texImage2D(i.TEXTURE_2D,ce,De,Ae.width,Ae.height,0,fe,Pe,Ae.data)}else if(v.isDataArrayTexture)if(F){if(ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,De,le.width,le.height,le.depth),pe)if(v.layerUpdates.size>0){let ce=oh(le.width,le.height,v.format,v.type);for(let j of v.layerUpdates){let Le=le.data.subarray(j*ce/le.data.BYTES_PER_ELEMENT,(j+1)*ce/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,le.width,le.height,1,fe,Pe,Le)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,fe,Pe,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,le.width,le.height,le.depth,0,fe,Pe,le.data);else if(v.isData3DTexture)F?(ye&&t.texStorage3D(i.TEXTURE_3D,Re,De,le.width,le.height,le.depth),pe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,fe,Pe,le.data)):t.texImage3D(i.TEXTURE_3D,0,De,le.width,le.height,le.depth,0,fe,Pe,le.data);else if(v.isFramebufferTexture){if(ye)if(F)t.texStorage2D(i.TEXTURE_2D,Re,De,le.width,le.height);else{let ce=le.width,j=le.height;for(let Le=0;Le<Re;Le++)t.texImage2D(i.TEXTURE_2D,Le,De,ce,j,0,fe,Pe,null),ce>>=1,j>>=1}}else if(Qe.length>0){if(F&&ye){let ce=ge(Qe[0]);t.texStorage2D(i.TEXTURE_2D,Re,De,ce.width,ce.height)}for(let ce=0,j=Qe.length;ce<j;ce++)Ae=Qe[ce],F?pe&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,fe,Pe,Ae):t.texImage2D(i.TEXTURE_2D,ce,De,fe,Pe,Ae);v.generateMipmaps=!1}else if(F){if(ye){let ce=ge(le);t.texStorage2D(i.TEXTURE_2D,Re,De,ce.width,ce.height)}pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Pe,le)}else t.texImage2D(i.TEXTURE_2D,0,De,fe,Pe,le);m(v)&&p(Y),Ie.__version=J.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function K(A,v,O){if(v.image.length!==6)return;let Y=se(A,v),re=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);let J=n.get(re);if(re.version!==J.__version||Y===!0){t.activeTexture(i.TEXTURE0+O);let Ie=nt.getPrimaries(nt.workingColorSpace),xe=v.colorSpace===gn?null:nt.getPrimaries(v.colorSpace),Be=v.colorSpace===gn||Ie===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let Ge=v.isCompressedTexture||v.image[0].isCompressedTexture,le=v.image[0]&&v.image[0].isDataTexture,fe=[];for(let j=0;j<6;j++)!Ge&&!le?fe[j]=x(v.image[j],!0,s.maxCubemapSize):fe[j]=le?v.image[j].image:v.image[j],fe[j]=He(v,fe[j]);let Pe=fe[0],De=r.convert(v.format,v.colorSpace),Ae=r.convert(v.type),Qe=b(v.internalFormat,De,Ae,v.colorSpace),F=v.isVideoTexture!==!0,ye=J.__version===void 0||Y===!0,pe=re.dataReady,Re=T(v,Pe);q(i.TEXTURE_CUBE_MAP,v);let ce;if(Ge){F&&ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,Qe,Pe.width,Pe.height);for(let j=0;j<6;j++){ce=fe[j].mipmaps;for(let Le=0;Le<ce.length;Le++){let Ye=ce[Le];v.format!==rn?De!==null?F?pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Le,0,0,Ye.width,Ye.height,De,Ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Le,Qe,Ye.width,Ye.height,0,Ye.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Le,0,0,Ye.width,Ye.height,De,Ae,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Le,Qe,Ye.width,Ye.height,0,De,Ae,Ye.data)}}}else{if(ce=v.mipmaps,F&&ye){ce.length>0&&Re++;let j=ge(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,Qe,j.width,j.height)}for(let j=0;j<6;j++)if(le){F?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,fe[j].width,fe[j].height,De,Ae,fe[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Qe,fe[j].width,fe[j].height,0,De,Ae,fe[j].data);for(let Le=0;Le<ce.length;Le++){let gt=ce[Le].image[j].image;F?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Le+1,0,0,gt.width,gt.height,De,Ae,gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Le+1,Qe,gt.width,gt.height,0,De,Ae,gt.data)}}else{F?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,De,Ae,fe[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Qe,De,Ae,fe[j]);for(let Le=0;Le<ce.length;Le++){let Ye=ce[Le];F?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Le+1,0,0,De,Ae,Ye.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Le+1,Qe,De,Ae,Ye.image[j])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),J.__version=re.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Q(A,v,O,Y,re,J){let Ie=r.convert(O.format,O.colorSpace),xe=r.convert(O.type),Be=b(O.internalFormat,Ie,xe,O.colorSpace),Ge=n.get(v),le=n.get(O);if(le.__renderTarget=v,!Ge.__hasExternalTextures){let fe=Math.max(1,v.width>>J),Pe=Math.max(1,v.height>>J);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,J,Be,fe,Pe,v.depth,0,Ie,xe,null):t.texImage2D(re,J,Be,fe,Pe,0,Ie,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),ke(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,re,le.__webglTexture,0,R(v)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,re,le.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(A,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){let Y=v.depthTexture,re=Y&&Y.isDepthTexture?Y.type:null,J=M(v.stencilBuffer,re),Ie=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ke(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,R(v),J,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,R(v),J,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,J,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ie,i.RENDERBUFFER,A)}else{let Y=v.textures;for(let re=0;re<Y.length;re++){let J=Y[re],Ie=r.convert(J.format,J.colorSpace),xe=r.convert(J.type),Be=b(J.internalFormat,Ie,xe,J.colorSpace);ke(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,R(v),Be,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,R(v),Be,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Be,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(A,v,O){let Y=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let re=n.get(v.depthTexture);if(re.__renderTarget=v,(!re.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y){if(re.__webglInit===void 0&&(re.__webglInit=!0,v.depthTexture.addEventListener("dispose",E)),re.__webglTexture===void 0){re.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),q(i.TEXTURE_CUBE_MAP,v.depthTexture);let Ge=r.convert(v.depthTexture.format),le=r.convert(v.depthTexture.type),fe;v.depthTexture.format===Vn?fe=i.DEPTH_COMPONENT24:v.depthTexture.format===Di&&(fe=i.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,fe,v.width,v.height,0,Ge,le,null)}}else D(v.depthTexture,0);let J=re.__webglTexture,Ie=R(v),xe=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,Be=v.depthTexture.format===Di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Vn)ke(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Be,xe,J,0,Ie):i.framebufferTexture2D(i.FRAMEBUFFER,Be,xe,J,0);else if(v.depthTexture.format===Di)ke(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Be,xe,J,0,Ie):i.framebufferTexture2D(i.FRAMEBUFFER,Be,xe,J,0);else throw new Error("Unknown depthTexture format")}function Me(A){let v=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let Y=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){let re=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",re)};Y.addEventListener("dispose",re),v.__depthDisposeCallback=re}v.__boundDepthTexture=Y}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(O)for(let Y=0;Y<6;Y++)he(v.__webglFramebuffer[Y],A,Y);else{let Y=A.texture.mipmaps;Y&&Y.length>0?he(v.__webglFramebuffer[0],A,0):he(v.__webglFramebuffer,A,0)}else if(O){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=i.createRenderbuffer(),ve(v.__webglDepthbuffer[Y],A,!1);else{let re=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,J)}}else{let Y=A.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ve(v.__webglDepthbuffer,A,!1);else{let re=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,J)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(A,v,O){let Y=n.get(A);v!==void 0&&Q(Y.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Me(A)}function Te(A){let v=A.texture,O=n.get(A),Y=n.get(v);A.addEventListener("dispose",I);let re=A.textures,J=A.isWebGLCubeRenderTarget===!0,Ie=re.length>1;if(Ie||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=v.version,a.memory.textures++),J){O.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[xe]=[];for(let Be=0;Be<v.mipmaps.length;Be++)O.__webglFramebuffer[xe][Be]=i.createFramebuffer()}else O.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let xe=0;xe<v.mipmaps.length;xe++)O.__webglFramebuffer[xe]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Ie)for(let xe=0,Be=re.length;xe<Be;xe++){let Ge=n.get(re[xe]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&ke(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let xe=0;xe<re.length;xe++){let Be=re[xe];O.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[xe]);let Ge=r.convert(Be.format,Be.colorSpace),le=r.convert(Be.type),fe=b(Be.internalFormat,Ge,le,Be.colorSpace,A.isXRRenderTarget===!0),Pe=R(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,fe,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,O.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ve(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),q(i.TEXTURE_CUBE_MAP,v);for(let xe=0;xe<6;xe++)if(v.mipmaps&&v.mipmaps.length>0)for(let Be=0;Be<v.mipmaps.length;Be++)Q(O.__webglFramebuffer[xe][Be],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be);else Q(O.__webglFramebuffer[xe],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);m(v)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let xe=0,Be=re.length;xe<Be;xe++){let Ge=re[xe],le=n.get(Ge),fe=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(fe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,le.__webglTexture),q(fe,Ge),Q(O.__webglFramebuffer,A,Ge,i.COLOR_ATTACHMENT0+xe,fe,0),m(Ge)&&p(fe)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(xe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,Y.__webglTexture),q(xe,v),v.mipmaps&&v.mipmaps.length>0)for(let Be=0;Be<v.mipmaps.length;Be++)Q(O.__webglFramebuffer[Be],A,v,i.COLOR_ATTACHMENT0,xe,Be);else Q(O.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,xe,0);m(v)&&p(xe),t.unbindTexture()}A.depthBuffer&&Me(A)}function Z(A){let v=A.textures;for(let O=0,Y=v.length;O<Y;O++){let re=v[O];if(m(re)){let J=y(A),Ie=n.get(re).__webglTexture;t.bindTexture(J,Ie),p(J),t.unbindTexture()}}}let ae=[],te=[];function me(A){if(A.samples>0){if(ke(A)===!1){let v=A.textures,O=A.width,Y=A.height,re=i.COLOR_BUFFER_BIT,J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(A),xe=v.length>1;if(xe)for(let Ge=0;Ge<v.length;Ge++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);let Be=A.texture.mipmaps;Be&&Be.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ge=0;Ge<v.length;Ge++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),xe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ge]);let le=n.get(v[Ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,le,0)}i.blitFramebuffer(0,0,O,Y,0,0,O,Y,re,i.NEAREST),l===!0&&(ae.length=0,te.length=0,ae.push(i.COLOR_ATTACHMENT0+Ge),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ae.push(J),te.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,te)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ae))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let Ge=0;Ge<v.length;Ge++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ge,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ge]);let le=n.get(v[Ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ge,i.TEXTURE_2D,le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function R(A){return Math.min(s.maxSamples,A.samples)}function ke(A){let v=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ee(A){let v=a.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function He(A,v){let O=A.colorSpace,Y=A.format,re=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==ji&&O!==gn&&(nt.getTransfer(O)===ot?(Y!==rn||re!==sn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",O)),v}function ge(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=L,this.setTexture2D=D,this.setTexture2DArray=B,this.setTexture3D=U,this.setTextureCube=ie,this.rebindTextures=Fe,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=ke,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function wv(i,e){function t(n,s=gn){let r,a=nt.getTransfer(s);if(n===sn)return i.UNSIGNED_BYTE;if(n===Vo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ho)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yc)return i.BYTE;if(n===Zc)return i.SHORT;if(n===tr)return i.UNSIGNED_SHORT;if(n===ko)return i.INT;if(n===On)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===qn)return i.HALF_FLOAT;if(n===Kc)return i.ALPHA;if(n===Qc)return i.RGB;if(n===rn)return i.RGBA;if(n===Vn)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===Go)return i.RED;if(n===Wo)return i.RED_INTEGER;if(n===ls)return i.RG;if(n===Xo)return i.RG_INTEGER;if(n===qo)return i.RGBA_INTEGER;if(n===na||n===ia||n===sa||n===ra)if(a===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$o||n===Yo||n===Zo||n===Jo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jo||n===Ko||n===Qo||n===el||n===tl||n===nl||n===il)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jo||n===Ko)return a===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===el)return r.COMPRESSED_R11_EAC;if(n===tl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===nl)return r.COMPRESSED_RG11_EAC;if(n===il)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===xl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===al)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ol)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ll)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ul)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ml)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xl)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_l||n===vl||n===yl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_l)return a===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ml||n===bl||n===Sl||n===wl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ml)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Tv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ev=`
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

}`,Mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ur(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new pn({vertexShader:Tv,fragmentShader:Ev,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new Ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bh=class extends Hn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new Mh,p={},y=t.getContextAttributes(),b=null,M=null,T=[],E=[],I=new de,_=null,S=new Bt;S.viewport=new Mt;let k=new Bt;k.viewport=new Mt;let C=[S,k],L=new Uo,N=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let K=T[H];return K===void 0&&(K=new qs,T[H]=K),K.getTargetRaySpace()},this.getControllerGrip=function(H){let K=T[H];return K===void 0&&(K=new qs,T[H]=K),K.getGripSpace()},this.getHand=function(H){let K=T[H];return K===void 0&&(K=new qs,T[H]=K),K.getHandSpace()};function D(H){let K=E.indexOf(H.inputSource);if(K===-1)return;let Q=T[K];Q!==void 0&&(Q.update(H.inputSource,H.frame,c||a),Q.dispatchEvent({type:H.type,data:H.inputSource}))}function B(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",U);for(let H=0;H<T.length;H++){let K=E[H];K!==null&&(E[H]=null,T[H].disconnect(K))}N=null,z=null,m.reset();for(let H in p)delete p[H];e.setRenderTarget(b),f=null,u=null,d=null,s=null,M=null,ee.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",B),s.addEventListener("inputsourceschange",U),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,ve=null,he=null;y.depth&&(he=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=y.stencil?Di:Vn,ve=y.stencil?nr:On);let Me={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Me),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new un(u.textureWidth,u.textureHeight,{format:rn,type:sn,depthTexture:new Ti(u.textureWidth,u.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let Q={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Q),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new un(f.framebufferWidth,f.framebufferHeight,{format:rn,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ee.setContext(s),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U(H){for(let K=0;K<H.removed.length;K++){let Q=H.removed[K],ve=E.indexOf(Q);ve>=0&&(E[ve]=null,T[ve].disconnect(Q))}for(let K=0;K<H.added.length;K++){let Q=H.added[K],ve=E.indexOf(Q);if(ve===-1){for(let Me=0;Me<T.length;Me++)if(Me>=E.length){E.push(Q),ve=Me;break}else if(E[Me]===null){E[Me]=Q,ve=Me;break}if(ve===-1)break}let he=T[ve];he&&he.connect(Q)}}let ie=new P,ne=new P;function _e(H,K,Q){ie.setFromMatrixPosition(K.matrixWorld),ne.setFromMatrixPosition(Q.matrixWorld);let ve=ie.distanceTo(ne),he=K.projectionMatrix.elements,Me=Q.projectionMatrix.elements,Fe=he[14]/(he[10]-1),Te=he[14]/(he[10]+1),Z=(he[9]+1)/he[5],ae=(he[9]-1)/he[5],te=(he[8]-1)/he[0],me=(Me[8]+1)/Me[0],R=Fe*te,ke=Fe*me,Ee=ve/(-te+me),He=Ee*-te;if(K.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(He),H.translateZ(Ee),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),he[10]===-1)H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let ge=Fe+Ee,A=Te+Ee,v=R-He,O=ke+(ve-He),Y=Z*Te/A*ge,re=ae*Te/A*ge;H.projectionMatrix.makePerspective(v,O,Y,re,ge,A),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function ue(H,K){K===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(K.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let K=H.near,Q=H.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(Q=m.depthFar)),L.near=k.near=S.near=K,L.far=k.far=S.far=Q,(N!==L.near||z!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),N=L.near,z=L.far),L.layers.mask=H.layers.mask|6,S.layers.mask=L.layers.mask&-5,k.layers.mask=L.layers.mask&-3;let ve=H.parent,he=L.cameras;ue(L,ve);for(let Me=0;Me<he.length;Me++)ue(he[Me],ve);he.length===2?_e(L,S,k):L.projectionMatrix.copy(S.projectionMatrix),q(H,L,ve)};function q(H,K,Q){Q===null?H.matrix.copy(K.matrixWorld):(H.matrix.copy(Q.matrixWorld),H.matrix.invert(),H.matrix.multiply(K.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(K.projectionMatrix),H.projectionMatrixInverse.copy(K.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Ws*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(H){l=H,u!==null&&(u.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(H){return p[H]};let se=null;function oe(H,K){if(h=K.getViewerPose(c||a),g=K,h!==null){let Q=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let ve=!1;Q.length!==L.cameras.length&&(L.cameras.length=0,ve=!0);for(let Te=0;Te<Q.length;Te++){let Z=Q[Te],ae=null;if(f!==null)ae=f.getViewport(Z);else{let me=d.getViewSubImage(u,Z);ae=me.viewport,Te===0&&(e.setRenderTargetTextures(M,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(M))}let te=C[Te];te===void 0&&(te=new Bt,te.layers.enable(Te),te.viewport=new Mt,C[Te]=te),te.matrix.fromArray(Z.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Z.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(ae.x,ae.y,ae.width,ae.height),Te===0&&(L.matrix.copy(te.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),ve===!0&&L.cameras.push(te)}let he=s.enabledFeatures;if(he&&he.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let Te=d.getDepthInformation(Q[0]);Te&&Te.isValid&&Te.texture&&m.init(Te,s.renderState)}if(he&&he.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let Te=0;Te<Q.length;Te++){let Z=Q[Te].camera;if(Z){let ae=p[Z];ae||(ae=new Ur,p[Z]=ae);let te=d.getCameraImage(Z);ae.sourceTexture=te}}}}for(let Q=0;Q<T.length;Q++){let ve=E[Q],he=T[Q];ve!==null&&he!==void 0&&he.update(ve,K,c||a)}se&&se(H,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}let ee=new cf;ee.setAnimationLoop(oe),this.setAnimationLoop=function(H){se=H},this.dispose=function(){}}},fs=new Sn,Av=new lt;function Cv(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,sh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,b,M){p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),b=y.envMap,M=y.envMapRotation;b&&(m.envMap.value=b,fs.copy(M),fs.x*=-1,fs.y*=-1,fs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),m.envMapRotation.value.setFromMatrix4(Av.makeRotationFromEuler(fs)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Rv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let M=b.program;n.uniformBlockBinding(y,M)}function c(y,b){let M=s[y.id];M===void 0&&(g(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",m));let T=b.program;n.updateUBOMapping(y,T);let E=e.render.frame;r[y.id]!==E&&(u(y),r[y.id]=E)}function h(y){let b=d();y.__bindingPointIndex=b;let M=i.createBuffer(),T=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,T,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let b=s[y.id],M=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let E=0,I=M.length;E<I;E++){let _=Array.isArray(M[E])?M[E]:[M[E]];for(let S=0,k=_.length;S<k;S++){let C=_[S];if(f(C,E,S,T)===!0){let L=C.__offset,N=Array.isArray(C.value)?C.value:[C.value],z=0;for(let D=0;D<N.length;D++){let B=N[D],U=x(B);typeof B=="number"||typeof B=="boolean"?(C.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,L+z,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=0,C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=0,C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=0):(B.toArray(C.__data,z),z+=U.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,b,M,T){let E=y.value,I=b+"_"+M;if(T[I]===void 0)return typeof E=="number"||typeof E=="boolean"?T[I]=E:T[I]=E.clone(),!0;{let _=T[I];if(typeof E=="number"||typeof E=="boolean"){if(_!==E)return T[I]=E,!0}else if(_.equals(E)===!1)return _.copy(E),!0}return!1}function g(y){let b=y.uniforms,M=0,T=16;for(let I=0,_=b.length;I<_;I++){let S=Array.isArray(b[I])?b[I]:[b[I]];for(let k=0,C=S.length;k<C;k++){let L=S[k],N=Array.isArray(L.value)?L.value:[L.value];for(let z=0,D=N.length;z<D;z++){let B=N[z],U=x(B),ie=M%T,ne=ie%U.boundary,_e=ie+ne;M+=ne,_e!==0&&T-_e<U.storage&&(M+=T-_e),L.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=M,M+=U.storage}}}let E=M%T;return E>0&&(M+=T-E),y.__size=M,y.__cache={},this}function x(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ve("WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){let b=y.target;b.removeEventListener("dispose",m);let M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Iv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$n=null;function Pv(){return $n===null&&($n=new Ir(Iv,16,16,ls,qn),$n.name="DFG_LUT",$n.minFilter=It,$n.magFilter=It,$n.wrapS=bn,$n.wrapT=bn,$n.generateMipmaps=!1,$n.needsUpdate=!0),$n}var Pl=class{constructor(e={}){let{canvas:t=Rd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=sn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=f,m=new Set([qo,Xo,Wo]),p=new Set([sn,On,tr,nr,Vo,Ho]),y=new Uint32Array(4),b=new Int32Array(4),M=null,T=null,E=[],I=[],_=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,k=!1;this._outputColorSpace=At;let C=0,L=0,N=null,z=-1,D=null,B=new Mt,U=new Mt,ie=null,ne=new qe(0),_e=0,ue=t.width,q=t.height,se=1,oe=null,ee=null,H=new Mt(0,0,ue,q),K=new Mt(0,0,ue,q),Q=!1,ve=new $s,he=!1,Me=!1,Fe=new lt,Te=new P,Z=new Mt,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},te=!1;function me(){return N===null?se:1}let R=n;function ke(w,V){return t.getContext(w,V)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"183"}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",gt,!1),R===null){let V="webgl2";if(R=ke(V,w),R===null)throw ke(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw We("WebGLRenderer: "+w.message),w}let Ee,He,ge,A,v,O,Y,re,J,Ie,xe,Be,Ge,le,fe,Pe,De,Ae,Qe,F,ye,pe,Re;function ce(){Ee=new zx(R),Ee.init(),ye=new wv(R,Ee),He=new Px(R,Ee,e,ye),ge=new bv(R,Ee),He.reversedDepthBuffer&&u&&ge.buffers.depth.setReversed(!0),A=new Hx(R),v=new lv,O=new Sv(R,Ee,ge,v,He,ye,A),Y=new Bx(S),re=new $m(R),pe=new Rx(R,re),J=new kx(R,re,A,pe),Ie=new Wx(R,J,re,pe,A),Ae=new Gx(R,He,O),fe=new Lx(v),xe=new ov(S,Y,Ee,He,pe,fe),Be=new Cv(S,v),Ge=new hv,le=new gv(Ee),De=new Cx(S,Y,ge,Ie,g,l),Pe=new Mv(S,Ie,He),Re=new Rv(R,A,He,ge),Qe=new Ix(R,Ee,A),F=new Vx(R,Ee,A),A.programs=xe.programs,S.capabilities=He,S.extensions=Ee,S.properties=v,S.renderLists=Ge,S.shadowMap=Pe,S.state=ge,S.info=A}ce(),x!==sn&&(_=new qx(x,t.width,t.height,s,r));let j=new bh(S,R);this.xr=j,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let w=Ee.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ee.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(w){w!==void 0&&(se=w,this.setSize(ue,q,!1))},this.getSize=function(w){return w.set(ue,q)},this.setSize=function(w,V,$=!0){if(j.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}ue=w,q=V,t.width=Math.floor(w*se),t.height=Math.floor(V*se),$===!0&&(t.style.width=w+"px",t.style.height=V+"px"),_!==null&&_.setSize(t.width,t.height),this.setViewport(0,0,w,V)},this.getDrawingBufferSize=function(w){return w.set(ue*se,q*se).floor()},this.setDrawingBufferSize=function(w,V,$){ue=w,q=V,se=$,t.width=Math.floor(w*$),t.height=Math.floor(V*$),this.setViewport(0,0,w,V)},this.setEffects=function(w){if(x===sn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let V=0;V<w.length;V++)if(w[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(B)},this.getViewport=function(w){return w.copy(H)},this.setViewport=function(w,V,$,W){w.isVector4?H.set(w.x,w.y,w.z,w.w):H.set(w,V,$,W),ge.viewport(B.copy(H).multiplyScalar(se).round())},this.getScissor=function(w){return w.copy(K)},this.setScissor=function(w,V,$,W){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,V,$,W),ge.scissor(U.copy(K).multiplyScalar(se).round())},this.getScissorTest=function(){return Q},this.setScissorTest=function(w){ge.setScissorTest(Q=w)},this.setOpaqueSort=function(w){oe=w},this.setTransparentSort=function(w){ee=w},this.getClearColor=function(w){return w.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(w=!0,V=!0,$=!0){let W=0;if(w){let G=!1;if(N!==null){let Se=N.texture.format;G=m.has(Se)}if(G){let Se=N.texture.type,Ce=p.has(Se),we=De.getClearColor(),Ne=De.getClearAlpha(),Oe=we.r,Ze=we.g,et=we.b;Ce?(y[0]=Oe,y[1]=Ze,y[2]=et,y[3]=Ne,R.clearBufferuiv(R.COLOR,0,y)):(b[0]=Oe,b[1]=Ze,b[2]=et,b[3]=Ne,R.clearBufferiv(R.COLOR,0,b))}else W|=R.COLOR_BUFFER_BIT}V&&(W|=R.DEPTH_BUFFER_BIT),$&&(W|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&R.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",gt,!1),De.dispose(),Ge.dispose(),le.dispose(),v.dispose(),Y.dispose(),Ie.dispose(),pe.dispose(),Re.dispose(),xe.dispose(),j.dispose(),j.removeEventListener("sessionstart",pu),j.removeEventListener("sessionend",mu),ki.stop()};function Le(w){w.preventDefault(),th("WebGLRenderer: Context Lost."),k=!0}function Ye(){th("WebGLRenderer: Context Restored."),k=!1;let w=A.autoReset,V=Pe.enabled,$=Pe.autoUpdate,W=Pe.needsUpdate,G=Pe.type;ce(),A.autoReset=w,Pe.enabled=V,Pe.autoUpdate=$,Pe.needsUpdate=W,Pe.type=G}function gt(w){We("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ct(w){let V=w.target;V.removeEventListener("dispose",ct),Kn(V)}function Kn(w){Qn(w),v.remove(w)}function Qn(w){let V=v.get(w).programs;V!==void 0&&(V.forEach(function($){xe.releaseProgram($)}),w.isShaderMaterial&&xe.releaseShaderCache(w))}this.renderBufferDirect=function(w,V,$,W,G,Se){V===null&&(V=ae);let Ce=G.isMesh&&G.matrixWorld.determinant()<0,we=yp(w,V,$,W,G);ge.setMaterial(W,Ce);let Ne=$.index,Oe=1;if(W.wireframe===!0){if(Ne=J.getWireframeAttribute($),Ne===void 0)return;Oe=2}let Ze=$.drawRange,et=$.attributes.position,ze=Ze.start*Oe,ut=(Ze.start+Ze.count)*Oe;Se!==null&&(ze=Math.max(ze,Se.start*Oe),ut=Math.min(ut,(Se.start+Se.count)*Oe)),Ne!==null?(ze=Math.max(ze,0),ut=Math.min(ut,Ne.count)):et!=null&&(ze=Math.max(ze,0),ut=Math.min(ut,et.count));let wt=ut-ze;if(wt<0||wt===1/0)return;pe.setup(G,W,we,$,Ne);let bt,dt=Qe;if(Ne!==null&&(bt=re.get(Ne),dt=F,dt.setIndex(bt)),G.isMesh)W.wireframe===!0?(ge.setLineWidth(W.wireframeLinewidth*me()),dt.setMode(R.LINES)):dt.setMode(R.TRIANGLES);else if(G.isLine){let qt=W.linewidth;qt===void 0&&(qt=1),ge.setLineWidth(qt*me()),G.isLineSegments?dt.setMode(R.LINES):G.isLineLoop?dt.setMode(R.LINE_LOOP):dt.setMode(R.LINE_STRIP)}else G.isPoints?dt.setMode(R.POINTS):G.isSprite&&dt.setMode(R.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Tr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))dt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let qt=G._multiDrawStarts,Ue=G._multiDrawCounts,ln=G._multiDrawCount,st=Ne?re.get(Ne).bytesPerElement:1,In=v.get(W).currentProgram.getUniforms();for(let zn=0;zn<ln;zn++)In.setValue(R,"_gl_DrawID",zn),dt.render(qt[zn]/st,Ue[zn])}else if(G.isInstancedMesh)dt.renderInstances(ze,wt,G.count);else if($.isInstancedBufferGeometry){let qt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ue=Math.min($.instanceCount,qt);dt.renderInstances(ze,wt,Ue)}else dt.render(ze,wt)};function fu(w,V,$){w.transparent===!0&&w.side===nn&&w.forceSinglePass===!1?(w.side=Vt,w.needsUpdate=!0,wa(w,V,$),w.side=ai,w.needsUpdate=!0,wa(w,V,$),w.side=nn):wa(w,V,$)}this.compile=function(w,V,$=null){$===null&&($=w),T=le.get($),T.init(V),I.push(T),$.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),w!==$&&w.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights();let W=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let Se=G.material;if(Se)if(Array.isArray(Se))for(let Ce=0;Ce<Se.length;Ce++){let we=Se[Ce];fu(we,$,G),W.add(we)}else fu(Se,$,G),W.add(Se)}),T=I.pop(),W},this.compileAsync=function(w,V,$=null){let W=this.compile(w,V,$);return new Promise(G=>{function Se(){if(W.forEach(function(Ce){v.get(Ce).currentProgram.isReady()&&W.delete(Ce)}),W.size===0){G(w);return}setTimeout(Se,10)}Ee.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Jl=null;function vp(w){Jl&&Jl(w)}function pu(){ki.stop()}function mu(){ki.start()}let ki=new cf;ki.setAnimationLoop(vp),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(w){Jl=w,j.setAnimationLoop(w),w===null?ki.stop():ki.start()},j.addEventListener("sessionstart",pu),j.addEventListener("sessionend",mu),this.render=function(w,V){if(V!==void 0&&V.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;let $=j.enabled===!0&&j.isPresenting===!0,W=_!==null&&(N===null||$)&&_.begin(S,N);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(j.cameraAutoUpdate===!0&&j.updateCamera(V),V=j.getCamera()),w.isScene===!0&&w.onBeforeRender(S,w,V,N),T=le.get(w,I.length),T.init(V),I.push(T),Fe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ve.setFromProjectionMatrix(Fe,Nn,V.reversedDepth),Me=this.localClippingEnabled,he=fe.init(this.clippingPlanes,Me),M=Ge.get(w,E.length),M.init(),E.push(M),j.enabled===!0&&j.isPresenting===!0){let Ce=S.xr.getDepthSensingMesh();Ce!==null&&jl(Ce,V,-1/0,S.sortObjects)}jl(w,V,0,S.sortObjects),M.finish(),S.sortObjects===!0&&M.sort(oe,ee),te=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,te&&De.addToRenderList(M,w),this.info.render.frame++,he===!0&&fe.beginShadows();let G=T.state.shadowsArray;if(Pe.render(G,w,V),he===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&_.hasRenderPass())===!1){let Ce=M.opaque,we=M.transmissive;if(T.setupLights(),V.isArrayCamera){let Ne=V.cameras;if(we.length>0)for(let Oe=0,Ze=Ne.length;Oe<Ze;Oe++){let et=Ne[Oe];xu(Ce,we,w,et)}te&&De.render(w);for(let Oe=0,Ze=Ne.length;Oe<Ze;Oe++){let et=Ne[Oe];gu(M,w,et,et.viewport)}}else we.length>0&&xu(Ce,we,w,V),te&&De.render(w),gu(M,w,V)}N!==null&&L===0&&(O.updateMultisampleRenderTarget(N),O.updateRenderTargetMipmap(N)),W&&_.end(S),w.isScene===!0&&w.onAfterRender(S,w,V),pe.resetDefaultState(),z=-1,D=null,I.pop(),I.length>0?(T=I[I.length-1],he===!0&&fe.setGlobalState(S.clippingPlanes,T.state.camera)):T=null,E.pop(),E.length>0?M=E[E.length-1]:M=null};function jl(w,V,$,W){if(w.visible===!1)return;if(w.layers.test(V.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(V);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ve.intersectsSprite(w)){W&&Z.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Fe);let Ce=Ie.update(w),we=w.material;we.visible&&M.push(w,Ce,we,$,Z.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ve.intersectsObject(w))){let Ce=Ie.update(w),we=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Z.copy(w.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Z.copy(Ce.boundingSphere.center)),Z.applyMatrix4(w.matrixWorld).applyMatrix4(Fe)),Array.isArray(we)){let Ne=Ce.groups;for(let Oe=0,Ze=Ne.length;Oe<Ze;Oe++){let et=Ne[Oe],ze=we[et.materialIndex];ze&&ze.visible&&M.push(w,Ce,ze,$,Z.z,et)}}else we.visible&&M.push(w,Ce,we,$,Z.z,null)}}let Se=w.children;for(let Ce=0,we=Se.length;Ce<we;Ce++)jl(Se[Ce],V,$,W)}function gu(w,V,$,W){let{opaque:G,transmissive:Se,transparent:Ce}=w;T.setupLightsView($),he===!0&&fe.setGlobalState(S.clippingPlanes,$),W&&ge.viewport(B.copy(W)),G.length>0&&Sa(G,V,$),Se.length>0&&Sa(Se,V,$),Ce.length>0&&Sa(Ce,V,$),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function xu(w,V,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){let ze=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new un(1,1,{generateMipmaps:!0,type:ze?qn:sn,minFilter:Xn,samples:Math.max(4,He.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace})}let Se=T.state.transmissionRenderTarget[W.id],Ce=W.viewport||B;Se.setSize(Ce.z*S.transmissionResolutionScale,Ce.w*S.transmissionResolutionScale);let we=S.getRenderTarget(),Ne=S.getActiveCubeFace(),Oe=S.getActiveMipmapLevel();S.setRenderTarget(Se),S.getClearColor(ne),_e=S.getClearAlpha(),_e<1&&S.setClearColor(16777215,.5),S.clear(),te&&De.render($);let Ze=S.toneMapping;S.toneMapping=Fn;let et=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),he===!0&&fe.setGlobalState(S.clippingPlanes,W),Sa(w,$,W),O.updateMultisampleRenderTarget(Se),O.updateRenderTargetMipmap(Se),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let ut=0,wt=V.length;ut<wt;ut++){let bt=V[ut],{object:dt,geometry:qt,material:Ue,group:ln}=bt;if(Ue.side===nn&&dt.layers.test(W.layers)){let st=Ue.side;Ue.side=Vt,Ue.needsUpdate=!0,_u(dt,$,W,qt,Ue,ln),Ue.side=st,Ue.needsUpdate=!0,ze=!0}}ze===!0&&(O.updateMultisampleRenderTarget(Se),O.updateRenderTargetMipmap(Se))}S.setRenderTarget(we,Ne,Oe),S.setClearColor(ne,_e),et!==void 0&&(W.viewport=et),S.toneMapping=Ze}function Sa(w,V,$){let W=V.isScene===!0?V.overrideMaterial:null;for(let G=0,Se=w.length;G<Se;G++){let Ce=w[G],{object:we,geometry:Ne,group:Oe}=Ce,Ze=Ce.material;Ze.allowOverride===!0&&W!==null&&(Ze=W),we.layers.test($.layers)&&_u(we,V,$,Ne,Ze,Oe)}}function _u(w,V,$,W,G,Se){w.onBeforeRender(S,V,$,W,G,Se),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(S,V,$,W,w,Se),G.transparent===!0&&G.side===nn&&G.forceSinglePass===!1?(G.side=Vt,G.needsUpdate=!0,S.renderBufferDirect($,V,W,G,w,Se),G.side=ai,G.needsUpdate=!0,S.renderBufferDirect($,V,W,G,w,Se),G.side=nn):S.renderBufferDirect($,V,W,G,w,Se),w.onAfterRender(S,V,$,W,G,Se)}function wa(w,V,$){V.isScene!==!0&&(V=ae);let W=v.get(w),G=T.state.lights,Se=T.state.shadowsArray,Ce=G.state.version,we=xe.getParameters(w,G.state,Se,V,$),Ne=xe.getProgramCacheKey(we),Oe=W.programs;W.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?V.environment:null,W.fog=V.fog;let Ze=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;W.envMap=Y.get(w.envMap||W.environment,Ze),W.envMapRotation=W.environment!==null&&w.envMap===null?V.environmentRotation:w.envMapRotation,Oe===void 0&&(w.addEventListener("dispose",ct),Oe=new Map,W.programs=Oe);let et=Oe.get(Ne);if(et!==void 0){if(W.currentProgram===et&&W.lightsStateVersion===Ce)return yu(w,we),et}else we.uniforms=xe.getUniforms(w),w.onBeforeCompile(we,S),et=xe.acquireProgram(we,Ne),Oe.set(Ne,et),W.uniforms=we.uniforms;let ze=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ze.clippingPlanes=fe.uniform),yu(w,we),W.needsLights=bp(w),W.lightsStateVersion=Ce,W.needsLights&&(ze.ambientLightColor.value=G.state.ambient,ze.lightProbe.value=G.state.probe,ze.directionalLights.value=G.state.directional,ze.directionalLightShadows.value=G.state.directionalShadow,ze.spotLights.value=G.state.spot,ze.spotLightShadows.value=G.state.spotShadow,ze.rectAreaLights.value=G.state.rectArea,ze.ltc_1.value=G.state.rectAreaLTC1,ze.ltc_2.value=G.state.rectAreaLTC2,ze.pointLights.value=G.state.point,ze.pointLightShadows.value=G.state.pointShadow,ze.hemisphereLights.value=G.state.hemi,ze.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ze.spotLightMatrix.value=G.state.spotLightMatrix,ze.spotLightMap.value=G.state.spotLightMap,ze.pointShadowMatrix.value=G.state.pointShadowMatrix),W.currentProgram=et,W.uniformsList=null,et}function vu(w){if(w.uniformsList===null){let V=w.currentProgram.getUniforms();w.uniformsList=sr.seqWithValue(V.seq,w.uniforms)}return w.uniformsList}function yu(w,V){let $=v.get(w);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function yp(w,V,$,W,G){V.isScene!==!0&&(V=ae),O.resetTextureUnits();let Se=V.fog,Ce=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?V.environment:null,we=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ji,Ne=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Oe=Y.get(W.envMap||Ce,Ne),Ze=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,et=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),ze=!!$.morphAttributes.position,ut=!!$.morphAttributes.normal,wt=!!$.morphAttributes.color,bt=Fn;W.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(bt=S.toneMapping);let dt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,qt=dt!==void 0?dt.length:0,Ue=v.get(W),ln=T.state.lights;if(he===!0&&(Me===!0||w!==D)){let Nt=w===D&&W.id===z;fe.setState(W,w,Nt)}let st=!1;W.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==ln.state.version||Ue.outputColorSpace!==we||G.isBatchedMesh&&Ue.batching===!1||!G.isBatchedMesh&&Ue.batching===!0||G.isBatchedMesh&&Ue.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ue.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ue.instancing===!1||!G.isInstancedMesh&&Ue.instancing===!0||G.isSkinnedMesh&&Ue.skinning===!1||!G.isSkinnedMesh&&Ue.skinning===!0||G.isInstancedMesh&&Ue.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ue.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ue.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ue.instancingMorph===!1&&G.morphTexture!==null||Ue.envMap!==Oe||W.fog===!0&&Ue.fog!==Se||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==fe.numPlanes||Ue.numIntersection!==fe.numIntersection)||Ue.vertexAlphas!==Ze||Ue.vertexTangents!==et||Ue.morphTargets!==ze||Ue.morphNormals!==ut||Ue.morphColors!==wt||Ue.toneMapping!==bt||Ue.morphTargetsCount!==qt)&&(st=!0):(st=!0,Ue.__version=W.version);let In=Ue.currentProgram;st===!0&&(In=wa(W,V,G));let zn=!1,Vi=!1,Ss=!1,pt=In.getUniforms(),Ot=Ue.uniforms;if(ge.useProgram(In.program)&&(zn=!0,Vi=!0,Ss=!0),W.id!==z&&(z=W.id,Vi=!0),zn||D!==w){ge.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),pt.setValue(R,"projectionMatrix",w.projectionMatrix),pt.setValue(R,"viewMatrix",w.matrixWorldInverse);let pi=pt.map.cameraPosition;pi!==void 0&&pi.setValue(R,Te.setFromMatrixPosition(w.matrixWorld)),He.logarithmicDepthBuffer&&pt.setValue(R,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&pt.setValue(R,"isOrthographic",w.isOrthographicCamera===!0),D!==w&&(D=w,Vi=!0,Ss=!0)}if(Ue.needsLights&&(ln.state.directionalShadowMap.length>0&&pt.setValue(R,"directionalShadowMap",ln.state.directionalShadowMap,O),ln.state.spotShadowMap.length>0&&pt.setValue(R,"spotShadowMap",ln.state.spotShadowMap,O),ln.state.pointShadowMap.length>0&&pt.setValue(R,"pointShadowMap",ln.state.pointShadowMap,O)),G.isSkinnedMesh){pt.setOptional(R,G,"bindMatrix"),pt.setOptional(R,G,"bindMatrixInverse");let Nt=G.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),pt.setValue(R,"boneTexture",Nt.boneTexture,O))}G.isBatchedMesh&&(pt.setOptional(R,G,"batchingTexture"),pt.setValue(R,"batchingTexture",G._matricesTexture,O),pt.setOptional(R,G,"batchingIdTexture"),pt.setValue(R,"batchingIdTexture",G._indirectTexture,O),pt.setOptional(R,G,"batchingColorTexture"),G._colorsTexture!==null&&pt.setValue(R,"batchingColorTexture",G._colorsTexture,O));let fi=$.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&Ae.update(G,$,In),(Vi||Ue.receiveShadow!==G.receiveShadow)&&(Ue.receiveShadow=G.receiveShadow,pt.setValue(R,"receiveShadow",G.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&V.environment!==null&&(Ot.envMapIntensity.value=V.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=Pv()),Vi&&(pt.setValue(R,"toneMappingExposure",S.toneMappingExposure),Ue.needsLights&&Mp(Ot,Ss),Se&&W.fog===!0&&Be.refreshFogUniforms(Ot,Se),Be.refreshMaterialUniforms(Ot,W,se,q,T.state.transmissionRenderTarget[w.id]),sr.upload(R,vu(Ue),Ot,O)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(sr.upload(R,vu(Ue),Ot,O),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&pt.setValue(R,"center",G.center),pt.setValue(R,"modelViewMatrix",G.modelViewMatrix),pt.setValue(R,"normalMatrix",G.normalMatrix),pt.setValue(R,"modelMatrix",G.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let Nt=W.uniformsGroups;for(let pi=0,ws=Nt.length;pi<ws;pi++){let Mu=Nt[pi];Re.update(Mu,In),Re.bind(Mu,In)}}return In}function Mp(w,V){w.ambientLightColor.needsUpdate=V,w.lightProbe.needsUpdate=V,w.directionalLights.needsUpdate=V,w.directionalLightShadows.needsUpdate=V,w.pointLights.needsUpdate=V,w.pointLightShadows.needsUpdate=V,w.spotLights.needsUpdate=V,w.spotLightShadows.needsUpdate=V,w.rectAreaLights.needsUpdate=V,w.hemisphereLights.needsUpdate=V}function bp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(w,V,$){let W=v.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),v.get(w.texture).__webglTexture=V,v.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,V){let $=v.get(w);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0};let Sp=R.createFramebuffer();this.setRenderTarget=function(w,V=0,$=0){N=w,C=V,L=$;let W=null,G=!1,Se=!1;if(w){let we=v.get(w);if(we.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(R.FRAMEBUFFER,we.__webglFramebuffer),B.copy(w.viewport),U.copy(w.scissor),ie=w.scissorTest,ge.viewport(B),ge.scissor(U),ge.setScissorTest(ie),z=-1;return}else if(we.__webglFramebuffer===void 0)O.setupRenderTarget(w);else if(we.__hasExternalTextures)O.rebindTextures(w,v.get(w.texture).__webglTexture,v.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ze=w.depthTexture;if(we.__boundDepthTexture!==Ze){if(Ze!==null&&v.has(Ze)&&(w.width!==Ze.image.width||w.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(w)}}let Ne=w.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Se=!0);let Oe=v.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[V])?W=Oe[V][$]:W=Oe[V],G=!0):w.samples>0&&O.useMultisampledRTT(w)===!1?W=v.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?W=Oe[$]:W=Oe,B.copy(w.viewport),U.copy(w.scissor),ie=w.scissorTest}else B.copy(H).multiplyScalar(se).floor(),U.copy(K).multiplyScalar(se).floor(),ie=Q;if($!==0&&(W=Sp),ge.bindFramebuffer(R.FRAMEBUFFER,W)&&ge.drawBuffers(w,W),ge.viewport(B),ge.scissor(U),ge.setScissorTest(ie),G){let we=v.get(w.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+V,we.__webglTexture,$)}else if(Se){let we=V;for(let Ne=0;Ne<w.textures.length;Ne++){let Oe=v.get(w.textures[Ne]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ne,Oe.__webglTexture,$,we)}}else if(w!==null&&$!==0){let we=v.get(w.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,we.__webglTexture,$)}z=-1},this.readRenderTargetPixels=function(w,V,$,W,G,Se,Ce,we=0){if(!(w&&w.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=v.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne){ge.bindFramebuffer(R.FRAMEBUFFER,Ne);try{let Oe=w.textures[we],Ze=Oe.format,et=Oe.type;if(w.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+we),!He.textureFormatReadable(Ze)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(et)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=w.width-W&&$>=0&&$<=w.height-G&&R.readPixels(V,$,W,G,ye.convert(Ze),ye.convert(et),Se)}finally{let Oe=N!==null?v.get(N).__webglFramebuffer:null;ge.bindFramebuffer(R.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(w,V,$,W,G,Se,Ce,we=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=v.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne)if(V>=0&&V<=w.width-W&&$>=0&&$<=w.height-G){ge.bindFramebuffer(R.FRAMEBUFFER,Ne);let Oe=w.textures[we],Ze=Oe.format,et=Oe.type;if(w.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+we),!He.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ze=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ze),R.bufferData(R.PIXEL_PACK_BUFFER,Se.byteLength,R.STREAM_READ),R.readPixels(V,$,W,G,ye.convert(Ze),ye.convert(et),0);let ut=N!==null?v.get(N).__webglFramebuffer:null;ge.bindFramebuffer(R.FRAMEBUFFER,ut);let wt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Pd(R,wt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ze),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Se),R.deleteBuffer(ze),R.deleteSync(wt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,V=null,$=0){let W=Math.pow(2,-$),G=Math.floor(w.image.width*W),Se=Math.floor(w.image.height*W),Ce=V!==null?V.x:0,we=V!==null?V.y:0;O.setTexture2D(w,0),R.copyTexSubImage2D(R.TEXTURE_2D,$,0,0,Ce,we,G,Se),ge.unbindTexture()};let wp=R.createFramebuffer(),Tp=R.createFramebuffer();this.copyTextureToTexture=function(w,V,$=null,W=null,G=0,Se=0){let Ce,we,Ne,Oe,Ze,et,ze,ut,wt,bt=w.isCompressedTexture?w.mipmaps[Se]:w.image;if($!==null)Ce=$.max.x-$.min.x,we=$.max.y-$.min.y,Ne=$.isBox3?$.max.z-$.min.z:1,Oe=$.min.x,Ze=$.min.y,et=$.isBox3?$.min.z:0;else{let Ot=Math.pow(2,-G);Ce=Math.floor(bt.width*Ot),we=Math.floor(bt.height*Ot),w.isDataArrayTexture?Ne=bt.depth:w.isData3DTexture?Ne=Math.floor(bt.depth*Ot):Ne=1,Oe=0,Ze=0,et=0}W!==null?(ze=W.x,ut=W.y,wt=W.z):(ze=0,ut=0,wt=0);let dt=ye.convert(V.format),qt=ye.convert(V.type),Ue;V.isData3DTexture?(O.setTexture3D(V,0),Ue=R.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(O.setTexture2DArray(V,0),Ue=R.TEXTURE_2D_ARRAY):(O.setTexture2D(V,0),Ue=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,V.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,V.unpackAlignment);let ln=R.getParameter(R.UNPACK_ROW_LENGTH),st=R.getParameter(R.UNPACK_IMAGE_HEIGHT),In=R.getParameter(R.UNPACK_SKIP_PIXELS),zn=R.getParameter(R.UNPACK_SKIP_ROWS),Vi=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,bt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,bt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Oe),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ze),R.pixelStorei(R.UNPACK_SKIP_IMAGES,et);let Ss=w.isDataArrayTexture||w.isData3DTexture,pt=V.isDataArrayTexture||V.isData3DTexture;if(w.isDepthTexture){let Ot=v.get(w),fi=v.get(V),Nt=v.get(Ot.__renderTarget),pi=v.get(fi.__renderTarget);ge.bindFramebuffer(R.READ_FRAMEBUFFER,Nt.__webglFramebuffer),ge.bindFramebuffer(R.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let ws=0;ws<Ne;ws++)Ss&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,v.get(w).__webglTexture,G,et+ws),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,v.get(V).__webglTexture,Se,wt+ws)),R.blitFramebuffer(Oe,Ze,Ce,we,ze,ut,Ce,we,R.DEPTH_BUFFER_BIT,R.NEAREST);ge.bindFramebuffer(R.READ_FRAMEBUFFER,null),ge.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(G!==0||w.isRenderTargetTexture||v.has(w)){let Ot=v.get(w),fi=v.get(V);ge.bindFramebuffer(R.READ_FRAMEBUFFER,wp),ge.bindFramebuffer(R.DRAW_FRAMEBUFFER,Tp);for(let Nt=0;Nt<Ne;Nt++)Ss?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ot.__webglTexture,G,et+Nt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ot.__webglTexture,G),pt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,fi.__webglTexture,Se,wt+Nt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,fi.__webglTexture,Se),G!==0?R.blitFramebuffer(Oe,Ze,Ce,we,ze,ut,Ce,we,R.COLOR_BUFFER_BIT,R.NEAREST):pt?R.copyTexSubImage3D(Ue,Se,ze,ut,wt+Nt,Oe,Ze,Ce,we):R.copyTexSubImage2D(Ue,Se,ze,ut,Oe,Ze,Ce,we);ge.bindFramebuffer(R.READ_FRAMEBUFFER,null),ge.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else pt?w.isDataTexture||w.isData3DTexture?R.texSubImage3D(Ue,Se,ze,ut,wt,Ce,we,Ne,dt,qt,bt.data):V.isCompressedArrayTexture?R.compressedTexSubImage3D(Ue,Se,ze,ut,wt,Ce,we,Ne,dt,bt.data):R.texSubImage3D(Ue,Se,ze,ut,wt,Ce,we,Ne,dt,qt,bt):w.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Se,ze,ut,Ce,we,dt,qt,bt.data):w.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Se,ze,ut,bt.width,bt.height,dt,bt.data):R.texSubImage2D(R.TEXTURE_2D,Se,ze,ut,Ce,we,dt,qt,bt);R.pixelStorei(R.UNPACK_ROW_LENGTH,ln),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,st),R.pixelStorei(R.UNPACK_SKIP_PIXELS,In),R.pixelStorei(R.UNPACK_SKIP_ROWS,zn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Vi),Se===0&&V.generateMipmaps&&R.generateMipmap(Ue),ge.unbindTexture()},this.initRenderTarget=function(w){v.get(w).__webglFramebuffer===void 0&&O.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?O.setTextureCube(w,0):w.isData3DTexture?O.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?O.setTexture2DArray(w,0):O.setTexture2D(w,0),ge.unbindTexture()},this.resetState=function(){C=0,L=0,N=null,ge.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var pf={type:"change"},Th={type:"start"},gf={type:"end"},Nl=new Ki,mf=new Mn,Lv=Math.cos(70*hs.DEG2RAD),Dt=new P,an=2*Math.PI,ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wh=1e-6,Ul=class extends Qr{constructor(e,t=null){super(e,t),this.state=ft.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ii.ROTATE,MIDDLE:Ii.DOLLY,RIGHT:Ii.PAN},this.touches={ONE:Pi.ROTATE,TWO:Pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new en,this._lastTargetPosition=new P,this._quat=new en().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ks,this._sphericalDelta=new Ks,this._scale=1,this._panOffset=new P,this._rotateStart=new de,this._rotateEnd=new de,this._rotateDelta=new de,this._panStart=new de,this._panEnd=new de,this._panDelta=new de,this._dollyStart=new de,this._dollyEnd=new de,this._dollyDelta=new de,this._dollyDirection=new P,this._mouse=new de,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Nv.bind(this),this._onPointerDown=Dv.bind(this),this._onPointerUp=Uv.bind(this),this._onContextMenu=Hv.bind(this),this._onMouseWheel=Bv.bind(this),this._onKeyDown=zv.bind(this),this._onTouchStart=kv.bind(this),this._onTouchMove=Vv.bind(this),this._onMouseDown=Fv.bind(this),this._onMouseMove=Ov.bind(this),this._interceptControlDown=Gv.bind(this),this._interceptControlUp=Wv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(pf),this.update(),this.state=ft.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Dt.copy(t).sub(this.target),Dt.applyQuaternion(this._quat),this._spherical.setFromVector3(Dt),this.autoRotate&&this.state===ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=an:n>Math.PI&&(n-=an),s<-Math.PI?s+=an:s>Math.PI&&(s-=an),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Dt.setFromSpherical(this._spherical),Dt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Dt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Nl.origin.copy(this.object.position),Nl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Nl.direction))<Lv?this.object.lookAt(this.target):(mf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Nl.intersectPlane(mf,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>wh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wh||this._lastTargetPosition.distanceToSquared(this.target)>wh?(this.dispatchEvent(pf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?an/60*this.autoRotateSpeed*e:an/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Dt.setFromMatrixColumn(t,0),Dt.multiplyScalar(-e),this._panOffset.add(Dt)}_panUp(e,t){this.screenSpacePanning===!0?Dt.setFromMatrixColumn(t,1):(Dt.setFromMatrixColumn(t,0),Dt.crossVectors(this.object.up,Dt)),Dt.multiplyScalar(e),this._panOffset.add(Dt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Dt.copy(s).sub(this.target);let r=Dt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new de,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Dv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Nv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Uv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gf),this.state=ft.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Fv(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ii.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ft.DOLLY;break;case Ii.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ft.ROTATE}break;case Ii.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ft.PAN}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Th)}function Ov(i){switch(this.state){case ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Bv(i){this.enabled===!1||this.enableZoom===!1||this.state!==ft.NONE||(i.preventDefault(),this.dispatchEvent(Th),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(gf))}function zv(i){this.enabled!==!1&&this._handleKeyDown(i)}function kv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Pi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ft.TOUCH_ROTATE;break;case Pi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ft.TOUCH_PAN;break;default:this.state=ft.NONE}break;case 2:switch(this.touches.TWO){case Pi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ft.TOUCH_DOLLY_PAN;break;case Pi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ft.TOUCH_DOLLY_ROTATE;break;default:this.state=ft.NONE}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Th)}function Vv(i){switch(this._trackPointer(i),this.state){case ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ft.NONE}}function Hv(i){this.enabled!==!1&&i.preventDefault()}function Gv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Wv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Fl=class extends Gn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Tt;e.deleteAttribute("uv");let t=new kt({side:Vt}),n=new kt,s=new jr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ht(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Lr(e,n,6),o=new Ft;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new ht(e,or(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ht(e,or(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new ht(e,or(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new ht(e,or(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new ht(e,or(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new ht(e,or(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function or(i){return new qr({color:0,emissive:16777215,emissiveIntensity:i})}function Xv(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,4,64,64,64);t.addColorStop(0,"rgba(0,0,0,0.55)"),t.addColorStop(.55,"rgba(0,0,0,0.22)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);let n=new ns(i);return n.colorSpace=At,n}function xf(i){i.traverse(e=>{(e.isMesh||e.isLine)&&(e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>n.dispose()))})}function qv(i){for(let e=i;e;e=e.parent)if(e.userData&&e.userData.moving)return!0;return!1}function $v(i){let e=new zt;return i.updateMatrixWorld(!0),i.traverse(t=>{!t.isMesh||qv(t)||e.expandByObject(t,!0)}),e.isEmpty()?new zt().setFromObject(i):e}var Ol=class{constructor(e,t){this.host=e,this.labelsHost=t,this.dimsOn=!0,this.labels=[];let n=this.renderer=new Pl({antialias:!0,alpha:!0});n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.outputColorSpace=At,n.toneMapping=ea,n.toneMappingExposure=.9,n.shadowMap.enabled=!0,n.shadowMap.type=rs,e.prepend(n.domElement);let s=this.scene=new Gn,r=new rr(n);s.environment=r.fromScene(new Fl,.04).texture,s.environmentIntensity=.75,this.camera=new Bt(35,1,.02,80);let a=this.controls=new Ul(this.camera,n.domElement);a.enableDamping=!0,a.dampingFactor=.08,a.maxPolarAngle=Math.PI*.495,a.minDistance=.25,a.maxDistance=14,a.screenSpacePanning=!0,a.autoRotateSpeed=1.2,a.addEventListener("start",()=>{a.autoRotate=!1,this.userMoved=!0,e.classList.add("touched")});let o=this.sun=new Kr(16777215,1.35);o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.bias=-4e-4,o.shadow.normalBias=.015,o.shadow.radius=4,s.add(o,o.target);let l=new ht(new Ei(40,40),new Xr({opacity:.26}));l.rotation.x=-Math.PI/2,l.receiveShadow=!0,s.add(l),this.blob=new ht(new Ei(1,1),new Qi({map:Xv(),transparent:!0,depthWrite:!1})),this.blob.rotation.x=-Math.PI/2,this.blob.renderOrder=-1,s.add(this.blob),this.root=new Ct,this.dims=new Ct,s.add(this.root,this.dims),this.resize(),new ResizeObserver(()=>this.resize()).observe(e),n.setAnimationLoop(()=>this.frame())}resize(){let e=this.host.clientWidth||1,t=this.host.clientHeight||1;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.bb&&!this.userMoved&&this.fit(!1)}frame(){this.controls.update(),this.labels.length&&this.placeLabels(),this.renderer.render(this.scene,this.camera)}setModel(e,t={}){for(let h of[...this.root.children])xf(h);this.root.clear(),this.root.add(e),e.updateMatrixWorld(!0);let n=this.bb=new zt().setFromObject(e);this.body=$v(e);let s=n.getSize(new P),r=n.getCenter(new P),a=Math.max(s.x,s.y,s.z)*.9+.3,o=this.sun.shadow.camera;o.left=-a,o.right=a,o.top=a,o.bottom=-a,o.near=.1,o.far=25,o.updateProjectionMatrix(),this.sun.position.set(r.x+1.8,4.5,r.z+3),this.sun.target.position.set(r.x,0,r.z);let l=n.min.y>.05;this.blob.scale.set(s.x*1.2+.15,s.z*1.5+.15,1),this.blob.position.set(r.x,.001,r.z),this.blob.material.opacity=l?.3:.75;let c=s.length()/2;(!t.keepView||!this.framedR||Math.abs(c-this.framedR)/this.framedR>.35)&&this.fit(t.first),this.buildDims()}fit(e){let t=this.bb;if(!t)return;let n=t.getSize(new P),s=t.getCenter(new P),r=Math.max(n.length()/2,.15),a=this.camera.fov*Math.PI/180,o=2*Math.atan(Math.tan(a/2)*this.camera.aspect),l=r/Math.sin(Math.min(a,o)/2)*1.08,c=new P(.55,.45,1).normalize();this.controls.target.copy(s),this.camera.position.copy(s).addScaledVector(c,l),this.camera.near=l/100,this.camera.far=l*30,this.camera.updateProjectionMatrix(),this.controls.update(),this.framedR=n.length()/2,e&&!matchMedia("(prefers-reduced-motion: reduce)").matches&&(this.controls.autoRotate=!0,clearTimeout(this._spinT),this._spinT=setTimeout(()=>{this.controls.autoRotate=!1},3500))}setDims(e){this.dimsOn=e,this.buildDims()}buildDims(){for(let h of[...this.dims.children])xf(h);if(this.dims.clear(),this.labels.forEach(h=>h.el.remove()),this.labels=[],!this.dimsOn||!this.body)return;let{min:e,max:t}=this.body,n=.07,s=.004,r=.025,a=(h,d,u)=>new P(h,d,u),o=[],l=(h,d,u,f,g)=>{let x=[h,d];g||x.push(h.clone().addScaledVector(u,r),h.clone().addScaledVector(u,-r),d.clone().addScaledVector(u,r),d.clone().addScaledVector(u,-r));let m=new Jt().setFromPoints(x),p=g?new $r({color:16761856,dashSize:.025,gapSize:.018,depthTest:!1,transparent:!0}):new es({color:16761856,depthTest:!1,transparent:!0}),y=new Dr(m,p);g&&y.computeLineDistances(),y.renderOrder=10,o.push(y);let b=document.createElement("div");b.className="dim",b.textContent=f,this.labelsHost.appendChild(b),this.labels.push({el:b,pos:h.clone().add(d).multiplyScalar(.5)})},c=h=>`${Math.round(h*100)} cm`;l(a(e.x,s,t.z+n),a(t.x,s,t.z+n),a(0,0,1),c(t.x-e.x)),l(a(t.x+n,s,e.z),a(t.x+n,s,t.z),a(1,0,0),c(t.z-e.z)),l(a(t.x+n,e.y,t.z),a(t.x+n,t.y,t.z),a(1,0,0),c(t.y-e.y)),e.y>.01&&l(a(e.x-n,0,t.z),a(e.x-n,e.y,t.z),a(1,0,0),`${Math.round(e.y*100)} cm del suelo`,!0),o.forEach(h=>this.dims.add(h)),this.placeLabels()}placeLabels(){let e=this.host.clientWidth,t=this.host.clientHeight,n=new P,s=[];for(let r of this.labels){n.copy(r.pos).project(this.camera);let a=n.z<1&&Math.abs(n.x)<1.3&&Math.abs(n.y)<1.3;r.hw||(r.hw=(r.el.offsetWidth||60)/2+6);let o=Math.min(e-r.hw,Math.max(r.hw,(n.x*.5+.5)*e)),l=Math.min(t-18,Math.max(58,(-n.y*.5+.5)*t));for(let c=0;c<6&&s.some(h=>Math.abs(h.x-o)<h.hw+r.hw-8&&Math.abs(h.y-l)<24);c++)l+=l>t-60?-26:26;a&&s.push({x:o,y:l,hw:r.hw}),r.el.style.transform=`translate(${o.toFixed(1)}px,${l.toFixed(1)}px) translate(-50%,-50%)`,r.el.style.opacity=a?"1":"0"}}snapshot(e=320,t=!1){let n=this.dims.visible;this.dims.visible=!1,this.renderer.render(this.scene,this.camera);let s=this.renderer.domElement,r=Math.min(1,e/s.width),a=document.createElement("canvas");a.width=Math.round(s.width*r),a.height=Math.round(s.height*r);let o=a.getContext("2d");return t||(o.fillStyle="#e9e6e0",o.fillRect(0,0,a.width,a.height)),o.drawImage(s,0,0,a.width,a.height),this.dims.visible=n,t?a.toDataURL("image/png"):a.toDataURL("image/jpeg",.78)}};var ha=new P;function Tn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;ha.copy(e),ha[n]=0,ha.normalize();let c=.5*a/(a+o),h=1-ha.angleTo(i)/l;return Math.sign(ha[t])===1?h*c:o/(a+o)+c+c*(1-h)}var Bl=class i extends Tt{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new P,c=new P,h=new P(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,x=new P,m=.5/a;for(let p=0,y=0;p<d.length;p+=3,y+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[p+0]=h.x*Math.sign(l.x)+c.x*r,d[p+1]=h.y*Math.sign(l.y)+c.y*r,d[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/g)){case 0:x.set(1,0,0),f[y+0]=Tn(x,c,"z","y",r,n),f[y+1]=1-Tn(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),f[y+0]=1-Tn(x,c,"z","y",r,n),f[y+1]=1-Tn(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),f[y+0]=1-Tn(x,c,"x","z",r,e),f[y+1]=Tn(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),f[y+0]=1-Tn(x,c,"x","z",r,e),f[y+1]=1-Tn(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),f[y+0]=1-Tn(x,c,"x","y",r,e),f[y+1]=1-Tn(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),f[y+0]=Tn(x,c,"x","y",r,e),f[y+1]=1-Tn(x,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function En(i,e,t,n){let s=i.attributes.position,r=i.attributes.normal,a=i.attributes.uv;a||(a=new xt(new Float32Array(s.count*2),2),i.setAttribute("uv",a));let o=n?n[0]:Math.random(),l=n?n[1]:Math.random(),c=[0,0,0];for(let h=0;h<s.count;h++){let d=Math.abs(r.getX(h)),u=Math.abs(r.getY(h)),f=Math.abs(r.getZ(h)),g=d>=u&&d>=f?0:u>=f?1:2,x=g===0?1:0,m=g===2?1:2,p=x,y=m;t===m&&(p=m,y=x),c[0]=s.getX(h),c[1]=s.getY(h),c[2]=s.getZ(h),a.setXY(h,c[p]/e[0]+o,c[y]/e[1]+l)}return a.needsUpdate=!0,i}function it(i,e,t,n,s){let r=new Tt(Math.max(e,.001),Math.max(t,.001),Math.max(n,.001)),a=[e,t,n];return s==null&&(s=a.indexOf(Math.max(e,t,n))),En(r,i.userData.tile,s)}function _t(i,e,t=0,n=0,s=0){let r=new ht(i,e);return r.position.set(t,n,s),r.castShadow=!0,r.receiveShadow=!0,r}function Yv(i){let e=new Float32Array(65536),t=i*2654435761%2147483647;t<=0&&(t+=2147483646);for(let n=0;n<65536;n++)t=t*16807%2147483647,e[n]=t/2147483647;return e}function ua(i){let e=Yv(i);return(t,n,s,r)=>{let a=t*s,o=n*r,l=Math.floor(a),c=Math.floor(o),h=a-l,d=o-c,u=(l%s+s)%s,f=(c%r+r)%r,g=(u+1)%s,x=(f+1)%r,m=e[u+(f<<8)],p=e[g+(f<<8)],y=e[u+(x<<8)],b=e[g+(x<<8)],M=h*h*(3-2*h),T=d*d*(3-2*d);return m+(p-m)*M+(y-m)*T+(m-p-y+b)*M*T}}function da(i,e,t,n,s,r){let a=0,o=1,l=0;for(let c=0;c<r;c++)a+=o*i(e,t,n,s),l+=o,o*=.5,n*=2,s*=2;return a/l}function _f(i){let e=0;for(let t=0;t<i.length;t++)e+=i[t];e/=i.length;for(let t=0;t<i.length;t++)i[t]/=e;return i}var li=new Map;function vf(i,e){let t="w"+i+e;if(li.has(t))return li.get(t);let n=1024,s=512,r=new Float32Array(n*s),a=ua(e),o=ua(e+7),l=ua(e+31),c=i==="rustica",h=c?1.3:.85,d=e*97+13,u=()=>(d=d*16807%2147483647)/2147483647,f=[0,1,2,3].map(()=>(u()-.5)*(c?.12:.06)),g=[];if(c)for(let p=0;p<6;p++)g.push({u:u(),v:u(),r:p<3?.7+u()*.8:.25+u()*.3,s:(u()<.5?-1:1)*(.8+u())});let x=56;for(let p=0;p<s;p++){let y=p/s,b=f[Math.floor(y*4)%4];for(let M=0;M<n;M++){let T=M/n,E=y*x+(da(a,T,y,2,1,3)-.5)*4.5+(o(T,y,6,3)-.5)*1.2,I=0;for(let B=0;B<g.length;B++){let U=g[B],ie=T-U.u;ie-=Math.round(ie);let ne=y-U.v;ne-=Math.round(ne);let _e=ie*100,ue=ne*50,q=(_e*_e*.12+ue*ue)/(U.r*U.r);q<40&&(q*=1+(l(T,y,64,32)-.5)*.7,E+=Math.exp(-q*.3)*U.s*1.6,I+=(q<1?Math.pow(1-q,.5)*.5:0)+Math.exp(-q*.5)*.1)}let _=E-Math.floor(E),S=_>.78?Math.pow((_-.78)/.22,1.3):0,k=.4+a(T,y,6,24)*1.2,C=da(o,T,y,2,48,2)-.5,L=a(T,y,20,256)-.5,N=o(T,y,110,256),z=S*.2*k*h+C*.26*h+L*.08*h+(N>.8?(N-.8)*.7*h:0)+Math.min(I,.6),D=(da(l,T,y,1,2,2)-.5)*.1+b;r[p*n+M]=Math.max(.22,1-z+D)}}let m={w:n,h:s,k:_f(r)};return li.set(t,m),m}function yf(i){let e="f"+i;if(li.has(e))return li.get(e);let t=256,n=256,s=new Float32Array(t*n),r=ua(i+11);for(let o=0;o<n;o++){let l=o/n;for(let c=0;c<t;c++){let h=c/t,d=Math.floor(h*64)+Math.floor(l*64)&1?.035:-.035,u=(r(h,l,32,128)-.5)*.1,f=(r(h,l,256,256)-.5)*.08,g=(da(r,h,l,2,2,2)-.5)*.06;s[o*t+c]=1+d+u+f+g}}let a={w:t,h:n,k:_f(s)};return li.set(e,a),a}function Mf(i){let e="m"+i;if(li.has(e))return li.get(e);let t=512,n=512,s=new Float32Array(t*n),r=ua(i+23);for(let o=0;o<n;o++){let l=o/n;for(let c=0;c<t;c++){let h=c/t,d=da(r,h,l,3,3,5),u=Math.pow(1-Math.abs(Math.sin((h*3+l*2+d*5)*Math.PI)),14),f=Math.pow(1-Math.abs(Math.sin((h*7-l*3+d*9)*Math.PI)),40)*.5;s[o*t+c]=1-u*.38-f*.25+(r(h,l,64,64)-.5)*.05}}let a={w:t,h:n,k:s};return li.set(e,a),a}function Zv(i){let e=String(i||"#888888").replace("#","");return[0,2,4].map(t=>parseInt(e.slice(t,t+2),16)||0)}function bf(i,e){let t=document.createElement("canvas");t.width=i.w,t.height=i.h;let n=t.getContext("2d"),s=n.createImageData(i.w,i.h),r=s.data,[a,o,l]=Zv(e);for(let c=0,h=0;c<i.k.length;c++,h+=4){let d=i.k[c];r[h]=a*d,r[h+1]=o*d,r[h+2]=l*d,r[h+3]=255}return n.putImageData(s,0,0),t}var zl={madera:[1,.5],tela:[.1,.1],marmol:[.6,.6],liso:[1,1]},Eh=new Map;function Ah(i,e,t,n){let s=i+e+t+n;if(Eh.has(s))return Eh.get(s);let r=i==="madera"?vf(t,n):i==="tela"?yf(n):Mf(n),a=new ns(bf(r,e));return a.wrapS=a.wrapT=Si,a.colorSpace=At,a.anisotropy=8,a.userData.mimeType="image/jpeg",Eh.set(s,a),a}function Ui(i,e,t,n){let s;switch(i){case"madera":s=t==="ninguna"?new kt({color:e,roughness:.7}):new kt({map:Ah("madera",e,t,n),roughness:.66}),s.userData.tile=zl.madera;break;case"brillo":s=new kt({color:e,roughness:.16});break;case"metal":s=new kt({color:e,roughness:.32,metalness:1});break;case"tela":s=new kt({map:Ah("tela",e,"",n),roughness:.96}),s.userData.tile=zl.tela;break;case"cristal":s=new kt({color:e,roughness:.05,transparent:!0,opacity:.3,depthWrite:!1});break;case"marmol":s=new kt({map:Ah("marmol",e,"",n),roughness:.22}),s.userData.tile=zl.marmol;break;default:s=new kt({color:e,roughness:.55})}return s.userData.tile||(s.userData.tile=zl.liso),s.userData.kind=i,s}function Sf(i){let e=i.veta==="ninguna"?"suave":i.veta;return{principal:Ui(i.acabado.principal,i.colores.principal,i.veta,3),secundario:Ui(i.acabado.secundario,i.colores.secundario,i.veta,5),patas:Ui(i.acabado.patas,i.colores.patas,e,9),tirador:Ui("metal",i.colores.tirador,"",1),cristal:Ui("cristal","#d6e6e8","",1),oscuro:Ui("liso","#151515","",1)}}var X=i=>(+i||0)/100,Jv=new P(0,1,0);function wf(i,e){let t=new Ct;return t.name="mueble",i.tipo==="mesa"?Kv(t,i,e):i.tipo==="sofa"?Qv(t,i,e):i.tipo==="libre"?ey(t,i,e):jv(t,i,e),t}function Tf(i,e,t,n,s,r,a,o,l,c){let h=new Ct;h.position.set(t,s,n),h.rotation.z=r*c,h.rotation.x=-a*c;let d=s/(Math.cos(c)*Math.cos(c)),u=En(new dn(o,l,d,20),e.userData.tile,1);h.add(_t(u,e,0,-d/2,0)),i.add(h)}function jv(i,e,t){let n=e.mueble,s=X(e.ancho),r=X(e.fondo),a=X(n.grosor),o=X(1),l=X(1.8),c=X(.3),h=e.montaje==="pared",d=h?"ninguna":n.patas.tipo,u=d==="ninguna"?0:Math.min(X(n.patas.alto),X(e.alto)*.7),f=h?X(e.elevacion):u,g=h?X(e.alto):Math.max(X(e.alto)-u,X(6)),x=t.principal,m=t.secundario,p=n.divisores==="secundario",y=p?m:x,b=n.frentes==="secundario"?m:x,M=e.puertasAbiertas,T=(q,se,oe,ee,H)=>{let K=_t(q,se,oe,ee,H);return i.add(K),K};T(it(x,a,g,r,1),x,-s/2+a/2,f+g/2,0),T(it(x,a,g,r,1),x,s/2-a/2,f+g/2,0),p||(T(it(x,s-2*a,a,r,0),x,0,f+g-a/2,0),T(it(x,s-2*a,a,r,0),x,0,f+a/2,0));let E=n.columnas,I=E.length,_=E.reduce((q,se)=>q+se.ancho,0)||1,S=s-2*a-(I-1)*a,k=-s/2+a;E.forEach((q,se)=>{let oe=S*q.ancho/_,ee=k+oe/2;p&&(T(it(x,oe,a,r,0),x,ee,f+g-a/2,0),T(it(x,oe,a,r,0),x,ee,f+a/2,0)),se<I-1&&T(it(y,a,p?g:g-2*a,r,1),y,k+oe+a/2,f+g/2,0),C(q,ee,oe),k+=oe+a}),u>0&&ue();function C(q,se,oe){let ee=q.huecos,H=ee.length,K=ee.reduce((he,Me)=>he+Me.alto,0)||1,Q=g-2*a-(H-1)*a,ve=f+a;ee.forEach((he,Me)=>{let Fe=Q*he.alto/K,Te=he.fondo!=="abierto";Te&&L(he,se,ve+Fe/2,oe,Fe),z(he,se,ve,oe,Fe,Te?o:0),Me<H-1&&T(it(x,oe,a,r,0),x,se,ve+Fe+a/2,0),ve+=Fe+a})}function L(q,se,oe,ee,H){let K=q.fondo==="secundario"?m:x;if(q.pasacables&&ee>X(14)&&H>X(10)){let Q=new Zs;Q.moveTo(-ee/2,-H/2),Q.lineTo(ee/2,-H/2),Q.lineTo(ee/2,H/2),Q.lineTo(-ee/2,H/2),Q.lineTo(-ee/2,-H/2);let ve=Math.min(X(3),H*.2),he=new is;he.absarc(0,0,ve,0,Math.PI*2,!0),Q.holes.push(he);let Me=new Gr(Q,{depth:o,bevelEnabled:!1,curveSegments:24});Me.translate(0,0,-o/2),En(Me,K.userData.tile,0),T(Me,K,se,oe,-r/2+o/2)}else T(it(K,ee,H,o,0),K,se,oe,-r/2+o/2)}function N(q,se,oe,ee,H,K,Q){for(let ve=1;ve<=(q||0);ve++){let he=r-K-Q;T(it(x,ee,a*.9,he,0),x,se,oe+H*ve/(q+1),-r/2+K+he/2)}}function z(q,se,oe,ee,H,K){switch(q.tipo){case"abatible":U(se,oe,ee,H,"down");break;case"elevable":U(se,oe,ee,H,"up");break;case"puerta":M&&N(q.baldas==null?1:q.baldas,se,oe,ee,H,K,l+X(.5)),ne(q,se,oe+H/2,ee,H,!1);break;case"cristal":N(q.baldas,se,oe,ee,H,K,l+X(.5)),ne(q,se,oe+H/2,ee,H,!0);break;case"cajones":_e(q.n||1,se,oe,ee,H);break;default:N(q.baldas,se,oe,ee,H,K,0)}}function D(q,se,oe,ee,H,K){let Q=n.tiradores,ve=t.tirador;if(Q==="ninguno")return;if(Q==="pomo"){let Te=new dn(X(1.3),X(.9),X(2.6),20);Te.rotateX(Math.PI/2),q.add(_t(Te,ve,se,oe,ee+X(1.3)));return}if(Q==="unero"){let Te=Math.min(K*.9,X(40)),Z=H==="h"?new Tt(Te,X(1.2),X(.5)):new Tt(X(1.2),Te,X(.5));q.add(_t(Z,t.oscuro,se,oe,ee+X(.05)));return}let he=Math.min(K*.45,X(22)),Me=X(1.1),Fe=X(2.6);q.add(_t(H==="h"?new Tt(he,Me,Me):new Tt(Me,he,Me),ve,se,oe,ee+Fe));for(let Te of[-1,1]){let Z=H==="h"?se+Te*(he/2-Me):se,ae=H==="h"?oe:oe+Te*(he/2-Me);q.add(_t(new Tt(Me*.8,Me*.8,Fe),ve,Z,ae,ee+Fe/2))}}function B(q,se){let oe=new P().subVectors(se,q),ee=oe.length(),H=_t(new dn(X(.35),X(.35),ee,8),t.tirador);H.userData.moving=!0,H.position.copy(q).addScaledVector(oe,.5),H.quaternion.setFromUnitVectors(Jv,oe.normalize()),i.add(H)}function U(q,se,oe,ee,H){let K=oe-2*c,Q=ee-2*c,ve=new Ct;ve.userData.moving=!0;let he=H==="down";if(ve.position.set(q,he?se+c:se+ee-c,r/2),ve.add(_t(it(b,K,Q,l,0),b,0,he?Q/2:-Q/2,-l/2)),D(ve,0,he?Q-X(3):-Q+X(3),0,"h",K),M&&(ve.rotation.x=he?Math.PI/2:-Math.PI/2*.92),i.add(ve),M&&he&&ee>X(12))for(let Me of[-1,1]){let Fe=q+Me*(oe/2-X(1.2));B(new P(Fe,se+ee-X(4),r/2-X(6)),new P(Fe,se+c+l+X(.3),r/2+Q*.45))}}function ie(q,se,oe){let ee=Math.min(X(4),se*.15,oe*.15);q.add(_t(it(b,se,ee,l,0),b,0,oe/2-ee/2,0)),q.add(_t(it(b,se,ee,l,0),b,0,-oe/2+ee/2,0)),q.add(_t(it(b,ee,oe-2*ee,l,1),b,-se/2+ee/2,0,0)),q.add(_t(it(b,ee,oe-2*ee,l,1),b,se/2-ee/2,0,0));let H=_t(new Tt(se-2*ee,oe-2*ee,X(.4)),t.cristal);H.castShadow=!1,q.add(H)}function ne(q,se,oe,ee,H,K){let Q=q.bisagra||(ee>X(60)?"doble":"izq"),ve=Q==="doble"?[["izq",se-ee/4,ee/2],["der",se+ee/4,ee/2]]:[[Q,se,ee]];for(let[he,Me,Fe]of ve){let Te=Fe-2*c,Z=H-2*c,ae=he==="izq"?1:-1,te=new Ct;te.userData.moving=!0,te.position.set(he==="izq"?Me-Fe/2+c:Me+Fe/2-c,oe,r/2);let me=new Ct;me.position.set(ae*Te/2,0,-l/2),te.add(me),K?ie(me,Te,Z):me.add(_t(it(b,Te,Z,l,1),b));let R=Z>X(100)?0:Z/2-Math.min(X(8),Z*.25);D(te,ae*(Te-X(3.5)),R,0,"v",Z),M&&(te.rotation.y=he==="izq"?-1.75:1.75),i.add(te)}}function _e(q,se,oe,ee,H){let K=H/q;for(let Q=0;Q<q;Q++){let ve=ee-2*c,he=K-2*c,Me=M?r*.45*((Q+1)/q):0,Fe=new Ct;if(Fe.userData.moving=!0,Fe.position.set(se,oe+K*Q+K/2,r/2-l/2+Me),Fe.add(_t(it(b,ve,he,l,0),b)),D(Fe,0,0,l/2,"h",ve),Me>0){let Te=r-o-l-X(3),Z=he*.72,ae=ve-X(3),te=-l/2-Te/2,me=-he/2+Z/2+X(1);Fe.add(_t(it(x,X(1.2),Z,Te,2),x,-ae/2,me,te)),Fe.add(_t(it(x,X(1.2),Z,Te,2),x,ae/2,me,te)),Fe.add(_t(it(x,ae,X(1),Te,0),x,0,-he/2+X(1.5),te)),Fe.add(_t(it(x,ae,Z,X(1.2),0),x,0,me,-l/2-Te))}i.add(Fe)}}function ue(){let q=t.patas,se=[[-1,-1],[1,-1],[-1,1],[1,1]];switch(d){case"zocalo":T(it(q,s-X(3),u,r-X(5),0),q,0,u/2,-X(1.5));break;case"rectas":case"metal":{let oe=X(d==="metal"?2:4.5),ee=X(d==="metal"?1:1.5);for(let[H,K]of se)T(it(q,oe,u,oe,1),q,H*(s/2-ee-oe/2),u/2,K*(r/2-ee-oe/2));break}case"conicas":for(let[oe,ee]of se)Tf(i,q,oe*(s/2-X(6)),ee*(r/2-X(6)),u,oe,ee,X(2.2),X(1.2),.13);break;case"marco":for(let oe of[-1,1]){let ee=oe*(s/2-X(4));for(let H of[-1,1])T(it(q,X(2),u,X(2),1),q,ee,u/2,H*(r/2-X(2.5)));T(it(q,X(2),X(2),r-X(5),2),q,ee,X(1),0)}break}}}function Kv(i,e,t){let n=e.mesa,s=X(e.ancho),r=n.forma==="redonda"?X(e.ancho):X(e.fondo),a=X(e.alto),o=X(n.grosor),l=t.principal,c=t.patas,h;n.forma==="rect"?h=it(l,s,o,r,0):(h=new dn(s/2,s/2,o,72),n.forma==="ovalada"&&h.scale(1,1,r/s),En(h,l.userData.tile,0)),i.add(_t(h,l,0,a-o/2,0));let d=a-o,u=n.forma!=="rect",f=X(n.patas==="metal"?2.5:5),g=u?[[-1,-1],[1,-1],[-1,1],[1,1]].map(([m,p])=>[m,p,m*s/2*.62*Math.SQRT1_2,p*r/2*.62*Math.SQRT1_2]):[[-1,-1],[1,-1],[-1,1],[1,1]].map(([m,p])=>[m,p,m*(s/2-X(6)-f/2),p*(r/2-X(6)-f/2)]),x=(m,p,y,b,M)=>i.add(_t(m,p,y,b,M));switch(n.patas){case"conicas":for(let[m,p,y,b]of g)Tf(i,c,y,b,d,m,p,X(2.6),X(1.4),.12);break;case"trineo":{let m=u?s*.3:s/2-X(12),p=u?r*.3:r/2-X(8),y=X(3);for(let b of[-1,1]){for(let M of[-1,1])x(it(c,y,d,y,1),c,b*m,d/2,M*p);x(it(c,y,y,p*2+y,2),c,b*m,y/2,0),x(it(c,y,y,p*2+y,2),c,b*m,d-y/2,0)}break}case"central":{let m=!u&&s>r*1.4,p=m?[-s*.28,s*.28]:[0];for(let y of p)x(En(new dn(X(5),X(5),d-X(3),32),c.userData.tile,1),c,y,X(3)+(d-X(3))/2,0),x(m?it(c,X(8),X(3),r*.75,2):En(new dn(Math.min(s,r)*.28,Math.min(s,r)*.3,X(3),48),c.userData.tile,0),c,y,X(1.5),0);break}default:for(let[,,m,p]of g)x(it(c,f,d,f,1),c,m,d/2,p)}if(n.balda){let m=Math.min(X(16),d*.35);if(u){let p=new dn(s/2*.6,s/2*.6,X(2),48);n.forma==="ovalada"&&p.scale(1,1,r/s),x(En(p,l.userData.tile,0),l,0,m,0)}else x(it(l,s-2*(X(6)+f)+X(1),X(2),r-2*(X(6)+f)+X(1),0),l,0,m,0)}}function ms(i,e,t,n,s){let r=Math.max(.002,Math.min(s,e/2-.001,t/2-.001,n/2-.001));return En(new Bl(e,t,n,3,r),i.userData.tile)}function Qv(i,e,t){let n=e.sofa,s=X(e.ancho),r=X(e.fondo),a=X(e.alto),o=t.principal,l=t.patas,c=X(n.patas),h=Math.min(X(n.alturaAsiento),a-X(12)),d=Math.min(X(13),h*.35),u=h-d,f=Math.min(X(22),r*.3),g=n.brazos==="ambos"||n.brazos==="izq",x=n.brazos==="ambos"||n.brazos==="der";n.chaise==="izq"&&(g=!1),n.chaise==="der"&&(x=!1);let m=Math.min(X(n.anchoBrazo),s*.3),p=Math.min(X(n.altoBrazo),a),y=-s/2+(g?m:0),b=s/2-(x?m:0),M=Math.max(1,Math.min(6,Math.round(n.plazas))),T=(b-y)/M,E=Math.max(r,X(n.fondoChaise)),I=n.chaise!=="ninguna"&&E>r+X(5),_=n.chaise==="der"?b-T/2:y+T/2,S=(C,L,N,z,D)=>{let B=_t(C,L,N,z,D);return i.add(B),B},k=Math.max(u-c,X(4));S(ms(o,s,k,r,X(2)),o,0,c+k/2,0),I&&S(ms(o,T,k,E-r+X(4),X(2)),o,_,c+k/2,r/2+(E-r)/2-X(2)),S(ms(o,s,a-u,f,X(5)),o,0,u+(a-u)/2,-r/2+f/2),g&&S(ms(o,m,p-c,r,X(5)),o,-s/2+m/2,c+(p-c)/2,0),x&&S(ms(o,m,p-c,r,X(5)),o,s/2-m/2,c+(p-c)/2,0);for(let C=0;C<M;C++){let L=y+T*(C+.5),z=(I&&(n.chaise==="der"&&C===M-1||n.chaise==="izq"&&C===0)?E:r)-f-X(1);if(S(ms(o,T-X(1),d,z,X(4)),o,L,u+d/2,-r/2+f+X(.5)+z/2),n.cojinesRespaldo){let D=Math.max(X(25),(a-h)*.92),B=X(17),U=S(ms(o,T-X(1.5),D,B,X(6)),o,L,h+D/2-X(3),-r/2+f+B/2-X(2));U.rotation.x=-.14}}if(c>.005){let C=[[-s/2+X(6),-r/2+X(6)],[s/2-X(6),-r/2+X(6)],[-s/2+X(6),r/2-X(6)],[s/2-X(6),r/2-X(6)]];I&&C.push([_-T/2+X(6),E-r/2-X(6)],[_+T/2-X(6),E-r/2-X(6)]);for(let[L,N]of C)S(En(new dn(X(2),X(1.6),c,14),l.userData.tile,1),l,L,c/2,N)}}function ey(i,e,t){let n=e.piezas.length?e.piezas:[{forma:"caja",x:0,y:e.alto/2,z:0,an:e.ancho,al:e.alto,fo:e.fondo,color:"principal"}],s=1/0,r=-1/0,a=-1/0,o=1/0,l=-1/0,c=1/0;for(let p of n)s=Math.min(s,p.x-p.an/2),r=Math.max(r,p.x+p.an/2),c=Math.min(c,p.y-p.al/2),a=Math.max(a,p.y+p.al/2),o=Math.min(o,p.z-p.fo/2),l=Math.max(l,p.z+p.fo/2);let h=e.ancho/Math.max(r-s,.1),d=e.alto/Math.max(a-Math.min(c,0),.1),u=e.fondo/Math.max(l-o,.1),f=(s+r)/2,g=(o+l)/2,x={},m=p=>t[p]?t[p]:(x[p]||(x[p]=Ui("liso",p,"",1)),x[p]);for(let p of n){let y=m(p.color),b=X(p.an*h),M=X(p.al*d),T=X(p.fo*u),E;p.forma==="cilindro"?(E=new dn(b/2,b/2,M,28),E.scale(1,1,T/Math.max(b,.001)),En(E,y.userData.tile,1)):p.forma==="esfera"?(E=new Wr(.5,28,18),E.scale(b,M,T),En(E,y.userData.tile)):E=it(y,b,M,T);let I=_t(E,y,X((p.x-f)*h),X(p.y*d),X((p.z-g)*u));I.rotation.y=(p.rotY||0)*Math.PI/180,i.add(I)}}var ci=(i,e,t,n)=>({principal:i,secundario:e,patas:t,tirador:n}),Zn={tv:{nombre:"Mueble TV suspendido",tipo:"mueble",ancho:200,alto:30,fondo:32,montaje:"pared",elevacion:35,colores:ci("#c39a68","#46474b","#2b2b2d","#a7a9ac"),acabado:{principal:"madera",secundario:"liso",patas:"liso"},veta:"rustica",puertasAbiertas:!0,mueble:{grosor:1.8,patas:{tipo:"ninguna",alto:0},tiradores:"ninguno",divisores:"secundario",frentes:"principal",columnas:[0,1].map(()=>({ancho:1,huecos:[{tipo:"abierto",alto:.37,fondo:"principal"},{tipo:"abatible",alto:.63,fondo:"secundario",pasacables:!0}]}))}},aparador:{nombre:"Aparador 3 m\xF3dulos",tipo:"mueble",ancho:160,alto:80,fondo:42,montaje:"suelo",colores:ci("#efece6","#b88a5a","#b88a5a","#2b2b2b"),acabado:{principal:"liso",secundario:"madera",patas:"madera"},veta:"suave",mueble:{grosor:1.8,patas:{tipo:"conicas",alto:15},tiradores:"barra",divisores:"principal",frentes:"principal",columnas:[{ancho:1,huecos:[{tipo:"cajones",n:2,alto:1,fondo:"principal"}]},{ancho:1,huecos:[{tipo:"puerta",bisagra:"izq",alto:1,fondo:"principal"}]},{ancho:1,huecos:[{tipo:"puerta",bisagra:"der",alto:1,fondo:"principal"}]}]}},estanteria:{nombre:"Estanter\xEDa",tipo:"mueble",ancho:80,alto:180,fondo:30,montaje:"suelo",colores:ci("#f2f0eb","#c39a68","#f2f0eb","#9a9a9a"),acabado:{principal:"liso",secundario:"madera",patas:"liso"},veta:"suave",mueble:{grosor:1.8,patas:{tipo:"zocalo",alto:6},tiradores:"ninguno",divisores:"principal",frentes:"principal",columnas:[{ancho:1,huecos:[{tipo:"abierto",alto:1,fondo:"secundario",baldas:4}]}]}},comoda:{nombre:"C\xF3moda 4 cajones",tipo:"mueble",ancho:90,alto:100,fondo:45,montaje:"suelo",colores:ci("#ffffff","#c39a68","#c39a68","#b08d57"),acabado:{principal:"liso",secundario:"madera",patas:"madera"},veta:"suave",mueble:{grosor:1.8,patas:{tipo:"conicas",alto:18},tiradores:"pomo",divisores:"principal",frentes:"principal",columnas:[{ancho:1,huecos:[{tipo:"cajones",n:4,alto:1,fondo:"principal"}]}]}},comedor:{nombre:"Mesa de comedor",tipo:"mesa",ancho:160,alto:75,fondo:90,colores:ci("#c39a68","#c39a68","#1f1f21","#9a9a9a"),acabado:{principal:"madera",secundario:"madera",patas:"metal"},veta:"suave",mesa:{forma:"rect",grosor:4,patas:"trineo",balda:!1}},centro:{nombre:"Mesa de centro",tipo:"mesa",ancho:110,alto:42,fondo:60,colores:ci("#c39a68","#c39a68","#c39a68","#9a9a9a"),acabado:{principal:"madera",secundario:"madera",patas:"madera"},veta:"suave",mesa:{forma:"rect",grosor:3,patas:"conicas",balda:!0}},sofa3:{nombre:"Sof\xE1 3 plazas",tipo:"sofa",ancho:220,alto:86,fondo:95,colores:ci("#8c8f93","#8c8f93","#3a2f26","#9a9a9a"),acabado:{principal:"tela",secundario:"tela",patas:"madera"},veta:"suave",sofa:{plazas:3,brazos:"ambos",anchoBrazo:20,altoBrazo:62,alturaAsiento:44,chaise:"ninguna",fondoChaise:160,cojinesRespaldo:!0,patas:8}},chaise:{nombre:"Sof\xE1 chaise longue",tipo:"sofa",ancho:265,alto:86,fondo:95,colores:ci("#cfc6b8","#cfc6b8","#2b2b2b","#9a9a9a"),acabado:{principal:"tela",secundario:"tela",patas:"metal"},veta:"suave",sofa:{plazas:3,brazos:"ambos",anchoBrazo:18,altoBrazo:60,alturaAsiento:44,chaise:"der",fondoChaise:165,cojinesRespaldo:!0,patas:6}},silla:{nombre:"Silla",tipo:"libre",ancho:46,alto:82,fondo:50,colores:ci("#c39a68","#3a3b3e","#c39a68","#9a9a9a"),acabado:{principal:"madera",secundario:"tela",patas:"madera"},veta:"suave",piezas:[{forma:"caja",x:0,y:45,z:1,an:46,al:4,fo:46,color:"principal"},{forma:"caja",x:0,y:48.5,z:2,an:42,al:3,fo:40,color:"secundario"},...[[-1,-1],[1,-1],[-1,1],[1,1]].map(([i,e])=>({forma:"cilindro",x:i*19,y:21.5,z:1+e*19,an:3.5,al:43,fo:3.5,color:"patas"})),{forma:"caja",x:-20,y:64.5,z:-20.5,an:3,al:35,fo:3,color:"principal"},{forma:"caja",x:20,y:64.5,z:-20.5,an:3,al:35,fo:3,color:"principal"},{forma:"caja",x:0,y:72,z:-21,an:40,al:16,fo:2.5,color:"principal"}]}},Af=[["tv","Mueble TV"],["aparador","Aparador"],["estanteria","Estanter\xEDa"],["comoda","C\xF3moda"],["comedor","Mesa comedor"],["centro","Mesa centro"],["sofa3","Sof\xE1"],["chaise","Chaise longue"],["silla","Silla"]],Rh={mueble:"tv",mesa:"comedor",sofa:"sofa3",libre:"silla"},fa={"abatible-hueco":["Abatible + hueco abajo",[{tipo:"abierto",alto:.37,fondo:"principal"},{tipo:"abatible",alto:.63,fondo:"secundario",pasacables:!0}]],abatible:["Abatible",[{tipo:"abatible",alto:1,fondo:"principal"}]],abierto:["Hueco abierto",[{tipo:"abierto",alto:1,fondo:"principal"}]],estantes:["Estantes",[{tipo:"abierto",alto:1,fondo:"principal",baldas:2}]],puerta:["Puerta",[{tipo:"puerta",alto:1,fondo:"principal"}]],puertas:["Dos puertas",[{tipo:"puerta",alto:1,fondo:"principal",bisagra:"doble"}]],cristal:["Vitrina de cristal",[{tipo:"cristal",alto:1,fondo:"principal",baldas:2}]],cajones2:["2 cajones",[{tipo:"cajones",n:2,alto:1,fondo:"principal"}]],cajones3:["3 cajones",[{tipo:"cajones",n:3,alto:1,fondo:"principal"}]],"hueco-cajon":["Hueco + caj\xF3n arriba",[{tipo:"abierto",alto:.62,fondo:"principal"},{tipo:"cajones",n:1,alto:.38,fondo:"principal"}]]},ty=["mueble","mesa","sofa","libre"],Ih=[["madera","Madera"],["liso","Lacado mate"],["brillo","Brillo"],["metal","Metal"],["tela","Tela"],["cristal","Cristal"],["marmol","M\xE1rmol"]],Ch=Ih.map(i=>i[0]),ny=["abierto","abatible","elevable","puerta","cristal","cajones"],iy=["ninguna","zocalo","rectas","conicas","metal","marco"],sy=["principal","secundario","patas","tirador"],Jn=i=>i&&typeof i=="object"&&!Array.isArray(i)?i:{};function vt(i,e,t,n){return i=parseFloat(i),isFinite(i)||(i=e),Math.min(n,Math.max(t,i))}function lr(i,e){return typeof i!="string"?e:(i=i.trim(),/^#[0-9a-f]{6}$/i.test(i)?i.toLowerCase():/^#[0-9a-f]{3}$/i.test(i)?("#"+i.slice(1).split("").map(t=>t+t).join("")).toLowerCase():e)}var Ht=(i,e,t)=>e.includes(i)?i:t,ry=i=>Math.round(i*10)/10;function ay(i){i=Jn(i);let e=Ht(i.tipo,ny,"abierto"),t={tipo:e,alto:vt(i.alto,1,.02,100),fondo:Ht(i.fondo,["principal","secundario","abierto"],"principal")};return e==="cajones"&&(t.n=Math.round(vt(i.n,2,1,8))),(e==="puerta"||e==="cristal")&&["izq","der","doble"].includes(i.bisagra)&&(t.bisagra=i.bisagra),i.baldas!=null&&(t.baldas=Math.round(vt(i.baldas,0,0,8))),i.pasacables&&(t.pasacables=!0),t}function Cf(i,e){i=Jn(i);let t=Jn(i.patas),n=Array.isArray(i.columnas)&&i.columnas.length?i.columnas.slice(0,12):e.columnas;return{grosor:vt(i.grosor,e.grosor,1,5),patas:{tipo:Ht(t.tipo,iy,e.patas.tipo),alto:vt(t.alto,e.patas.alto,0,120)},tiradores:Ht(i.tiradores==="u\xF1ero"?"unero":i.tiradores,["ninguno","barra","pomo","unero"],e.tiradores),divisores:Ht(i.divisores,["principal","secundario"],e.divisores),frentes:Ht(i.frentes,["principal","secundario"],e.frentes),columnas:n.map(s=>{s=Jn(s);let r=Array.isArray(s.huecos)&&s.huecos.length?s.huecos.slice(0,10):[{tipo:"abierto",alto:1}];return{ancho:vt(s.ancho,1,.05,100),huecos:r.map(ay)}})}}function oy(i,e){return i=Jn(i),{forma:Ht(i.forma,["rect","redonda","ovalada"],e.forma),grosor:vt(i.grosor,e.grosor,1,15),patas:Ht(i.patas,["rectas","conicas","metal","trineo","central"],e.patas),balda:i.balda==null?e.balda:!!i.balda}}function ly(i,e){return i=Jn(i),{plazas:Math.round(vt(i.plazas,e.plazas,1,6)),brazos:Ht(i.brazos,["ambos","izq","der","ninguno"],e.brazos),anchoBrazo:vt(i.anchoBrazo,e.anchoBrazo,5,50),altoBrazo:vt(i.altoBrazo,e.altoBrazo,30,110),alturaAsiento:vt(i.alturaAsiento,e.alturaAsiento,25,70),chaise:Ht(i.chaise,["ninguna","izq","der"],e.chaise),fondoChaise:vt(i.fondoChaise,e.fondoChaise,100,230),cojinesRespaldo:i.cojinesRespaldo==null?e.cojinesRespaldo:!!i.cojinesRespaldo,patas:vt(i.patas,e.patas,0,30)}}function Ef(i){return Array.isArray(i)?i.slice(0,60).map(e=>{e=Jn(e);let t=sy.includes(e.color)?e.color:lr(e.color,"principal");return{forma:Ht(e.forma,["caja","cilindro","esfera"],"caja"),x:vt(e.x,0,-500,500),y:vt(e.y,0,-50,500),z:vt(e.z,0,-500,500),an:vt(e.an,10,.3,600),al:vt(e.al,10,.3,400),fo:vt(e.fo,10,.3,600),rotY:vt(e.rotY,0,-360,360),color:t}}):[]}function Fi(i){let e=Jn(i),t=Ht(e.tipo,ty,"mueble"),n=Zn[Rh[t]],s=Jn(e.colores),r=Jn(e.acabado),a={v:1,nombre:String(e.nombre||n.nombre).slice(0,60),tipo:t,ancho:vt(e.ancho,n.ancho,10,600),alto:vt(e.alto,n.alto,5,300),fondo:vt(e.fondo,n.fondo,5,400),montaje:t==="mesa"||t==="sofa"?"suelo":Ht(e.montaje,["suelo","pared"],n.montaje||"suelo"),elevacion:vt(e.elevacion,n.elevacion||35,0,250),colores:{principal:lr(s.principal,n.colores.principal),secundario:lr(s.secundario,lr(s.principal,n.colores.secundario)),patas:lr(s.patas,n.colores.patas),tirador:lr(s.tirador,n.colores.tirador)},acabado:{principal:Ht(r.principal,Ch,n.acabado.principal),secundario:Ht(r.secundario,Ch,n.acabado.secundario),patas:Ht(r.patas,Ch,n.acabado.patas)},veta:Ht(e.veta,["rustica","suave","ninguna"],n.veta),puertasAbiertas:!!e.puertasAbiertas};return a.mueble=Cf(e.mueble,Zn.tv.mueble),a.mesa=oy(e.mesa,Zn.comedor.mesa),a.sofa=ly(e.sofa,Zn.sofa3.sofa),a.piezas=Ef(e.piezas),t==="libre"&&!a.piezas.length&&(a.piezas=Ef(Zn.silla.piezas)),a}function pa(i){let e=JSON.parse(JSON.stringify(i));i.tipo!=="mueble"&&delete e.mueble,i.tipo!=="mesa"&&delete e.mesa,i.tipo!=="sofa"&&delete e.sofa,i.tipo!=="libre"&&delete e.piezas;for(let t of["ancho","alto","fondo","elevacion"])e[t]=ry(e[t]);return e.mueble&&e.mueble.columnas.forEach(t=>{t.ancho=Math.round(t.ancho*1e3)/1e3,t.huecos.forEach(n=>{n.alto=Math.round(n.alto*1e3)/1e3})}),e}function cr(i){let e=new TextEncoder().encode(JSON.stringify(pa(i))),t="";for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Rf(i){try{for(i=String(i).replace(/-/g,"+").replace(/_/g,"/");i.length%4;)i+="=";let e=atob(i),t=Uint8Array.from(e,n=>n.charCodeAt(0));return JSON.parse(new TextDecoder().decode(t))}catch{return null}}function If(i){let e=JSON.stringify(i.huecos);for(let[t,[,n]]of Object.entries(fa))if(JSON.stringify(Cf({columnas:[{huecos:n}]},Zn.tv.mueble).columnas[0].huecos)===e)return t;return"custom"}function Pf(i){return`Eres ebanista y modelador 3D. Te paso la foto de un mueble. Devu\xE9lveme su descripci\xF3n param\xE9trica para reconstruirlo en 3D a tama\xF1o real con un generador autom\xE1tico.

Responde SOLO con un objeto JSON v\xE1lido, sin texto alrededor. Medidas en cent\xEDmetros (n\xFAmeros). Colores en "#rrggbb".

{
  "nombre": "nombre corto en espa\xF1ol",
  "tipo": "mueble" | "mesa" | "sofa" | "libre",
  "ancho": 0, "alto": 0, "fondo": 0,
  "montaje": "suelo" | "pared",
  "elevacion": 0,
  "colores": { "principal": "#", "secundario": "#", "patas": "#", "tirador": "#" },
  "acabado": { "principal": "", "secundario": "", "patas": "" },
  "veta": "rustica" | "suave" | "ninguna",
  "puertasAbiertas": false,
  "mueble": {}, "mesa": {}, "sofa": {}, "piezas": []
}

Reglas generales
- "mueble": cualquier mueble de cajas (mueble TV, aparador, c\xF3moda, librer\xEDa, estanter\xEDa, armario, mesita, vitrina, zapatero). "mesa": mesas de comedor, de centro, auxiliares y escritorios. "sofa": sof\xE1s, sillones y chaise longue. "libre": cualquier otra cosa (sillas, l\xE1mparas, camas, plantas\u2026), descrita con piezas.
- ancho = de izquierda a derecha mirando el frente; alto = altura total desde el suelo, patas incluidas; fondo = profundidad.
- montaje "pared" = mueble colgado sin patas. Entonces alto es solo el cuerpo y elevacion = cm desde el suelo hasta su base (si no se ve: 35 en muebles TV, 150 en estantes altos). En montaje "suelo", elevacion = 0.
- Sin referencia de tama\xF1o, usa las medidas t\xEDpicas de ese producto en tiendas (mueble TV 140-200 \xD7 30-50 \xD7 30-40; aparador 150-180 \xD7 75-85 \xD7 40-45; mesa de comedor de 75 de alto; mesa de centro de 40-45; sof\xE1 de 3 plazas 200-230 \xD7 85-95 \xD7 80-90) manteniendo las proporciones que se ven en la foto.
- Colores: el tono medio real de cada material, sin brillos ni sombras. principal = material dominante; secundario = el segundo (trasera, divisores o frentes de otro color); si no hay otro, repite principal.
- acabado: "madera" | "liso" (lacado mate) | "brillo" | "metal" | "tela" | "cristal" | "marmol".
- veta: "rustica" si la madera tiene nudos marcados (roble artisan, salvaje, r\xFAstico); "suave" si la veta es fina; "ninguna" si no es madera.
- puertasAbiertas: true si en la foto las puertas, abatibles o cajones est\xE1n abiertos.

"mueble" (solo si tipo es "mueble"):
{ "grosor": 1.8,
  "patas": { "tipo": "ninguna" | "zocalo" | "rectas" | "conicas" | "metal" | "marco", "alto": 0 },
  "tiradores": "ninguno" | "barra" | "pomo" | "unero",
  "divisores": "principal" | "secundario",
  "frentes": "principal" | "secundario",
  "columnas": [ { "ancho": 1, "huecos": [ { "tipo": "", "alto": 1, "fondo": "principal" } ] } ] }
- columnas: m\xF3dulos verticales de IZQUIERDA a DERECHA separados por tableros verticales. "ancho" proporcional (1 y 1 si son iguales; 2 y 1 si uno es el doble).
- huecos: de ABAJO a ARRIBA dentro de cada columna, separados por baldas. "alto" proporcional.
- tipo de hueco: "abierto" (sin puerta), "abatible" (puerta con bisagra abajo que se abre hacia abajo), "elevable" (se abre hacia arriba), "puerta" (bisagra lateral; a\xF1ade "bisagra": "izq" | "der" | "doble"), "cristal" (puerta de cristal, con "bisagra"), "cajones" (a\xF1ade "n": n\xFAmero de cajones apilados).
- "fondo" de cada hueco = color de su trasera: "principal" | "secundario" | "abierto" (sin trasera). En huecos cerrados que no se ven por dentro usa "principal".
- opcional en cada hueco: "baldas": n\xFAmero de estantes intermedios (huecos abiertos o de cristal); "pasacables": true si la trasera tiene agujero para cables.
- divisores "secundario" si los tableros verticales entre m\xF3dulos son del color secundario.

"mesa" (solo si tipo es "mesa"): { "forma": "rect" | "redonda" | "ovalada", "grosor": 3, "patas": "rectas" | "conicas" | "metal" | "trineo" | "central", "balda": false }

"sofa" (solo si tipo es "sofa"): { "plazas": 3, "brazos": "ambos" | "izq" | "der" | "ninguno", "anchoBrazo": 20, "altoBrazo": 60, "alturaAsiento": 44, "chaise": "ninguna" | "izq" | "der", "fondoChaise": 155, "cojinesRespaldo": true, "patas": 6 }

"piezas" (solo si tipo es "libre"): hasta 40 piezas simples que juntas forman el objeto. Origen en el suelo y en el centro; x hacia la derecha, y hacia arriba, z hacia el frente. Cada pieza: { "forma": "caja" | "cilindro" | "esfera", "x": 0, "y": 0, "z": 0, "an": 0, "al": 0, "fo": 0, "rotY": 0, "color": "principal" | "secundario" | "patas" | "tirador" } (x, y, z = centro de la pieza; an, al, fo = tama\xF1o).

Ejemplo de formato (otro mueble):
{"nombre":"Aparador 3 m\xF3dulos","tipo":"mueble","ancho":160,"alto":80,"fondo":42,"montaje":"suelo","elevacion":0,"colores":{"principal":"#efece6","secundario":"#b88a5a","patas":"#b88a5a","tirador":"#2b2b2b"},"acabado":{"principal":"liso","secundario":"madera","patas":"madera"},"veta":"suave","puertasAbiertas":false,"mueble":{"grosor":1.8,"patas":{"tipo":"conicas","alto":15},"tiradores":"barra","divisores":"principal","frentes":"principal","columnas":[{"ancho":1,"huecos":[{"tipo":"cajones","n":2,"alto":1,"fondo":"principal"}]},{"ancho":1,"huecos":[{"tipo":"puerta","bisagra":"izq","alto":1,"fondo":"principal"}]},{"ancho":1,"huecos":[{"tipo":"puerta","bisagra":"der","alto":1,"fondo":"principal"}]}]}}
${i?`
Medidas o datos reales que da el usuario (\xFAsalos por encima de tu estimaci\xF3n): ${i}
`:""}
Si la foto no muestra ning\xFAn mueble, responde {"error":"no veo un mueble"}.`}var Lf={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]},Oi=class{constructor(){this.textureUtils=null,this.pluginCallbacks=[],this.register(function(e){return new Nh(e)}),this.register(function(e){return new Uh(e)}),this.register(function(e){return new zh(e)}),this.register(function(e){return new kh(e)}),this.register(function(e){return new Vh(e)}),this.register(function(e){return new Hh(e)}),this.register(function(e){return new Fh(e)}),this.register(function(e){return new Oh(e)}),this.register(function(e){return new Bh(e)}),this.register(function(e){return new Gh(e)}),this.register(function(e){return new Wh(e)}),this.register(function(e){return new Xh(e)}),this.register(function(e){return new qh(e)}),this.register(function(e){return new $h(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}setTextureUtils(e){return this.textureUtils=e,this}parse(e,t,n,s){let r=new Dh,a=[];for(let o=0,l=this.pluginCallbacks.length;o<l;o++)a.push(this.pluginCallbacks[o](r));r.setPlugins(a),r.setTextureUtils(this.textureUtils),r.writeAsync(e,t,s).catch(n)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,s,r,t)})}},tt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Ph="KHR_mesh_quantization",xn={};xn[Rt]=tt.NEAREST;xn[zo]=tt.NEAREST_MIPMAP_NEAREST;xn[os]=tt.NEAREST_MIPMAP_LINEAR;xn[It]=tt.LINEAR;xn[er]=tt.LINEAR_MIPMAP_NEAREST;xn[Xn]=tt.LINEAR_MIPMAP_LINEAR;xn[bn]=tt.CLAMP_TO_EDGE;xn[Si]=tt.REPEAT;xn[ks]=tt.MIRRORED_REPEAT;var Df={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},cy=new qe,Nf=12,hy=1179937895,uy=2,Uf=8,dy=1313821514,fy=5130562;function hi(i,e){return i.length===e.length&&i.every(function(t,n){return t===e[n]})}function py(i){return new TextEncoder().encode(i).buffer}function my(i){return hi(i.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function gy(i,e,t){let n={min:new Array(i.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(i.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=e;s<e+t;s++)for(let r=0;r<i.itemSize;r++){let a;i.itemSize>4?a=i.array[s*i.itemSize+r]:(r===0?a=i.getX(s):r===1?a=i.getY(s):r===2?a=i.getZ(s):r===3&&(a=i.getW(s)),i.normalized===!0&&(a=hs.normalize(a,i.array))),n.min[r]=Math.min(n.min[r],a),n.max[r]=Math.max(n.max[r],a)}return n}function Of(i){return Math.ceil(i/4)*4}function Lh(i,e=0){let t=Of(i.byteLength);if(t!==i.byteLength){let n=new Uint8Array(t);if(n.set(new Uint8Array(i)),e!==0)for(let s=i.byteLength;s<t;s++)n[s]=e;return n.buffer}return i}function Ff(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function xy(i,e){if(typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas){let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),i.convertToBlob({type:e,quality:t})}else return new Promise(t=>i.toBlob(t,e))}var Dh=class{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r183"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map},this.textureUtils=null}setPlugins(e){this.plugins=e}setTextureUtils(e){this.textureUtils=e}async writeAsync(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),await this.processInputAsync(e),await Promise.all(this.pending);let s=this,r=s.buffers,a=s.json;n=s.options;let o=s.extensionsUsed,l=s.extensionsRequired,c=new Blob(r,{type:"application/octet-stream"}),h=Object.keys(o),d=Object.keys(l);if(h.length>0&&(a.extensionsUsed=h),d.length>0&&(a.extensionsRequired=d),a.buffers&&a.buffers.length>0&&(a.buffers[0].byteLength=c.size),n.binary===!0){let u=new FileReader;u.readAsArrayBuffer(c),u.onloadend=function(){let f=Lh(u.result),g=new DataView(new ArrayBuffer(Uf));g.setUint32(0,f.byteLength,!0),g.setUint32(4,fy,!0);let x=Lh(py(JSON.stringify(a)),32),m=new DataView(new ArrayBuffer(Uf));m.setUint32(0,x.byteLength,!0),m.setUint32(4,dy,!0);let p=new ArrayBuffer(Nf),y=new DataView(p);y.setUint32(0,hy,!0),y.setUint32(4,uy,!0);let b=Nf+m.byteLength+x.byteLength+g.byteLength+f.byteLength;y.setUint32(8,b,!0);let M=new Blob([p,m,x,g,f],{type:"application/octet-stream"}),T=new FileReader;T.readAsArrayBuffer(M),T.onloadend=function(){t(T.result)}}}else if(a.buffers&&a.buffers.length>0){let u=new FileReader;u.readAsDataURL(c),u.onloadend=function(){let f=u.result;a.buffers[0].uri=f,t(a)}}else t(a)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;let n=this.options,s=this.extensionsUsed;try{let r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(let a in r.gltfExtensions)t.extensions[a]=r.gltfExtensions[a],s[a]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){let s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(e,s)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;let n=new P;for(let s=0,r=e.count;s<r;s++)if(Math.abs(n.fromBufferAttribute(e,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){let t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);let n=e.clone(),s=new P;for(let r=0,a=n.count;r<a;r++)s.fromBufferAttribute(n,r),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),n.setXYZ(r,s.x,s.y,s.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1,s={};(t.offset.x!==0||t.offset.y!==0)&&(s.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(s.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(s.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}async buildMetalRoughTextureAsync(e,t){if(e===t)return e;function n(f){return f.colorSpace===At?function(x){return x<.04045?x*.0773993808:Math.pow(x*.9478672986+.0521327014,2.4)}:function(x){return x}}e instanceof ts&&(e=await this.decompressTextureAsync(e)),t instanceof ts&&(t=await this.decompressTextureAsync(t));let s=e?e.image:null,r=t?t.image:null,a=Math.max(s?s.width:0,r?r.width:0),o=Math.max(s?s.height:0,r?r.height:0),l=Ff();l.width=a,l.height=o;let c=l.getContext("2d",{willReadFrequently:!0});c.fillStyle="#00ffff",c.fillRect(0,0,a,o);let h=c.getImageData(0,0,a,o);if(s){c.drawImage(s,0,0,a,o);let f=n(e),g=c.getImageData(0,0,a,o).data;for(let x=2;x<g.length;x+=4)h.data[x]=f(g[x]/256)*256}if(r){c.drawImage(r,0,0,a,o);let f=n(t),g=c.getImageData(0,0,a,o).data;for(let x=1;x<g.length;x+=4)h.data[x]=f(g[x]/256)*256}c.putImageData(h,0,0);let u=(e||t).clone();return u.source=new wi(l),u.colorSpace=gn,u.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),u}async decompressTextureAsync(e,t=1/0){if(this.textureUtils===null)throw new Error("THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures.");return await this.textureUtils.decompress(e,t)}processBuffer(e){let t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,s,r){let a=this.json;a.bufferViews||(a.bufferViews=[]);let o;switch(t){case tt.BYTE:case tt.UNSIGNED_BYTE:o=1;break;case tt.SHORT:case tt.UNSIGNED_SHORT:o=2;break;default:o=4}let l=e.itemSize*o;r===tt.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);let c=Of(s*l),h=new DataView(new ArrayBuffer(c)),d=0;for(let g=n;g<n+s;g++){for(let x=0;x<e.itemSize;x++){let m;e.itemSize>4?m=e.array[g*e.itemSize+x]:(x===0?m=e.getX(g):x===1?m=e.getY(g):x===2?m=e.getZ(g):x===3&&(m=e.getW(g)),e.normalized===!0&&(m=hs.normalize(m,e.array))),t===tt.FLOAT?h.setFloat32(d,m,!0):t===tt.INT?h.setInt32(d,m,!0):t===tt.UNSIGNED_INT?h.setUint32(d,m,!0):t===tt.SHORT?h.setInt16(d,m,!0):t===tt.UNSIGNED_SHORT?h.setUint16(d,m,!0):t===tt.BYTE?h.setInt8(d,m):t===tt.UNSIGNED_BYTE&&h.setUint8(d,m),d+=o}d%l!==0&&(d+=l-d%l)}let u={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(u.target=r),r===tt.ARRAY_BUFFER&&(u.byteStride=l),this.byteOffset+=c,a.bufferViews.push(u),{id:a.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){let t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(s){let r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){let a=Lh(r.result),o={buffer:t.processBuffer(a),byteOffset:t.byteOffset,byteLength:a.byteLength};t.byteOffset+=a.byteLength,s(n.bufferViews.push(o)-1)}})}processAccessor(e,t,n,s){let r=this.json,a={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"},o;if(e.array.constructor===Float32Array)o=tt.FLOAT;else if(e.array.constructor===Int32Array)o=tt.INT;else if(e.array.constructor===Uint32Array)o=tt.UNSIGNED_INT;else if(e.array.constructor===Int16Array)o=tt.SHORT;else if(e.array.constructor===Uint16Array)o=tt.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)o=tt.BYTE;else if(e.array.constructor===Uint8Array)o=tt.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(s===void 0||s===1/0)&&(s=e.count),s===0)return null;let l=gy(e,n,s),c;t!==void 0&&(c=e===t.index?tt.ELEMENT_ARRAY_BUFFER:tt.ARRAY_BUFFER);let h=this.processBufferView(e,o,n,s,c),d={bufferView:h.id,byteOffset:h.byteOffset,componentType:o,count:s,max:l.max,min:l.min,type:a[e.itemSize]};return e.normalized===!0&&(d.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(d)-1}processImage(e,t,n,s="image/png"){if(e!==null){let r=this,a=r.cache,o=r.json,l=r.options,c=r.pending;a.images.has(e)||a.images.set(e,{});let h=a.images.get(e),d=s+":flipY/"+n.toString();if(h[d]!==void 0)return h[d];o.images||(o.images=[]);let u={mimeType:s},f=Ff();f.width=Math.min(e.width,l.maxTextureSize),f.height=Math.min(e.height,l.maxTextureSize);let g=f.getContext("2d",{willReadFrequently:!0});if(n===!0&&(g.translate(0,f.height),g.scale(1,-1)),e.data!==void 0){t!==rn&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);let m=new Uint8ClampedArray(e.height*e.width*4);for(let p=0;p<m.length;p+=4)m[p+0]=e.data[p+0],m[p+1]=e.data[p+1],m[p+2]=e.data[p+2],m[p+3]=e.data[p+3];g.putImageData(new ImageData(m,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)g.drawImage(e,0,0,f.width,f.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(xy(f,s).then(m=>r.processBufferViewImage(m)).then(m=>{u.bufferView=m})):u.uri=Xs.getDataURL(f,s);let x=o.images.push(u)-1;return h[d]=x,x}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){let t=this.json;t.samplers||(t.samplers=[]);let n={magFilter:xn[e.magFilter],minFilter:xn[e.minFilter],wrapS:xn[e.wrapS],wrapT:xn[e.wrapT]};return t.samplers.push(n)-1}async processTextureAsync(e){let n=this.options,s=this.cache,r=this.json;if(s.textures.has(e))return s.textures.get(e);r.textures||(r.textures=[]),e instanceof ts&&(e=await this.decompressTextureAsync(e,n.maxTextureSize));let a=e.userData.mimeType;a==="image/webp"&&(a="image/png");let o={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,a)};e.name&&(o.name=e.name),await this._invokeAllAsync(async function(c){c.writeTexture&&await c.writeTexture(e,o)});let l=r.textures.push(o)-1;return s.textures.set(e,l),l}async processMaterialAsync(e){let t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);let s={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");let r=e.color.toArray().concat([e.opacity]);if(hi(r,[1,1,1,1])||(s.pbrMetallicRoughness.baseColorFactor=r),e.isMeshStandardMaterial?(s.pbrMetallicRoughness.metallicFactor=e.metalness,s.pbrMetallicRoughness.roughnessFactor=e.roughness):(s.pbrMetallicRoughness.metallicFactor=0,s.pbrMetallicRoughness.roughnessFactor=1),e.metalnessMap||e.roughnessMap){let o=await this.buildMetalRoughTextureAsync(e.metalnessMap,e.roughnessMap),l={index:await this.processTextureAsync(o),texCoord:o.channel};this.applyTextureTransform(l,o),s.pbrMetallicRoughness.metallicRoughnessTexture=l}if(e.map){let o={index:await this.processTextureAsync(e.map),texCoord:e.map.channel};this.applyTextureTransform(o,e.map),s.pbrMetallicRoughness.baseColorTexture=o}if(e.emissive){let o=e.emissive;if(Math.max(o.r,o.g,o.b)>0&&(s.emissiveFactor=e.emissive.toArray()),e.emissiveMap){let c={index:await this.processTextureAsync(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(c,e.emissiveMap),s.emissiveTexture=c}}if(e.normalMap){let o={index:await this.processTextureAsync(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(o.scale=e.normalScale.x),this.applyTextureTransform(o,e.normalMap),s.normalTexture=o}if(e.aoMap){let o={index:await this.processTextureAsync(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(o.strength=e.aoMapIntensity),this.applyTextureTransform(o,e.aoMap),s.occlusionTexture=o}e.transparent?s.alphaMode="BLEND":e.alphaTest>0&&(s.alphaMode="MASK",s.alphaCutoff=e.alphaTest),e.side===nn&&(s.doubleSided=!0),e.name!==""&&(s.name=e.name),this.serializeUserData(e,s),await this._invokeAllAsync(async function(o){o.writeMaterialAsync&&await o.writeMaterialAsync(e,s)});let a=n.materials.push(s)-1;return t.materials.set(e,a),a}async processMeshAsync(e){let t=this.cache,n=this.json,s=[e.geometry.uuid];if(Array.isArray(e.material))for(let M=0,T=e.material.length;M<T;M++)s.push(e.material[M].uuid);else s.push(e.material.uuid);let r=s.join(":");if(t.meshes.has(r))return t.meshes.get(r);let a=e.geometry,o;e.isLineSegments?o=tt.LINES:e.isLineLoop?o=tt.LINE_LOOP:e.isLine?o=tt.LINE_STRIP:e.isPoints?o=tt.POINTS:o=e.material.wireframe?tt.LINES:tt.TRIANGLES;let l={},c={},h=[],d=[],u={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=a.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),a.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let g=null;for(let M in a.attributes){if(M.slice(0,5)==="morph")continue;let T=a.attributes[M];if(M=u[M]||M.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(M)||(M="_"+M),t.attributes.has(this.getUID(T))){c[M]=t.attributes.get(this.getUID(T));continue}g=null;let I=T.array;M==="JOINTS_0"&&!(I instanceof Uint16Array)&&!(I instanceof Uint8Array)?(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),g=Oi.Utils.toTypedBufferAttribute(T,Uint16Array)):(I instanceof Uint32Array||I instanceof Int32Array)&&!M.startsWith("_")&&(console.warn(`GLTFExporter: Attribute "${M}" converted to type FLOAT.`),g=Oi.Utils.toTypedBufferAttribute(T,Float32Array));let _=this.processAccessor(g||T,a);_!==null&&(M.startsWith("_")||this.detectMeshQuantization(M,T),c[M]=_,t.attributes.set(this.getUID(T),_))}if(f!==void 0&&a.setAttribute("normal",f),Object.keys(c).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){let M=[],T=[],E={};if(e.morphTargetDictionary!==void 0)for(let I in e.morphTargetDictionary)E[e.morphTargetDictionary[I]]=I;for(let I=0;I<e.morphTargetInfluences.length;++I){let _={},S=!1;for(let k in a.morphAttributes){if(k!=="position"&&k!=="normal"){S||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),S=!0);continue}let C=a.morphAttributes[k][I],L=k.toUpperCase(),N=a.attributes[k];if(t.attributes.has(this.getUID(C,!0))){_[L]=t.attributes.get(this.getUID(C,!0));continue}let z=C.clone();if(!a.morphTargetsRelative)for(let D=0,B=C.count;D<B;D++)for(let U=0;U<C.itemSize;U++)U===0&&z.setX(D,C.getX(D)-N.getX(D)),U===1&&z.setY(D,C.getY(D)-N.getY(D)),U===2&&z.setZ(D,C.getZ(D)-N.getZ(D)),U===3&&z.setW(D,C.getW(D)-N.getW(D));_[L]=this.processAccessor(z,a),t.attributes.set(this.getUID(N,!0),_[L])}d.push(_),M.push(e.morphTargetInfluences[I]),e.morphTargetDictionary!==void 0&&T.push(E[I])}l.weights=M,T.length>0&&(l.extras={},l.extras.targetNames=T)}let x=Array.isArray(e.material);if(x&&a.groups.length===0)return null;let m=!1;if(x&&a.index===null){let M=[];for(let T=0,E=a.attributes.position.count;T<E;T++)M[T]=T;a.setIndex(M),m=!0}let p=x?e.material:[e.material],y=x?a.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let M=0,T=y.length;M<T;M++){let E={mode:o,attributes:c};if(this.serializeUserData(a,E),d.length>0&&(E.targets=d),a.index!==null){let _=this.getUID(a.index);(y[M].start!==void 0||y[M].count!==void 0)&&(_+=":"+y[M].start+":"+y[M].count),t.attributes.has(_)?E.indices=t.attributes.get(_):(E.indices=this.processAccessor(a.index,a,y[M].start,y[M].count),t.attributes.set(_,E.indices)),E.indices===null&&delete E.indices}let I=await this.processMaterialAsync(p[y[M].materialIndex]);I!==null&&(E.material=I),h.push(E)}m===!0&&a.setIndex(null),l.primitives=h,n.meshes||(n.meshes=[]),await this._invokeAllAsync(function(M){M.writeMesh&&M.writeMesh(e,l)});let b=n.meshes.push(l)-1;return t.meshes.set(r,b),b}detectMeshQuantization(e,t){if(this.extensionsUsed[Ph])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");let s=e.split("_",1)[0];Lf[s]&&Lf[s].includes(n)&&(this.extensionsUsed[Ph]=!0,this.extensionsRequired[Ph]=!0)}processCamera(e){let t=this.json;t.cameras||(t.cameras=[]);let n=e.isOrthographicCamera,s={type:n?"orthographic":"perspective"};return n?s.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:s.perspective={aspectRatio:e.aspect,yfov:hs.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(s.name=e.type),t.cameras.push(s)-1}processAnimation(e,t){let n=this.json,s=this.nodeMap;n.animations||(n.animations=[]),e=Oi.Utils.mergeMorphTargetTracks(e.clone(),t);let r=e.tracks,a=[],o=[];for(let c=0;c<r.length;++c){let h=r[c],d=at.parseTrackName(h.name),u=at.findNode(t,d.nodeName),f=Df[d.propertyName];if(d.objectName==="bones"&&(u.isSkinnedMesh===!0?u=u.skeleton.getBoneByName(d.objectIndex):u=void 0),!u||!f){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',h.name);continue}let g=1,x=h.values.length/h.times.length;f===Df.morphTargetInfluences&&(x/=u.morphTargetInfluences.length);let m;h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(m="CUBICSPLINE",x/=3):h.getInterpolation()===Ji?m="STEP":m="LINEAR",o.push({input:this.processAccessor(new xt(h.times,g)),output:this.processAccessor(new xt(h.values,x)),interpolation:m}),a.push({sampler:o.length-1,target:{node:s.get(u),path:f}})}let l={name:e.name||"clip_"+n.animations.length,samplers:o,channels:a};return this.serializeUserData(e,l),n.animations.push(l),n.animations.length-1}processSkin(e){let t=this.json,n=this.nodeMap,s=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;let a=e.skeleton.bones[0];if(a===void 0)return null;let o=[],l=new Float32Array(r.bones.length*16),c=new lt;for(let d=0;d<r.bones.length;++d)o.push(n.get(r.bones[d])),c.copy(r.boneInverses[d]),c.multiply(e.bindMatrix).toArray(l,d*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new xt(l,16)),joints:o,skeleton:n.get(a)}),s.skin=t.skins.length-1}async processNodeAsync(e){let t=this.json,n=this.options,s=this.nodeMap;if(t.nodes||(t.nodes=[]),e.pivot!==null)return await this._processNodeWithPivotAsync(e);let r={};if(n.trs){let o=e.quaternion.toArray(),l=e.position.toArray(),c=e.scale.toArray();hi(o,[0,0,0,1])||(r.rotation=o),hi(l,[0,0,0])||(r.translation=l),hi(c,[1,1,1])||(r.scale=c)}else e.matrixAutoUpdate&&e.updateMatrix(),my(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){let o=await this.processMeshAsync(e);o!==null&&(r.mesh=o)}else e.isCamera&&(r.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);let a=t.nodes.push(r)-1;if(s.set(e,a),e.children.length>0){let o=[];for(let l=0,c=e.children.length;l<c;l++){let h=e.children[l];if(h.visible||n.onlyVisible===!1){let d=await this.processNodeAsync(h);d!==null&&o.push(d)}}o.length>0&&(r.children=o)}return await this._invokeAllAsync(function(o){o.writeNode&&o.writeNode(e,r)}),a}async _processNodeWithPivotAsync(e){let t=this.json,n=this.options,s=this.nodeMap,r=e.pivot,a={},o=e.quaternion.toArray(),l=[e.position.x+r.x,e.position.y+r.y,e.position.z+r.z],c=e.scale.toArray();hi(o,[0,0,0,1])||(a.rotation=o),hi(l,[0,0,0])||(a.translation=l),hi(c,[1,1,1])||(a.scale=c),a.extras={pivot:r.toArray()},e.name!==""&&(a.name=String(e.name)),this.serializeUserData(e,a);let h=t.nodes.push(a)-1;s.set(e,h);let d={},u=[-r.x,-r.y,-r.z];if(hi(u,[0,0,0])||(d.translation=u),e.isMesh||e.isLine||e.isPoints){let x=await this.processMeshAsync(e);x!==null&&(d.mesh=x)}else e.isCamera&&(d.camera=this.processCamera(e));e.isSkinnedMesh&&this.skins.push(e);let g=[t.nodes.push(d)-1];if(e.children.length>0){let x=[];for(let m=0,p=e.children.length;m<p;m++){let y=e.children[m];if(y.visible||n.onlyVisible===!1){let b=await this.processNodeAsync(y);b!==null&&x.push(b)}}x.length>0&&(d.children=x)}return a.children=g,await this._invokeAllAsync(function(x){x.writeNode&&x.writeNode(e,a)}),h}async processSceneAsync(e){let t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);let s={};e.name!==""&&(s.name=e.name),t.scenes.push(s);let r=[];for(let a=0,o=e.children.length;a<o;a++){let l=e.children[a];if(l.visible||n.onlyVisible===!1){let c=await this.processNodeAsync(l);c!==null&&r.push(c)}}r.length>0&&(s.nodes=r),this.serializeUserData(e,s)}async processObjectsAsync(e){let t=new Gn;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);await this.processSceneAsync(t)}async processInputAsync(e){let t=this.options;e=e instanceof Array?e:[e],await this._invokeAllAsync(function(s){s.beforeParse&&s.beforeParse(e)});let n=[];for(let s=0;s<e.length;s++)e[s]instanceof Gn?await this.processSceneAsync(e[s]):n.push(e[s]);n.length>0&&await this.processObjectsAsync(n);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);for(let s=0;s<t.animations.length;++s)this.processAnimation(t.animations[s],e[0]);await this._invokeAllAsync(function(s){s.afterParse&&s.afterParse(e)})}async _invokeAllAsync(e){for(let t=0,n=this.plugins.length;t<n;t++)await e(this.plugins[t])}},Nh=class{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}let n=this.writer,s=n.json,r=n.extensionsUsed,a={};e.name&&(a.name=e.name),a.color=e.color.toArray(),a.intensity=e.intensity,e.isDirectionalLight?a.type="directional":e.isPointLight?(a.type="point",e.distance>0&&(a.range=e.distance)):e.isSpotLight&&(a.type="spot",e.distance>0&&(a.range=e.distance),a.spot={},a.spot.innerConeAngle=(1-e.penumbra)*e.angle,a.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},r[this.name]=!0);let o=s.extensions[this.name].lights;o.push(a),t.extensions=t.extensions||{},t.extensions[this.name]={light:o.length-1}}},Uh=class{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}async writeMaterialAsync(e,t){if(!e.isMeshBasicMaterial)return;let s=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},s[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}},Fh=class{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){let a={index:await n.processTextureAsync(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(a,e.clearcoatMap),r.clearcoatTexture=a}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){let a={index:await n.processTextureAsync(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(a,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=a}if(e.clearcoatNormalMap){let a={index:await n.processTextureAsync(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(a.scale=e.clearcoatNormalScale.x),n.applyTextureTransform(a,e.clearcoatNormalMap),r.clearcoatNormalTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Oh=class{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;let s=this.writer.extensionsUsed,r={};r.dispersion=e.dispersion,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Bh=class{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){let a={index:await n.processTextureAsync(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(a,e.iridescenceMap),r.iridescenceTexture=a}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){let a={index:await n.processTextureAsync(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(a,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},zh=class{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){let a={index:await n.processTextureAsync(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(a,e.transmissionMap),r.transmissionTexture=a}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},kh=class{constructor(e){this.writer=e,this.name="KHR_materials_volume"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;let n=this.writer,s=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){let a={index:await n.processTextureAsync(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(a,e.thicknessMap),r.thicknessTexture=a}e.attenuationDistance!==1/0&&(r.attenuationDistance=e.attenuationDistance),r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Vh=class{constructor(e){this.writer=e,this.name="KHR_materials_ior"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;let s=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Hh=class{constructor(e){this.writer=e,this.name="KHR_materials_specular"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(cy)&&!e.specularIntensityMap&&!e.specularColorMap)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.specularIntensityMap){let a={index:await n.processTextureAsync(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(a,e.specularIntensityMap),r.specularTexture=a}if(e.specularColorMap){let a={index:await n.processTextureAsync(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(a,e.specularColorMap),r.specularColorTexture=a}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Gh=class{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.sheenRoughnessMap){let a={index:await n.processTextureAsync(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(a,e.sheenRoughnessMap),r.sheenRoughnessTexture=a}if(e.sheenColorMap){let a={index:await n.processTextureAsync(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(a,e.sheenColorMap),r.sheenColorTexture=a}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Wh=class{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}async writeMaterialAsync(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.anisotropyMap){let a={index:await n.processTextureAsync(e.anisotropyMap)};n.applyTextureTransform(a,e.anisotropyMap),r.anisotropyTexture=a}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},Xh=class{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;let s=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},qh=class{constructor(e){this.writer=e,this.name="EXT_materials_bump"}async writeMaterialAsync(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;let n=this.writer,s=n.extensionsUsed,r={};if(e.bumpMap){let a={index:await n.processTextureAsync(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(a,e.bumpMap),r.bumpTexture=a}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}},$h=class{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;let n=this.writer,s=e,r=new Float32Array(s.count*3),a=new Float32Array(s.count*4),o=new Float32Array(s.count*3),l=new lt,c=new P,h=new en,d=new P;for(let f=0;f<s.count;f++)s.getMatrixAt(f,l),l.decompose(c,h,d),c.toArray(r,f*3),h.toArray(a,f*4),d.toArray(o,f*3);let u={TRANSLATION:n.processAccessor(new xt(r,3)),ROTATION:n.processAccessor(new xt(a,4)),SCALE:n.processAccessor(new xt(o,3))};s.instanceColor&&(u._COLOR_0=n.processAccessor(s.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:u},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}};Oi.Utils={insertKeyframe:function(i,e){let n=i.getValueSize(),s=new i.TimeBufferType(i.times.length+1),r=new i.ValueBufferType(i.values.length+n),a=i.createInterpolant(new i.ValueBufferType(n)),o;if(i.times.length===0){s[0]=e;for(let l=0;l<n;l++)r[l]=0;o=0}else if(e<i.times[0]){if(Math.abs(i.times[0]-e)<.001)return 0;s[0]=e,s.set(i.times,1),r.set(a.evaluate(e),0),r.set(i.values,n),o=0}else if(e>i.times[i.times.length-1]){if(Math.abs(i.times[i.times.length-1]-e)<.001)return i.times.length-1;s[s.length-1]=e,s.set(i.times,0),r.set(i.values,0),r.set(a.evaluate(e),i.values.length),o=s.length-1}else for(let l=0;l<i.times.length;l++){if(Math.abs(i.times[l]-e)<.001)return l;if(i.times[l]<e&&i.times[l+1]>e){s.set(i.times.slice(0,l+1),0),s[l+1]=e,s.set(i.times.slice(l+1),l+2),r.set(i.values.slice(0,(l+1)*n),0),r.set(a.evaluate(e),(l+1)*n),r.set(i.values.slice((l+1)*n),(l+2)*n),o=l+1;break}}return i.times=s,i.values=r,o},mergeMorphTargetTracks:function(i,e){let t=[],n={},s=i.tracks;for(let r=0;r<s.length;++r){let a=s[r],o=at.parseTrackName(a.name),l=at.findNode(e,o.nodeName);if(o.propertyName!=="morphTargetInfluences"||o.propertyIndex===void 0){t.push(a);continue}if(a.createInterpolant!==a.InterpolantFactoryMethodDiscrete&&a.createInterpolant!==a.InterpolantFactoryMethodLinear){if(a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),a=a.clone(),a.setInterpolation(Vs)}let c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[o.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+o.propertyIndex);let d;if(n[l.uuid]===void 0){d=a.clone();let f=new d.ValueBufferType(c*d.times.length);for(let g=0;g<d.times.length;g++)f[g*c+h]=d.values[g];d.name=(o.nodeName||"")+".morphTargetInfluences",d.values=f,n[l.uuid]=d,t.push(d);continue}let u=a.createInterpolant(new a.ValueBufferType(1));d=n[l.uuid];for(let f=0;f<d.times.length;f++)d.values[f*c+h]=u.evaluate(d.times[f]);for(let f=0;f<a.times.length;f++){let g=this.insertKeyframe(d,a.times[f]);d.values[g*c+h]=a.values[f]}}return i.tracks=t,i},toTypedBufferAttribute:function(i,e){let t=new xt(new e(i.count*i.itemSize),i.itemSize,!1);if(!i.normalized&&!i.isInterleavedBufferAttribute)return t.array.set(i.array),t;for(let n=0,s=i.count;n<s;n++)for(let r=0;r<i.itemSize;r++)t.setComponent(n,r,i.getComponent(n,r));return t}};var Wt=Uint8Array,_n=Uint16Array,Qh=Int32Array,eu=new Wt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),tu=new Wt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Bf=new Wt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Wf=function(i,e){for(var t=new _n(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new Qh(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return{b:t,r:s}},Xf=Wf(eu,2),_y=Xf.b,Zh=Xf.r;_y[28]=258,Zh[258]=28;var qf=Wf(tu,0),H1=qf.b,zf=qf.r,Jh=new _n(32768);for(rt=0;rt<32768;++rt)ui=(rt&43690)>>1|(rt&21845)<<1,ui=(ui&52428)>>2|(ui&13107)<<2,ui=(ui&61680)>>4|(ui&3855)<<4,Jh[rt]=((ui&65280)>>8|(ui&255)<<8)>>1;var ui,rt,xa=(function(i,e,t){for(var n=i.length,s=0,r=new _n(e);s<n;++s)i[s]&&++r[i[s]-1];var a=new _n(e);for(s=1;s<e;++s)a[s]=a[s-1]+r[s-1]<<1;var o;if(t){o=new _n(1<<e);var l=15-e;for(s=0;s<n;++s)if(i[s])for(var c=s<<4|i[s],h=e-i[s],d=a[i[s]-1]++<<h,u=d|(1<<h)-1;d<=u;++d)o[Jh[d]>>l]=c}else for(o=new _n(n),s=0;s<n;++s)i[s]&&(o[s]=Jh[a[i[s]-1]++]>>15-i[s]);return o}),gs=new Wt(288);for(rt=0;rt<144;++rt)gs[rt]=8;var rt;for(rt=144;rt<256;++rt)gs[rt]=9;var rt;for(rt=256;rt<280;++rt)gs[rt]=7;var rt;for(rt=280;rt<288;++rt)gs[rt]=8;var rt,kl=new Wt(32);for(rt=0;rt<32;++rt)kl[rt]=5;var rt,vy=xa(gs,9,0);var yy=xa(kl,5,0);var $f=function(i){return(i+7)/8|0},Yf=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new Wt(i.subarray(e,t))};var My=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Vl=function(i,e,t){var n=new Error(e||My[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Vl),!t)throw n;return n};var di=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8},ma=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8,i[n+2]|=t>>16},Yh=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var s=t.length,r=t.slice();if(!s)return{t:Jf,l:0};if(s==1){var a=new Wt(t[0].s+1);return a[t[0].s]=1,{t:a,l:1}}t.sort(function(T,E){return T.f-E.f}),t.push({s:-1,f:25001});var o=t[0],l=t[1],c=0,h=1,d=2;for(t[0]={s:-1,f:o.f+l.f,l:o,r:l};h!=s-1;)o=t[t[c].f<t[d].f?c++:d++],l=t[c!=h&&t[c].f<t[d].f?c++:d++],t[h++]={s:-1,f:o.f+l.f,l:o,r:l};for(var u=r[0].s,n=1;n<s;++n)r[n].s>u&&(u=r[n].s);var f=new _n(u+1),g=jh(t[h-1],f,0);if(g>e){var n=0,x=0,m=g-e,p=1<<m;for(r.sort(function(E,I){return f[I.s]-f[E.s]||E.f-I.f});n<s;++n){var y=r[n].s;if(f[y]>e)x+=p-(1<<g-f[y]),f[y]=e;else break}for(x>>=m;x>0;){var b=r[n].s;f[b]<e?x-=1<<e-f[b]++-1:++n}for(;n>=0&&x;--n){var M=r[n].s;f[M]==e&&(--f[M],++x)}g=e}return{t:new Wt(f),l:g}},jh=function(i,e,t){return i.s==-1?Math.max(jh(i.l,e,t+1),jh(i.r,e,t+1)):e[i.s]=t},kf=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new _n(++e),n=0,s=i[0],r=1,a=function(l){t[n++]=l},o=1;o<=e;++o)if(i[o]==s&&o!=e)++r;else{if(!s&&r>2){for(;r>138;r-=138)a(32754);r>2&&(a(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(a(s),--r;r>6;r-=6)a(8304);r>2&&(a(r-3<<5|8208),r=0)}for(;r--;)a(s);r=1,s=i[o]}return{c:t.subarray(0,n),n:e}},ga=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},Zf=function(i,e,t){var n=t.length,s=$f(e+2);i[s]=n&255,i[s+1]=n>>8,i[s+2]=i[s]^255,i[s+3]=i[s+1]^255;for(var r=0;r<n;++r)i[s+r+4]=t[r];return(s+4+n)*8},Vf=function(i,e,t,n,s,r,a,o,l,c,h){di(e,h++,t),++s[256];for(var d=Yh(s,15),u=d.t,f=d.l,g=Yh(r,15),x=g.t,m=g.l,p=kf(u),y=p.c,b=p.n,M=kf(x),T=M.c,E=M.n,I=new _n(19),_=0;_<y.length;++_)++I[y[_]&31];for(var _=0;_<T.length;++_)++I[T[_]&31];for(var S=Yh(I,7),k=S.t,C=S.l,L=19;L>4&&!k[Bf[L-1]];--L);var N=c+5<<3,z=ga(s,gs)+ga(r,kl)+a,D=ga(s,u)+ga(r,x)+a+14+3*L+ga(I,k)+2*I[16]+3*I[17]+7*I[18];if(l>=0&&N<=z&&N<=D)return Zf(e,h,i.subarray(l,l+c));var B,U,ie,ne;if(di(e,h,1+(D<z)),h+=2,D<z){B=xa(u,f,0),U=u,ie=xa(x,m,0),ne=x;var _e=xa(k,C,0);di(e,h,b-257),di(e,h+5,E-1),di(e,h+10,L-4),h+=14;for(var _=0;_<L;++_)di(e,h+3*_,k[Bf[_]]);h+=3*L;for(var ue=[y,T],q=0;q<2;++q)for(var se=ue[q],_=0;_<se.length;++_){var oe=se[_]&31;di(e,h,_e[oe]),h+=k[oe],oe>15&&(di(e,h,se[_]>>5&127),h+=se[_]>>12)}}else B=vy,U=gs,ie=yy,ne=kl;for(var _=0;_<o;++_){var ee=n[_];if(ee>255){var oe=ee>>18&31;ma(e,h,B[oe+257]),h+=U[oe+257],oe>7&&(di(e,h,ee>>23&31),h+=eu[oe]);var H=ee&31;ma(e,h,ie[H]),h+=ne[H],H>3&&(ma(e,h,ee>>5&8191),h+=tu[H])}else ma(e,h,B[ee]),h+=U[ee]}return ma(e,h,B[256]),h+U[256]},by=new Qh([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Jf=new Wt(0),Sy=function(i,e,t,n,s,r){var a=r.z||i.length,o=new Wt(n+a+5*(1+Math.ceil(a/7e3))+s),l=o.subarray(n,o.length-s),c=r.l,h=(r.r||0)&7;if(e){h&&(l[0]=r.r>>3);for(var d=by[e-1],u=d>>13,f=d&8191,g=(1<<t)-1,x=r.p||new _n(32768),m=r.h||new _n(g+1),p=Math.ceil(t/3),y=2*p,b=function(Z){return(i[Z]^i[Z+1]<<p^i[Z+2]<<y)&g},M=new Qh(25e3),T=new _n(288),E=new _n(32),I=0,_=0,S=r.i||0,k=0,C=r.w||0,L=0;S+2<a;++S){var N=b(S),z=S&32767,D=m[N];if(x[z]=D,m[N]=z,C<=S){var B=a-S;if((I>7e3||k>24576)&&(B>423||!c)){h=Vf(i,l,0,M,T,E,_,k,L,S-L,h),k=I=_=0,L=S;for(var U=0;U<286;++U)T[U]=0;for(var U=0;U<30;++U)E[U]=0}var ie=2,ne=0,_e=f,ue=z-D&32767;if(B>2&&N==b(S-ue))for(var q=Math.min(u,B)-1,se=Math.min(32767,S),oe=Math.min(258,B);ue<=se&&--_e&&z!=D;){if(i[S+ie]==i[S+ie-ue]){for(var ee=0;ee<oe&&i[S+ee]==i[S+ee-ue];++ee);if(ee>ie){if(ie=ee,ne=ue,ee>q)break;for(var H=Math.min(ue,ee-2),K=0,U=0;U<H;++U){var Q=S-ue+U&32767,ve=x[Q],he=Q-ve&32767;he>K&&(K=he,D=Q)}}}z=D,D=x[z],ue+=z-D&32767}if(ne){M[k++]=268435456|Zh[ie]<<18|zf[ne];var Me=Zh[ie]&31,Fe=zf[ne]&31;_+=eu[Me]+tu[Fe],++T[257+Me],++E[Fe],C=S+ie,++I}else M[k++]=i[S],++T[i[S]]}}for(S=Math.max(S,C);S<a;++S)M[k++]=i[S],++T[i[S]];h=Vf(i,l,c,M,T,E,_,k,L,S-L,h),c||(r.r=h&7|l[h/8|0]<<3,h-=7,r.h=m,r.p=x,r.i=S,r.w=C)}else{for(var S=r.w||0;S<a+c;S+=65535){var Te=S+65535;Te>=a&&(l[h/8|0]=c,Te=a),h=Zf(l,h+1,i.subarray(S,Te))}r.i=a}return Yf(o,0,n+$f(h)+s)},wy=(function(){for(var i=new Int32Array(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&-306674912)^t>>>1;i[e]=t}return i})(),Ty=function(){var i=-1;return{p:function(e){for(var t=i,n=0;n<e.length;++n)t=wy[t&255^e[n]]^t>>>8;i=t},d:function(){return~i}}};var Ey=function(i,e,t,n,s){if(!s&&(s={l:1},e.dictionary)){var r=e.dictionary.subarray(-32768),a=new Wt(r.length+i.length);a.set(r),a.set(i,r.length),i=a,s.w=r.length}return Sy(i,e.level==null?6:e.level,e.mem==null?s.l?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):20:12+e.mem,t,n,s)},jf=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t};var Gt=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8};function Ay(i,e){return Ey(i,e||{},0,0)}var Kf=function(i,e,t,n){for(var s in i){var r=i[s],a=e+s,o=n;Array.isArray(r)&&(o=jf(n,r[1]),r=r[0]),r instanceof Wt?t[a]=[r,o]:(t[a+="/"]=[new Wt(0),o],Kf(r,a,t,n))}},Hf=typeof TextEncoder<"u"&&new TextEncoder,Cy=typeof TextDecoder<"u"&&new TextDecoder,Ry=0;try{Cy.decode(Jf,{stream:!0}),Ry=1}catch{}function _a(i,e){if(e){for(var t=new Wt(i.length),n=0;n<i.length;++n)t[n]=i.charCodeAt(n);return t}if(Hf)return Hf.encode(i);for(var s=i.length,r=new Wt(i.length+(i.length>>1)),a=0,o=function(h){r[a++]=h},n=0;n<s;++n){if(a+5>r.length){var l=new Wt(a+8+(s-n<<1));l.set(r),r=l}var c=i.charCodeAt(n);c<128||e?o(c):c<2048?(o(192|c>>6),o(128|c&63)):c>55295&&c<57344?(c=65536+(c&1047552)|i.charCodeAt(++n)&1023,o(240|c>>18),o(128|c>>12&63),o(128|c>>6&63),o(128|c&63)):(o(224|c>>12),o(128|c>>6&63),o(128|c&63))}return Yf(r,0,a)}var Kh=function(i){var e=0;if(i)for(var t in i){var n=i[t].length;n>65535&&Vl(9),e+=n+4}return e},Gf=function(i,e,t,n,s,r,a,o){var l=n.length,c=t.extra,h=o&&o.length,d=Kh(c);Gt(i,e,a!=null?33639248:67324752),e+=4,a!=null&&(i[e++]=20,i[e++]=t.os),i[e]=20,e+=2,i[e++]=t.flag<<1|(r<0&&8),i[e++]=s&&8,i[e++]=t.compression&255,i[e++]=t.compression>>8;var u=new Date(t.mtime==null?Date.now():t.mtime),f=u.getFullYear()-1980;if((f<0||f>119)&&Vl(10),Gt(i,e,f<<25|u.getMonth()+1<<21|u.getDate()<<16|u.getHours()<<11|u.getMinutes()<<5|u.getSeconds()>>1),e+=4,r!=-1&&(Gt(i,e,t.crc),Gt(i,e+4,r<0?-r-2:r),Gt(i,e+8,t.size)),Gt(i,e+12,l),Gt(i,e+14,d),e+=16,a!=null&&(Gt(i,e,h),Gt(i,e+6,t.attrs),Gt(i,e+10,a),e+=14),i.set(n,e),e+=l,d)for(var g in c){var x=c[g],m=x.length;Gt(i,e,+g),Gt(i,e+2,m),i.set(x,e+4),e+=4+m}return h&&(i.set(o,e),e+=h),e},Iy=function(i,e,t,n,s){Gt(i,e,101010256),Gt(i,e+8,t),Gt(i,e+10,t),Gt(i,e+12,n),Gt(i,e+16,s)};function Qf(i,e){e||(e={});var t={},n=[];Kf(i,"",t,e);var s=0,r=0;for(var a in t){var o=t[a],l=o[0],c=o[1],h=c.level==0?0:8,d=_a(a),u=d.length,f=c.comment,g=f&&_a(f),x=g&&g.length,m=Kh(c.extra);u>65535&&Vl(11);var p=h?Ay(l,c):l,y=p.length,b=Ty();b.p(l),n.push(jf(c,{size:l.length,crc:b.d(),c:p,f:d,m:g,u:u!=a.length||g&&f.length!=x,o:s,compression:h})),s+=30+u+m+y,r+=76+2*(u+m)+(x||0)+y}for(var M=new Wt(r+22),T=s,E=r-s,I=0;I<n.length;++I){var d=n[I];Gf(M,d.o,d,d.f,d.u,d.c.length);var _=30+d.f.length+Kh(d.extra);M.set(d.c,d.o+_),Gf(M,s,d,d.f,d.u,d.c.length,d.o,d.m),s+=16+_+(d.m?d.m.length:0)}return Iy(M,s,n.length,E,T),M}var tn=class{constructor(e,t="",n=[],s=[]){this.name=e,this.type=t,this.metadata=n,this.properties=s,this.children=[]}addMetadata(e,t){this.metadata.push({key:e,value:t})}addProperty(e,t=[]){this.properties.push({property:e,metadata:t})}addChild(e){this.children.push(e)}toString(e=0){let t="	".repeat(e),n=this.metadata.map(h=>{let d=h.key,u=h.value;if(Array.isArray(u)){let f=[];return f.push(`${d} = {`),u.forEach(g=>{f.push(`${t}		${g}`)}),f.push(`${t}	}`),f.join(`
`)}else return`${d} = ${u}`}),s=n.length?` (
${n.map(h=>`${t}	${h}`).join(`
`)}
${t})`:"",r=this.properties.map(h=>{let d=h.property,u=h.metadata.length?` (
${h.metadata.map(f=>`${t}		${f}`).join(`
`)}
${t}	)`:"";return`${t}	${d}${u}`}),a=this.children.map(h=>h.toString(e+1)),o=[];if(r.length>0&&o.push(...r),a.length>0){r.length>0&&o.push("");for(let h=0;h<a.length;h++)o.push(a[h]),h<a.length-1&&o.push("")}let l=o.join(`
`),c=this.type?this.type+" ":"";return`${t}def ${c}"${this.name}"${s}
${t}{
${l}
${t}}`}},Gl=class{constructor(){this.textureUtils=null}setTextureUtils(e){this.textureUtils=e}parse(e,t,n,s){this.parseAsync(e,s).then(t).catch(n)}async parseAsync(e,t={}){t=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},includeAnchoringProperties:!0,onlyVisible:!0,quickLookCompatible:!1,maxTextureSize:1024},t);let n=new Set,s={},r="model.usda";s[r]=null;let a=new tn("Root","Xform"),o=new tn("Scenes","Scope");o.addMetadata("kind",'"sceneLibrary"'),a.addChild(o);let l="Scene",c=new tn(l,"Xform");c.addMetadata("customData",["bool preliminary_collidesWithEnvironment = 0",`string sceneName = "${l}"`]),c.addMetadata("sceneName",`"${l}"`),t.includeAnchoringProperties&&(c.addProperty(`token preliminary:anchoring:type = "${t.ar.anchoring.type}"`),c.addProperty(`token preliminary:planeAnchoring:alignment = "${t.ar.planeAnchoring.alignment}"`)),o.addChild(c);let h,d={},u={};sp(e,c,d,n,s,t);let f=By(d,u,t.quickLookCompatible);h=ip()+`
`+a.toString()+`

`+f.toString(),s[r]=_a(h),h=null;for(let x in u){let m=u[x];if(m.isCompressedTexture===!0){if(this.textureUtils===null)throw new Error("THREE.USDZExporter: setTextureUtils() must be called to process compressed textures.");m=await this.textureUtils.decompress(m)}let p=Py(m.image,m.flipY,t.maxTextureSize),y=await new Promise(b=>p.toBlob(b,"image/png",1));s[`textures/Texture_${x}.png`]=new Uint8Array(await y.arrayBuffer())}let g=0;for(let x in s){let m=s[x],p=34+x.length;g+=p;let y=g&63;if(y!==4){let b=64-y,M=new Uint8Array(b);s[x]=[m,{extra:{12345:M}}]}g=m.length}return Qf(s,{level:0})}};function np(i,e){let t=i.name;return t=t.replace(/[^A-Za-z0-9_]/g,""),/^[0-9]/.test(t)&&(t="_"+t),t===""&&(i.isCamera?t="Camera":t="Object"),e.has(t)&&(t=t+"_"+i.id),e.add(t),t}function Py(i,e,t){if(typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&i instanceof ImageBitmap){let n=t/Math.max(i.width,i.height),s=document.createElement("canvas");s.width=i.width*Math.min(1,n),s.height=i.height*Math.min(1,n);let r=s.getContext("2d");return e===!0&&(r.translate(0,s.height),r.scale(1,-1)),r.drawImage(i,0,0,s.width,s.height),s}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}var mt=7;function ip(){return`#usda 1.0
(
	customLayerData = {
		string creator = "Three.js USDZExporter"
	}
	defaultPrim = "Root"
	metersPerUnit = 1
	upAxis = "Y"
)
`}function sp(i,e,t,n,s,r){for(let a=0,o=i.children.length;a<o;a++){let l=i.children[a];if(l.visible===!1&&r.onlyVisible===!0)continue;let c;if(l.isMesh){let h=l.geometry,d=l.material;if(d.isMeshStandardMaterial){let u="geometries/Geometry_"+h.id+".usda";if(!(u in s)){let f=Dy(h);s[u]=_a(ip()+`
`+f.toString())}d.uuid in t||(t[d.uuid]=d),c=Ly(l,h,t[d.uuid],n)}else console.warn("THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)",l)}else l.isCamera?c=Vy(l,n):c=rp(l,n);c&&(e.addChild(c),sp(l,c,t,n,s,r))}}function rp(i,e){let t=np(i,e);i.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",i);let n=new tn(t,"Xform");if(i.pivot!==null){let s=i.position,r=i.quaternion,a=i.scale,o=i.pivot;n.addProperty(`float3 xformOp:translate = (${s.x.toPrecision(mt)}, ${s.y.toPrecision(mt)}, ${s.z.toPrecision(mt)})`),n.addProperty(`float3 xformOp:translate:pivot = (${o.x.toPrecision(mt)}, ${o.y.toPrecision(mt)}, ${o.z.toPrecision(mt)})`),n.addProperty(`quatf xformOp:orient = (${r.w.toPrecision(mt)}, ${r.x.toPrecision(mt)}, ${r.y.toPrecision(mt)}, ${r.z.toPrecision(mt)})`),n.addProperty(`float3 xformOp:scale = (${a.x.toPrecision(mt)}, ${a.y.toPrecision(mt)}, ${a.z.toPrecision(mt)})`),n.addProperty('uniform token[] xformOpOrder = ["xformOp:translate", "xformOp:translate:pivot", "xformOp:orient", "xformOp:scale", "!invert!xformOp:translate:pivot"]')}else{let s=ap(i.matrix);n.addProperty(`matrix4d xformOp:transform = ${s}`),n.addProperty('uniform token[] xformOpOrder = ["xformOp:transform"]')}return n}function Ly(i,e,t,n){let s=rp(i,n);return s.addMetadata("prepend references",`@./geometries/Geometry_${e.id}.usda@</Geometry>`),s.addMetadata("prepend apiSchemas",'["MaterialBindingAPI"]'),s.addProperty(`rel material:binding = </Materials/Material_${t.id}>`),s}function ap(i){let e=i.elements;return`( ${Hl(e,0)}, ${Hl(e,4)}, ${Hl(e,8)}, ${Hl(e,12)} )`}function Hl(i,e){return`(${i[e+0]}, ${i[e+1]}, ${i[e+2]}, ${i[e+3]})`}function Dy(i){let e=new tn("Geometry"),t=Ny(i);return e.addChild(t),e}function Ny(i){let e="Geometry",t=i.attributes,n=t.position.count,s=new tn(e,"Mesh");s.addProperty(`int[] faceVertexCounts = [${Uy(i)}]`),s.addProperty(`int[] faceVertexIndices = [${Fy(i)}]`),s.addProperty(`normal3f[] normals = [${nu(t.normal,n)}]`,['interpolation = "vertex"']),s.addProperty(`point3f[] points = [${nu(t.position,n)}]`);for(let a=0;a<4;a++){let o=a>0?a:"",l=t["uv"+o];l!==void 0&&s.addProperty(`texCoord2f[] primvars:st${o} = [${Oy(l)}]`,['interpolation = "vertex"'])}let r=t.color;return r!==void 0&&s.addProperty(`color3f[] primvars:displayColor = [${nu(r,n)}]`,['interpolation = "vertex"']),s.addProperty('uniform token subdivisionScheme = "none"'),s}function Uy(i){let e=i.index!==null?i.index.count:i.attributes.position.count;return Array(e/3).fill(3).join(", ")}function Fy(i){let e=i.index,t=[];if(e!==null)for(let n=0;n<e.count;n++)t.push(e.getX(n));else{let n=i.attributes.position.count;for(let s=0;s<n;s++)t.push(s)}return t.join(", ")}function nu(i,e){if(i===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");let t=[];for(let n=0;n<i.count;n++){let s=i.getX(n),r=i.getY(n),a=i.getZ(n);t.push(`(${s.toPrecision(mt)}, ${r.toPrecision(mt)}, ${a.toPrecision(mt)})`)}return t.join(", ")}function Oy(i){let e=[];for(let t=0;t<i.count;t++){let n=i.getX(t),s=i.getY(t);e.push(`(${n.toPrecision(mt)}, ${1-s.toPrecision(mt)})`)}return e.join(", ")}function By(i,e,t=!1){let n=new tn("Materials");for(let s in i){let r=i[s];n.addChild(zy(r,e,t))}return n}function zy(i,e,t=!1){let n=new tn(`Material_${i.id}`,"Material");function s(a,o,l){let c=a.source.id+"_"+a.flipY;e[c]=a;let h=a.channel>0?"st"+a.channel:"st",d={1e3:"repeat",1001:"clamp",1002:"mirror"},u=a.repeat.clone(),f=a.offset.clone(),g=a.rotation,x=Math.sin(g),m=Math.cos(g);f.y=1-f.y-u.y,t?(f.x=f.x/u.x,f.y=f.y/u.y,f.x+=x/u.x,f.y+=m-1):(f.x+=x*u.x,f.y+=(1-m)*u.y);let p=new tn(`PrimvarReader_${o}`,"Shader");p.addProperty('uniform token info:id = "UsdPrimvarReader_float2"'),p.addProperty("float2 inputs:fallback = (0.0, 0.0)"),p.addProperty(`string inputs:varname = "${h}"`),p.addProperty("float2 outputs:result");let y=new tn(`Transform2d_${o}`,"Shader");y.addProperty('uniform token info:id = "UsdTransform2d"'),y.addProperty(`float2 inputs:in.connect = </Materials/Material_${i.id}/PrimvarReader_${o}.outputs:result>`),y.addProperty(`float inputs:rotation = ${(g*(180/Math.PI)).toFixed(mt)}`),y.addProperty(`float2 inputs:scale = ${tp(u)}`),y.addProperty(`float2 inputs:translation = ${tp(f)}`),y.addProperty("float2 outputs:result");let b=new tn(`Texture_${a.id}_${o}`,"Shader");return b.addProperty('uniform token info:id = "UsdUVTexture"'),b.addProperty(`asset inputs:file = @textures/Texture_${c}.png@`),b.addProperty(`float2 inputs:st.connect = </Materials/Material_${i.id}/Transform2d_${o}.outputs:result>`),l!==void 0&&b.addProperty(`float4 inputs:scale = ${ky(l)}`),o==="normal"&&(b.addProperty("float4 inputs:scale = (2, 2, 2, 1)"),b.addProperty("float4 inputs:bias = (-1, -1, -1, 0)")),b.addProperty(`token inputs:sourceColorSpace = "${a.colorSpace===gn?"raw":"sRGB"}"`),b.addProperty(`token inputs:wrapS = "${d[a.wrapS]}"`),b.addProperty(`token inputs:wrapT = "${d[a.wrapT]}"`),b.addProperty("float outputs:r"),b.addProperty("float outputs:g"),b.addProperty("float outputs:b"),b.addProperty("float3 outputs:rgb"),(i.transparent||i.alphaTest>0)&&b.addProperty("float outputs:a"),[p,y,b]}i.side===nn&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",i);let r=new tn("PreviewSurface","Shader");if(r.addProperty('uniform token info:id = "UsdPreviewSurface"'),i.map!==null?(r.addProperty(`color3f inputs:diffuseColor.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:rgb>`),i.transparent?r.addProperty(`float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:a>`):i.alphaTest>0&&(r.addProperty(`float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:a>`),r.addProperty(`float inputs:opacityThreshold = ${i.alphaTest}`)),s(i.map,"diffuse",i.color).forEach(o=>n.addChild(o))):r.addProperty(`color3f inputs:diffuseColor = ${ep(i.color)}`),i.emissiveMap!==null){r.addProperty(`color3f inputs:emissiveColor.connect = </Materials/Material_${i.id}/Texture_${i.emissiveMap.id}_emissive.outputs:rgb>`);let a=new qe(i.emissive.r*i.emissiveIntensity,i.emissive.g*i.emissiveIntensity,i.emissive.b*i.emissiveIntensity);s(i.emissiveMap,"emissive",a).forEach(l=>n.addChild(l))}else i.emissive.getHex()>0&&r.addProperty(`color3f inputs:emissiveColor = ${ep(i.emissive)}`);if(i.normalMap!==null&&(r.addProperty(`normal3f inputs:normal.connect = </Materials/Material_${i.id}/Texture_${i.normalMap.id}_normal.outputs:rgb>`),s(i.normalMap,"normal").forEach(o=>n.addChild(o))),i.aoMap!==null){r.addProperty(`float inputs:occlusion.connect = </Materials/Material_${i.id}/Texture_${i.aoMap.id}_occlusion.outputs:r>`);let a=new qe(i.aoMapIntensity,i.aoMapIntensity,i.aoMapIntensity);s(i.aoMap,"occlusion",a).forEach(l=>n.addChild(l))}if(i.roughnessMap!==null){r.addProperty(`float inputs:roughness.connect = </Materials/Material_${i.id}/Texture_${i.roughnessMap.id}_roughness.outputs:g>`);let a=new qe(i.roughness,i.roughness,i.roughness);s(i.roughnessMap,"roughness",a).forEach(l=>n.addChild(l))}else r.addProperty(`float inputs:roughness = ${i.roughness}`);if(i.metalnessMap!==null){r.addProperty(`float inputs:metallic.connect = </Materials/Material_${i.id}/Texture_${i.metalnessMap.id}_metallic.outputs:b>`);let a=new qe(i.metalness,i.metalness,i.metalness);s(i.metalnessMap,"metallic",a).forEach(l=>n.addChild(l))}else r.addProperty(`float inputs:metallic = ${i.metalness}`);if(i.alphaMap!==null?(r.addProperty(`float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.alphaMap.id}_opacity.outputs:r>`),r.addProperty("float inputs:opacityThreshold = 0.0001"),s(i.alphaMap,"opacity").forEach(o=>n.addChild(o))):r.addProperty(`float inputs:opacity = ${i.opacity}`),i.isMeshPhysicalMaterial){if(i.clearcoatMap!==null){r.addProperty(`float inputs:clearcoat.connect = </Materials/Material_${i.id}/Texture_${i.clearcoatMap.id}_clearcoat.outputs:r>`);let a=new qe(i.clearcoat,i.clearcoat,i.clearcoat);s(i.clearcoatMap,"clearcoat",a).forEach(l=>n.addChild(l))}else r.addProperty(`float inputs:clearcoat = ${i.clearcoat}`);if(i.clearcoatRoughnessMap!==null){r.addProperty(`float inputs:clearcoatRoughness.connect = </Materials/Material_${i.id}/Texture_${i.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`);let a=new qe(i.clearcoatRoughness,i.clearcoatRoughness,i.clearcoatRoughness);s(i.clearcoatRoughnessMap,"clearcoatRoughness",a).forEach(l=>n.addChild(l))}else r.addProperty(`float inputs:clearcoatRoughness = ${i.clearcoatRoughness}`);r.addProperty(`float inputs:ior = ${i.ior}`)}return r.addProperty("int inputs:useSpecularWorkflow = 0"),r.addProperty("token outputs:surface"),n.addChild(r),n.addProperty(`token outputs:surface.connect = </Materials/Material_${i.id}/PreviewSurface.outputs:surface>`),n}function ep(i){return`(${i.r}, ${i.g}, ${i.b})`}function ky(i){return`(${i.r}, ${i.g}, ${i.b}, 1.0)`}function tp(i){return`(${i.x}, ${i.y})`}function Vy(i,e){let t=np(i,e),n=ap(i.matrix);i.matrix.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",i);let s=new tn(t,"Camera");s.addProperty(`matrix4d xformOp:transform = ${n}`),s.addProperty('uniform token[] xformOpOrder = ["xformOp:transform"]');let r=i.isOrthographicCamera?"orthographic":"perspective";s.addProperty(`token projection = "${r}"`);let a=`(${i.near.toPrecision(mt)}, ${i.far.toPrecision(mt)})`;s.addProperty(`float2 clippingRange = ${a}`);let o;i.isOrthographicCamera?o=((Math.abs(i.left)+Math.abs(i.right))*10).toPrecision(mt):o=i.getFilmWidth().toPrecision(mt),s.addProperty(`float horizontalAperture = ${o}`);let l;if(i.isOrthographicCamera?l=((Math.abs(i.top)+Math.abs(i.bottom))*10).toPrecision(mt):l=i.getFilmHeight().toPrecision(mt),s.addProperty(`float verticalAperture = ${l}`),i.isPerspectiveCamera){let c=i.getFocalLength().toPrecision(mt);s.addProperty(`float focalLength = ${c}`);let h=i.focus.toPrecision(mt);s.addProperty(`float focusDistance = ${h}`)}return s}async function op(i,{huella:e}={}){i.updateMatrixWorld(!0);let t=new Ct;t.add(i.clone(!0));let n=new zt().setFromObject(i);if(e&&n.min.y>.01){let r=n.getSize(new P),a=n.getCenter(new P),o=new ht(new Tt(r.x,.001,r.z),new kt({color:0,transparent:!0,opacity:.1,depthWrite:!1,roughness:1}));o.position.set(a.x,5e-4,a.z),t.add(o)}let s=await new Oi().parseAsync(t,{binary:!0,onlyVisible:!0,maxTextureSize:1024});return new Blob([s],{type:"model/gltf-binary"})}async function lp(i,{wall:e}={}){i.updateMatrixWorld(!0);let t=new Ct,n=i.clone(!0);if(e){let r=new zt().setFromObject(i),a=r.getCenter(new P);n.position.set(-a.x,-a.y,-r.min.z)}t.add(n);let s=await new Gl().parseAsync(t,{ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:e?"vertical":"horizontal"}},quickLookCompatible:!0,maxTextureSize:1024});return new Blob([s],{type:"model/vnd.usdz+zip"})}var Hy="https://cdn.jsdelivr.net/npm/@google/model-viewer@4.4.0/dist/model-viewer.min.js",iu='<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9.2 4.5 7.8 6.3H5A2.5 2.5 0 0 0 2.5 8.8v8.7A2.5 2.5 0 0 0 5 20h14a2.5 2.5 0 0 0 2.5-2.5V8.8A2.5 2.5 0 0 0 19 6.3h-2.8l-1.4-1.8a1.2 1.2 0 0 0-1-.5h-3.6a1.2 1.2 0 0 0-1 .5ZM12 9a4.2 4.2 0 1 1 0 8.4A4.2 4.2 0 0 1 12 9Zm0 1.8a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Z"/></svg>',Wl;function Gy(){return Wl||(Wl=new Promise((i,e)=>{if(customElements.get("model-viewer"))return i();let t=document.createElement("script");t.type="module",t.src=Hy,t.onerror=()=>{Wl=null,e(new Error("No se pudo cargar el visor AR"))},document.head.appendChild(t),customElements.whenDefined("model-viewer").then(i)})),Wl}function Wy(i,e,t=2e4){return new Promise((n,s)=>{let r=setTimeout(()=>s(new Error("Tiempo de espera agotado")),t);i.addEventListener(e,()=>{clearTimeout(r),n()},{once:!0})})}async function Xy(i){try{await document.fonts.load('700 52px "Barlow Condensed"')}catch{}let e=document.createElement("canvas");e.width=720,e.height=120;let t=e.getContext("2d");return t.fillStyle="#ffc400",t.beginPath(),t.roundRect?t.roundRect(0,0,720,120,32):t.rect(0,0,720,120),t.fill(),t.fillStyle="#1d1d1f",t.beginPath(),t.roundRect?t.roundRect(178,38,64,46,8):t.rect(178,38,64,46),t.fill(),t.fillRect(196,30,28,12),t.fillStyle="#ffc400",t.beginPath(),t.arc(210,61,13,0,Math.PI*2),t.fill(),t.fillStyle="#1d1d1f",t.beginPath(),t.arc(210,61,7,0,Math.PI*2),t.fill(),t.font='700 52px "Barlow Condensed", "Arial Narrow", sans-serif',t.textBaseline="middle",t.fillText(i,262,63),e.toDataURL("image/png")}function cp({env:i,getModel:e,getSpec:t,toast:n,snapshot:s}){let r=document.getElementById("arSheet"),a=r.querySelector(".ar-stage"),o=r.querySelector(".ar-go"),l=r.querySelector(".ar-msg"),c=r.querySelector(".ar-dl"),h=[...r.querySelectorAll("[data-place]")],d="suelo",u=[],f=null,g=0,x=()=>h.forEach(T=>T.setAttribute("aria-pressed",String(T.dataset.place===d)));h.forEach(T=>T.addEventListener("click",()=>{d=T.dataset.place,x(),b()})),r.querySelector(".ar-close").addEventListener("click",m);function m(){r.hidden=!0,document.body.classList.remove("noscroll")}function p(){r.hidden=!1,document.body.classList.add("noscroll"),x(),b()}let y=()=>(t().nombre||"mueble").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"mueble";async function b(){let T=++g;u.forEach(_=>URL.revokeObjectURL(_)),u=[],o.innerHTML="",c.innerHTML="",l.textContent="Preparando el modelo 3D\u2026";let E=d==="pared",I=e();try{if(i.ios){let C=await lp(I,{wall:E});if(T!==g)return;let L=URL.createObjectURL(C);u.push(L),a.innerHTML=`<img class="ar-thumb" alt="" src="${s()}">`;let N=document.createElement("a");N.rel="ar",N.href=L+"#allowsContentScaling=0",N.className="ql";let z=new Image;z.alt="Abrir c\xE1mara",z.src=await Xy("Abrir c\xE1mara"),N.appendChild(z),o.appendChild(N),l.textContent=E?"Pulsa \xABAbrir c\xE1mara\xBB, apunta a la pared y mueve el m\xF3vil despacio hasta que aparezca el mueble pegado a ella.":"Pulsa \xABAbrir c\xE1mara\xBB, apunta al suelo y mueve el m\xF3vil despacio. El mueble sale a tama\xF1o real: arr\xE1stralo para colocarlo y g\xEDralo con dos dedos.",c.innerHTML=`<a download="${y()}.usdz" href="${L}">Descargar .usdz</a>`;return}await Gy();let _=await op(I,{huella:!E});if(T!==g)return;let S=URL.createObjectURL(_);if(u.push(S),!f){f=document.createElement("model-viewer");let C={ar:"","ar-modes":"webxr","ar-scale":"fixed","camera-controls":"","touch-action":"pan-y","shadow-intensity":"1","environment-image":"neutral",exposure:"1","interaction-prompt":"none",loading:"eager",alt:"Vista 3D del mueble"};for(let[N,z]of Object.entries(C))f.setAttribute(N,z);let L=document.createElement("button");L.slot="ar-button",L.className="cta",L.innerHTML=iu+"<span>Abrir c\xE1mara</span>",f.appendChild(L),f.addEventListener("ar-status",N=>{N.detail.status==="failed"&&(l.innerHTML=M())}),f.addEventListener("ar-tracking",N=>{N.detail.status==="not-tracking"&&n("Mueve el m\xF3vil despacio apuntando al suelo")})}if(a.contains(f)||(a.innerHTML="",a.appendChild(f)),f.setAttribute("ar-placement",E?"wall":"floor"),f.src=S,await Wy(f,"load"),T!==g)return;!!(navigator.xr&&await navigator.xr.isSessionSupported("immersive-ar").catch(()=>!1))?l.textContent=E?"Pulsa \xABAbrir c\xE1mara\xBB, apunta a la pared (mejor si tiene alg\xFAn cuadro o textura) y toca para colgarlo.":"Pulsa \xABAbrir c\xE1mara\xBB, apunta al suelo y mueve el m\xF3vil despacio. El mueble aparece a tama\xF1o real: arr\xE1stralo con un dedo y g\xEDralo con dos.":l.innerHTML=M(),c.innerHTML=`<a download="${y()}.glb" href="${S}">Descargar .glb</a>`}catch(_){T===g&&(l.textContent="No se pudo preparar el modelo: "+(_&&_.message?_.message:_))}}function M(){if(i.android){let T=cr(t());return`Este navegador no abre la c\xE1mara en 3D. <a href="${`intent://${location.host}${location.pathname}?m=${T}&ar=1#Intent;scheme=https;package=com.android.chrome;end`}">\xC1brelo en Chrome</a>. Si sigue sin salir, instala \xABServicios de Google Play para RA\xBB desde Play Store.`}return"Para verlo con la c\xE1mara abre esta p\xE1gina en el m\xF3vil: Chrome en Android o Safari en iPhone. Aqu\xED puedes girarlo en 3D."}return{open:p,close:m}}var ou="https://rachid66666.github.io/mueblar/",Xe=i=>document.querySelector(i),Xl=i=>JSON.parse(JSON.stringify(i)),su=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),An=i=>Math.round(i*10)/10,Kt={inClaude:!!(window.claude&&typeof window.claude.use=="function"),ios:/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,android:/Android/i.test(navigator.userAgent)};Kt.mobile=Kt.ios||Kt.android;document.documentElement.classList.toggle("in-claude",Kt.inClaude);var zi={get(i){try{let e=localStorage.getItem(i);return e?JSON.parse(e):null}catch{return null}},set(i,e){try{return localStorage.setItem(i,JSON.stringify(e)),!0}catch{return!1}}},lu="mueblar.v1.last",ya="mueblar.v1.saved",qy='<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19.6 4.4a2.6 2.6 0 0 0-3.7 0l-2.4 2.4-1-1-1.4 1.4 1 1-6.6 6.6a2 2 0 0 0-.5.9L4 19.2a.7.7 0 0 0 .8.8l3.5-1a2 2 0 0 0 .9-.5l6.6-6.6 1 1 1.4-1.4-1-1 2.4-2.4a2.6 2.6 0 0 0 0-3.7ZM7.9 17.6l-1.9.5.5-1.9 6.5-6.5 1.4 1.4-6.5 6.5Z"/></svg>',$y='<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="5" y="11" width="38" height="28" rx="5" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M17 11l3-4h8l3 4" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><circle cx="24" cy="25" r="7.5" fill="none" stroke="currentColor" stroke-width="2.5"/></svg>';function Yy(){let i={},e=new URLSearchParams(location.hash.replace(/^#/,"")),t=new URLSearchParams(location.search);for(let n of["m","ar"])i[n]=e.get(n)||t.get(n);return i}var ql=Kt.inClaude?{}:Yy(),$e=null;if(ql.m){let i=Rf(ql.m);i&&($e=Fi(i))}$e||($e=Fi(zi.get(lu)||Zn.tv));var $l=null,hp=!!(ql.ar&&ql.m),_s=[],Ma=[],vn=0,Xt=null,Yl=null,xs=null,vs=!1,jn=null,ru=0,Ms=new Ol(Xe("#viewer"),Xe("#labels")),Zl=Kt.inClaude?null:cp({env:Kt,getModel:()=>$l,getSpec:()=>$e,toast:Rn,snapshot:()=>Ms.snapshot(900,!0)}),va=null;function bs(i={}){let e=!va;va={...va||{},...i},e&&requestAnimationFrame(()=>{let t=va;va=null,Zy(t)})}function Zy(i){$l=wf($e,Sf($e)),Ms.setModel($l,{keepView:!i.refit,first:i.first}),eM(),mp(),Ky(),oM(),zi.set(lu,pa($e)),Kt.inClaude||gp(),hp&&Zl&&(hp=!1,Zl.open())}function Bn(){let i=performance.now();i-vn>700&&(_s.push(JSON.stringify($e)),_s.length>60&&_s.shift(),Ma.length=0),vn=i}function ys(i={}){$e=Fi($e),hr(),bs(i)}function ba(i,e={}){Bn(),vn=0,$e=Fi(i),hr(),bs(e)}function Jy(){_s.length&&(Ma.push(JSON.stringify($e)),$e=Fi(JSON.parse(_s.pop())),vn=0,hr(),bs({}))}function jy(){Ma.length&&(_s.push(JSON.stringify($e)),$e=Fi(JSON.parse(Ma.pop())),vn=0,hr(),bs({}))}function Ky(){Xe("#undo").disabled=!_s.length,Xe("#redo").disabled=!Ma.length}function cu(i,e,t){let n=e.split(".");for(let s=0;s<n.length-1;s++)i=i[n[s]];i[n[n.length-1]]=t}function Qy(i,e){return e.split(".").reduce((t,n)=>t==null?t:t[n],i)}function eM(){let i=Xe("#name");document.activeElement!==i&&(i.value=$e.nombre);let e=$e,t=e.fondo;e.tipo==="sofa"&&e.sofa.chaise!=="ninguna"&&(t=Math.max(t,e.sofa.fondoChaise));let n=e.tipo==="mesa"&&e.mesa.forma==="redonda";Xe("#meas").innerHTML=n?`\xD8 ${An(e.ancho)} \xD7 ${An(e.alto)} <small>cm</small>`:`${An(e.ancho)} \xD7 ${An(e.alto)} \xD7 ${An(t)} <small>cm</small>`;let s=n?"Di\xE1metro \xD7 alto":"Ancho \xD7 alto \xD7 fondo";e.tipo==="mueble"&&e.montaje==="pared"?s=`Colgado a ${An(e.elevacion)} cm del suelo \xB7 arriba a ${An(e.elevacion+e.alto)} cm`:e.tipo==="mueble"&&e.mueble.patas.tipo!=="ninguna"?s+=` \xB7 patas de ${An(e.mueble.patas.alto)} cm`:e.tipo==="sofa"&&(s=`Asiento a ${An(e.sofa.alturaAsiento)} cm${e.sofa.chaise!=="ninguna"?` \xB7 chaise de ${An(e.sofa.fondoChaise)} cm`:""}`),Xe("#measSub").textContent=s}function tM(){return ou+"#ar=1&m="+cr($e)}function nM(){return(Kt.inClaude?ou:location.origin+location.pathname)+"#m="+cr($e)}function mp(){let i=Xe("#cta"),e=Xe("#ctaNote");Kt.inClaude?ou?(i.href=tM(),i.removeAttribute("aria-disabled"),e.textContent="Se abre el navegador con tu mueble: pulsa \xABAbrir c\xE1mara\xBB y apunta al suelo."):(i.setAttribute("aria-disabled","true"),e.textContent="Dentro de Claude no se puede usar la c\xE1mara."):e.textContent=Kt.mobile?"Apunta al suelo, toca para colocarlo y arr\xE1stralo a su sitio. Sale a tama\xF1o real.":"Abre esta p\xE1gina en el m\xF3vil para verlo con la c\xE1mara en tu sal\xF3n."}Xe("#cta").addEventListener("click",i=>{Kt.inClaude||(i.preventDefault(),Zl.open())});var up=0;function gp(){clearTimeout(up),up=setTimeout(()=>{try{history.replaceState(null,"","#m="+cr($e))}catch{}},400)}var au=(i,e,t)=>`<div class="seg">${t.map(([n,s])=>`<button type="button" data-p="${i}" data-v="${n}" aria-pressed="${String(e)===String(n)}">${s}</button>`).join("")}</div>`,Cn=(i,e,t,n,s,r=1)=>`<label class="f"><span>${e}</span><input type="number" inputmode="decimal" data-p="${i}" data-t="n" value="${An(t)}" min="${n}" max="${s}" step="${r}"></label>`,Bi=(i,e,t,n)=>`<label class="f"><span>${e}</span><select data-p="${i}">${n.map(([s,r])=>`<option value="${s}"${String(t)===String(s)?" selected":""}>${r}</option>`).join("")}</select></label>`,dp=(i,e,t)=>`<label class="chk"><input type="checkbox" data-p="${i}"${t?" checked":""}><span>${e}</span></label>`;function iM(i,e){let t=i==="tirador"?'<span class="cl mute">Metal</span>':`<select data-p="acabado.${i}" aria-label="Acabado ${e.toLowerCase()}">${Ih.map(([n,s])=>`<option value="${n}"${$e.acabado[i]===n?" selected":""}>${s}</option>`).join("")}</select>`;return`<div class="crow"><input type="color" data-p="colores.${i}" value="${$e.colores[i]}" aria-label="Color ${e.toLowerCase()}"><span class="cl">${e}</span>${t}<button type="button" class="ic drop" data-pick="${i}"${Xt?"":" disabled"} aria-label="Coger el color ${e.toLowerCase()} de la foto" title="Coger el color de la foto">${qy}</button></div>`}function sM(i){let e=i.columnas.reduce((r,a)=>r+a.ancho,0),t=Object.entries(fa).map(([r,[a]])=>[r,a]),s=`<div class="grp"><h3>M\xF3dulos, de izquierda a derecha</h3>${i.columnas.map((r,a)=>{let o=If(r),l=(o==="custom"?[["custom","Como en la foto"]]:[]).concat(t);return`<div class="mod"><span class="mn">${a+1}</span><select data-col="${a}" data-act="preset" aria-label="M\xF3dulo ${a+1}">${l.map(([c,h])=>`<option value="${c}"${c===o?" selected":""}>${h}</option>`).join("")}</select><label class="pct"><input type="number" inputmode="numeric" data-col="${a}" data-act="width" value="${Math.round(r.ancho/e*100)}" min="5" max="95" aria-label="Ancho del m\xF3dulo ${a+1} en porcentaje"${i.columnas.length<2?" disabled":""}><span>%</span></label><button type="button" class="ic" data-col="${a}" data-act="del" aria-label="Quitar m\xF3dulo ${a+1}"${i.columnas.length<2?" disabled":""}>\xD7</button></div>`}).join("")}<div class="acts"><button type="button" class="btn" data-act="add">A\xF1adir m\xF3dulo</button><button type="button" class="btn" data-act="equal">Igualar anchos</button></div></div>`;return s+='<div class="grp"><h3>Detalles</h3><div class="row2">',$e.montaje==="suelo"&&(s+=Bi("mueble.patas.tipo","Patas",i.patas.tipo,[["ninguna","Sin patas"],["zocalo","Z\xF3calo"],["rectas","Rectas"],["conicas","C\xF3nicas"],["metal","Met\xE1licas finas"],["marco","Marco met\xE1lico"]]),i.patas.tipo!=="ninguna"&&(s+=Cn("mueble.patas.alto","Alto de patas",i.patas.alto,0,120))),s+=Bi("mueble.tiradores","Tiradores",i.tiradores,[["ninguno","Sin tirador"],["barra","Barra"],["pomo","Pomo"],["unero","U\xF1ero"]]),s+=Bi("mueble.divisores","Separadores",i.divisores,[["principal","Color principal"],["secundario","Color secundario"]]),s+=Bi("mueble.frentes","Puertas y cajones",i.frentes,[["principal","Color principal"],["secundario","Color secundario"]]),s+=Cn("mueble.grosor","Grosor del tablero",i.grosor,1,5,.1),s+"</div></div>"}function hr(){let i=$e,e=i.tipo==="mesa"&&i.mesa.forma==="redonda",t=`<div class="grp"><h3>Tipo</h3>${au("tipo",i.tipo,[["mueble","Mueble"],["mesa","Mesa"],["sofa","Sof\xE1"],["libre","Otro"]])}</div>`;t+=`<div class="grp"><h3>Medidas en cm</h3><div class="row3">${Cn("ancho",e?"Di\xE1metro":"Ancho",i.ancho,10,600)}${Cn("alto",i.tipo==="mueble"&&i.montaje==="pared"?"Alto":"Alto total",i.alto,5,300)}${e?"":Cn("fondo","Fondo",i.fondo,5,400)}</div></div>`,i.tipo==="mueble"&&(t+=`<div class="grp"><h3>Colocaci\xF3n</h3>${au("montaje",i.montaje,[["suelo","En el suelo"],["pared","Colgado en la pared"]])}`,i.montaje==="pared"&&(t+=`<div class="row3">${Cn("elevacion","Altura al suelo",i.elevacion,0,250)}</div>`),t+="</div>");let n=[["principal","Principal"],["secundario","Secundario"]];(i.tipo!=="mueble"||i.montaje==="suelo"&&i.mueble.patas.tipo!=="ninguna")&&n.push(["patas","Patas"]),i.tipo==="mueble"&&i.mueble.tiradores!=="ninguno"&&n.push(["tirador","Tiradores"]);let s=n.some(([r])=>i.acabado[r]==="madera");if(t+=`<div class="grp"><h3>Colores y acabados</h3>${n.map(([r,a])=>iM(r,a)).join("")}`,s&&(t+=`<span class="lbl">Veta de la madera</span>${au("veta",i.veta,[["rustica","R\xFAstica, con nudos"],["suave","Suave"],["ninguna","Sin veta"]])}`),t+="</div>",i.tipo==="mueble"&&(t+=sM(i.mueble)),i.tipo==="mesa"&&(t+=`<div class="grp"><h3>Mesa</h3><div class="row2">${Bi("mesa.forma","Forma",i.mesa.forma,[["rect","Rectangular"],["redonda","Redonda"],["ovalada","Ovalada"]])}${Bi("mesa.patas","Patas",i.mesa.patas,[["rectas","Rectas"],["conicas","C\xF3nicas"],["metal","Met\xE1licas finas"],["trineo","Trineo"],["central","Pie central"]])}${Cn("mesa.grosor","Grosor del tablero",i.mesa.grosor,1,15,.5)}</div>${dp("mesa.balda","Balda inferior",i.mesa.balda)}</div>`),i.tipo==="sofa"){let r=i.sofa;t+=`<div class="grp"><h3>Sof\xE1</h3><div class="row2">${Cn("sofa.plazas","Plazas",r.plazas,1,6)}${Bi("sofa.brazos","Brazos",r.brazos,[["ambos","Los dos"],["izq","Solo el izquierdo"],["der","Solo el derecho"],["ninguno","Sin brazos"]])}${Bi("sofa.chaise","Chaise longue",r.chaise,[["ninguna","No"],["izq","A la izquierda"],["der","A la derecha"]])}${r.chaise!=="ninguna"?Cn("sofa.fondoChaise","Fondo de la chaise",r.fondoChaise,100,230):""}${Cn("sofa.alturaAsiento","Altura del asiento",r.alturaAsiento,25,70)}${Cn("sofa.altoBrazo","Alto de brazos",r.altoBrazo,30,110)}${Cn("sofa.patas","Alto de patas",r.patas,0,30)}</div>${dp("sofa.cojinesRespaldo","Cojines de respaldo",r.cojinesRespaldo)}</div>`}i.tipo==="libre"&&(t+=`<div class="grp"><h3>Piezas</h3><p class="mute">Hecho con ${i.piezas.length} piezas. Si cambias ancho, alto o fondo se escala entero.</p></div>`),Xe("#form").innerHTML=t}function rM(i,e){let t=$e.mueble.columnas;if(t.length<2||!isFinite(e))return;let n=Math.min(95,Math.max(5,e))/100,r=t.reduce((a,o)=>a+o.ancho,0)-t[i].ancho;t.forEach((a,o)=>{a.ancho=o===i?n:r>0?a.ancho/r*(1-n):(1-n)/(t.length-1)})}var hu=Xe("#form");hu.addEventListener("input",i=>{let e=i.target;!e.dataset.p||e.tagName==="SELECT"||e.type==="checkbox"||(Bn(),cu($e,e.dataset.p,e.dataset.t==="n"?parseFloat(e.value):e.value),$e=Fi($e),bs({}))});hu.addEventListener("change",i=>{let e=i.target;if(e.dataset.act==="preset")return Bn(),vn=0,fa[e.value]&&($e.mueble.columnas[+e.dataset.col].huecos=Xl(fa[e.value][1])),ys();if(e.dataset.act==="width")return Bn(),vn=0,rM(+e.dataset.col,parseFloat(e.value)),ys();if(e.dataset.p){if(e.tagName==="SELECT"||e.type==="checkbox")return Bn(),vn=0,cu($e,e.dataset.p,e.type==="checkbox"?e.checked:e.value),ys();e.type==="number"&&(e.value=An(Qy($e,e.dataset.p)))}});hu.addEventListener("click",i=>{let e=i.target.closest("button");if(!e)return;if(e.dataset.pick)return uM(e.dataset.pick);if(e.dataset.p){if(e.dataset.p==="tipo"){e.dataset.v!==$e.tipo&&ba(Xl(Zn[Rh[e.dataset.v]]),{refit:!0});return}return Bn(),vn=0,cu($e,e.dataset.p,e.dataset.v),ys({refit:e.dataset.p==="montaje"})}let t=e.dataset.act;if(t==="add"||t==="equal"||t==="del"){Bn(),vn=0;let n=$e.mueble.columnas;t==="add"&&n.length<12&&n.push({...Xl(n[n.length-1]),ancho:n.reduce((s,r)=>s+r.ancho,0)/n.length}),t==="equal"&&n.forEach(s=>{s.ancho=1}),t==="del"&&n.length>1&&n.splice(+e.dataset.col,1),ys()}});Xe("#templates").innerHTML=Af.map(([i,e])=>`<button type="button" class="tpl" data-tpl="${i}">${e}</button>`).join("");Xe("#templates").addEventListener("click",i=>{let e=i.target.closest("[data-tpl]");e&&(ba(Xl(Zn[e.dataset.tpl]),{refit:!0,first:!0}),Rn("Plantilla cargada: ajusta medidas y colores"))});Xe("#name").addEventListener("input",i=>{Bn(),$e.nombre=i.target.value.slice(0,60)||"Mueble",mp(),zi.set(lu,pa($e)),Kt.inClaude||gp()});function aM(){return $e.tipo==="mueble"&&$e.mueble.columnas.some(i=>i.huecos.some(e=>e.tipo!=="abierto"))}function oM(){let i=Xe("#tDoors");i.hidden=!aM(),i.setAttribute("aria-pressed",String($e.puertasAbiertas))}Xe("#tDims").addEventListener("click",i=>{let e=!Ms.dimsOn;Ms.setDims(e),i.currentTarget.setAttribute("aria-pressed",String(e))});Xe("#tDoors").addEventListener("click",()=>{Bn(),vn=0,$e.puertasAbiertas=!$e.puertasAbiertas,bs({})});Xe("#tFit").addEventListener("click",()=>Ms.fit(!1));Xe("#undo").addEventListener("click",Jy);Xe("#redo").addEventListener("click",jy);async function lM(i){if(window.createImageBitmap)try{return await createImageBitmap(i)}catch{}return new Promise((e,t)=>{let n=new Image;n.onload=()=>e(n),n.onerror=t,n.src=URL.createObjectURL(i)})}async function cM(i){let e=await lM(i),t=Math.min(1,1600/Math.max(e.width,e.height)),n=document.createElement("canvas");n.width=Math.max(1,Math.round(e.width*t)),n.height=Math.max(1,Math.round(e.height*t)),n.getContext("2d").drawImage(e,0,0,n.width,n.height);let s=await new Promise(r=>n.toBlob(r,"image/jpeg",.9));if(!s)throw new Error("sin imagen");Xt&&URL.revokeObjectURL(Xt.url),Xt={blob:s,url:URL.createObjectURL(s),canvas:n},uu(),hr()}function uu(){let i=Xe("#photoBox");i.classList.toggle("has",!!Xt),i.innerHTML=Xt?`<img id="photoImg" src="${Xt.url}" alt="Foto del mueble">`:`<label for="file" class="empty">${$y}<span>Foto del mueble entero, de frente o en diagonal y con buena luz</span></label>`,Xe("#reanalyze").hidden=!(Xt&&vs),Xe("#fileLbl span").textContent=Xt?"Cambiar foto":"Subir foto"}Xe("#file").addEventListener("change",async i=>{let e=i.target.files&&i.target.files[0];if(i.target.value="",!!e){try{await cM(e)}catch{Rn("No he podido abrir esa imagen");return}xs&&vs?_p():xp()}});Xe("#reanalyze").addEventListener("click",()=>_p());function hM(i,e,t){let s=Math.max(0,Math.min(i.width-1,Math.round(e-4))),r=Math.max(0,Math.min(i.height-1,Math.round(t-4))),a=Math.max(1,Math.min(8,i.width-s)),o=Math.max(1,Math.min(8,i.height-r)),l=i.getContext("2d").getImageData(s,r,a,o).data,c=0,h=0,d=0,u=0;for(let f=0;f<l.length;f+=4)c+=l[f],h+=l[f+1],d+=l[f+2],u++;return"#"+[c,h,d].map(f=>Math.round(f/u).toString(16).padStart(2,"0")).join("")}function uM(i){Xt&&(Yl=i,Xe("#photoBox").classList.add("picking"),Xe("#photoCard").scrollIntoView({behavior:"smooth",block:"start"}),Rn("Toca la foto justo en el color que quieres"))}function dM(){Yl=null,Xe("#photoBox").classList.remove("picking")}Xe("#photoBox").addEventListener("click",i=>{if(!Yl||!Xt||i.target.id!=="photoImg")return;let e=i.target.getBoundingClientRect(),t=Xt.canvas,n=t.width/t.height,s=e.width/e.height,r=e.width,a=e.height,o=0,l=0;n>s?(a=e.width/n,l=(e.height-a)/2):(r=e.height*n,o=(e.width-r)/2);let c=(i.clientX-e.left-o)/r*t.width,h=(i.clientY-e.top-l)/a*t.height;if(c<0||h<0||c>=t.width||h>=t.height)return;let d=hM(t,c,h);Bn(),vn=0,$e.colores[Yl]=d,dM(),ys(),Rn(`Color ${d} aplicado`)});function fM(i,e=5){let t=i.width,n=i.height,s=Math.max(1,Math.floor(Math.sqrt(t*n/6e3))),r=i.getContext("2d").getImageData(0,0,t,n).data,a=[];for(let l=0;l<n;l+=s)for(let c=0;c<t;c+=s){let h=(l*t+c)*4,d=r[h],u=r[h+1],f=r[h+2];d>230&&u>230&&f>230||a.push([d,u,f])}if(a.length<30)return[];let o=Array.from({length:e},(l,c)=>a[Math.floor((c+.5)/e*a.length)].slice(0,3).concat(0));for(let l=0;l<8;l++){let c=o.map(()=>[0,0,0,0]);for(let h of a){let d=0,u=1/0;for(let g=0;g<o.length;g++){let x=o[g],m=(h[0]-x[0])**2+(h[1]-x[1])**2+(h[2]-x[2])**2;m<u&&(u=m,d=g)}let f=c[d];f[0]+=h[0],f[1]+=h[1],f[2]+=h[2],f[3]++}o=c.map((h,d)=>h[3]?[h[0]/h[3],h[1]/h[3],h[2]/h[3],h[3]]:o[d])}return o.filter(l=>l[3]>0).sort((l,c)=>c[3]-l[3]).map(l=>"#"+l.slice(0,3).map(c=>Math.round(c).toString(16).padStart(2,"0")).join(""))}var pM=(i,e)=>{let t=r=>[1,3,5].map(a=>parseInt(r.slice(a,a+2),16)),n=t(i),s=t(e);return Math.hypot(n[0]-s[0],n[1]-s[1],n[2]-s[2])};function xp(){if(!Xt)return;let i=fM(Xt.canvas);i.length&&(Bn(),vn=0,$e.colores.principal=i[0],$e.colores.secundario=i.find(e=>pM(e,i[0])>70)||i[0],ys(),Rn("Colores tomados de la foto. Elige la plantilla que m\xE1s se parezca y ajusta las medidas."))}function on(i,e){let t=Xe("#aiStatus"),n={off:Kt.inClaude?"La IA no est\xE1 disponible ahora: sube la foto para coger sus colores y elige abajo la plantilla que m\xE1s se parezca.":"Aqu\xED la foto sirve para coger sus colores. Para que la IA monte el mueble entero desde la foto, usa la app dentro de Claude.",ready:"Al subir la foto, la IA reconoce el mueble y lo monta en 3D con sus m\xF3dulos, colores y medidas.",thinking:"Analizando la foto\u2026",writing:"Montando el modelo 3D\u2026",done:"Listo. Revisa las medidas: si sabes las reales, escr\xEDbelas y pulsa \xABVolver a analizar\xBB, o c\xE1mbialas abajo.",error:e||"Algo ha fallado."}[i];t.textContent=n,t.dataset.state=i,Xe("#reanalyze").hidden=!(Xt&&vs)||i==="thinking"||i==="writing"}function fp(i,e){Xe("#busy").hidden=!i,e&&(Xe("#busyTxt").textContent=e),i||(Xe("#busyTime").textContent="")}Xe("#busyStop").addEventListener("click",()=>{jn&&jn.abort()});async function mM(){if(!Kt.inClaude)return on("off");try{xs=await window.claude.use("sample")}catch{xs=null}if(!xs)return on("off");try{let i=await xs.limits();vs=!!(i&&i.images)}catch{vs=!1}on(vs?"ready":"off"),uu()}async function _p(){if(!xs||!Xt)return;jn&&jn.abort();let i=jn=new AbortController,e=performance.now();on("thinking"),fp(!0,"Analizando la foto\u2026"),clearInterval(ru),ru=setInterval(()=>{Xe("#busyTime").textContent=Math.round((performance.now()-e)/1e3)+" s"},1e3);try{let t=await xs.json(Pf(Xe("#aiHint").value.trim()),{images:[Xt.blob],modelTier:"complex",signal:i.signal,onText:()=>{i===jn&&(on("writing"),Xe("#busyTxt").textContent="Montando el modelo 3D\u2026")}});if(i!==jn)return;if(!t||typeof t!="object"||Array.isArray(t)||t.error){on("error","No veo un mueble claro en la foto. Prueba con otra en la que salga entero.");return}ba(t,{refit:!0,first:!0}),on("done"),Rn("Mueble montado en 3D")}catch(t){if(i!==jn)return;let n=t&&t.code;n==="cancelled"?on("ready"):["not_granted","sampling_disabled","not_declared","capability_disabled","capability_removed","images_unavailable"].includes(n)?(vs=!1,on("off"),xp()):n==="rate_limited"?on("error","Demasiadas peticiones seguidas. Espera un poco y pulsa \xABVolver a analizar\xBB."):n==="image_rejected"?on("error","No puedo leer esa imagen. Prueba con otra foto."):n==="session_expired"?on("error","Tu sesi\xF3n de Claude ha caducado. Vuelve a entrar y repite."):on("error","No he podido interpretar la foto. Pulsa \xABVolver a analizar\xBB o prueba con otra.")}finally{i===jn&&(clearInterval(ru),fp(!1),jn=null)}}function du(){let i=zi.get(ya)||[];Xe("#saved").innerHTML=i.length?i.map((e,t)=>`<div class="it"><button type="button" class="ld" data-load="${t}"><img src="${e.thumb}" alt=""><span class="nm">${su(e.nombre)}</span><span class="ms">${su(e.dims)}</span></button><button type="button" class="x" data-del="${t}" aria-label="Borrar ${su(e.nombre)}">\xD7</button></div>`).join(""):'<p class="mute">Guarda aqu\xED los muebles que pruebes para compararlos o volver a verlos en tu sal\xF3n.</p>'}function gM(){let i=zi.get(ya)||[];i.unshift({nombre:$e.nombre,spec:pa($e),thumb:Ms.snapshot(280),dims:Xe("#meas").textContent,t:Date.now()}),i.length>24&&(i.length=24),zi.set(ya,i)?(du(),Rn("Guardado en \xABMis muebles\xBB")):Rn("Este navegador no deja guardar")}Xe("#save").addEventListener("click",gM);Xe("#saved").addEventListener("click",i=>{let e=i.target.closest("[data-del]"),t=i.target.closest("[data-load]"),n=zi.get(ya)||[];if(e){let[s]=n.splice(+e.dataset.del,1);zi.set(ya,n),du(),s&&Rn(`Borrado: ${s.nombre}`);return}t&&n[+t.dataset.load]&&(ba(n[+t.dataset.load].spec,{refit:!0,first:!0}),Xe("#viewer").scrollIntoView({behavior:"smooth",block:"start"}))});Xe("#copyLink").addEventListener("click",async()=>{let i=nM(),e=Xe("#linkBox");try{await navigator.clipboard.writeText(i),e.hidden=!0,Rn("Enlace copiado: quien lo abra lo ver\xE1 en 3D y en su sal\xF3n")}catch{e.hidden=!1,e.value=i,e.focus(),e.select(),Rn("Copia el enlace de la caja")}});var pp=0;function Rn(i){let e=Xe("#toast");e.textContent=i,e.classList.add("show"),clearTimeout(pp),pp=setTimeout(()=>e.classList.remove("show"),3400)}window.__MUEBLAR_TEST&&(window.__mueblar={getModel:()=>$l,getSpec:()=>$e,setSpec:ba,viewer:Ms,ar:Zl});Xe("#cta").insertAdjacentHTML("afterbegin",iu);hr();uu();du();on(Kt.inClaude?"ready":"off");bs({refit:!0,first:!0});mM();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/examples/jsm/libs/fflate.module.js:
  (*!
  fflate - fast JavaScript compression/decompression
  <https://101arrowz.github.io/fflate>
  Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
  version 0.8.2
  *)
*/

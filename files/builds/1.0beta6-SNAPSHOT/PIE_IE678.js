(function(Y,J){var f=Y.PIE||(Y.PIE={});f.Ba=function(a){var b,c,d,e,h=arguments;b=1;for(c=h.length;b<c;b++){e=h[b];for(d in e)if(e.hasOwnProperty(d))a[d]=e[d]}return a};f.Ba(f,{K:"-pie-",hb:"Pie",Ja:"pie_",mc:{TD:1,TH:1},Sb:{TABLE:1,THEAD:1,TBODY:1,TFOOT:1,TR:1,INPUT:1,TEXTAREA:1,SELECT:1,OPTION:1,IMG:1,HR:1},Wb:{A:1,INPUT:1,TEXTAREA:1,SELECT:1,BUTTON:1},rd:{submit:1,button:1,reset:1},ob:function(){}});try{J.execCommand("BackgroundImageCache",false,true)}catch($){}(function(){for(var a=4,b=J.createElement("div"),
c=b.getElementsByTagName("i");b.innerHTML="<!--[if gt IE "+ ++a+"]><i></i><![endif]--\>",c[0];);f.N=a;if(a===6)f.K=f.K.replace(/^-/,"");f.fa=J.documentMode||f.N;b.innerHTML='<v:shape adj="1"/>';a=b.firstChild;a.style.behavior="url(#default#VML)";f.lc=typeof a.adj==="object"})();(function(){var a=0,b={};f.R={za:function(c){return c&&c.uniqueID||c._pieId||(c._pieId="_"+a++)},uc:function(c,d,e){var h=b[c],i,j;if(h)Object.prototype.toString.call(h)==="[object Array]"?h.push([d,e]):d.call(e,h);else{j=
b[c]=[[d,e]];i=new Image;i.onload=function(){h=b[c]={g:i.width,f:i.height};for(var g=0,k=j.length;g<k;g++)j[g][0].call(j[g][1],h);i.onload=null};i.src=c}}}})();f.eb={kd:function(a,b,c,d){function e(){k=i>=90&&i<270?b:0;n=i<180?c:0;m=b-k;r=c-n}function h(){for(;i<0;)i+=360;i%=360}var i=d.ra;d=d.sb;var j,g,k,n,m,r,s,l;if(d){d=d.coords(a,b,c);j=d.x;g=d.y}if(i){i=i.Wc();h();e();if(!d){j=k;g=n}d=f.eb.hc(j,g,i,m,r);a=d[0];d=d[1]}else if(d){a=b-j;d=c-g}else{j=g=a=0;d=c}s=a-j;l=d-g;if(i===void 0){i=!s?l<
0?90:270:!l?s<0?180:0:-Math.atan2(l,s)/Math.PI*180;h();e()}return{ra:i,Id:j,Jd:g,Yd:a,Zd:d,Gd:k,Hd:n,ed:m,fd:r,Xc:s,Yc:l,sd:f.eb.Tb(j,g,a,d)}},hc:function(a,b,c,d,e){if(c===0||c===180)return[d,b];else if(c===90||c===270)return[a,e];else{c=Math.tan(-c*Math.PI/180);a=c*a-b;b=-1/c;d=b*d-e;e=b-c;return[(d-a)/e,(c*d-b*a)/e]}},Tb:function(a,b,c,d){a=c-a;b=d-b;return Math.abs(a===0?b:b===0?a:Math.sqrt(a*a+b*b))}};f.Z=function(){this.zb=[];this.cc={}};f.Z.prototype={V:function(a){var b=f.R.za(a),c=this.cc,
d=this.zb;if(!(b in c)){c[b]=d.length;d.push(a)}},Fa:function(a){a=f.R.za(a);var b=this.cc;if(a&&a in b){delete this.zb[b[a]];delete b[a]}},va:function(){for(var a=this.zb,b=a.length;b--;)a[b]&&a[b]()}};f.La=new f.Z;f.La.Bd=function(){var a=this;if(!a.Cd){setInterval(function(){a.va()},250);a.Cd=1}};(function(){function a(){f.H.va();window.detachEvent("onunload",a);window.PIE=null}f.H=new f.Z;window.attachEvent("onunload",a);f.H.sa=function(b,c,d){b.attachEvent(c,d);this.V(function(){b.detachEvent(c,
d)})}})();f.Na=new f.Z;f.H.sa(window,"onresize",function(){f.Na.va()});(function(){function a(){f.gb.va()}f.gb=new f.Z;f.H.sa(window,"onscroll",a);f.Na.V(a)})();(function(){function a(){c=f.db.Zc()}function b(){if(c){for(var d=0,e=c.length;d<e;d++)f.attach(c[d]);c=0}}var c;f.H.sa(window,"onbeforeprint",a);f.H.sa(window,"onafterprint",b)})();f.fb=new f.Z;f.H.sa(J,"onmouseup",function(){f.fb.va()});f.Xd=function(){function a(g){this.X=g}var b=J.createElement("length-calc"),c=J.documentElement,d=b.style,
e={},h=["mm","cm","in","pt","pc"],i=h.length,j={};d.position="absolute";d.top=d.left="-9999px";for(c.appendChild(b);i--;){b.style.width="100"+h[i];e[h[i]]=b.offsetWidth/100}c.removeChild(b);b.style.width="1em";a.prototype={Db:/(px|em|ex|mm|cm|in|pt|pc|%)$/,Yb:function(){var g=this.ud;if(g===void 0)g=this.ud=parseFloat(this.X);return g},rb:function(){var g=this.Nd;if(!g)g=this.Nd=(g=this.X.match(this.Db))&&g[0]||"px";return g},a:function(g,k){var n=this.Yb(),m=this.rb();switch(m){case "px":return n;
case "%":return n*(typeof k==="function"?k():k)/100;case "em":return n*this.qb(g);case "ex":return n*this.qb(g)/2;default:return n*e[m]}},qb:function(g){var k=g.currentStyle.fontSize,n,m;if(k.indexOf("px")>0)return parseFloat(k);else if(g.tagName in f.Sb){m=this;n=g.parentNode;return f.k(k).a(n,function(){return m.qb(n)})}else{g.appendChild(b);k=b.offsetWidth;b.parentNode===g&&g.removeChild(b);return k}}};f.k=function(g){return j[g]||(j[g]=new a(g))};return a}();f.Ha=function(){function a(e){this.W=
e}var b=f.k("50%"),c={top:1,center:1,bottom:1},d={left:1,center:1,right:1};a.prototype={md:function(){if(!this.Qb){var e=this.W,h=e.length,i=f.q,j=i.oa,g=f.k("0");j=j.la;g=["left",g,"top",g];if(h===1){e.push(new i.ib(j,"center"));h++}if(h===2){j&(e[0].j|e[1].j)&&e[0].d in c&&e[1].d in d&&e.push(e.shift());if(e[0].j&j)if(e[0].d==="center")g[1]=b;else g[0]=e[0].d;else if(e[0].P())g[1]=f.k(e[0].d);if(e[1].j&j)if(e[1].d==="center")g[3]=b;else g[2]=e[1].d;else if(e[1].P())g[3]=f.k(e[1].d)}this.Qb=g}return this.Qb},
coords:function(e,h,i){var j=this.md(),g=j[1].a(e,h);e=j[3].a(e,i);return{x:j[0]==="right"?h-g:g,y:j[2]==="bottom"?i-e:e}}};return a}();f.Ia=function(){function a(b,c){this.g=b;this.f=c}a.prototype={a:function(b,c,d,e,h){var i=this.g,j=this.f,g=c/d;e=e/h;if(i==="contain"){i=e>g?c:d*e;j=e>g?c/e:d}else if(i==="cover"){i=e<g?c:d*e;j=e<g?c/e:d}else if(i==="auto"){j=j==="auto"?h:j.a(b,d);i=j*e}else{i=i.a(b,c);j=j==="auto"?i/e:j.a(b,d)}return{g:i,f:j}}};a.Dc=new a("auto","auto");return a}();f.wc=function(){function a(b){this.X=
b}a.prototype={Db:/[a-z]+$/i,rb:function(){return this.Oc||(this.Oc=this.X.match(this.Db)[0].toLowerCase())},Wc:function(){var b=this.Jc,c;if(b===undefined){b=this.rb();c=parseFloat(this.X,10);b=this.Jc=b==="deg"?c:b==="rad"?c/Math.PI*180:b==="grad"?c/400*360:b==="turn"?c*360:0}return b}};return a}();f.Cc=function(){function a(c){this.X=c}var b={};a.Ad=/\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d+|\d*\.\d+)\s*\)\s*/;a.yb={aliceblue:"F0F8FF",antiquewhite:"FAEBD7",aqua:"0FF",aquamarine:"7FFFD4",
azure:"F0FFFF",beige:"F5F5DC",bisque:"FFE4C4",black:"000",blanchedalmond:"FFEBCD",blue:"00F",blueviolet:"8A2BE2",brown:"A52A2A",burlywood:"DEB887",cadetblue:"5F9EA0",chartreuse:"7FFF00",chocolate:"D2691E",coral:"FF7F50",cornflowerblue:"6495ED",cornsilk:"FFF8DC",crimson:"DC143C",cyan:"0FF",darkblue:"00008B",darkcyan:"008B8B",darkgoldenrod:"B8860B",darkgray:"A9A9A9",darkgreen:"006400",darkkhaki:"BDB76B",darkmagenta:"8B008B",darkolivegreen:"556B2F",darkorange:"FF8C00",darkorchid:"9932CC",darkred:"8B0000",
darksalmon:"E9967A",darkseagreen:"8FBC8F",darkslateblue:"483D8B",darkslategray:"2F4F4F",darkturquoise:"00CED1",darkviolet:"9400D3",deeppink:"FF1493",deepskyblue:"00BFFF",dimgray:"696969",dodgerblue:"1E90FF",firebrick:"B22222",floralwhite:"FFFAF0",forestgreen:"228B22",fuchsia:"F0F",gainsboro:"DCDCDC",ghostwhite:"F8F8FF",gold:"FFD700",goldenrod:"DAA520",gray:"808080",green:"008000",greenyellow:"ADFF2F",honeydew:"F0FFF0",hotpink:"FF69B4",indianred:"CD5C5C",indigo:"4B0082",ivory:"FFFFF0",khaki:"F0E68C",
lavender:"E6E6FA",lavenderblush:"FFF0F5",lawngreen:"7CFC00",lemonchiffon:"FFFACD",lightblue:"ADD8E6",lightcoral:"F08080",lightcyan:"E0FFFF",lightgoldenrodyellow:"FAFAD2",lightgreen:"90EE90",lightgrey:"D3D3D3",lightpink:"FFB6C1",lightsalmon:"FFA07A",lightseagreen:"20B2AA",lightskyblue:"87CEFA",lightslategray:"789",lightsteelblue:"B0C4DE",lightyellow:"FFFFE0",lime:"0F0",limegreen:"32CD32",linen:"FAF0E6",magenta:"F0F",maroon:"800000",mediumauqamarine:"66CDAA",mediumblue:"0000CD",mediumorchid:"BA55D3",
mediumpurple:"9370D8",mediumseagreen:"3CB371",mediumslateblue:"7B68EE",mediumspringgreen:"00FA9A",mediumturquoise:"48D1CC",mediumvioletred:"C71585",midnightblue:"191970",mintcream:"F5FFFA",mistyrose:"FFE4E1",moccasin:"FFE4B5",navajowhite:"FFDEAD",navy:"000080",oldlace:"FDF5E6",olive:"808000",olivedrab:"688E23",orange:"FFA500",orangered:"FF4500",orchid:"DA70D6",palegoldenrod:"EEE8AA",palegreen:"98FB98",paleturquoise:"AFEEEE",palevioletred:"D87093",papayawhip:"FFEFD5",peachpuff:"FFDAB9",peru:"CD853F",
pink:"FFC0CB",plum:"DDA0DD",powderblue:"B0E0E6",purple:"800080",red:"F00",rosybrown:"BC8F8F",royalblue:"4169E1",saddlebrown:"8B4513",salmon:"FA8072",sandybrown:"F4A460",seagreen:"2E8B57",seashell:"FFF5EE",sienna:"A0522D",silver:"C0C0C0",skyblue:"87CEEB",slateblue:"6A5ACD",slategray:"708090",snow:"FFFAFA",springgreen:"00FF7F",steelblue:"4682B4",tan:"D2B48C",teal:"008080",thistle:"D8BFD8",tomato:"FF6347",turquoise:"40E0D0",violet:"EE82EE",wheat:"F5DEB3",white:"FFF",whitesmoke:"F5F5F5",yellow:"FF0",
yellowgreen:"9ACD32"};a.prototype={parse:function(){if(!this.Ra){var c=this.X,d;if(d=c.match(a.Ad)){this.Ra="rgb("+d[1]+","+d[2]+","+d[3]+")";this.Nb=parseFloat(d[4])}else{if((d=c.toLowerCase())in a.yb)c="#"+a.yb[d];this.Ra=c;this.Nb=c==="transparent"?0:1}}},T:function(c){this.parse();return this.Ra==="currentColor"?c.currentStyle.color:this.Ra},qa:function(){this.parse();return this.Nb}};f.da=function(c){return b[c]||(b[c]=new a(c))};return a}();f.q=function(){function a(c){this.Xa=c;this.ch=0;this.W=
[];this.Ea=0}var b=a.oa={Ga:1,Lb:2,s:4,Ec:8,Mb:16,la:32,G:64,ma:128,na:256,Oa:512,Hc:1024,URL:2048};a.ib=function(c,d){this.j=c;this.d=d};a.ib.prototype={Aa:function(){return this.j&b.G||this.j&b.ma&&this.d==="0"},P:function(){return this.Aa()||this.j&b.Oa}};a.prototype={Qd:/\s/,vd:/^[\+\-]?(\d*\.)?\d+/,url:/^url\(\s*("([^"]*)"|'([^']*)'|([!#$%&*-~]*))\s*\)/i,bc:/^\-?[_a-z][\w-]*/i,Kd:/^("([^"]*)"|'([^']*)')/,od:/^#([\da-f]{6}|[\da-f]{3})/i,Od:{px:b.G,em:b.G,ex:b.G,mm:b.G,cm:b.G,"in":b.G,pt:b.G,pc:b.G,
deg:b.Ga,rad:b.Ga,grad:b.Ga},Tc:{rgb:1,rgba:1,hsl:1,hsla:1},next:function(c){function d(r,s){r=new a.ib(r,s);if(!c){k.W.push(r);k.Ea++}return r}function e(){k.Ea++;return null}var h,i,j,g,k=this;if(this.Ea<this.W.length)return this.W[this.Ea++];for(;this.Qd.test(this.Xa.charAt(this.ch));)this.ch++;if(this.ch>=this.Xa.length)return e();i=this.ch;h=this.Xa.substring(this.ch);j=h.charAt(0);switch(j){case "#":if(g=h.match(this.od)){this.ch+=g[0].length;return d(b.s,g[0])}break;case '"':case "'":if(g=
h.match(this.Kd)){this.ch+=g[0].length;return d(b.Hc,g[2]||g[3]||"")}break;case "/":case ",":this.ch++;return d(b.na,j);case "u":if(g=h.match(this.url)){this.ch+=g[0].length;return d(b.URL,g[2]||g[3]||g[4]||"")}}if(g=h.match(this.vd)){j=g[0];this.ch+=j.length;if(h.charAt(j.length)==="%"){this.ch++;return d(b.Oa,j+"%")}if(g=h.substring(j.length).match(this.bc)){j+=g[0];this.ch+=g[0].length;return d(this.Od[g[0].toLowerCase()]||b.Ec,j)}return d(b.ma,j)}if(g=h.match(this.bc)){j=g[0];this.ch+=j.length;
if(j.toLowerCase()in f.Cc.yb||j==="currentColor"||j==="transparent")return d(b.s,j);if(h.charAt(j.length)==="("){this.ch++;if(j.toLowerCase()in this.Tc){h=function(r){return r&&r.j&b.ma};g=function(r){return r&&r.j&(b.ma|b.Oa)};var n=function(r,s){return r&&r.d===s},m=function(){return k.next(1)};if((j.charAt(0)==="r"?g(m()):h(m()))&&n(m(),",")&&g(m())&&n(m(),",")&&g(m())&&(j==="rgb"||j==="hsa"||n(m(),",")&&h(m()))&&n(m(),")"))return d(b.s,this.Xa.substring(i,this.ch));return e()}return d(b.Mb,j)}return d(b.la,
j)}this.ch++;return d(b.Lb,j)},z:function(){return this.W[this.Ea-- -2]},all:function(){for(;this.next(););return this.W},ka:function(c,d){for(var e=[],h,i;h=this.next();){if(c(h)){i=true;this.z();break}e.push(h)}return d&&!i?null:e}};return a}();f.Kb=function(a){this.e=a};f.Kb.prototype={S:0,yd:function(){var a=this.jb,b;return!a||(b=this.o())&&(a.x!==b.x||a.y!==b.y)},Dd:function(){var a=this.jb,b;return!a||(b=this.o())&&(a.g!==b.g||a.f!==b.f)},Xb:function(){var a=this.e,b=a.getBoundingClientRect(),
c=f.fa===9;return{x:b.left,y:b.top,g:c?a.offsetWidth:b.right-b.left,f:c?a.offsetHeight:b.bottom-b.top}},o:function(){return this.S?this.Sa||(this.Sa=this.Xb()):this.Xb()},nd:function(){return!!this.jb},Za:function(){++this.S},bb:function(){if(!--this.S){if(this.Sa)this.jb=this.Sa;this.Sa=null}}};(function(){function a(b){var c=f.R.za(b);return function(){if(this.S){var d=this.Pb||(this.Pb={});return c in d?d[c]:(d[c]=b.call(this))}else return b.call(this)}}f.v={S:0,ha:function(b){function c(d){this.e=
d;this.Ob=this.ea()}f.Ba(c.prototype,f.v,b);c.Nc={};return c},m:function(){var b=this.ea(),c=this.constructor.Nc;return b?b in c?c[b]:(c[b]=this.ia(b)):null},ea:a(function(){var b=this.e,c=this.constructor,d=b.style;b=b.currentStyle;var e=this.ua,h=this.Da,i=c.Lc||(c.Lc=f.K+e);c=c.Mc||(c.Mc=f.hb+h.charAt(0).toUpperCase()+h.substring(1));return d[c]||b.getAttribute(i)||d[h]||b.getAttribute(e)}),h:a(function(){return!!this.m()}),J:a(function(){var b=this.ea(),c=b!==this.Ob;this.Ob=b;return c}),ta:a,
Za:function(){++this.S},bb:function(){--this.S||delete this.Pb}}})();f.Hb=f.v.ha({ua:f.K+"background",Da:f.hb+"Background",Qc:{scroll:1,fixed:1,local:1},ab:{"repeat-x":1,"repeat-y":1,repeat:1,"no-repeat":1},gc:{"padding-box":1,"border-box":1,"content-box":1},zd:{top:1,right:1,bottom:1,left:1,center:1},Ed:{contain:1,cover:1},$a:{Ka:"backgroundClip",s:"backgroundColor",Y:"backgroundImage",Ma:"backgroundOrigin",L:"backgroundPosition",$:"backgroundRepeat",Pa:"backgroundSize"},ia:function(a){function b(t){return t&&
t.P()||t.j&k&&t.d in l}function c(t){return t&&(t.P()&&f.k(t.d)||t.d==="auto"&&"auto")}var d=this.e.currentStyle,e,h,i,j=f.q.oa,g=j.na,k=j.la,n=j.s,m,r,s=0,l=this.zd,q,p,u={M:[]};if(this.pb()){e=new f.q(a);for(i={};h=e.next();){m=h.j;r=h.d;if(!i.O&&m&j.Mb&&r==="linear-gradient"){q={ja:[],O:r};for(p={};h=e.next();){m=h.j;r=h.d;if(m&j.Lb&&r===")"){p.color&&q.ja.push(p);q.ja.length>1&&f.Ba(i,q);break}if(m&n){if(q.ra||q.sb){h=e.z();if(h.j!==g)break;e.next()}p={color:f.da(r)};h=e.next();if(h.P())p.ec=
f.k(h.d);else e.z()}else if(m&j.Ga&&!q.ra&&!p.color&&!q.ja.length)q.ra=new f.wc(h.d);else if(b(h)&&!q.sb&&!p.color&&!q.ja.length){e.z();q.sb=new f.Ha(e.ka(function(t){return!b(t)},false))}else if(m&g&&r===","){if(p.color){q.ja.push(p);p={}}}else break}}else if(!i.O&&m&j.URL){i.ub=r;i.O="image"}else if(b(h)&&!i.aa){e.z();i.aa=new f.Ha(e.ka(function(t){return!b(t)},false))}else if(m&k)if(r in this.ab&&!i.Ya)i.Ya=r;else if(r in this.gc&&!i.Ta){i.Ta=r;if((h=e.next())&&h.j&k&&h.d in this.gc)i.Rb=h.d;else{i.Rb=
r;e.z()}}else if(r in this.Qc&&!i.Rc)i.Rc=r;else return null;else if(m&n&&!u.color)u.color=f.da(r);else if(m&g&&r==="/"&&!i.Ua&&i.aa){h=e.next();if(h.j&k&&h.d in this.Ed)i.Ua=new f.Ia(h.d);else if(h=c(h)){m=c(e.next());if(!m){m=h;e.z()}i.Ua=new f.Ia(h,m)}else return null}else if(m&g&&r===","&&i.O){i.fc=a.substring(s,e.ch-1);s=e.ch;u.M.push(i);i={}}else return null}if(i.O){i.fc=a.substring(s);u.M.push(i)}}else this.sc(f.fa<9?function(){var t=this.$a,o=d[t.L+"X"],w=d[t.L+"Y"],x=d[t.Y],z=d[t.s];if(z!==
"transparent")u.color=f.da(z);if(x!=="none")u.M=[{O:"image",ub:(new f.q(x)).next().d,Ya:d[t.$],aa:new f.Ha((new f.q(o+" "+w)).all())}]}:function(){var t=this.$a,o=/\s*,\s*/,w=d[t.Y].split(o),x=d[t.s],z,D,B,H,E,C;if(x!=="transparent")u.color=f.da(x);if((H=w.length)&&w[0]!=="none"){x=d[t.$].split(o);z=d[t.L].split(o);D=d[t.Ma].split(o);B=d[t.Ka].split(o);t=d[t.Pa].split(o);u.M=[];for(o=0;o<H;o++)if((E=w[o])&&E!=="none"){C=t[o].split(" ");u.M.push({fc:E+" "+x[o]+" "+z[o]+" / "+t[o]+" "+D[o]+" "+B[o],
O:"image",ub:(new f.q(E)).next().d,Ya:x[o],aa:new f.Ha((new f.q(z[o])).all()),Ta:D[o],Rb:B[o],Ua:new f.Ia(C[0],C[1])})}}});return u.color||u.M[0]?u:null},sc:function(a){var b=f.fa>8,c=this.$a,d=this.e.runtimeStyle,e=d[c.Y],h=d[c.s],i=d[c.$],j,g,k,n;if(e)d[c.Y]="";if(h)d[c.s]="";if(i)d[c.$]="";if(b){j=d[c.Ka];g=d[c.Ma];n=d[c.L];k=d[c.Pa];if(j)d[c.Ka]="";if(g)d[c.Ma]="";if(n)d[c.L]="";if(k)d[c.Pa]=""}a=a.call(this);if(e)d[c.Y]=e;if(h)d[c.s]=h;if(i)d[c.$]=i;if(b){if(j)d[c.Ka]=j;if(g)d[c.Ma]=g;if(n)d[c.L]=
n;if(k)d[c.Pa]=k}return a},ea:f.v.ta(function(){return this.pb()||this.sc(function(){var a=this.e.currentStyle,b=this.$a;return a[b.s]+" "+a[b.Y]+" "+a[b.$]+" "+a[b.L+"X"]+" "+a[b.L+"Y"]})}),pb:f.v.ta(function(){var a=this.e;return a.style[this.Da]||a.currentStyle.getAttribute(this.ua)}),gd:function(a,b,c){var d=this.e,e=b.o();b=e.g;e=e.f;if(a!=="border-box")if((c=c.m())&&(c=c.Q)){b-=c.l.a(d)+c.l.a(d);e-=c.t.a(d)+c.b.a(d)}if(a==="content-box"){a=f.k;c=d.currentStyle;b-=a(c.paddingLeft).a(d)+a(c.paddingRight).a(d);
e-=a(c.paddingTop).a(d)+a(c.paddingBottom).a(d)}return{g:b,f:e}},dc:function(){var a=0;if(f.N<7){a=this.e;a=""+(a.style[f.hb+"PngFix"]||a.currentStyle.getAttribute(f.K+"png-fix"))==="true"}return a},h:f.v.ta(function(){return(this.pb()||this.dc())&&!!this.m()})});f.Jb=f.v.ha({kc:["Top","Right","Bottom","Left"],td:{thin:"1px",medium:"3px",thick:"5px"},ia:function(){var a={},b={},c={},d=false,e=true,h=true,i=true;this.tc(function(){for(var j=this.e.currentStyle,g=0,k,n,m,r,s,l,q;g<4;g++){m=this.kc[g];
q=m.charAt(0).toLowerCase();k=b[q]=j["border"+m+"Style"];n=j["border"+m+"Color"];m=j["border"+m+"Width"];if(g>0){if(k!==r)h=false;if(n!==s)e=false;if(m!==l)i=false}r=k;s=n;l=m;c[q]=f.da(n);m=a[q]=f.k(b[q]==="none"?"0":this.td[m]||m);if(m.a(this.e)>0)d=true}});return d?{Q:a,Ld:b,Uc:c,Rd:i,Vc:e,Md:h}:null},ea:f.v.ta(function(){var a=this.e,b=a.currentStyle,c;a.tagName in f.mc&&a.offsetParent.currentStyle.borderCollapse==="collapse"||this.tc(function(){c=b.borderWidth+"|"+b.borderStyle+"|"+b.borderColor});
return c}),tc:function(a){var b=this.e.runtimeStyle,c=b.borderWidth,d=b.borderColor;if(c)b.borderWidth="";if(d)b.borderColor="";a=a.call(this);if(c)b.borderWidth=c;if(d)b.borderColor=d;return a}});(function(){f.cb=f.v.ha({ua:"border-radius",Da:"borderRadius",ia:function(b){var c=null,d,e,h,i,j=false;if(b){e=new f.q(b);var g=function(){for(var k=[],n;(h=e.next())&&h.P();){i=f.k(h.d);n=i.Yb();if(n<0)return null;if(n>0)j=true;k.push(i)}return k.length>0&&k.length<5?{tl:k[0],tr:k[1]||k[0],br:k[2]||k[0],
bl:k[3]||k[1]||k[0]}:null};if(b=g()){if(h){if(h.j&f.q.oa.na&&h.d==="/")d=g()}else d=b;if(j&&b&&d)c={x:b,y:d}}}return c}});var a=f.k("0");a={tl:a,tr:a,br:a,bl:a};f.cb.vc={x:a,y:a}})();f.Ib=f.v.ha({ua:"border-image",Da:"borderImage",ab:{stretch:1,round:1,repeat:1,space:1},ia:function(a){var b=null,c,d,e,h,i,j,g=0,k=f.q.oa,n=k.la,m=k.ma,r=k.Oa;if(a){c=new f.q(a);b={};for(var s=function(p){return p&&p.j&k.na&&p.d==="/"},l=function(p){return p&&p.j&n&&p.d==="fill"},q=function(){h=c.ka(function(p){return!(p.j&
(m|r))});if(l(c.next())&&!b.fill)b.fill=true;else c.z();if(s(c.next())){g++;i=c.ka(function(p){return!p.P()&&!(p.j&n&&p.d==="auto")});if(s(c.next())){g++;j=c.ka(function(p){return!p.Aa()})}}else c.z()};a=c.next();){d=a.j;e=a.d;if(d&(m|r)&&!h){c.z();q()}else if(l(a)&&!b.fill){b.fill=true;q()}else if(d&n&&this.ab[e]&&!b.repeat){b.repeat={f:e};if(a=c.next())if(a.j&n&&this.ab[a.d])b.repeat.rc=a.d;else c.z()}else if(d&k.URL&&!b.src)b.src=e;else return null}if(!b.src||!h||h.length<1||h.length>4||i&&i.length>
4||g===1&&i.length<1||j&&j.length>4||g===2&&j.length<1)return null;if(!b.repeat)b.repeat={f:"stretch"};if(!b.repeat.rc)b.repeat.rc=b.repeat.f;a=function(p,u){return{t:u(p[0]),r:u(p[1]||p[0]),b:u(p[2]||p[0]),l:u(p[3]||p[1]||p[0])}};b.slice=a(h,function(p){return f.k(p.j&m?p.d+"px":p.d)});if(i&&i[0])b.Q=a(i,function(p){return p.P()?f.k(p.d):p.d});if(j&&j[0])b.Ca=a(j,function(p){return p.Aa()?f.k(p.d):p.d})}return b}});f.Bc=f.v.ha({ua:"box-shadow",Da:"boxShadow",ia:function(a){var b,c=f.k,d=f.q.oa,e;
if(a){e=new f.q(a);b={Ca:[],vb:[]};for(a=function(){for(var h,i,j,g,k,n;h=e.next();){j=h.d;i=h.j;if(i&d.na&&j===",")break;else if(h.Aa()&&!k){e.z();k=e.ka(function(m){return!m.Aa()})}else if(i&d.s&&!g)g=j;else if(i&d.la&&j==="inset"&&!n)n=true;else return false}h=k&&k.length;if(h>1&&h<5){(n?b.vb:b.Ca).push({Sd:c(k[0].d),Td:c(k[1].d),blur:c(k[2]?k[2].d:"0"),Fd:c(k[3]?k[3].d:"0"),color:f.da(g||"currentColor")});return true}return false};a(););}return b&&(b.vb.length||b.Ca.length)?b:null}});f.Ic=f.v.ha({ea:f.v.ta(function(){var a=
this.e.currentStyle;return a.visibility+"|"+a.display}),ia:function(){var a=this.e,b=a.runtimeStyle;a=a.currentStyle;var c=b.visibility,d;b.visibility="";d=a.visibility;b.visibility=c;return{Pd:d!=="hidden",$c:a.display!=="none"}},h:function(){return false}});f.u={ga:function(a){function b(c,d,e,h){this.e=c;this.p=d;this.i=e;this.parent=h}f.Ba(b.prototype,f.u,a);return b},wb:false,U:function(){return false},Ab:f.ob,nc:function(){this.n();this.h()&&this.ca()},Eb:function(){this.wb=true},oc:function(){this.h()?
this.ca():this.n()},tb:function(){this.e.runtimeStyle.borderColor="transparent"},n:function(){}};f.Ba(f.u,{lb:function(a,b){this.jc(a);for(var c=this.pa||(this.pa=[]),d=a+1,e=c.length,h;d<e;d++)if(h=c[d])break;c[a]=b;this.D().insertBefore(b,h||null)},xa:function(a){var b=this.pa;return b&&b[a]||null},jc:function(a){var b=this.xa(a),c=this.Qa;if(b&&c){c.removeChild(b);this.pa[a]=null}},Wa:function a(b){var c=a.ad;if(!c){c=a.ad=J.createDocumentFragment();c.namespaces.add("css3vml","urn:schemas-microsoft-com:vml")}return c.createElement("css3vml:"+
b)},ya:function(a,b,c,d){var e=this.kb||(this.kb={}),h=e[a];if(!h){h=e[a]=this.Wa("shape");if(b)h.appendChild(h[b]=this.Wa(b));if(d){c=this.xa(d);if(!c){this.lb(d,J.createElement("group"+d));c=this.xa(d)}}c.appendChild(h);a=h.style;a.position="absolute";a.left=a.top=0;a.behavior="url(#default#VML)"}return h},nb:function(a){var b=this.kb,c=b&&b[a];if(c){c.parentNode.removeChild(c);delete b[a]}return!!c},$b:function(a){var b=this.e,c=this.p.o(),d=c.g,e=c.f,h,i,j,g,k,n;c=a.x.tl.a(b,d);h=a.y.tl.a(b,e);
i=a.x.tr.a(b,d);j=a.y.tr.a(b,e);g=a.x.br.a(b,d);k=a.y.br.a(b,e);n=a.x.bl.a(b,d);a=a.y.bl.a(b,e);d=Math.min(d/(c+i),e/(j+k),d/(n+g),e/(h+a));if(d<1){c*=d;h*=d;i*=d;j*=d;g*=d;k*=d;n*=d;a*=d}return{x:{tl:c,tr:i,br:g,bl:n},y:{tl:h,tr:j,br:k,bl:a}}},wa:function(a,b,c){b=b||1;var d,e,h=this.p.o();e=h.g*b;h=h.f*b;var i=this.i.C,j=Math.floor,g=Math.ceil,k=a?a.Cb*b:0,n=a?a.Bb*b:0,m=a?a.mb*b:0;a=a?a.xb*b:0;var r,s,l,q,p;if(c||i.h()){d=this.$b(c||i.m());c=d.x.tl*b;i=d.y.tl*b;r=d.x.tr*b;s=d.y.tr*b;l=d.x.br*b;
q=d.y.br*b;p=d.x.bl*b;b=d.y.bl*b;e="m"+j(a)+","+j(i)+"qy"+j(c)+","+j(k)+"l"+g(e-r)+","+j(k)+"qx"+g(e-n)+","+j(s)+"l"+g(e-n)+","+g(h-q)+"qy"+g(e-l)+","+g(h-m)+"l"+j(p)+","+g(h-m)+"qx"+j(a)+","+g(h-b)+" x e"}else e="m"+j(a)+","+j(k)+"l"+g(e-n)+","+j(k)+"l"+g(e-n)+","+g(h-m)+"l"+j(a)+","+g(h-m)+"xe";return e},D:function(){var a=this.parent.xa(this.I),b;if(!a){a=J.createElement(this.Va);b=a.style;b.position="absolute";b.top=b.left=0;this.parent.lb(this.I,a)}return a},tb:function(){var a=this.e,b=a.currentStyle,
c=a.runtimeStyle,d=a.tagName,e=f.N===6,h;if(e&&(d in f.Sb||d==="FIELDSET")||d==="BUTTON"||d==="INPUT"&&a.type in f.rd){c.borderWidth="";d=this.i.w.kc;for(h=d.length;h--;){e=d[h];c["padding"+e]="";c["padding"+e]=f.k(b["padding"+e]).a(a)+f.k(b["border"+e+"Width"]).a(a)+(f.N!==8&&h%2?1:0)}c.borderWidth=0}else if(e){if(a.childNodes.length!==1||a.firstChild.tagName!=="ie6-mask"){b=J.createElement("ie6-mask");d=b.style;d.visibility="visible";for(d.zoom=1;d=a.firstChild;)b.appendChild(d);a.appendChild(b);
c.visibility="hidden"}}else c.borderColor="transparent"},$d:function(){},n:function(){this.parent.jc(this.I);delete this.kb;delete this.pa}});f.Gc=f.u.ga({h:function(){var a=this.Sc;for(var b in a)if(a.hasOwnProperty(b)&&a[b].h())return true;return false},U:function(){return this.i.Fb.J()},Eb:function(){if(this.h()){var a=this.Zb(),b=a,c;a=a.currentStyle;var d=a.position,e=this.D().style,h=0,i=0;i=this.p.o();if(d==="fixed"&&f.N>6){h=i.x;i=i.y;b=d}else{do b=b.offsetParent;while(b&&b.currentStyle.position===
"static");if(b){c=b.getBoundingClientRect();b=b.currentStyle;h=i.x-c.left-(parseFloat(b.borderLeftWidth)||0);i=i.y-c.top-(parseFloat(b.borderTopWidth)||0)}else{b=J.documentElement;h=i.x+b.scrollLeft-b.clientLeft;i=i.y+b.scrollTop-b.clientTop}b="absolute"}e.position=b;e.left=h;e.top=i;e.zIndex=d==="static"?-1:a.zIndex;this.wb=true}},oc:f.ob,qc:function(){var a=this.i.Fb.m();this.D().style.display=a.Pd&&a.$c?"":"none"},nc:function(){this.h()?this.qc():this.n()},Zb:function(){var a=this.e;return a.tagName in
f.mc?a.offsetParent:a},D:function(){var a=this.Qa,b;if(!a){b=this.Zb();a=this.Qa=J.createElement("css3-container");a.style.direction="ltr";this.qc();b.parentNode.insertBefore(a,b)}return a},Vb:f.ob,n:function(){var a=this.Qa,b;if(a&&(b=a.parentNode))b.removeChild(a);delete this.Qa;delete this.pa}});f.xc=f.u.ga({I:2,Va:"background",U:function(){var a=this.i;return a.F.J()||a.C.J()},h:function(){var a=this.i;return a.B.h()||a.C.h()||a.F.h()||a.ba.h()&&a.ba.m().vb},ca:function(){var a=this.p.o();if(a.g&&
a.f){this.bd();this.cd()}},bd:function(){var a=this.i.F.m(),b=this.p.o(),c=this.e,d=a&&a.color,e,h;if(d&&d.qa()>0){this.ac();a=this.ya("bgColor","fill",this.D(),1);e=b.g;b=b.f;a.stroked=false;a.coordsize=e*2+","+b*2;a.coordorigin="1,1";a.path=this.wa(null,2);h=a.style;h.width=e;h.height=b;a.fill.color=d.T(c);c=d.qa();if(c<1)a.fill.opacity=c}else this.nb("bgColor")},cd:function(){var a=this.i.F.m(),b=this.p.o();a=a&&a.M;var c,d,e,h,i;if(a){this.ac();d=b.g;e=b.f;for(i=a.length;i--;){b=a[i];c=this.ya("bgImage"+
i,"fill",this.D(),2);c.stroked=false;c.fill.type="tile";c.fillcolor="none";c.coordsize=d*2+","+e*2;c.coordorigin="1,1";c.path=this.wa(0,2);h=c.style;h.width=d;h.height=e;if(b.O==="linear-gradient")this.Pc(c,b);else{c.fill.src=b.ub;this.xd(c,i)}}}for(i=a?a.length:0;this.nb("bgImage"+i++););},xd:function(a,b){var c=this;f.R.uc(a.fill.src,function(d){var e=c.e,h=c.p.o(),i=h.g;h=h.f;if(i&&h){var j=a.fill,g=c.i.F,k=g.m().M[b],n=g.gd(k.Ta,c.p,c.i.w);d=(k.Ua||f.Ia.Dc).a(c.e,n.g,n.f,d.g,d.f);g=c.hd(k.Ta);
e=k.aa?k.aa.coords(e,n.g-d.g,n.f-d.f):{x:0,y:0};k=k.Ya;var m=0,r=0,s=i+1,l=h+1,q=f.N===8?0:1;n=Math.round(g.x+e.x)+0.5;g=Math.round(g.y+e.y)+0.5;j.position=n/i+","+g/h;j.size.x=1;j.size=d.g+"px,"+d.f+"px";if(k&&k!=="repeat"){if(k==="repeat-x"||k==="no-repeat"){m=g+1;l=g+d.f+q}if(k==="repeat-y"||k==="no-repeat"){r=n+1;s=n+d.g+q}a.style.clip="rect("+m+"px,"+s+"px,"+l+"px,"+r+"px)"}}})},hd:function(a){var b=this.e,c=0,d=0,e;if(a!=="border-box")if((e=this.i.w.m())&&(e=e.Q)){c+=e.l.a(b);d+=e.t.a(b)}if(a===
"content-box"){a=f.k;e=b.currentStyle;c+=a(e.paddingLeft).a(b);d+=a(e.paddingTop).a(b)}return{x:c,y:d}},Pc:function(a,b){var c=this.e,d=this.p.o(),e=d.g,h=d.f;a=a.fill;d=b.ja;var i=d.length,j=Math.PI,g=f.eb,k=g.hc,n=g.Tb;b=g.kd(c,e,h,b);g=b.ra;var m=b.Id,r=b.Jd,s=b.Gd,l=b.Hd,q=b.ed,p=b.fd,u=b.Xc,t=b.Yc;b=b.sd;e=g%90?Math.atan2(u*e/h,t)/j*180:g+90;e+=180;e%=360;q=k(s,l,g,q,p);h=n(s,l,q[0],q[1]);j=[];q=k(m,r,g,s,l);n=n(m,r,q[0],q[1])/h*100;k=[];for(g=0;g<i;g++)k.push(d[g].ec?d[g].ec.a(c,b):g===0?0:
g===i-1?b:null);for(g=1;g<i;g++){if(k[g]===null){m=k[g-1];b=g;do r=k[++b];while(r===null);k[g]=m+(r-m)/(b-g+1)}k[g]=Math.max(k[g],k[g-1])}for(g=0;g<i;g++)j.push(n+k[g]/h*100+"% "+d[g].color.T(c));a.angle=e;a.type="gradient";a.method="sigma";a.color=d[0].color.T(c);a.color2=d[i-1].color.T(c);if(a.colors)a.colors.value=j.join(",");else a.colors=j.join(",")},ac:function(){var a=this.e.runtimeStyle;a.backgroundImage="url(about:blank)";a.backgroundColor="transparent"},n:function(){f.u.n.call(this);var a=
this.e.runtimeStyle;a.backgroundImage=a.backgroundColor=""}});f.zc=f.u.ga({I:4,Va:"border",U:function(){var a=this.i;return a.w.J()||a.C.J()},h:function(){var a=this.i;return(a.C.h()||a.F.h())&&!a.B.h()&&a.w.h()},ca:function(){var a=this.e,b=this.i.w.m(),c=this.p.o(),d=c.g;c=c.f;var e,h,i,j,g;if(b){this.tb();b=this.jd(2);j=0;for(g=b.length;j<g;j++){i=b[j];e=this.ya("borderPiece"+j,i.stroke?"stroke":"fill",this.D());e.coordsize=d*2+","+c*2;e.coordorigin="1,1";e.path=i.path;h=e.style;h.width=d;h.height=
c;e.filled=!!i.fill;e.stroked=!!i.stroke;if(i.stroke){e=e.stroke;e.weight=i.Gb+"px";e.color=i.color.T(a);e.dashstyle=i.stroke==="dashed"?"2 2":i.stroke==="dotted"?"1 1":"solid";e.linestyle=i.stroke==="double"&&i.Gb>2?"ThinThin":"Single"}else e.fill.color=i.fill.T(a)}for(;this.nb("borderPiece"+j++););}},jd:function(a){var b=this.e,c,d,e,h=this.i.w,i=[],j,g,k,n,m=Math.round,r,s,l;if(h.h()){c=h.m();h=c.Q;s=c.Ld;l=c.Uc;if(c.Rd&&c.Md&&c.Vc){if(l.t.qa()>0){c=h.t.a(b);k=c/2;i.push({path:this.wa({Cb:k,Bb:k,
mb:k,xb:k},a),stroke:s.t,color:l.t,Gb:c})}}else{a=a||1;c=this.p.o();d=c.g;e=c.f;c=m(h.t.a(b));k=m(h.r.a(b));n=m(h.b.a(b));b=m(h.l.a(b));var q={t:c,r:k,b:n,l:b};b=this.i.C;if(b.h())r=this.$b(b.m());j=Math.floor;g=Math.ceil;var p=function(o,w){return r?r[o][w]:0},u=function(o,w,x,z,D,B){var H=p("x",o),E=p("y",o),C=o.charAt(1)==="r";o=o.charAt(0)==="b";return H>0&&E>0?(B?"al":"ae")+(C?g(d-H):j(H))*a+","+(o?g(e-E):j(E))*a+","+(j(H)-w)*a+","+(j(E)-x)*a+","+z*65535+","+2949075*(D?1:-1):(B?"m":"l")+(C?d-
w:w)*a+","+(o?e-x:x)*a},t=function(o,w,x,z){var D=o==="t"?j(p("x","tl"))*a+","+g(w)*a:o==="r"?g(d-w)*a+","+j(p("y","tr"))*a:o==="b"?g(d-p("x","br"))*a+","+j(e-w)*a:j(w)*a+","+g(e-p("y","bl"))*a;o=o==="t"?g(d-p("x","tr"))*a+","+g(w)*a:o==="r"?g(d-w)*a+","+g(e-p("y","br"))*a:o==="b"?j(p("x","bl"))*a+","+j(e-w)*a:j(w)*a+","+j(p("y","tl"))*a;return x?(z?"m"+o:"")+"l"+D:(z?"m"+D:"")+"l"+o};b=function(o,w,x,z,D,B){var H=o==="l"||o==="r",E=q[o],C,A;if(E>0&&s[o]!=="none"&&l[o].qa()>0){C=q[H?o:w];w=q[H?w:
o];A=q[H?o:x];x=q[H?x:o];if(s[o]==="dashed"||s[o]==="dotted"){i.push({path:u(z,C,w,B+45,0,1)+u(z,0,0,B,1,0),fill:l[o]});i.push({path:t(o,E/2,0,1),stroke:s[o],Gb:E,color:l[o]});i.push({path:u(D,A,x,B,0,1)+u(D,0,0,B-45,1,0),fill:l[o]})}else i.push({path:u(z,C,w,B+45,0,1)+t(o,E,0,0)+u(D,A,x,B,0,0)+(s[o]==="double"&&E>2?u(D,A-j(A/3),x-j(x/3),B-45,1,0)+t(o,g(E/3*2),1,0)+u(z,C-j(C/3),w-j(w/3),B,1,0)+"x "+u(z,j(C/3),j(w/3),B+45,0,1)+t(o,j(E/3),1,0)+u(D,j(A/3),j(x/3),B,0,0):"")+u(D,0,0,B-45,1,0)+t(o,0,1,
0)+u(z,0,0,B,1,0),fill:l[o]})}};b("t","l","r","tl","tr",90);b("r","t","b","tr","br",0);b("b","r","l","br","bl",-90);b("l","b","t","bl","tl",-180)}}return i},n:function(){if(this.Ub||!this.i.B.h())this.e.runtimeStyle.borderColor="";f.u.n.call(this)}});f.yc=f.u.ga({I:5,wd:["t","tr","r","br","b","bl","l","tl","c"],U:function(){return this.i.B.J()},h:function(){return this.i.B.h()},ca:function(){this.D();var a=this.i.B.m(),b=this.i.w.m(),c=this.p.o(),d=this.e,e=this.ic;f.R.uc(a.src,function(h){function i(t,
o,w,x,z){t=e[t].style;var D=Math.max;t.width=D(o,0);t.height=D(w,0);t.left=x;t.top=z}function j(t,o,w){for(var x=0,z=t.length;x<z;x++)e[t[x]].imagedata[o]=w}var g=c.g,k=c.f,n=f.k("0"),m=a.Q||(b?b.Q:{t:n,r:n,b:n,l:n});n=m.t.a(d);var r=m.r.a(d),s=m.b.a(d);m=m.l.a(d);var l=a.slice,q=l.t.a(d),p=l.r.a(d),u=l.b.a(d);l=l.l.a(d);i("tl",m,n,0,0);i("t",g-m-r,n,m,0);i("tr",r,n,g-r,0);i("r",r,k-n-s,g-r,n);i("br",r,s,g-r,k-s);i("b",g-m-r,s,m,k-s);i("bl",m,s,0,k-s);i("l",m,k-n-s,0,n);i("c",g-m-r,k-n-s,m,n);j(["tl",
"t","tr"],"cropBottom",(h.f-q)/h.f);j(["tl","l","bl"],"cropRight",(h.g-l)/h.g);j(["bl","b","br"],"cropTop",(h.f-u)/h.f);j(["tr","r","br"],"cropLeft",(h.g-p)/h.g);j(["l","r","c"],"cropTop",q/h.f);j(["l","r","c"],"cropBottom",u/h.f);j(["t","b","c"],"cropLeft",l/h.g);j(["t","b","c"],"cropRight",p/h.g);e.c.style.display=a.fill?"":"none"},this)},D:function(){var a=this.parent.xa(this.I),b,c,d,e=this.wd,h=e.length;if(!a){a=J.createElement("border-image");b=a.style;b.position="absolute";this.ic={};for(d=
0;d<h;d++){c=this.ic[e[d]]=this.Wa("rect");c.appendChild(this.Wa("imagedata"));b=c.style;b.behavior="url(#default#VML)";b.position="absolute";b.top=b.left=0;c.imagedata.src=this.i.B.m().src;c.stroked=false;c.filled=false;a.appendChild(c)}this.parent.lb(this.I,a)}return a},Ab:function(){if(this.h()){var a=this.e,b=a.runtimeStyle,c=this.i.B.m().Q;b.borderStyle="solid";if(c){b.borderTopWidth=c.t.a(a);b.borderRightWidth=c.r.a(a);b.borderBottomWidth=c.b.a(a);b.borderLeftWidth=c.l.a(a)}this.tb()}},n:function(){var a=
this.e.runtimeStyle;a.borderStyle="";if(this.Ub||!this.i.w.h())a.borderColor=a.borderWidth="";f.u.n.call(this)}});f.Ac=f.u.ga({I:1,Va:"outset-box-shadow",U:function(){var a=this.i;return a.ba.J()||a.C.J()},h:function(){var a=this.i.ba;return a.h()&&a.m().Ca[0]},ca:function(){function a(C,A,Q,W,K,L,F){C=b.ya("shadow"+C+A,"fill",d,i-C);A=C.fill;C.coordsize=n*2+","+m*2;C.coordorigin="1,1";C.stroked=false;C.filled=true;A.color=K.T(c);if(L){A.type="gradienttitle";A.color2=A.color;A.opacity=0}C.path=F;
p=C.style;p.left=Q;p.top=W;p.width=n;p.height=m;return C}var b=this,c=this.e,d=this.D(),e=this.i,h=e.ba.m().Ca;e=e.C.m();var i=h.length,j=i,g,k=this.p.o(),n=k.g,m=k.f;k=f.N===8?1:0;for(var r=["tl","tr","br","bl"],s,l,q,p,u,t,o,w,x,z,D,B,H,E;j--;){l=h[j];u=l.Sd.a(c);t=l.Td.a(c);g=l.Fd.a(c);o=l.blur.a(c);l=l.color;w=-g-o;if(!e&&o)e=f.cb.vc;w=this.wa({Cb:w,Bb:w,mb:w,xb:w},2,e);if(o){x=(g+o)*2+n;z=(g+o)*2+m;D=o*2/x;B=o*2/z;if(o-g>n/2||o-g>m/2)for(g=4;g--;){s=r[g];H=s.charAt(0)==="b";E=s.charAt(1)==="r";
s=a(j,s,u,t,l,o,w);q=s.fill;q.focusposition=(E?1-D:D)+","+(H?1-B:B);q.focussize="0,0";s.style.clip="rect("+((H?z/2:0)+k)+"px,"+(E?x:x/2)+"px,"+(H?z:z/2)+"px,"+((E?x/2:0)+k)+"px)"}else{s=a(j,"",u,t,l,o,w);q=s.fill;q.focusposition=D+","+B;q.focussize=1-D*2+","+(1-B*2)}}else{s=a(j,"",u,t,l,o,w);u=l.qa();if(u<1)s.fill.opacity=u}}}});f.Fc=f.u.ga({I:6,Va:"imgEl",U:function(){var a=this.i;return this.e.src!==this.Kc||a.C.J()},h:function(){var a=this.i;return a.C.h()||a.F.dc()},ca:function(){this.Kc=i;this.pd();
var a=this.ya("img","fill",this.D()),b=a.fill,c=this.p.o(),d=c.g;c=c.f;var e=this.i.w.m(),h=e&&e.Q;e=this.e;var i=e.src,j=Math.round,g=e.currentStyle,k=f.k;if(!h||f.N<7){h=f.k("0");h={t:h,r:h,b:h,l:h}}a.stroked=false;b.type="frame";b.src=i;b.position=(d?0.5/d:0)+","+(c?0.5/c:0);a.coordsize=d*2+","+c*2;a.coordorigin="1,1";a.path=this.wa({Cb:j(h.t.a(e)+k(g.paddingTop).a(e)),Bb:j(h.r.a(e)+k(g.paddingRight).a(e)),mb:j(h.b.a(e)+k(g.paddingBottom).a(e)),xb:j(h.l.a(e)+k(g.paddingLeft).a(e))},2);a=a.style;
a.width=d;a.height=c},pd:function(){this.e.runtimeStyle.filter="alpha(opacity=0)"},n:function(){f.u.n.call(this);this.e.runtimeStyle.filter=""}});f.db=function(){function a(l,q){l.className+=" "+q}function b(l){var q=s.slice.call(arguments,1),p=q.length;setTimeout(function(){for(;p--;)a(l,q[p])},0)}function c(l){var q=s.slice.call(arguments,1),p=q.length;setTimeout(function(){for(;p--;){var u=q[p];u=r[u]||(r[u]=new RegExp("\\b"+u+"\\b","g"));l.className=l.className.replace(u,"")}},0)}function d(l){function q(){if(!S){var v,
y,I=f.fa,O=l.currentStyle,M=O.getAttribute(h)==="true";P=O.getAttribute(i);P=I>7?P!=="false":P==="true";if(!R){R=1;l.runtimeStyle.zoom=1;O=l;for(var Z=1;O=O.previousSibling;)if(O.nodeType===1){Z=0;break}Z&&a(l,n)}F.Za();if(M&&(y=F.o())&&(v=J.documentElement||J.body)&&(y.y>v.clientHeight||y.x>v.clientWidth||y.y+y.f<0||y.x+y.g<0)){if(!X){X=1;f.gb.V(q)}}else{S=1;X=R=0;f.gb.Fa(q);if(I===9){G={F:new f.Hb(l),B:new f.Ib(l),w:new f.Jb(l)};N=[G.F,G.B];L=new f.Wd(l,F,G);v=[new f.Ud(l,F,G,L),new f.Vd(l,F,G,
L)]}else{G={F:new f.Hb(l),w:new f.Jb(l),B:new f.Ib(l),C:new f.cb(l),ba:new f.Bc(l),Fb:new f.Ic(l)};N=[G.F,G.w,G.B,G.C,G.ba,G.Fb];L=new f.Gc(l,F,G);v=[new f.Ac(l,F,G,L),new f.xc(l,F,G,L),new f.zc(l,F,G,L),new f.yc(l,F,G,L)];l.tagName==="IMG"&&v.push(new f.Fc(l,F,G,L));L.Sc=v}K=[L].concat(v);if(v=l.currentStyle.getAttribute(f.K+"watch-ancestors")){v=parseInt(v,10);y=0;for(M=l.parentNode;M&&(v==="NaN"||y++<v);){A(M,"onpropertychange",H);A(M,"onmouseenter",o);A(M,"onmouseleave",w);A(M,"onmousedown",x);
if(M.tagName in f.Wb){A(M,"onfocus",D);A(M,"onblur",B)}M=M.parentNode}}if(P){f.La.V(u);f.La.Bd()}u(1)}if(!T){T=1;I<9&&A(l,"onmove",p);A(l,"onresize",p);A(l,"onpropertychange",t);A(l,"onmouseenter",o);A(l,"onmouseleave",w);A(l,"onmousedown",x);if(l.tagName in f.Wb){A(l,"onfocus",D);A(l,"onblur",B)}f.Na.V(p);f.H.V(Q)}F.bb()}}function p(){F&&F.nd()&&u()}function u(v){if(!U)if(S){var y,I=K.length;E();for(y=0;y<I;y++)K[y].Ab();if(v||F.yd())for(y=0;y<I;y++)K[y].Eb();if(v||F.Dd())for(y=0;y<I;y++)K[y].oc();
L.Vb();C()}else R||q()}function t(){var v,y=K.length,I;v=event;if(!U&&!(v&&v.propertyName in m))if(S){E();for(v=0;v<y;v++)K[v].Ab();for(v=0;v<y;v++){I=K[v];I.wb||I.Eb();I.U()&&I.nc()}L.Vb();C()}else R||q()}function o(){b(l,j)}function w(){c(l,j,g)}function x(){b(l,g);f.fb.V(z)}function z(){c(l,g);f.fb.Fa(z)}function D(){b(l,k)}function B(){c(l,k)}function H(){var v=event.propertyName;if(v==="className"||v==="id")t()}function E(){F.Za();for(var v=N.length;v--;)N[v].Za()}function C(){for(var v=N.length;v--;)N[v].bb();
F.bb()}function A(v,y,I){v.attachEvent(y,I);V.push([v,y,I])}function Q(){if(T){for(var v=V.length,y;v--;){y=V[v];y[0].detachEvent(y[1],y[2])}f.H.Fa(Q);T=0;V=[]}}function W(){if(!U){var v,y;Q();U=1;if(K){v=0;for(y=K.length;v<y;v++){K[v].Ub=1;K[v].n()}}P&&f.La.Fa(u);f.Na.Fa(u);K=F=G=N=l=null}}var K,L,F=new f.Kb(l),G,N,R,S,T,V=[],X,U,P;this.qd=q;this.update=u;this.n=W;this.dd=l}var e={},h=f.K+"lazy-init",i=f.K+"poll",j=f.Ja+"hover",g=f.Ja+"active",k=f.Ja+"focus",n=f.Ja+"first-child",m={background:1,
bgColor:1,display:1},r={},s=[];d.ld=function(l){var q=f.R.za(l);return e[q]||(e[q]=new d(l))};d.n=function(l){l=f.R.za(l);var q=e[l];if(q){q.n();delete e[l]}};d.Zc=function(){var l=[],q;if(e){for(var p in e)if(e.hasOwnProperty(p)){q=e[p];l.push(q.dd);q.n()}e={}}return l};return d}();f.version="1.0beta6-SNAPSHOT";f.supportsVML=f.lc;f.attach=function(a){if(f.fa===9||f.fa<9&&f.lc)f.db.ld(a).qd()};f.detach=function(a){f.db.n(a)}})(window,document);
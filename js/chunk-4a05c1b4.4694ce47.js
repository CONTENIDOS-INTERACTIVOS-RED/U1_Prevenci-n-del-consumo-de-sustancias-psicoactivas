(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a05c1b4"],{"0cb2":function(t,e,r){var n=r("7b0b"),a=Math.floor,i="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,r,l,s,u){var d=r+t.length,f=l.length,g=c;return void 0!==s&&(s=n(s),g=o),i.call(u,g,(function(n,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(d);case"<":o=s[i.slice(1,-1)];break;default:var c=+i;if(0===c)return n;if(c>f){var u=a(c/10);return 0===u?n:u<=f?void 0===l[u-1]?i.charAt(1):l[u-1]+i.charAt(1):n}o=l[c-1]}return void 0===o?"":o}))}},5319:function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),i=r("50c4"),o=r("a691"),c=r("1d80"),l=r("8aa5"),s=r("0cb2"),u=r("14c3"),d=Math.max,f=Math.min,g=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,r,n){var p=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,h=n.REPLACE_KEEPS_$0,v=p?"$":"$0";return[function(r,n){var a=c(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,a,n):e.call(String(a),r,n)},function(t,n){if(!p&&h||"string"===typeof n&&-1===n.indexOf(v)){var c=r(e,t,this,n);if(c.done)return c.value}var b=a(t),_=String(this),m="function"===typeof n;m||(n=String(n));var E=b.global;if(E){var x=b.unicode;b.lastIndex=0}var S=[];while(1){var $=u(b,_);if(null===$)break;if(S.push($),!E)break;var j=String($[0]);""===j&&(b.lastIndex=l(_,i(b.lastIndex),x))}for(var w="",I=0,A=0;A<S.length;A++){$=S[A];for(var M=String($[0]),P=d(f(o($.index),_.length),0),k=[],y=1;y<$.length;y++)k.push(g($[y]));var C=$.groups;if(m){var O=[M].concat(k,P,_);void 0!==C&&O.push(C);var D=String(n.apply(void 0,O))}else D=s(M,_,P,k,C,n);P>=I&&(w+=_.slice(I,P)+D,I=P+M.length)}return w+_.slice(I)}]}))},"7db0":function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").find,i=r("44d2"),o="find",c=!0;o in[]&&Array(1)[o]((function(){c=!1})),n({target:"Array",proto:!0,forced:c},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i(o)},a0e0:function(t,e,r){"use strict";var n=r("5530");r("d81d"),r("7db0"),r("d3b7"),r("4de4"),r("ac1f"),r("5319");e["a"]={data:function(){return{uid:Math.floor(Math.random()*Math.pow(10,10))}},methods:{dialogoMerge:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t.dialogo?t.dialogo.map((function(a,i){return Object(n["a"])(Object(n["a"])({},a),{},{id:e.uid+i+1,textoIng:r?e.splitPhrase(a.textoIng):a.textoIng,textoEsp:r?e.splitPhrase(a.textoEsp):a.textoEsp,personaje:t.personajes&&t.personajes.find((function(t){return t.nombre===a.personaje}))})})):[]},splitPhrase:function(t){return t.replace(/^\s+|\s+$/g,"&nbsp;").replace("***","___*___").split("___").filter(Boolean)}}}},e15e:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"dialogo__chat dialogo__chat--no-scroll p-4 me-0"},t._l(t.dialogoComputed,(function(t){return r("DialogoBurbuja",{key:"dialogo-item-"+t.id,staticClass:"mb-3",attrs:{dialogoItem:t}})})),1)},a=[],i=r("a0e0"),o={name:"Dialogo",mixins:[i["a"]],props:{dialogo:{type:Object,default:function(){return{}}}},computed:{dialogoComputed:function(){return this.dialogoMerge(this.dialogo)}}},c=o,l=r("2877"),s=Object(l["a"])(c,n,a,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-4a05c1b4.4694ce47.js.map
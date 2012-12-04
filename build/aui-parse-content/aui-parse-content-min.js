AUI.add("aui-parse-content",function(d){var l=d.Lang,c=l.isString,g=d.config.doc,n="append",a="documentElement",o="firstChild",j="head",m="host",f="innerHTML",h="ParseContent",e="queue",k="script",i="src";var b=d.Component.create({NAME:h,NS:h,ATTRS:{queue:{value:null}},EXTENDS:d.Plugin.Base,prototype:{initializer:function(){var p=this;b.superclass.initializer.apply(this,arguments);p.set(e,new d.AsyncQueue());p._bindAOP();},globalEval:function(r){var s=d.getDoc();var q=s.one(j)||s.get(a);var p=g.createElement(k);p.type="text/javascript";if(r){p.text=l.trim(r);}q.appendChild(p).remove();},parseContent:function(r){var p=this;var q=p._clean(r);p._dispatch(q);return q;},_bindAOP:function(){var q=this;var p=function(u){var t=Array.prototype.slice.call(arguments);var s=q.parseContent(u);t.splice(0,1,s.fragment);return new d.Do.AlterArgs(null,t);};this.doBefore("insert",p);this.doBefore("replaceChild",p);var r=function(t){var s=q.parseContent(t);return new d.Do.AlterArgs(null,[s.fragment]);};this.doBefore("replace",r);this.doBefore("setContent",r);},_clean:function(r){var p={};var q=d.Node.create("<div></div>");q.append("<div>_</div>");if(c(r)){d.DOM.addHTML(q,r,n);}else{q.append(r);}p.js=q.all(k).each(function(t,s){t.remove();});q.get(o).remove();p.fragment=q.get("childNodes").toFrag();return p;},_dispatch:function(r){var q=this;var p=q.get(e);r.js.each(function(t,s){var u=t.get(i);if(u){p.add({autoContinue:false,fn:function(){d.Get.script(u,{onEnd:function(v){v.purge();p.run();}});},timeout:0});}else{p.add({fn:function(){var v=t._node;q.globalEval(v.text||v.textContent||v.innerHTML||"");},timeout:0});}});p.run();}}});d.namespace("Plugin").ParseContent=b;},"@VERSION@",{skinnable:false,requires:["async-queue","aui-base","plugin"]});
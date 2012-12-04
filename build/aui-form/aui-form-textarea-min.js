AUI.add("aui-form-textarea",function(b){var f=b.Lang,c=b.getClassName,d=b.config.doc,l="textarea",i=c(l),e=[c(l,"height","monitor"),c("field","text","input"),c("helper","hidden","accessible")].join(" "),m="&nbsp;&nbsp;",j="&nbsp;\n&nbsp;",a='<pre class="'+e+'">',k="</pre>",h='<textarea autocomplete="off" class="{cssClass}" name="{name}"></textarea>';var g=b.Component.create({NAME:l,ATTRS:{autoSize:{value:true},height:{value:"auto"},maxHeight:{value:1000,setter:"_setAutoDimension"},minHeight:{value:45,setter:"_setAutoDimension"},width:{value:"auto",setter:"_setAutoDimension"}},HTML_PARSER:{node:"textarea"},EXTENDS:b.Textfield,prototype:{FIELD_TEMPLATE:h,renderUI:function(){var n=this;g.superclass.renderUI.call(n);if(n.get("autoSize")){n._renderHeightMonitor();}},bindUI:function(){var n=this;g.superclass.bindUI.call(n);if(n.get("autoSize")){n.get("node").on("keyup",n._onKeyup,n);}n.after("adjustSize",n._uiAutoSize);n.after("heightChange",n._afterHeightChange);n.after("widthChange",n._afterWidthChange);},syncUI:function(){var o=this;g.superclass.syncUI.call(o);o._setAutoDimension(o.get("minHeight"),"minHeight");o._setAutoDimension(o.get("maxHeight"),"maxHeight");var p=o.get("width");var n=o.get("minHeight");o._setAutoDimension(p,"width");o._uiSetDim("height",n);o._uiSetDim("width",p);},_afterHeightChange:function(o){var n=this;n._uiSetDim("height",o.newVal,o.prevVal);},_afterWidthChange:function(o){var n=this;n._uiSetDim("width",o.newVal,o.prevVal);},_onKeyup:function(o){var n=this;n.fire("adjustSize");},_renderHeightMonitor:function(){var o=this;var q=b.Node.create(a+k);var s=o.get("node");b.getBody().append(q);o._heightMonitor=q;var n=s.getComputedStyle("fontFamily");var t=s.getComputedStyle("fontSize");var p=s.getComputedStyle("fontWeight");var r=s.getComputedStyle("fontSize");s.setStyle("height",o.get("minHeight")+"px");q.setStyles({fontFamily:n,fontSize:t,fontWeight:p});if("outerHTML" in q.getDOM()){o._updateContent=o._updateOuterContent;}else{o._updateContent=o._updateInnerContent;}},_setAutoDimension:function(p,o){var n=this;n["_"+o]=p;},_uiAutoSize:function(){var o=this;var s=o.get("node");var p=o._heightMonitor;var t=o._minHeight;var r=o._maxHeight;var q=s.val();var u=d.createTextNode(q);p.set("innerHTML","");p.appendChild(u);p.setStyle("width",s.getComputedStyle("width"));q=p.get("innerHTML");if(!q.length){q=m;}else{q+=j;}o._updateContent(q);var n=Math.max(p.get("offsetHeight"),t);n=Math.min(n,r);if(n!=o._lastHeight){o._lastHeight=n;o._uiSetDim("height",n);}},_uiSetDim:function(p,o){var n=this;var q=n.get("node");if(f.isNumber(o)){o+="px";}q.setStyle(p,o);},_updateInnerContent:function(o){var n=this;return n._heightMonitor.set("innerHTML",o);},_updateOuterContent:function(o){var n=this;o=o.replace(/\n/g,"<br />");return n._updateInnerContent(o);}}});b.Textarea=g;},"@VERSION@",{requires:["aui-form-textfield"],skinnable:true});
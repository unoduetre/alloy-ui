/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.4.0
build: nightly
*/
YUI.add("widget-modality",function(b){var i="widget",o="host",n="renderUI",j="bindUI",p="syncUI",l="rendered",m="boundingBox",k="visible",f="zIndex",g="align",h="Change",c=b.Lang.isBoolean,e=b.ClassNameManager.getClassName,a=(function(){
/*! IS_POSITION_FIXED_SUPPORTED - Juriy Zaytsev (kangax) - http://yura.thinkweb2.com/cft/ */
var r=null,s,q;if(document.createElement){s=document.createElement("div");if(s&&s.style){s.style.position="fixed";s.style.top="10px";q=document.body;if(q&&q.appendChild&&q.removeChild){q.appendChild(s);r=(s.offsetTop===10);q.removeChild(s);}}}return r;}()),d;(function(){var t="widgetModal",s="modal",r="mask",q={modal:e(i,s),mask:e(i,r)};d=b.Base.create(t,b.Plugin.Base,[],{_maskNode:null,_uiHandles:null,initializer:function(u){this.afterHostMethod(n,this.renderUI);this.afterHostMethod(j,this.bindUI);this.afterHostMethod(p,this.syncUI);if(this.get(o).get(l)){this.renderUI();this.bindUI();this.syncUI();}},destructor:function(){if(this._maskNode){this._maskNode.remove(true);}this._detachUIHandles();this.get(o).get(m).removeClass(q.modal);},renderUI:function(){var v=this.get(o).get(m),u=v.get("parentNode")||b.one("body");this._maskNode=b.Node.create("<div></div>");this._maskNode.addClass(q.mask);this._maskNode.setStyles({position:a?"fixed":"absolute",width:"100%",height:"100%",top:"0",left:"0",display:"none"});u.insert(this._maskNode,u.get("firstChild"));v.addClass(q.modal);},bindUI:function(){this.afterHostEvent(k+h,this._afterHostVisibleChange);this.afterHostEvent(f+h,this._afterHostZIndexChange);},syncUI:function(){var u=this.get(o);this._uiSetHostVisible(u.get(k));this._uiSetHostZIndex(u.get(f));},_focus:function(){var v=this.get(o),w=v.get(m),u=w.get("tabIndex");w.set("tabIndex",u>=0?u:0);v.focus();w.set("tabIndex",u);},_blur:function(){this.get(o).blur();},_getMaskNode:function(){return this._maskNode;},_uiSetHostVisible:function(u){if(u){b.later(1,this,"_attachUIHandles");this._maskNode.setStyle("display","block");this._focus();}else{this._detachUIHandles();this._maskNode.setStyle("display","none");this._blur();}},_uiSetHostZIndex:function(u){this._maskNode.setStyle(f,u||0);},_attachUIHandles:function(v){if(this._uiHandles){return;}var u=this.get(o),w=u.get(m);this._uiHandles=[w.on("focusoutside",b.bind(this._focus,this))];if(!a){this._uiHandles.push(b.one("win").on("scroll",b.bind(function(y){var x=this._maskNode;x.setStyle("top",x.get("docScrollY"));},this)));}},_detachUIHandles:function(){b.each(this._uiHandles,function(u){u.detach();});this._uiHandles=null;},_afterHostVisibleChange:function(u){this._uiSetHostVisible(u.newVal);},_afterHostZIndexChange:function(u){this._uiSetHostZIndex(u.newVal);}},{NS:s,ATTRS:{maskNode:{getter:"_getMaskNode",readOnly:true}},CLASSES:q});}());},"3.4.0",{requires:["base-build","widget"]});
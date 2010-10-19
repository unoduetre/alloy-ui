AUI.add("aui-scheduler-view",function(B1){var CI=B1.Lang,CZ=CI.isObject,Bq=CI.isString,As=CI.isBoolean,Ae=CI.isNumber,BC=function(A){return A==0?0:(A<0?-1:1);},Ai=function(A,AM){return Math.max(Math.abs(A),AM)*BC(A);},Bd=function(A){return parseFloat(A)||0;},Bf=function(AM,A){return Math.round(AM/A)*A;},AP=B1.DataType.DateMath,Bx=B1.WidgetStdMod,Aj=AP.WEEK_LENGTH,Bh="scheduler-view",Ad="scheduler-view-day",B5="scheduler-view-week",CS="scheduler-view-month",Bc="activeView",A4="am",Ao="boundingBox",R="children",BU="childNodes",AE="col",g="colblank",Z="coldata",Ag="colday",BP="colmonth",B="colgrid",u="colspan",BY="navigationDateFormat",N="coltime",AV="colDaysNode",B3="colHeaderDaysNode",Am="container",CP="contentBox",AT="createDocumentFragment",A9="currentDate",A8="dateFormat",CF="day",s="days",BH="division",AY="endDate",Bv="events",Af="first",B6="firstDayOfWeek",A6="grid",Ca="hd",Bz="header",CW="headerTableNode",Ac="hourHeight",AI="isoTime",BD="labelAM",Aa="labelPM",Ap="left",AW="locale",AA="marker",A2="markercell",Av="markercellsNode",Bi="markercellNode",j="markers",Bg="nextDate",Cc="node",By="offsetHeight",CD="ownerDocument",B2="pad",p="parentNode",AL="pm",y="prevDate",AF="px",Aq="rendered",Aw="right",S="scheduler",Ab="scheduler-event",w="scrollable",r="shim",B4="startDate",Ar="table",CQ="tableColNode",BS="tableNode",Br="tableTimeNode",BJ="time",AG="timesNode",AJ="today",BN="top",CX="tr",CL="week",BW="width",B9="borderRightWidth",V="borderLeftWidth",CN="columnNode",BO="proxy",B7="dragNode",H="title",An="host",i="offsetTop",B0="offsetWidth",CK="parentEvent",Ak="content",Ba="month",A7="headerDateFormat",A5="monthContainerNode",BM="row",Bk="height",c="tableGridNode",v="div",AQ="noscroll",BV="data",K="tableDataNode",BQ="tbody",AH="nomonth",A0="event",Al="next",z="down",F="td",Bw="repeated",W="icon",T="eventWidth",Cb="eventRecorder",Bp="duration",Be="-",L="a",Bj=".",Bb="",BX="%",t=" ",d=B1.ClassNameManager.getClassName,BI=d(Bh,AQ),AB=d(Bh,w);var Au=B1.Component.create({NAME:Bh,ATTRS:{bodyContent:{value:Bb},height:{value:600},name:{value:Bb,validator:Bq},navigationDateFormat:{value:"%A - %d %b %Y",validator:Bq},nextDate:{getter:"getNextDate",readOnly:true},prevDate:{getter:"getPrevDate",readOnly:true},scheduler:{lazyAdd:false,setter:"_setScheduler"},scrollable:{value:true,validator:As},triggerNode:{setter:B1.one},visible:{value:false}},BIND_UI_ATTRS:[w],prototype:{initializer:function(){var A=this;A.after("render",A._afterRender);},syncUI:function(){var A=this;A.syncStdContent();},adjustCurrentDate:function(){var A=this;var Cd=A.get(S);var AM=Cd.get(A9);Cd.set(A9,AM);},flushViewCache:function(){},getNextDate:function(){},getPrevDate:function(){},getToday:function(){return AP.clearTime(new Date());},limitDate:function(AM,Cd){var A=this;if(AP.after(AM,Cd)){AM=AP.clone(Cd);}return AM;},plotEvents:function(A){},syncStdContent:function(){},syncEventUI:function(A){},_uiSetCurrentDate:function(A){},_afterRender:function(Cd){var A=this;var AM=A.get(S);A.adjustCurrentDate();A._uiSetScrollable(A.get(w));},_setScheduler:function(Cd){var A=this;var AM=A.get(S);if(AM){A.removeTarget(AM);}if(Cd){A.addTarget(Cd);Cd.after("eventsChange",B1.bind(A.flushViewCache,A));}return Cd;},_uiSetScrollable:function(Cd){var A=this;var AM=A.bodyNode;if(AM){AM.toggleClass(AB,Cd);AM.toggleClass(BI,!Cd);}},_uiSetVisible:function(AM){var A=this;Au.superclass._uiSetVisible.apply(this,arguments);if(AM&&A.get(Aq)){A.adjustCurrentDate();}}}});B1.SchedulerView=B1.Base.create(Bh,Au,[B1.WidgetStdMod]);var m=function(A,AM){return function(Ce){var Cd=Ce.all(A);return(Cd.size()>=AM)?Cd:null;};},Ah=d(Ab),Bm=d(Ab,BO),a=d(Bh,Z),D=d(Bh,B),o=d(S,AJ),AO=d(S,AJ,Ca),CA=d(Bh,A6),CB=d(Bh,A6,Am),CE=d(Bh,A2),k=d(Bh,j),BG=d(Bh,AA,BH),BT=d(Bh,Ar),CH=d(Bh,CF,Bz,Ar),U=d(Bh,CF,Bz,CF),BF=d(Bh,CF,Bz,CF,B2,Aw),Bo=d(Bh,CF,Bz,CF,Af),Az=d(Bh,CF,Bz,AE),CU=d(Bh,Ar,AE),AZ=d(Bh,Ar,AE,r),n=d(Bh,Ar,g),f=d(Bh,Ar,Ag),O=d(Bh,Ar,Ag,Bz),CM=d(Bh,Ar,N),BL=d(Bh,Ar,BJ),AC='<div class="'+CE+'">'+'<div class="'+BG+'"></div>'+"</div>",AS='<table class="'+BT+'">'+"<tbody>"+'<tr class="'+D+'" height="1">'+'<td height="0" class="'+[CU,n].join(t)+'"></td>'+'<td class="'+CB+'" colspan="1">'+'<div class="'+CA+'">'+'<div class="'+k+'"></div>'+"</div>"+"</td>"+"</tr>"+'<tr class="'+a+'">'+'<td class="'+[CU,CM].join(t)+'"></td>'+"</tr>"+"</tbody>"+"</table>",BB='<td class="'+[CU,f].join(t)+'">'+'<div class="'+AZ+'"></div>'+"</td>",J='<div class="'+BL+'">{hour}</div>',AU='<table class="'+CH+'">'+"<tbody>"+'<tr class="'+Az+'"></tr>'+"</tbody>"+"</table>",BE='<th class="'+U+'"><a href="#">&nbsp;</a></th>',AR='<td class="'+[U,Bo].join(t)+'"></td>',X='<th class="'+[U,BF].join(t)+'">&nbsp;</th>';var CV=B1.Component.create({NAME:Ad,ATTRS:{bodyContent:{value:Bb},days:{value:1,validator:Ae},headerDateFormat:{value:"%a %d/%m",validator:Bq},isoTime:{value:false,validator:As},name:{value:CF},hourHeight:{value:52,validator:Ae},eventWidth:{value:95,validator:Ae},headerTableNode:{valueFn:function(){return B1.Node.create(AU);}},tableNode:{valueFn:function(){return B1.Node.create(AS);}},colDaysNode:{valueFn:"_valueColDaysNode"},colHeaderDaysNode:{valueFn:"_valueColHeaderDaysNode"},markercellsNode:{valueFn:"_valueMarkercellsNode"},timesNode:{valueFn:"_valueTimesNode"}},HTML_PARSER:{colHeaderDaysNode:m(Bj+U,2),colDaysNode:m(Bj+f,1),markercellsNode:m(Bj+CE,24),timesNode:m(Bj+BL,24),headerTableNode:Bj+CH,tableNode:Bj+BT},EXTENDS:B1.SchedulerView,prototype:{initializer:function(){var A=this;A.colDaysNode=A.get(AV);A.colHeaderDaysNode=A.get(B3);A.headerTableNode=A.get(CW);A.markercellsNode=A.get(Av);A.tableNode=A.get(BS);A.timesNode=A.get(AG);A.colShimNodes=A.colDaysNode.all(Bj+AZ);A.colDataNode=A.tableNode.one(Bj+a);A.colTimeNode=A.tableNode.one(Bj+CM);A.dayHeaderColNode=A.headerTableNode.one(Bj+Az);A.gridContainer=A.tableNode.one(Bj+CB);A.markersNode=A.tableNode.one(Bj+k);},renderUI:function(){var A=this;A.colTimeNode.setContent(A.timesNode);A.markersNode.setContent(A.markercellsNode);A.colDaysNode.appendTo(A.colDataNode);
A.colHeaderDaysNode.appendTo(A.dayHeaderColNode);},bindUI:function(){var A=this;A.headerTableNode.delegate("click",B1.bind(A._onClickDaysHeader,A),Bj+U);A.colDataNode.delegate("click",B1.bind(A._onClickTableCol,A),Bj+CU);A.colDataNode.delegate("mousedown",B1.bind(A._onMouseDownTableCol,A),Bj+CU);A.colDataNode.delegate("mouseup",B1.bind(A._onMouseUpTableCol,A),Bj+CU);A.colDataNode.delegate("mousemove",B1.bind(A._onMouseMoveTableCol,A),Bj+CU);A.on("drag:end",A._onEventDragEnd);A.on("drag:start",A._onEventDragStart);A.on("drag:align",A._dragAlign);A.on("drag:tickAlignX",A._dragTickAlignX);A.on("drag:tickAlignY",A._dragTickAlignY);},syncUI:function(){var A=this;CV.superclass.syncUI.apply(this,arguments);A.gridContainer.attr(u,A.get(s));A._setupDragDrop();},syncStdContent:function(){var A=this;A.setStdModContent(Bx.BODY,A.tableNode.getDOM());A.setStdModContent(Bx.HEADER,A.headerTableNode.getDOM());},calculateTopByDate:function(Ce){var AM=this;var A=AM.get(Ac);var Cd=Ce.getHours();var Cf=Ce.getMinutes();var Cg=Ce.getSeconds();return((Cd*60)+Cf+(Cg/60))*(A/60);},calculateHoursByTop:function(Cf){var AM=this;var A=AM.get(Ac);var Ch=Bd((Cf/A).toFixed(2));var Cg=0;var Ce=Math.floor((Ch*100)%100*0.6);var Cd=Math.floor(Ch);return[Cd,Ce,Cg];},getNextDate:function(){var A=this;var Cd=A.get(S);var AM=Cd.get(A9);return AP.add(AM,AP.DAY,1);},getPrevDate:function(){var A=this;var Cd=A.get(S);var AM=Cd.get(A9);return AP.subtract(AM,AP.DAY,1);},getColumnByDate:function(Cd){var A=this;var Ce=A.get(S);var AM=AP.safeClearTime(Ce.get(A9));var Cf=AP.getDayOffset(AP.safeClearTime(Cd),AM);return A.colDaysNode.item(Cf);},getDateByColumn:function(Cd){var A=this;var Ce=A.get(S);var AM=AP.safeClearTime(Ce.get(A9));return AP.add(AM,AP.DAY,Cd);},plotEvents:function(Cd){var A=this;var AM=A.get(S);A.colShimNodes.each(function(Ch,Cg){var Cf=A.getDateByColumn(Cg);var Ce=AM.getEventsByDay(Cf);Ch.empty();B1.Array.each(Ce,function(Ci,Cj){if(!Ci.isDayOverlapEvent()){Ch.append(Ci.get(Cc));Ci.set(CN,Ch.get(p));A.syncEventTopUI(Ci);A.syncEventHeightUI(Ci);}});A.syncEventsIntersectionUI(Ce);});},syncColumnsUI:function(){var A=this;A.colDaysNode.each(function(Ce,Cd){var AM=A.getDateByColumn(Cd);Ce.toggleClass(o,AP.isToday(AM));});},syncDaysHeaderUI:function(){var Cd=this;var Cf=Cd.get(S);var Ce=Cf.get(A9);var AM=Cd.get(A7);var A=Cd.get(AW);Cd.colHeaderDaysNode.all(L).each(function(Ci,Ch){var Cg=AP.add(Ce,AP.DAY,Ch);var Cj=B1.DataType.Date.format(Cg,{format:AM,locale:A});Ci.toggleClass(AO,AP.isToday(Cg));Ci.html(Cj);});},syncEventsIntersectionUI:function(AM){var A=this;var Cd=A.get(S);var Ce=A.get(T);Cd.flushEvents();B1.Array.each(AM,function(Cg,Ch){var Cj=A.findEventIntersections(Cg,AM);var Ci=Cj.length;var Cf=(Ce/Ci);B1.Array.each(Cj,function(Cl,Cm){var Ck=Cl.get(Cc);var Co=Cf*Cm;var Cn=Cf*1.7;if(Cm==(Ci-1)){Cn=Ce-Co;}Ck.setStyle(BW,Cn+BX);Ck.setStyle(Ap,Co+BX);var Cp=Ck.get(p);if(Cp){Cp.insert(Ck,Cm);}Cl._filtered=true;});});},syncEventHeightUI:function(Cd){var AM=this;var A=AM.get(Ac);var Cf=AM.calculateTopByDate(Cd.get(B4));var Ce=AM.calculateTopByDate(Cd.get(AY));Cd.get(Cc).set(By,Math.max(Ce-Cf,A/2));},syncEventRecorderUI:function(Ce){var A=this;var Cd=A.get(S);var Cf=Cd.get(Cb);var AM=Cf.get(Cc);if(Ce&&!AM.inDoc()){Ce.append(AM);}A.syncEventTopUI(Cf);A.syncEventHeightUI(Cf);},syncEventTopUI:function(Cd){var AM=this;var A=Cd.get(Cc);var Ce=AM.calculateTopByDate(Cd.get(B4));A.setStyle(BN,Ce+AF);},findEventIntersections:function(AM,Cd){var A=this;var Ce=[];B1.Array.each(Cd,function(Cg,Cf){if(!AM._filtered&&!Cg.isDayOverlapEvent()&&AM.intersectHours(Cg)){Ce.push(Cg);}});return Ce;},_createEvents:function(){var A=this;var AM=function(Cd,Ce){A.publish(Cd,{defaultFn:Ce,queuable:false,emitFacade:true,bubbles:true,prefix:Bh});};},_dragTickAlignX:function(AM){var Ck=this;var Cl=AM.target.get(An);var Cm=Ck._getColumnRefWidth();var Cf=Cl.get(Cc);var Ci=Ck.proxyEvt;var Cj=Cf.getData(Ab);var Cd=Math.floor(Cl.actXY[0]/Cm);var Ch=Ck.colDaysNode.item(Cd);var Cg=Ck.getDateByColumn(Cd);var A=AP.clone(Cg);var Ce=AP.clone(Cg);AP.copyHours(Ce,Ci.get(AY));AP.copyHours(A,Ci.get(B4));Ci.set(AY,Ce);Ci.set(B4,A);},_dragTickAlignY:function(Cd){var Ci=this;var Cj=Cd.target.get(An);var Cf=Cj.get(Cc);var Cg=Ci.proxyEvt;var Ch=Cf.getData(Ab);var AM=AP.clone(Cg.get(B4));var A=Ci.calculateHoursByTop(Bd(Cj.get(B7).getComputedStyle(BN)));Ci._setTickedHours(AM,A);var Ce=AP.clone(AM);Cg.set(AY,AP.add(Ce,AP.MINUTES,Ci._currentEvtDuration));Cg.set(B4,AM);Cg.syncNodeTitleUI();},_getXYDelta:function(AM){var A=this;var Ce=AM.currentTarget;var Cd=Ce.getXY(),Cf=[AM.pageX,AM.pageY];return B1.Array.map(Cd,function(Ch,Cg){return(Cf[Cg]-Ch);});},_getTickY:function(){var A=this;return Bf(Math.ceil(A.get(Ac)/2),10);},_getColumnRefWidth:function(){var A=this;var AM=A.colDaysNode.item(0);return Bd(AM.getStyle(BW))-Bd(AM.getStyle(B9))-Bd(AM.getStyle(V));},_setupDragDrop:function(){var Cd=this;var Ce=Cd.get(Ao);if(!Cd.proxyEvt){var Cf=Cd.get(S);Cd.proxyEvt=new B1.SchedulerEvent({scheduler:Cf});Cd.proxyEvt.removeTarget(Cf);Cd.proxyEvt.get(Cc).addClass(Bm);}if(!Cd.delegate){Cd.delegate=new B1.DD.Delegate({bubbleTargets:Cd,container:Ce,nodes:Bj+Ah});}var AM=Cd.delegate.dd;var Cg=Cd.proxyEvt;var Ch=Cd.get(Ac)/2;var A=Cd._getColumnRefWidth();AM.unplug(B1.Plugin.DDConstrained);AM.unplug(B1.Plugin.DDNodeScroll);AM.plug(B1.Plugin.DDConstrained,{bubbleTargets:Cd,constrain:Cd.bodyNode,tickX:A,tickY:Ch});AM.plug(B1.Plugin.DDNodeScroll,{node:Cd.bodyNode,scrollDelay:150});},_uiSetCurrentDate:function(AM){var A=this;A.syncColumnsUI();A.syncDaysHeaderUI();},_onClickDaysHeader:function(Ce){var A=this;var Cd=A.get(S);if(Ce.target.test(L)){var Cf=Cd.getViewByName(CF);var AM=A.colHeaderDaysNode.indexOf(Ce.currentTarget)-1;if(Cf){Cd.set(A9,A.getDateByColumn(AM));Cd.set(Bc,Cf);}}Ce.preventDefault();},_onClickTableCol:function(Cd){var A=this;var AM=A.get(S);var Ce=AM.get(Cb);},_onEventDragEnd:function(A){var Ci=this;var Cf=Ci.get(S);var Ce=Ci.get(Ao);var Cj=Ci.delegate.dd;var Cd=Cj.get(Cc);var Cg=Ci.proxyEvt;
var AM=Cg.get(Cc);var Ch=Cd.getData(Ab);Cd.show();AM.hide();Ce.selectable();Ch.copyDates(Cg);Cf.syncEventsUI();},_onEventDragStart:function(A){var Ci=this;var Cf=Ci.get(Ao);var Cj=Ci.delegate.dd;var Ce=Cj.get(Cc);var Cg=Ci.proxyEvt;var Ch=Ce.getData(Ab);var Cd=Bd(Ce.getComputedStyle(Ap));if(Cd){Cj.deltaXY[0]=(Cd+Bd(Cj.deltaXY[0]));}if(Ch){var Ck=Ch.get(CN);var AM=Cg.get(Cc);Cj.set(B7,AM);Ck.append(AM);Cg.copyDates(Ch);Cg.set(Ak,Ch.get(Ak));Ci.syncEventTopUI(Cg);Ci.syncEventHeightUI(Cg);AM.show();Ci._currentEvtDuration=Ch.getMinutesDuration();}Ce.hide();Cf.unselectable();},_onMouseDownTableCol:function(Ce){var A=this;var Cd=A.get(S);var Cf=Cd.get(Cb);if(Cf){Cf.hideOverlay();if(Ce.target.test(Bj+AZ)){var AM=A.colDaysNode.indexOf(Ce.currentTarget);A.dragXY=A.startXY=A._getXYDelta(Ce);A.ddStartDate=A.getDateByColumn(AM);A.ddEndDate=AP.clone(A.ddStartDate);A._setTickedHours(A.ddStartDate,A.calculateHoursByTop(A.startXY[1]));A.ddMaxDate=AP.clone(A.ddStartDate);A.ddMaxDate.setHours(23,59,59);Cf.set(B4,A.ddStartDate);Cf.set(AY,A.limitDate(Cf.get(AY),A.ddMaxDate));Ce.halt();}}},_onMouseMoveTableCol:function(Cf){var A=this;var Ce=A.get(S);var Ci=Ce.get(Cb);var Cg=A.ddStartDate;if(Cg){A.dragXY=A._getXYDelta(Cf);A._setTickedHours(A.ddEndDate,A.calculateHoursByTop(A.dragXY[1]));var Ch=AP.getMinutesOffset(A.ddEndDate,Cg);if((A.dragXY[1]-A.startXY[1])>0){Ch=Ai(Ch,Ci.get(Bp));}var AM=A.limitDate(AP.add(Cg,AP.MINUTES,Ch),A.ddMaxDate);if(Ch>0){Ci.set(AY,AM);}else{var Cd=Ci.get(AY);Ci.set(B4,AM);Ci.set(AY,Cd);}A.syncEventRecorderUI(Cf.currentTarget);}},_onMouseUpTableCol:function(Cd){var A=this;var AM=A.get(S);var Ce=AM.get(Cb);if(Ce){if(A.ddStartDate){A.syncEventRecorderUI(Cd.currentTarget);Ce.showOverlay();}A.ddEndDate=null;A.ddStartDate=null;}},_setTickedHours:function(AM,Cd){var A=this;AM.setHours(Cd[0],Bf(Cd[1],A._getTickY()),Cd[2]);},_valueColDaysNode:function(){var A=this;var Cd=A.get(s);var AM=[];while(Cd--){AM.push(BB);}return B1.NodeList.create(AM.join(Bb));},_valueColHeaderDaysNode:function(){var A=this;var Cd=A.get(s);var AM=[];AM.push(AR);while(Cd--){AM.push(BE);}AM.push(X);return B1.NodeList.create(AM.join(Bb));},_valueMarkercellsNode:function(){var A=this;var AM=[];for(var Cd=0;Cd<=23;Cd++){AM.push(AC);}return B1.NodeList.create(AM.join(Bb));},_valueTimesNode:function(){var A=this;var Ce=A.get(AI);var Cd=[];for(var AM=0;AM<=23;AM++){Cd.push(B1.substitute(J,{hour:Ce?AP.toIsoTimeString(AM):AP.toUsTimeString(AM,false,true)}));}return B1.NodeList.create(Cd.join(Bb));}}});B1.SchedulerDayView=CV;var AK=B1.Component.create({NAME:B5,ATTRS:{bodyContent:{value:Bb},days:{value:7},name:{value:CL}},EXTENDS:B1.SchedulerDayView,prototype:{adjustCurrentDate:function(){var A=this;var Ce=A.get(S);var AM=Ce.get(A9);var Cd=Ce.get(B6);Ce.set(A9,AP.getFirstDayOfWeek(AM,Cd));},getNextDate:function(){var A=this;var Cd=A.get(S);var AM=Cd.get(A9);var Ce=A._firstDayOfWeek(AM);return AP.add(Ce,AP.WEEK,1);},getPrevDate:function(){var A=this;var Cd=A.get(S);var AM=Cd.get(A9);var Ce=A._firstDayOfWeek(AM);return AP.subtract(Ce,AP.WEEK,1);},getToday:function(){var A=this;var AM=AK.superclass.getToday.apply(this,arguments);return A._firstDayOfWeek(AM);},_firstDayOfWeek:function(Cd){var A=this;var Ce=A.get(S);var AM=Ce.get(B6);return AP.getFirstDayOfWeek(Cd,AM);}}});B1.SchedulerWeekView=AK;var I=d(Bh,Ba,Am),A1=d(Bh,Ba,Bz,AE),Y=d(Bh,Ba,Bz,CF),CR=d(Bh,Ba,Bz,Ar),Bt=d(Bh,Ba,BM),AN=d(Bh,Ba,BM,Am),G=d(W),M=d(W,"arrowstop-1-l"),CO=d(W,"arrowstop-1-r"),Bu=d(Bh,Ba,B),C=d(Bh,Ba,B,AJ),P=d(Bh,Ba,B,Af),BZ=d(Bh,Ba,Ar,BV),Ax=d(Bh,Ba,Ar,BV,Af),Bs=d(Bh,Ba,Ar,BV,AE),B8=d(Bh,Ba,Ar,BV,AE,Af),Ay=d(Bh,Ba,Ar,BV,AE,AH),At=d(Bh,Ba,Ar,BV,AE,H),q=d(Bh,Ba,Ar,BV,AE,H,AJ),AD=d(Bh,Ba,Ar,BV,AE,H,Af),b=d(Bh,Ba,Ar,BV,AE,H,Al),CT=d(Bh,Ba,Ar,BV,AE,H,z),BK=d(Bh,Ba,Ar,BV,A0),E=d(Bh,Ba,Ar,BV,A0,Ap),Bl=d(Bh,Ba,Ar,BV,A0,Aw),Q=d(Bh,Ba,Ar,BV,A0,Bw),BA=d(Bh,Ba,Ar,A6),CJ=d(Bh,Ba,Ar,A6,Af),CY=d(Bh,Ar,BP,Bz),e='<table class="'+CR+'">'+"<tbody>"+'<tr class="'+A1+'"></tr>'+"</tbody>"+"</table>",l='<th class="'+Y+'"><div>&nbsp;</div></th>',CG='<div class="'+I+'">'+'<div class="'+AN+'">'+'<div class="'+Bt+'" style="top: 0; height: 16.6667%;"></div>'+'<div class="'+Bt+'" style="top: 16.6667%; height: 16.6667%;"></div>'+'<div class="'+Bt+'" style="top: 33.3333%; height: 16.6667%;"></div>'+'<div class="'+Bt+'" style="top: 50%; height: 16.6667%;"></div>'+'<div class="'+Bt+'" style="top: 66.6667%; height: 16.6667%;"></div>'+'<div class="'+Bt+'" style="top: 83.3333%; height: 16.6667%;"></div>'+"</div>"+"</div>",BR='<table cellspacing="0" cellpadding="0" class="'+BA+'">'+"<tbody>"+"<tr>"+'<td class="'+[Bu,P].join(t)+'">&nbsp;</td>'+'<td class="'+Bu+'">&nbsp;</td>'+'<td class="'+Bu+'">&nbsp;</td>'+'<td class="'+Bu+'">&nbsp;</td>'+'<td class="'+Bu+'">&nbsp;</td>'+'<td class="'+Bu+'">&nbsp;</td>'+'<td class="'+Bu+'">&nbsp;</td>'+"</tr>"+"</tbody>"+"</table>",Bn='<table cellspacing="0" cellpadding="0" class="'+BZ+'">'+"<tbody></tbody>"+"</table>",CC="<tr></tr>",A3='<td class="'+Bs+'"><div></div></td>',x='<span class="'+[G,M].join(t)+'"></span>',h='<span class="'+[G,CO].join(t)+'"></span>';var AX=B1.Component.create({NAME:CS,ATTRS:{bodyContent:{value:Bb},name:{value:Ba},headerDateFormat:{value:"%a"},navigationDateFormat:{value:"%b %Y"},scrollable:{value:false},monthContainerNode:{valueFn:function(){return B1.Node.create(CG);}},headerTableNode:{valueFn:function(){return B1.Node.create(e);}},colHeaderDaysNode:{valueFn:"_valueColHeaderDaysNode"},tableGridNode:{valueFn:"_valueTableGridNode"}},HTML_PARSER:{tableGridNode:m(Bj+BA,7),colHeaderDaysNode:m(Bj+Y,7),monthContainerNode:Bj+I,headerTableNode:Bj+CR},EXTENDS:B1.SchedulerView,prototype:{evtDateStack:null,evtDataTableStack:null,initializer:function(){var A=this;var AM=A.get(S);A.evtDateStack={};A.evtDataTableStack={};A.colHeaderDaysNode=A.get(B3);A.headerTableNode=A.get(CW);A.monthContainerNode=A.get(A5);A.tableGridNode=A.get(c);A.dayHeaderColNode=A.headerTableNode.one(Bj+A1);A.monthRows=A.monthContainerNode.all(Bj+Bt);A.tableGridCols=A.tableGridNode.all(F);
},renderUI:function(){var A=this;A.colHeaderDaysNode.appendTo(A.dayHeaderColNode);A.monthRows.each(function(Ce,Cd){var AM=A.tableGridNode.item(Cd);Ce.append(AM.toggleClass(CJ,(Cd==0)));});},buildEventsTable:function(AM,Ch){var Cn=this;var Ck=5;var Ce=AP.clearTime(Cn._findCurrentMonthEnd());var Cm=AP.clearTime(Cn._findCurrentMonthStart());var Cj=String(Cm.getTime()).concat(AM.getTime()).concat(Ch.getTime());var Ci=Cn.evtDataTableStack[Cj];if(!Ci){Ci=B1.Node.create(Bn);var Cl=Ci.one(BQ);var Cf=B1.Node.create(CC);Cn.loopDates(AM,Ch,function(Cp,Co){var Cq=B1.Node.create(A3);Cq.addClass(At).toggleClass(AD,(Co==0)).toggleClass(q,AP.isToday(Cp)).toggleClass(b,AP.isToday(AP.subtract(Cp,AP.DAY,1))).toggleClass(CT,AP.isToday(AP.subtract(Cp,AP.WEEK,1)));if(AP.before(Cp,Cm)||AP.after(Cp,Ce)){Cq.addClass(Ay);}Cf.append(Cq.setContent(Cp.getDate()));});Cl.append(Cf);for(var A=0;A<Ck;A++){var Cg=0;var Cd=B1.Node.create(CC);Cn.loopDates(AM,Ch,function(Ct,Cr){if(Cg<=Cr){var Cs=Cn.getIntersectEvents(Ct),Cp=Cs[A];var Cu=B1.Node.create(A3);if(Cp){var Co=Cu.one(v);var Cq=Cn._getEvtSplitInfo(Cp,AM,Ch);Cu.attr(u,Cq.colspan);Co.addClass(BK).setContent(Cn._getEvtLabel(Cp));if(Cq.left){Co.addClass(E).prepend(x);}if(Cq.right){Co.addClass(Bl).append(h);}if(Cp.get(CK)){Co.addClass(Q);}Cg+=Cq.colspan;}else{Cg++;}Cd.append(Cu);}});Cl.append(Cd);}Cn.evtDataTableStack[Cj]=Ci;}return Ci;},flushViewCache:function(){var A=this;A.evtDateStack={};A.evtDataTableStack={};},getIntersectEvents:function(AM){var A=this;var Ce=A.get(S);var Cd=String(AM.getTime());if(!A.evtDateStack[Cd]){A.evtDateStack[Cd]=Ce.getIntersectEvents(AM);}return A.evtDateStack[Cd];},loopDates:function(A,Ce,Ch,Ci,Cg){var Cj=this;var AM=AP.clone(A);var Cd=Ce.getTime();for(var Cf=0;AM.getTime()<=Cd;Cf++){Ch.apply(Cj,[AM,Cf]);AM=AP.add(AM,(Ci||AP.DAY),(Cg||1));}},plotEvents:function(){var AM=this;var Cd=AM._findCurrentMonthStart();var A=AP.safeClearTime(AM._findFirstDayOfWeek(Cd));AM.bodyNode.all(Bj+BZ).remove();AM.monthRows.each(function(Ch,Cf){var Ce=AP.add(A,AP.WEEK,Cf);var Ci=AP.add(Ce,AP.DAY,Aj-1);var Cg=AM.buildEventsTable(Ce,Ci);if(Cf==0){Cg.addClass(Ax);}Ch.append(Cg);});},syncStdContent:function(){var A=this;A.setStdModContent(Bx.BODY,A.monthContainerNode.getDOM());A.setStdModContent(Bx.HEADER,A.headerTableNode.getDOM());},syncGridUI:function(){var Cj=this;var Cd=Cj.getToday();var AM=Cj.get(S);Cj.tableGridCols.removeClass(C);if(AP.isSameMonth(Cd,AM.get(A9))){var A=AM.get(B6);var Cd=Cj.getToday();var Cf=Cj._findCurrentMonthStart();var Ch=Cj._findFirstDayOfWeek(Cd);var Ce=AP.getWeekNumber(Cd,A)-AP.getWeekNumber(Cf,A);var Ci=(Cd.getDate()-Ch.getDate());var Cg=Cj.tableGridNode.item(Ce).all(F).item(Ci);if(Cg){Cg.addClass(C);}}},adjustCurrentDate:function(){var A=this;var AM=A.get(S);AM.set(A9,A._findCurrentMonthStart());},getNextDate:function(){var A=this;var Cd=A.get(S);var AM=Cd.get(A9);return AP.add(AM,AP.MONTH,1);},getPrevDate:function(){var A=this;var Cd=A.get(S);var AM=Cd.get(A9);return AP.subtract(AM,AP.MONTH,1);},syncDaysHeaderUI:function(){var Cd=this;var Cg=Cd.get(S);var Ce=Cg.get(A9);var AM=Cd.get(A7);var A=Cd.get(AW);var Cf=Cd._findFirstDayOfWeek(Ce);Cd.colHeaderDaysNode.all(v).each(function(Cj,Ci){var Ch=AP.add(Cf,AP.DAY,Ci);var Ck=B1.DataType.Date.format(Ch,{format:AM,locale:A});Cj.html(Ck);});},_findCurrentMonthEnd:function(){var A=this;var Cd=A.get(S);var AM=Cd.get(A9);return AP.findMonthEnd(AM);},_findCurrentMonthStart:function(){var A=this;var Cd=A.get(S);var AM=Cd.get(A9);return AP.findMonthStart(AM);},_findFirstDayOfWeek:function(Cd){var A=this;var Ce=A.get(S);var AM=Ce.get(B6);return AP.getFirstDayOfWeek(Cd,AM);},_getEvtLabel:function(Cd){var AM=this;var Ce=Cd.get(AY);var A=Cd.get(B4);return[A.getHours(),Be,Ce.getHours(),t,Cd.get(Ak)].join(Bb);},_getEvtSplitInfo:function(Ci,A,Cg){var Cj=this;var AM=Ci.getClearStartDate();var Ch=Ci.getClearEndDate();var Cf=Ci.getDaysDuration();var Ce={};var Cd=1;if(AP.after(AM,A)){Cd=Math.min(Cf,Math.abs(AP.getDayOffset(Cg,AM))+1);if(Cd>1){Ce.right=true;}}else{Cd=Math.abs(AP.getDayOffset(Ch,A)+1);if(Cd>1){Ce.left=true;}}Ce.colspan=Math.min(Cd,Aj);if(Cd>=Aj){Ce.right=true;Ce.left=true;}return Ce;},_uiSetCurrentDate:function(AM){var A=this;A.syncDaysHeaderUI();A.syncGridUI();},_valueColHeaderDaysNode:function(){var A=this;return A._valueNodeList(Aj,l);},_valueTableGridNode:function(){var A=this;return A._valueNodeList(Aj,BR);},_valueNodeList:function(Ce,Cd){var A=this;var AM=[];while(Ce--){AM.push(Cd);}return B1.NodeList.create(AM.join(Bb));}}});B1.SchedulerMonthView=AX;},"@VERSION@",{requires:["aui-scheduler-event","aui-calendar","aui-button-item","substitute","dd-drag","dd-delegate","dd-drop"],skinnable:true});
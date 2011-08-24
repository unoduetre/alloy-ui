AUI.add("aui-task-manager",function(b){var e=b.Lang,c=e.now,f=b.Object.isEmpty,d=b.Array;var a={clearInterval:function(h){var g=a;g.unregister(true,h);},clearTimeout:function(h){var g=a;g.unregister(false,h);},intervalTime:function(h){var g=this;if(arguments.length){g._INTERVAL=h;}return g._INTERVAL;},isRepeatable:function(h){var g=a;return h.repeats;},setTimeout:function(k,i,j){var g=a;var h=d(arguments,3,true);return g.register(false,k,i,j,h);},setInterval:function(k,i,j){var g=a;var h=d(arguments,3,true);return g.register(true,k,i,j,h);},register:function(h,l,j,k,i){var g=a;var m=(++b.Env._uidx);i=i||[];i.unshift(l,k);g._TASKS[m]=g._create(h,g._getNearestInterval(j),b.rbind.apply(b,i));g._lazyInit();return m;},run:function(h){var g=this;h.lastRunTime=c();return h.fn();},unregister:function(h,k){var g=a;var j=g._TASKS;var i=j[k];g._lazyDestroy();return i&&i.repeats===h&&delete j[k];},_create:function(h,i,j){var g=a;return{fn:j,lastRunTime:c(),next:i,repeats:h,timeout:i};},_decrementNextRunTime:function(h){var g=a;return h.next=h.timeout-(c()-h.lastRunTime);},_getNearestInterval:function(i){var g=a;var h=g._INTERVAL;var k=i%h;var j;if(k<h/2){j=i-k;}else{j=i+h-k;}return j;},_lazyDestroy:function(){var g=a;if(g._initialized&&f(g._TASKS)){clearTimeout(g._globalIntervalId);g._initialized=false;}},_lazyInit:function(){var g=a;if(!g._initialized&&!f(g._TASKS)){g._lastRunTime=c();g._globalIntervalId=setTimeout(g._runner,g._INTERVAL);g._initialized=true;}},_loop:function(m,o,j){var p=a;var k=p._INTERVAL;var l=p._TASKS;var q=k/2;for(var g=c();m<j&&c()-g<50;m++){var n=o[m];var h=l[n];if(h&&p._decrementNextRunTime(h)<q){p.run(h);if(p.isRepeatable(h)){p._resetNextRunTime(h);}else{p.unregister(false,n);}}}if(p._initialized){if(m<j){p._globalIntervalId=setTimeout(p._loop,10);}else{p._globalIntervalId=setTimeout(p._runner,k);}}},_runner:function(){var g=a;var h=0;var j=b.Object.keys(g._TASKS);var k=j.length;g._loop(h,j,k);},_resetNextRunTime:function(h){var g=a;return h.next=h.timeout;},_INTERVAL:50,_TASKS:{},_lastRunTime:0,_globalIntervalId:0,_initialized:false};b.clearInterval=a.clearInterval;b.clearTimeout=a.clearTimeout;b.setInterval=a.setInterval;b.setTimeout=a.setTimeout;b.TaskManager=a;},"@VERSION@",{skinnable:false,requires:["aui-base"]});
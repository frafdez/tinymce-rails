/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.10.9 (2023-11-15)
 */
!function(){"use strict";function r(){}function i(t){return function(){return t}}function t(t){return t}function n(){return c}var m,e=tinymce.util.Tools.resolve("tinymce.PluginManager"),l=i(!1),a=i(!(m=null)),c={fold:function(t,n){return t()},isSome:l,isNone:a,getOr:t,getOrThunk:o,getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:i(null),getOrUndefined:i(void 0),or:t,orThunk:o,map:n,each:r,bind:n,exists:l,forall:a,filter:function(){return c},toArray:function(){return[]},toString:i("none()")};function o(t){return t()}function g(t){var n=t;return{get:function(){return n},set:function(t){n=t}}}function d(t,n){for(var e=k(t),o=0,r=e.length;o<r;o++){var i=e[o];n(t[i],i)}}function h(t,n){return j.call(t,n)}function s(){var t,n,e=(t=r,n=g(O.none()),{clear:function(){o(),n.set(O.none())},isSet:function(){return n.get().isSome()},get:function(){return n.get()},set:function(t){o(),n.set(O.some(t))}});function o(){return n.get().each(t)}return C(C({},e),{on:function(t){return e.get().each(t)}})}function f(t,n){return-1!==t.indexOf(n)}function v(i,r,t){var a=s(),c=s(),f=i.getParam("emoticons_images_url","https://twemoji.maxcdn.com/v/13.0.1/72x72/","string");i.on("init",function(){_.load(t,r).then(function(t){var n,e,o,l,s,r=(n=i.getParam("emoticons_append",{},"object"),e=function(t){return C({keywords:[],category:"user"},t)},A(n,function(t,n){return{k:n,v:e(t)}}));o=w(t,r),l={},s=[],d(o,function(t,n){var e,o,r,i,a,c={title:n,keywords:t.keywords,char:(i=(r=t).char).length>=(a="<img").length&&i.substr(0,0+a.length)===a?r.char.replace(/src="([^"]+)"/,function(t,n){return'src="'+f+n+'"'}):r.char,category:h(e=D,o=t.category)?e[o]:o},u=void 0!==l[c.category]?l[c.category]:[];l[c.category]=u.concat([c]),s.push(c)}),a.set(l),c.set(s)},function(t){console.log("Failed to load emoticons: "+t),a.set({}),c.set([])})});function e(){return c.get().getOr([])}function u(){return a.isSet()&&c.isSet()}return{listCategories:function(){return[P].concat(k(a.get().getOr({})))},hasLoaded:u,waitForLoad:function(){return u()?x.resolve(!0):new x(function(t,n){var e=15,o=T.setInterval(function(){u()?(T.clearInterval(o),t(!0)):--e<0&&(console.log("Could not load emojis from url: "+r),T.clearInterval(o),n(!1))},100)})},listAll:e,listCategory:function(n){return n===P?e():a.get().bind(function(t){return O.from(t[n])}).getOr([])}}}function y(t,n,e){for(var o,r,i=[],a=n.toLowerCase(),c=e.fold(function(){return l},function(n){return function(t){return n<=t}}),u=0;u<t.length&&(0!==n.length&&(o=t[u],r=a,!f(o.title.toLowerCase(),r)&&!function(t){for(var n=0,e=t.length;n<e;n++)if(f(t[n].toLowerCase(),r))return 1}(o.keywords))||(i.push({value:t[u].char,text:t[u].title,icon:t[u].char}),!c(i.length)));u++);return i}function p(o,i){var e,r,t={pattern:"",results:y(i.listAll(),"",O.some(300))},a=g(P),c=(e=function(t){var n,e=(n=t).getData(),o=a.get(),r=y(i.listCategory(o),e[S],o===P?O.some(300):O.none());n.setData({results:r})},r=null,{cancel:u,throttle:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];u(),r=setTimeout(function(){r=null,e.apply(null,t)},200)}});function u(){m===r||(clearTimeout(r),r=null)}function n(){return{title:"Emoticons",size:"normal",body:{type:"tabpanel",tabs:function(t){for(var n=t.length,e=new Array(n),o=0;o<n;o++){var r=t[o];e[o]={title:r,name:r,items:[l,s]}}return e}(i.listCategories())},initialData:t,onTabChange:function(t,n){a.set(n.newTabName),c.throttle(t)},onChange:c.throttle,onAction:function(t,n){var e;"results"===n.name&&(e=n.value,o.insertContent(e),t.close())},buttons:[{type:"cancel",text:"Close",primary:!0}]}}var l={label:"Search",type:"input",name:S},s={type:"collection",name:"results"},f=o.windowManager.open(n());f.focus(S),i.hasLoaded()||(f.block("Loading emoticons..."),i.waitForLoad().then(function(){f.redial(n()),c.throttle(f),f.focus(S),f.unblock()}).catch(function(t){f.redial({title:"Emoticons",body:{type:"panel",items:[{type:"alertbanner",level:"error",icon:"warning",text:"<p>Could not load emoticons</p>"}]},buttons:[{type:"cancel",text:"Close",primary:!0}],initialData:{pattern:"",results:[]}}),f.focus(S),f.unblock()}))}function b(t){t.on("PreInit",function(){t.parser.addAttributeFilter("data-emoticon",function(t){!function(t){for(var n,e=0,o=t.length;e<o;e++)(n=t[e]).attr("data-mce-resize","false"),n.attr("data-mce-placeholder","1")}(t)})})}function w(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(0===t.length)throw new Error("Can't merge zero objects");for(var e={},o=0;o<t.length;o++){var r,i=t[o];for(r in i)h(i,r)&&(e[r]=(e[r],i[r]))}return e}var u=function(e){function t(){return r}function n(t){return t(e)}var o=i(e),r={fold:function(t,n){return n(e)},isSome:a,isNone:l,getOr:o,getOrThunk:o,getOrDie:o,getOrNull:o,getOrUndefined:o,or:t,orThunk:t,map:function(t){return u(t(e))},each:function(t){t(e)},bind:n,exists:n,forall:n,filter:function(t){return t(e)?r:c},toArray:function(){return[e]},toString:function(){return"some("+e+")"}};return r},O={some:u,none:n,from:function(t){return null==t?c:u(t)}},C=function(){return(C=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var r in n=arguments[e])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}).apply(this,arguments)},k=Object.keys,j=Object.hasOwnProperty,A=function(t,o){var r={};return d(t,function(t,n){var e=o(t,n);r[e.k]=e.v}),r},_=tinymce.util.Tools.resolve("tinymce.Resource"),T=tinymce.util.Tools.resolve("tinymce.util.Delay"),x=tinymce.util.Tools.resolve("tinymce.util.Promise"),P="All",D={symbols:"Symbols",people:"People",animals_and_nature:"Animals and Nature",food_and_drink:"Food and Drink",activity:"Activity",travel_and_places:"Travel and Places",objects:"Objects",flags:"Flags",user:"User Defined"},S="pattern";e.add("emoticons",function(t,n){var e,o,r,i,a,c,u,l,s=(o=n,r=(e=t).getParam("emoticons_database","emojis","string"),e.getParam("emoticons_database_url",o+"/js/"+r+e.suffix+".js","string")),f=t.getParam("emoticons_database_id","tinymce.plugins.emoticons","string"),m=v(t,s,f);function g(){return c.execCommand("mceEmoticons")}a=m,(i=t).addCommand("mceEmoticons",function(){return p(i,a)}),(c=t).ui.registry.addButton("emoticons",{tooltip:"Emoticons",icon:"emoji",onAction:g}),c.ui.registry.addMenuItem("emoticons",{text:"Emoticons...",icon:"emoji",onAction:g}),l=m,(u=t).ui.registry.addAutocompleter("emoticons",{ch:":",columns:"auto",minChars:2,fetch:function(t,n){return l.waitForLoad().then(function(){return y(l.listAll(),t,O.some(n))})},onAction:function(t,n,e){u.selection.setRng(n),u.insertContent(e),t.hide()}}),b(t)})}();
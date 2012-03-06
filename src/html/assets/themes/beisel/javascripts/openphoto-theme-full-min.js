(function(b){function h(a){return"object"==typeof a?a:{top:a,left:a}}var l=b.scrollTo=function(a,g,f){b(window).scrollTo(a,g,f)};l.defaults={axis:"xy",duration:1.3<=parseFloat(b.fn.jquery)?0:1};l.window=function(){return b(window)._scrollable()};b.fn._scrollable=function(){return this.map(function(){if(this.nodeName&&-1==b.inArray(this.nodeName.toLowerCase(),["iframe","#document","html","body"]))return this;var a=(this.contentWindow||this).document||this.ownerDocument||this;return b.browser.safari||
"BackCompat"==a.compatMode?a.body:a.documentElement})};b.fn.scrollTo=function(a,g,f){"object"==typeof g&&(f=g,g=0);"function"==typeof f&&(f={onAfter:f});"max"==a&&(a=9E9);f=b.extend({},l.defaults,f);g=g||f.speed||f.duration;f.queue=f.queue&&1<f.axis.length;f.queue&&(g/=2);f.offset=h(f.offset);f.over=h(f.over);return this._scrollable().each(function(){function d(d){e.animate(m,g,f.easing,d&&function(){d.call(this,a,f)})}var j=this,e=b(j),c=a,E,m={},B=e.is("html,body");switch(typeof c){case "number":case "string":if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(c)){c=
h(c);break}c=b(c,this);case "object":if(c.is||c.style)E=(c=b(c)).offset()}b.each(f.axis.split(""),function(a,b){var g="x"==b?"Left":"Top",h=g.toLowerCase(),n="scroll"+g,q=j[n],y=l.max(j,b);E?(m[n]=E[h]+(B?0:q-e.offset()[h]),f.margin&&(m[n]-=parseInt(c.css("margin"+g))||0,m[n]-=parseInt(c.css("border"+g+"Width"))||0),m[n]+=f.offset[h]||0,f.over[h]&&(m[n]+=c["x"==b?"width":"height"]()*f.over[h])):(g=c[h],m[n]=g.slice&&"%"==g.slice(-1)?parseFloat(g)/100*y:g);/^\d+$/.test(m[n])&&(m[n]=0>=m[n]?0:Math.min(m[n],
y));!a&&f.queue&&(q!=m[n]&&d(f.onAfterFirst),delete m[n])});d(f.onAfter)}).end()};l.max=function(a,g){var f="x"==g?"Width":"Height",d="scroll"+f;if(!b(a).is("html,body"))return a[d]-b(a)[f.toLowerCase()]();var f="client"+f,j=a.ownerDocument.documentElement,e=a.ownerDocument.body;return Math.max(j[d],e[d])-Math.min(j[f],e[f])}})(jQuery);
(function(b){b.flexslider=function(h,l){var a=h;a.init=function(){a.vars=b.extend({},b.flexslider.defaults,l);a.data("flexslider",!0);a.container=b(".slides",a);a.slides=b(".slides > li",a);a.count=a.slides.length;a.animating=!1;a.currentSlide=a.vars.slideToStart;a.animatingTo=a.currentSlide;a.atEnd=0==a.currentSlide?!0:!1;a.eventType="ontouchstart"in document.documentElement?"touchstart":"click";a.cloneCount=0;a.cloneOffset=0;""!=a.vars.controlsContainer&&(a.controlsContainer=b(a.vars.controlsContainer).eq(b(".slides").index(a.container)),
a.containerExists=0<a.controlsContainer.length);""!=a.vars.manualControls&&(a.manualControls=b(a.vars.manualControls,a.containerExists?a.controlsContainer:a),a.manualExists=0<a.manualControls.length);a.vars.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-0.5}),a.container.empty().append(a.slides));"slide"==a.vars.animation.toLowerCase()?(a.css({overflow:"hidden"}),a.vars.animationLoop&&(a.cloneCount=2,a.cloneOffset=1,a.container.append(a.slides.filter(":first").clone().addClass("clone")).prepend(a.slides.filter(":last").clone().addClass("clone"))),
a.container.width((a.count+a.cloneCount)*a.width()+2E3),a.newSlides=b(".slides > li",a),setTimeout(function(){a.newSlides.width(a.width()).css({"float":"left"}).show()},100),a.container.css({marginLeft:-1*(a.currentSlide+a.cloneOffset)*a.width()+"px"})):a.slides.css({width:"100%","float":"left",marginRight:"-100%"}).eq(a.currentSlide).fadeIn(400);if(a.vars.controlNav){if(a.manualExists)a.controlNav=a.manualControls;else{for(var g=b('<ol class="flex-control-nav"></ol>'),f=1,d=0;d<a.count;d++)g.append("<li><a>"+
f+"</a></li>"),f++;a.containerExists?(b(a.controlsContainer).append(g),a.controlNav=b(".flex-control-nav li a",a.controlsContainer)):(a.append(g),a.controlNav=b(".flex-control-nav li a",a))}a.controlNav.eq(a.currentSlide).addClass("active");a.controlNav.bind(a.eventType,function(d){d.preventDefault();b(this).hasClass("active")||a.flexAnimate(a.controlNav.index(b(this)),a.vars.pauseOnAction)})}a.vars.directionNav&&(g=b('<ul class="flex-direction-nav"><li><a class="prev" href="#">'+a.vars.prevText+
'</a></li><li><a class="next" href="#">'+a.vars.nextText+"</a></li></ul>"),a.containerExists?(b(a.controlsContainer).append(g),a.directionNav=b(".flex-direction-nav li a",a.controlsContainer)):(a.append(g),a.directionNav=b(".flex-direction-nav li a",a)),a.vars.animationLoop||(0==a.currentSlide?a.directionNav.filter(".prev").addClass("disabled"):a.currentSlide==a.count-1&&a.directionNav.filter(".next").addClass("disabled")),a.directionNav.bind(a.eventType,function(d){d.preventDefault();d=b(this).hasClass("next")?
a.getTarget("next"):a.getTarget("prev");a.canAdvance(d)&&a.flexAnimate(d,a.vars.pauseOnAction)}));a.vars.keyboardNav&&1==b("ul.slides").length&&b(document).keyup(function(d){if(!a.animating&&!(39!=d.keyCode&&37!=d.keyCode)){if(39==d.keyCode)var b=a.getTarget("next");else 37==d.keyCode&&(b=a.getTarget("prev"));a.canAdvance(b)&&a.flexAnimate(b,a.vars.pauseOnAction)}});a.vars.slideshow&&(a.vars.pauseOnHover&&a.vars.slideshow&&a.hover(function(){a.pause()},function(){a.resume()}),a.animatedSlides=setInterval(a.animateSlides,
a.vars.slideshowSpeed));a.vars.pausePlay&&(g=b('<div class="flex-pauseplay"><span></span></div>'),a.containerExists?(a.controlsContainer.append(g),a.pausePlay=b(".flex-pauseplay span",a.controlsContainer)):(a.append(g),a.pausePlay=b(".flex-pauseplay span",a)),g=a.vars.slideshow?"pause":"play",a.pausePlay.addClass(g).text("pause"==g?a.vars.pauseText:a.vars.playText),a.pausePlay.click(function(d){d.preventDefault();b(this).hasClass("pause")?a.pause():a.resume()}));a.vars.touchSwipe&&"ontouchstart"in
document.documentElement&&a.each(function(){function d(){this.removeEventListener("touchmove",b);g=null;isMoving=!1}function b(c){isMoving&&(c=g-c.touches[0].pageX,Math.abs(c)>=f&&(d(),c=0<c?a.getTarget("next"):a.getTarget("prev"),a.canAdvance(c)&&a.flexAnimate(c,a.vars.pauseOnAction)))}function c(a){1==a.touches.length&&(g=a.touches[0].pageX,isMoving=!0,this.addEventListener("touchmove",b,!1))}var g,f=20;isMoving=!1;"ontouchstart"in document.documentElement&&this.addEventListener("touchstart",c,
!1)});"slide"==a.vars.animation.toLowerCase()&&(a.sliderTimer,b(window).resize(function(){a.newSlides.width(a.width());a.container.width((a.count+a.cloneCount)*a.width()+2E3);clearTimeout(a.sliderTimer);a.sliderTimer=setTimeout(function(){a.flexAnimate(a.currentSlide)},300)}));a.vars.start(a)};a.flexAnimate=function(b,f){a.animating||(a.animating=!0,a.animatingTo=b,a.vars.before(a),f&&a.pause(),a.vars.controlNav&&a.controlNav.removeClass("active").eq(b).addClass("active"),a.atEnd=0==b||b==a.count-
1?!0:!1,!a.vars.animationLoop&&a.vars.directionNav&&(0==b?a.directionNav.removeClass("disabled").filter(".prev").addClass("disabled"):b==a.count-1?a.directionNav.removeClass("disabled").filter(".next").addClass("disabled"):a.directionNav.removeClass("disabled")),!a.vars.animationLoop&&b==a.count-1&&(a.pause(),a.vars.end(a)),"slide"==a.vars.animation.toLowerCase()?(a.slideString=0==a.currentSlide&&b==a.count-1&&a.vars.animationLoop&&"next"!=a.direction?"0px":a.currentSlide==a.count-1&&0==b&&a.vars.animationLoop&&
"prev"!=a.direction?-1*(a.count+1)*a.slides.filter(":first").width()+"px":-1*(b+a.cloneOffset)*a.slides.filter(":first").width()+"px",a.container.animate({marginLeft:a.slideString},a.vars.animationDuration,function(){0==a.currentSlide&&b==a.count-1&&a.vars.animationLoop?a.container.css({marginLeft:-1*a.count*a.slides.filter(":first").width()+"px"}):a.currentSlide==a.count-1&&0==b&&a.vars.animationLoop&&a.container.css({marginLeft:-1*a.slides.filter(":first").width()+"px"});a.animating=!1;a.currentSlide=
b;a.vars.after(a)})):(a.slides.eq(a.currentSlide).fadeOut(a.vars.animationDuration),a.slides.eq(b).fadeIn(a.vars.animationDuration,function(){a.animating=!1;a.currentSlide=b;a.vars.after(a)})))};a.animateSlides=function(){a.animating||a.flexAnimate(a.currentSlide==a.count-1?0:a.currentSlide+1)};a.pause=function(){clearInterval(a.animatedSlides);a.vars.pausePlay&&a.pausePlay.removeClass("pause").addClass("play").text(a.vars.playText)};a.resume=function(){a.animatedSlides=setInterval(a.animateSlides,
a.vars.slideshowSpeed);a.vars.pausePlay&&a.pausePlay.removeClass("play").addClass("pause").text(a.vars.pauseText)};a.canAdvance=function(b){return!a.vars.animationLoop&&a.atEnd?0==a.currentSlide&&b==a.count-1&&"next"!=a.direction?!1:a.currentSlide==a.count-1&&0==b&&"next"==a.direction?!1:!0:!0};a.getTarget=function(b){a.direction=b;return"next"==b?a.currentSlide==a.count-1?0:a.currentSlide+1:0==a.currentSlide?a.count-1:a.currentSlide-1};a.init()};b.flexslider.defaults={animation:"fade",slideshow:!0,
slideshowSpeed:7E3,animationDuration:600,directionNav:!0,controlNav:!0,keyboardNav:!0,touchSwipe:!0,prevText:"Previous",nextText:"Next",pausePlay:!1,pauseText:"Pause",playText:"Play",randomize:!1,slideToStart:0,animationLoop:!0,pauseOnAction:!0,pauseOnHover:!1,controlsContainer:"",manualControls:"",start:function(){},before:function(){},after:function(){},end:function(){}};b.fn.flexslider=function(h){return this.each(function(){1==b(this).find(".slides li").length?b(this).find(".slides li").fadeIn(400):
!0!=b(this).data("flexslider")&&new b.flexslider(b(this),h)})}})(jQuery);
(function(b){var h,l,a,g={method:"GET",queryParam:"q",searchDelay:300,minChars:1,propertyToSearch:"name",jsonContainer:null,contentType:"json",prePopulate:null,processPrePopulate:!1,hintText:"Type in a search term",noResultsText:"No results",searchingText:"Searching...",deleteText:"&times;",animateDropdown:!0,theme:null,resultsFormatter:function(a){return"<li>"+a[this.propertyToSearch]+"</li>"},tokenFormatter:function(a){return"<li><p>"+a[this.propertyToSearch]+"</p></li>"},tokenLimit:null,tokenDelimiter:",",
preventDuplicates:!1,tokenValue:"id",onResult:null,onAdd:null,onDelete:null,onReady:null,idPrefix:"token-input-",disabled:!1},f={tokenList:"token-input-list",token:"token-input-token",tokenDelete:"token-input-delete-token",selectedToken:"token-input-selected-token",highlightedToken:"token-input-highlighted-token",dropdown:"token-input-dropdown",dropdownItem:"token-input-dropdown-item",dropdownItem2:"token-input-dropdown-item2",selectedDropdownItem:"token-input-selected-dropdown-item",inputToken:"token-input-input-token",
disabled:"token-input-disabled"};h=0;l=1;a=2;var d={init:function(a,d){var c=b.extend({},g,d||{});return this.each(function(){b(this).data("tokenInputObject",new b.TokenList(this,a,c))})},clear:function(){this.data("tokenInputObject").clear();return this},add:function(a){this.data("tokenInputObject").add(a);return this},remove:function(a){this.data("tokenInputObject").remove(a);return this},get:function(){return this.data("tokenInputObject").getTokens()},toggleDisabled:function(a){this.data("tokenInputObject").toggleDisabled(a);
return this}};b.fn.tokenInput=function(a){return d[a]?d[a].apply(this,Array.prototype.slice.call(arguments,1)):d.init.apply(this,arguments)};b.TokenList=function(d,e,c){function g(d){c.disabled="boolean"===typeof d?d:!c.disabled;k.prop("disabled",c.disabled);r.toggleClass(c.classes.disabled,c.disabled);o&&x(b(o),a);p.prop("disabled",c.disabled)}function m(){null!==c.tokenLimit&&s>=c.tokenLimit&&(k.hide(),q())}function B(a){var d=c.tokenFormatter(a),d=b(d).addClass(c.classes.token).insertBefore(w);
b("<span>"+c.deleteText+"</span>").addClass(c.classes.tokenDelete).appendTo(d).click(function(){if(!c.disabled)return C(b(this).parent()),p.change(),!1});b.data(d.get(0),"tokeninput",a);t=t.slice(0,u).concat([a]).concat(t.slice(u));u++;n(t,p);s+=1;null!==c.tokenLimit&&s>=c.tokenLimit&&(k.hide(),q());return d}function D(a){var d=c.onAdd;if(0<s&&c.preventDuplicates){var e=null;r.children().each(function(){var d=b(this),c=b.data(d.get(0),"tokeninput");if(c&&c.id===a.id)return e=d,!1});if(e){A(e);w.insertAfter(e);
k.focus();return}}if(null==c.tokenLimit||s<c.tokenLimit)B(a),m();k.val("");q();b.isFunction(d)&&d.call(p,a)}function A(a){c.disabled||(a.addClass(c.classes.selectedToken),o=a.get(0),k.val(""),q())}function x(a,d){a.removeClass(c.classes.selectedToken);o=null;d===h?(w.insertBefore(a),u--):d===l?(w.insertAfter(a),u++):(w.appendTo(r),u=s);k.focus()}function C(a){var d=b.data(a.get(0),"tokeninput"),e=c.onDelete,j=a.prevAll().length;j>u&&j--;a.remove();o=null;k.focus();t=t.slice(0,j).concat(t.slice(j+
1));j<u&&u--;n(t,p);s-=1;null!==c.tokenLimit&&k.show().val("").focus();b.isFunction(e)&&e.call(p,d)}function n(a,d){var e=b.map(a,function(a){return"function"==typeof c.tokenValue?c.tokenValue.call(this,a):a[c.tokenValue]});d.val(e.join(c.tokenDelimiter))}function q(){z.hide().empty();v=null}function y(){z.css({position:"absolute",top:b(r).offset().top+b(r).outerHeight()-3,left:b(r).offset().left,width:b(r).outerWidth()-2,"z-index":99999}).show()}function F(a,d){if(d&&d.length){z.empty();var e=b("<ul>").appendTo(z).mouseover(function(a){G(b(a.target).closest("li"))}).mousedown(function(a){D(b(a.target).closest("li").data("tokeninput"));
p.change();return!1}).hide();b.each(d,function(d,j){var f=c.resultsFormatter(j),f=f.replace(RegExp("(?![^&;]+;)(?!<[^<>]*)("+j[c.propertyToSearch]+")(?![^<>]*>)(?![^&;]+;)","g"),j[c.propertyToSearch].replace(RegExp("(?![^&;]+;)(?!<[^<>]*)("+a+")(?![^<>]*>)(?![^&;]+;)","gi"),"<b>$1</b>")),f=b(f).appendTo(e);d%2?f.addClass(c.classes.dropdownItem):f.addClass(c.classes.dropdownItem2);0===d&&G(f);b.data(f.get(0),"tokeninput",j)});y();c.animateDropdown?e.slideDown("fast"):e.show()}else c.noResultsText&&
(z.html("<p>"+c.noResultsText+"</p>"),y())}function G(a){a&&(v&&(b(v).removeClass(c.classes.selectedDropdownItem),v=null),a.addClass(c.classes.selectedDropdownItem),v=a.get(0))}function K(){var a=k.val();a&&a.length&&(o&&x(b(o),l),a.length>=c.minChars?(c.searchingText&&(z.html("<p>"+c.searchingText+"</p>"),y()),clearTimeout(L),L=setTimeout(function(){N(a)},c.searchDelay)):q())}function N(a){var d=a+H(),e=I.get(d);if(e)F(a,e);else if(c.url){var e=H(),j={data:{}};-1<e.indexOf("?")?(e=e.split("?"),j.url=
e[0],e=e[1].split("&"),b.each(e,function(a,d){var b=d.split("=");j.data[b[0]]=b[1]})):j.url=e;j.data[c.queryParam]=a;j.type=c.method;j.dataType=c.contentType;c.crossDomain&&(j.dataType="jsonp");j.success=function(e){b.isFunction(c.onResult)&&(e=c.onResult.call(p,e));I.add(d,c.jsonContainer?e[c.jsonContainer]:e);k.val()===a&&F(a,c.jsonContainer?e[c.jsonContainer]:e)};b.ajax(j)}else c.local_data&&(e=b.grep(c.local_data,function(d){return-1<d[c.propertyToSearch].toLowerCase().indexOf(a.toLowerCase())}),
b.isFunction(c.onResult)&&(e=c.onResult.call(p,e)),I.add(d,e),F(a,e))}function H(){var a=c.url;"function"==typeof c.url&&(a=c.url.call(c));return a}"string"===b.type(e)||"function"===b.type(e)?(c.url=e,e=H(),void 0===c.crossDomain&&(c.crossDomain=-1===e.indexOf("://")?!1:location.href.split(/\/+/g)[1]!==e.split(/\/+/g)[1])):"object"===typeof e&&(c.local_data=e);c.classes?c.classes=b.extend({},f,c.classes):c.theme?(c.classes={},b.each(f,function(a,d){c.classes[a]=d+"-"+c.theme})):c.classes=f;var t=
[],s=0,I=new b.TokenList.Cache,L,J,k=b('<input type="text"  autocomplete="off">').css({outline:"none"}).attr("id",c.idPrefix+d.id).focus(function(){if(c.disabled)return!1;if((null===c.tokenLimit||c.tokenLimit!==s)&&c.hintText)z.html("<p>"+c.hintText+"</p>"),y()}).blur(function(){q();b(this).val("")}).bind("keyup keydown blur update",function(){if(J!==(J=k.val())){var a=J.replace(/&/g,"&amp;").replace(/\s/g," ").replace(/</g,"&lt;").replace(/>/g,"&gt;");M.html(a);k.width(M.width()+30)}}).keydown(function(a){var d,
c;switch(a.keyCode){case 37:case 39:case 38:case 40:if(b(this).val())return d=null,d=40===a.keyCode||39===a.keyCode?b(v).next():b(v).prev(),d.length&&G(d),!1;d=w.prev();c=w.next();d.length&&d.get(0)===o||c.length&&c.get(0)===o?37===a.keyCode||38===a.keyCode?x(b(o),h):x(b(o),l):(37===a.keyCode||38===a.keyCode)&&d.length?A(b(d.get(0))):(39===a.keyCode||40===a.keyCode)&&c.length&&A(b(c.get(0)));break;case 8:d=w.prev();if(b(this).val().length)1===b(this).val().length?q():setTimeout(function(){K()},5);
else return o?(C(b(o)),p.change()):d.length&&A(b(d.get(0))),!1;break;case 9:case 13:case 108:case 188:if(v)return D(b(v).data("tokeninput")),p.change(),!1;break;case 27:return q(),!0;default:String.fromCharCode(a.which)&&setTimeout(function(){K()},5)}}),p=b(d).hide().val("").focus(function(){k.focus()}).blur(function(){k.blur()}),o=null,u=0,v=null,r=b("<ul />").addClass(c.classes.tokenList).click(function(d){if((d=b(d.target).closest("li"))&&d.get(0)&&b.data(d.get(0),"tokeninput")){var c=o;o&&x(b(o),
a);c===d.get(0)?x(d,a):A(d)}else o&&x(b(o),a),k.focus()}).mouseover(function(a){(a=b(a.target).closest("li"))&&o!==this&&a.addClass(c.classes.highlightedToken)}).mouseout(function(a){(a=b(a.target).closest("li"))&&o!==this&&a.removeClass(c.classes.highlightedToken)}).insertBefore(p),w=b("<li />").addClass(c.classes.inputToken).appendTo(r).append(k),z=b("<div>").addClass(c.classes.dropdown).appendTo("body").hide(),M=b("<tester/>").insertAfter(k).css({position:"absolute",top:-9999,left:-9999,width:"auto",
fontSize:k.css("fontSize"),fontFamily:k.css("fontFamily"),fontWeight:k.css("fontWeight"),letterSpacing:k.css("letterSpacing"),whiteSpace:"nowrap"});p.val("");d=c.prePopulate||p.data("pre");c.processPrePopulate&&b.isFunction(c.onResult)&&(d=c.onResult.call(p,d));d&&d.length&&b.each(d,function(a,d){B(d);m()});c.disabled&&g(!0);b.isFunction(c.onReady)&&c.onReady.call();this.clear=function(){r.children("li").each(function(){0===b(this).children("input").length&&C(b(this))})};this.add=function(a){D(a)};
this.remove=function(a){r.children("li").each(function(){if(0===b(this).children("input").length){var d=b(this).data("tokeninput"),c=!0,e;for(e in a)if(a[e]!==d[e]){c=!1;break}c&&C(b(this))}})};this.getTokens=function(){return t};this.toggleDisabled=function(a){g(a)}};b.TokenList.Cache=function(a){var d=b.extend({max_size:500},a),c={},f=0;this.add=function(a,b){f>d.max_size&&(c={},f=0);c[a]||(f+=1);c[a]=b};this.get=function(a){return c[a]}}})(jQuery);
!function(b){function h(){var a=this,c=setTimeout(function(){a.$element.unbind(d);l.call(a)},500);this.$element.one(d,function(){clearTimeout(c);l.call(a)})}function l(){this.$element.hide().trigger("hidden");a.call(this)}function a(a){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.settings.backdrop){var j=b.support.transition&&c;this.$backdrop=b('<div class="modal-backdrop '+c+'" />').appendTo(document.body);"static"!=this.settings.backdrop&&this.$backdrop.click(b.proxy(this.hide,
this));j&&this.$backdrop[0].offsetWidth;this.$backdrop.addClass("in");j?this.$backdrop.one(d,a):a()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),b.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(d,b.proxy(g,this)):g.call(this)):a&&a()}function g(){this.$backdrop.remove();this.$backdrop=null}function f(){var a=this;this.isShown&&this.settings.keyboard?b(document).bind("keyup.modal",function(d){27==d.which&&a.hide()}):this.isShown||b(document).unbind("keyup.modal")}
var d;b(document).ready(function(){var a=(document.body||document.documentElement).style;b.support.transition=void 0!==a.transition||void 0!==a.WebkitTransition||void 0!==a.MozTransition||void 0!==a.MsTransition||void 0!==a.OTransition;b.support.transition&&(d="TransitionEnd",b.browser.webkit?d="webkitTransitionEnd":b.browser.mozilla?d="transitionend":b.browser.opera&&(d="oTransitionEnd"))});var j=function(a,d){this.settings=b.extend({},b.fn.modal.defaults,d);this.$element=b(a).delegate(".close",
"click.modal",b.proxy(this.hide,this));this.settings.show&&this.show();return this};j.prototype={toggle:function(){return this[!this.isShown?"show":"hide"]()},show:function(){var e=this;this.isShown=!0;this.$element.trigger("show");f.call(this);a.call(this,function(){var a=b.support.transition&&e.$element.hasClass("fade");e.$element.appendTo(document.body).show();a&&e.$element[0].offsetWidth;e.$element.addClass("in");a?e.$element.one(d,function(){e.$element.trigger("shown")}):e.$element.trigger("shown")});
return this},hide:function(a){a&&a.preventDefault();if(!this.isShown)return this;this.isShown=!1;f.call(this);this.$element.trigger("hide").removeClass("in");b.support.transition&&this.$element.hasClass("fade")?h.call(this):l.call(this);return this}};b.fn.modal=function(a){var d=this.data("modal");if(!d)return"string"==typeof a&&(a={show:/show|toggle/.test(a)}),this.each(function(){b(this).data("modal",new j(this,a))});if(!0===a)return d;if("string"==typeof a)d[a]();else d&&d.toggle();return this};
b.fn.modal.Modal=j;b.fn.modal.defaults={backdrop:!1,keyboard:!1,show:!1};b(document).ready(function(){b("body").delegate("[data-controls-modal]","click",function(a){a.preventDefault();a=b(this).data("show",!0);b("#"+a.attr("data-controls-modal")).modal(a.data())})})}(window.jQuery||window.ender);
var opTheme=function(){var b=null,h=function(a){void 0!==console&&void 0!==console.log&&console.log(a)},l=function(a){var b="";1<arguments.length&&("error"==arguments[1]?b="error":"confirm"==arguments[1]&&(b="success"));return'<div class="alert-message block-message '+b+'"><a class="modal-close-click close" href="#">x</a>'+a+"</div>"},a=function(a){var b=$(document.activeElement).val(),a=a.result,e=[];for(i in a)a.hasOwnProperty(i)&&e.push({id:a[i].id,name:a[i].id+" ("+a[i].count+")"});e.push({id:b,
name:b});return e},g=function(a){return"<li>"+a.name+"</li>"},f=void 0;return{callback:{keyboard:function(){h("keyboard!!!!")},actionDelete:function(a){a.preventDefault();var a=$(a.target),b=a.attr("href")+".json",e=a.attr("data-id");OP.Util.makeRequest(b,a.parent().serializeArray(),function(a){204===a.code?$(".action-container-"+e).hide("medium",function(){$(this).remove()}):opTheme.message.error("Could not delete the photo.")});return!1},batchAdd:function(a){$(".id-"+a.id).removeClass("unpinned").addClass("pinned");
opTheme.ui.batchMessage();h("Adding photo "+a.id)},batchClear:function(){var a=$("#batch-message").parent();$(".pinned").removeClass("pinned").addClass("unpinned").children().filter(".pin").fadeOut();a.slideUp("fast",function(){$(this).remove()})},batchField:function(a){var a=$(a.target).val(),b=$("form#batch-edit .form-fields");switch(a){case "delete":b.html(opTheme.ui.batchFormFields.empty());break;case "permission":b.html(opTheme.ui.batchFormFields.permission());break;case "tagsAdd":case "tagsRemove":b.html(opTheme.ui.batchFormFields.tags()),
OP.Util.fire("callback:tags-autocomplete")}},batchModal:function(){var a=$("#modal"),b='<form id="batch-edit">  <div class="clearfix">    <label>Property</label>    <div class="input">      <select id="batch-key" class="batch-field-change" name="property">        <option value="tagsAdd">Add Tags</option>        <option value="tagsRemove">Remove Tags</option>        <option value="permission">Permission</option>        <option value="delete">Delete</option>      </select>    </div>  </div>  <div class="form-fields">'+
opTheme.ui.batchFormFields.tags()+"</div></form>";a.html('<div class="modal-header">  <a href="#" class="close">&times;</a>  <h3>Batch edit your pinned photos</h3></div><div class="modal-body">  <p>'+b+'</p></div><div class="modal-footer"><a href="#" class="btn photo-update-batch-click">Submit</a></div>');OP.Util.fire("callback:tags-autocomplete")},batchRemove:function(a){$(".id-"+a).addClass("unpinned").removeClass("pinned");opTheme.ui.batchMessage();h("Removing photo "+a)},commentJump:function(a){a.preventDefault();
$.scrollTo($("div.comment-form"),200);return!1},credentailDelete:function(a){a.preventDefault();var b=$(a.target),a=b.attr("href")+".json";OP.Util.makeRequest(a,{},function(a){204===a.code?(b.parent().remove(),opTheme.message.confirm("Credential successfully deleted.")):opTheme.message.error("Could not delete credential.")});return!1},groupCheckbox:function(a){a=$(a.target);a.hasClass("none")&&a.is(":checked")?$("input.group-checkbox:not(.none)").removeAttr("checked"):a.is(":checked")&&$("input.group-checkbox.none").removeAttr("checked")},
groupPost:function(a){a.preventDefault();var a=$(a.target).parent().parent(),b=a.attr("action")+".json",e=-1<b.search("create");OP.Util.makeRequest(b,a.serializeArray(),function(a){200===a.code?e?location.href=location.href:opTheme.message.confirm("Group updated successfully."):opTheme.message.error("Could not update group.")});return!1},login:function(a){a=$(a.target);a.hasClass("browserid")?navigator.id.getVerifiedEmail(function(a){a?opTheme.user.browserid.loginSuccess(a):opTheme.user.browserid.loginFailure(a)}):
a.hasClass("facebook")&&FB.login(function(a){a.authResponse?(h("User logged in, posting to openphoto host."),OP.Util.makeRequest("/user/facebook/login.json",opTheme.user.base.loginProcessed)):h("User cancelled login or did not fully authorize.")},{scope:"email"})},modalClose:function(a){a.preventDefault();$(a.target).parent().slideUp("fast",function(){$(this).remove()})},photoDelete:function(a){a.preventDefault();var b=$(a.target),a=b.parent().attr("action")+".json";OP.Util.makeRequest(a,b.parent().serializeArray(),
function(a){204===a.code?(b.html("This photo has been deleted"),opTheme.message.confirm("This photo has been deleted.")):opTheme.message.error("Could not delete the photo.")});return!1},photoEdit:function(a){a.preventDefault();a=$(a.target).attr("href")+".json";1==$("div.owner-edit").length?$.scrollTo($("div.owner-edit"),200):OP.Util.makeRequest(a,{},function(a){200===a.code?($("#main").append(a.result.markup),$.scrollTo($("div.owner-edit"),200),OP.Util.fire("callback:tags-autocomplete")):opTheme.message.error("Could not load the form to edit this photo.")},
"json","get");return!1},photoUpdateBatch:function(a){a.preventDefault();$(a.target);var a=$("#batch-key").val(),j=$("form#batch-edit").find("*[name='value']"),j=1==j.length?j.val():$("form#batch-edit").find("*[name='value']:checked").val();params={crumb:b};params[a]=j;params.ids=OP.Batch.collection.getIds().join(",");"delete"!==a?OP.Util.makeRequest("/photos/update.json",params,opTheme.callback.photoUpdateBatchCb,"json","post"):OP.Util.makeRequest("/photos/delete.json",params,opTheme.callback.photoUpdateBatchCb,
"json","post")},photoUpdateBatchCb:function(a){200==a.code?opTheme.message.append(l("Your photos were successfully updated.","confirm")):204==a.code?(OP.Batch.clear(),opTheme.message.append(l("Your photos were successfully deleted.","confirm"))):opTheme.message.append(l("There was a problem updating your photos.","error"));$("#modal").modal("hide")},pinClick:function(a){var a=$(a.target),b=a.attr("data-id");a.parent().hasClass("unpinned")?OP.Batch.add(b):OP.Batch.remove(b)},pinClearClick:function(a){a.preventDefault();
OP.Batch.clear()},pluginStatus:function(a){a.preventDefault();a=$(a.target).attr("href")+".json";OP.Util.makeRequest(a,{},function(a){200===a.code?window.location.reload():opTheme.message.error("Could not update the status of this plugin.")},"json","post");return!1},pluginUpdate:function(a){a.preventDefault();var a=$(a.target).parent(),b=a.attr("action")+".json";OP.Util.makeRequest(b,a.serializeArray(),function(a){200===a.code?opTheme.message.confirm("Your plugin was successfully updated."):opTheme.message.error("Could not update the status of this plugin.")},
"json","post");return!1},searchByTags:function(a){a.preventDefault();var b=$(a.target).parent(),a=$(b.find("input[name=tags]")[0]).val(),b=$(b).attr("action");location.href=0<a.length?b.replace("/list","")+"/tags-"+a+"/list":b;return!1},settings:function(){$("ul#settingsbar").slideToggle("medium");$("li#nav-signin").toggleClass("active");return!1},keyBrowseNext:function(){var a;if(a=$(".image-pagination .next a").attr("href"))location.href=a},keyBrowsePrevious:function(){var a;if(a=$(".image-pagination .previous a").attr("href"))location.href=
a},webhookDelete:function(a){a.preventDefault();var b=$(a.target),a=b.attr("href")+".json";OP.Util.makeRequest(a,{},function(a){204===a.code?(b.parent().remove(),opTheme.message.confirm("Credential successfully deleted.")):opTheme.message.error("Could not delete credential.")});return!1}},formHandlers:{hasErrors:function(a,b){var e=[];a.children("input, textarea").each(function(){var c=$(this);c.prev().removeClass("error");var f=c.attr(b);if(void 0!=f)for(var f=f.split(" "),g=0;g<f.length;g++){if("date"==
f[g]&&!opTheme.formHandlers.passesDate(c)){var h=c.prev().html()+" is not a valid date";e.push([c,h])}"email"==f[g]&&!opTheme.formHandlers.passesEmail(c)&&(h=c.prev().html()+" is not a valid email address",e.push([c,h]));"ifexists"==f[g]&&""!=c.val()&&void 0!=c.val()&&$.merge(e,opTheme.formHandlers.hasErrors(a,"data-ifexists"));"integer"==f[g]&&!opTheme.formHandlers.passesInteger(c)&&(h=c.prev().html()+" is not a number",e.push([c,h]));"match"==f[g]&&(h=c.attr("data-match"),opTheme.formHandlers.passesMatch(c,
h)||(h=c.prev().html()+" does not match "+$("#"+h).prev().html(),e.push([c,h])));"required"==f[g]&&!opTheme.formHandlers.passesRequired(c)&&(h=c.prev().html()+" is required",e.push([c,h]));"alphanumeric"==f[g]&&!opTheme.formHandlers.passesAlphaNumeric(c)&&(h=c.prev().html()+" can only contain alpha-numeric characters",e.push([c,h]))}});return e},init:function(){$(this).submit(opTheme.submitHandlers.siteForm);opTheme.formHandlers.showPlaceholders();$("input[data-placeholder]").live("focus",opTheme.formHandlers.placeholderFocus);
$("input[data-placeholder]").live("blur",opTheme.formHandlers.placeholderBlur)},passesAlphaNumeric:function(a){return/^[a-zA-Z0-9]+$/.test(a.val())},passesDate:function(a){return/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(a.val())},passesEmail:function(a){return/^([\w-\.+]+@([\w-]+\.)+[\w-]{2,4})?$/.test(a.val())},passesInteger:function(a){return/^\d+$/.test(a.val())},passesMatch:function(a,b){return a.val()==$("#"+b).val()},passesRequired:function(a){return a.is("textarea")||a.is("input")&&("text"==a.attr("type")||
"password"==a.attr("type"))?""!=a.val()&&void 0!=a.val():a.is("checkbox")?a.is(":checked"):!0},placeholderBlur:function(){var a=$(this);""==a.val()&&(a.val(a.attr("data-placeholder")),a.addClass("placeholder"))},placeholderFocus:function(){var a=$(this);a.val()==a.attr("data-placeholder")&&(a.val(""),a.removeClass("placeholder"))},removePlaceholders:function(){$("input[data-placeholder]").each(function(){var a=$(this);a.val()==a.attr("data-placeholder")&&(a.val(""),a.removeClass("placeholder"))})},
showPlaceholders:function(){$("input[data-placeholder]").each(function(){var a=$(this);""==a.val()&&(a.val(a.attr("data-placeholder")),a.addClass("placeholder"))})}},front:{init:function(a){0<a.length&&a.cycle({fx:"fade"}).find("img").click(function(a){location.href=$(a.target).attr("data-origin")})}},init:{load:function(a){b=a;0<$("section#slideshow").length&&$(window).load(function(){$(".flexslider").flexslider({animation:"slide",controlsContainer:".flex-container",controlNav:!0,pausePlay:!1,directionNav:!0,
nextText:"<span title='Next'>Next</span>",prevText:"<span title='Previous'>Previous</span>"})});$("#modal").modal({keyboard:!0})},attach:function(){OP.Util.on("click:action-delete",opTheme.callback.actionDelete);OP.Util.on("click:action-jump",opTheme.callback.commentJump);OP.Util.on("click:batch-modal",opTheme.callback.batchModal);OP.Util.on("click:credential-delete",opTheme.callback.credentailDelete);OP.Util.on("click:group-checkbox",opTheme.callback.groupCheckbox);OP.Util.on("click:group-update",
opTheme.callback.groupPost);OP.Util.on("click:login",opTheme.callback.login);OP.Util.on("click:modal-close",opTheme.callback.modalClose);OP.Util.on("click:photo-delete",opTheme.callback.photoDelete);OP.Util.on("click:photo-edit",opTheme.callback.photoEdit);OP.Util.on("click:photo-update-batch",opTheme.callback.photoUpdateBatch);OP.Util.on("click:plugin-status",opTheme.callback.pluginStatus);OP.Util.on("click:plugin-update",opTheme.callback.pluginUpdate);OP.Util.on("click:nav-item",opTheme.callback.searchBarToggle);
OP.Util.on("click:search",opTheme.callback.searchByTags);OP.Util.on("click:settings",opTheme.callback.settings);OP.Util.on("click:webhook-delete",opTheme.callback.webhookDelete);OP.Util.on("click:pin",opTheme.callback.pinClick);OP.Util.on("click:pin-clear",opTheme.callback.pinClearClick);OP.Util.on("keydown:browse-next",opTheme.callback.keyBrowseNext);OP.Util.on("keydown:browse-previous",opTheme.callback.keyBrowsePrevious);OP.Util.on("mouseover:pin",opTheme.callback.pinOver);OP.Util.on("mouseout:pin",
opTheme.callback.pinOut);OP.Util.on("change:batch-field",opTheme.callback.batchField);OP.Util.on("callback:tags-autocomplete",opTheme.init.tags.autocomplete);OP.Util.on("callback:batch-add",opTheme.callback.batchAdd);OP.Util.on("callback:batch-remove",opTheme.callback.batchRemove);OP.Util.on("callback:batch-clear",opTheme.callback.batchClear);OP.Util.fire("callback:tags-autocomplete");"object"===typeof OPU&&OPU.init();$("form.validate").each(opTheme.formHandlers.init)},photos:function(){var a=OP.Batch.collection.getAll(),
b=OP.Batch.collection.getLength(),e=$(".unpinned"),c,f;0<b&&opTheme.ui.batchMessage();e.each(function(b,e){e=$(e);c=e.attr("class");f=c.match(/ id-([a-z0-9]+)/);2==f.length&&void 0!==a[f[1]]&&e.removeClass("unpinned").addClass("pinned")})},tags:{autocomplete:function(){var b={queryParam:"search",propertyToSearch:"id",preventDuplicates:!0};b.onResult=a;b.resultsFormatter=g;$("input[class~='tags-autocomplete']").each(function(a,e){var e=$(e),c=e.attr("value");if("none"!=e.css("display")){if(""!=c){for(var c=
c.split(","),f=[],a=0;a<c.length;a++)f.push({id:c[a],name:c[a]});b.prePopulate=f}$(e).tokenInput("/tags/list.json",b)}})}}},message:{append:function(a){$("#message").append(a).slideDown()},close:function(){void 0!=f&&(clearTimeout(f),f=void 0,$("#message-box").animate({height:"toggle"},500,function(){$("#message-box").remove()}))},confirm:function(a){opTheme.message.show(a,"confirm")},error:function(a){opTheme.message.show(a,"error")},show:function(a,b){var e="error"==b?"confirm":"error";void 0!=
f?(clearTimeout(f),f=void 0,$("#message-box").removeClass(e).addClass(b).html('<div><a class="message-close">close</a>'+a+"</div>"),f=setTimeout(function(){$("#message-box").animate({height:"toggle"},500,function(){$("#message-box").remove();f=void 0})},7E3)):($("html").append('<section id="message-box" style="display:none;"><div><a class="message-close">close</a>'+a+"</div></section>"),$("#message-box").removeClass(e).addClass(b).animate({height:"toggle"},500,function(){f=setTimeout(function(){$("#message-box").animate({height:"toggle"},
500,function(){$("#message-box").remove();f=void 0})},7E3)}));$("a.message-close").click(opTheme.message.close)}},submitHandlers:{siteForm:function(a){var b=$(this);a.preventDefault();opTheme.formHandlers.removePlaceholders();a=opTheme.formHandlers.hasErrors(b,"data-validation");opTheme.formHandlers.showPlaceholders();if(0==a.length)this.submit();else{for(var b="<ul>",e=0;e<a.length;e++)a[e][0].prev().addClass("error"),b+="<li>"+a[e][1]+"</li>";b+="</ul>";$("html").animate({scrollTop:a[0][0].offset().top-
30},500);a[0][0].focus();opTheme.message.error(b)}}},ui:{batchFormFields:{empty:function(){return""},permission:function(){return'  <div class="clearfix">    <label>Value</label>    <div class="input">      <ul class="inputs-list">        <li>          <label>            <input type="radio" name="value" value="1" checked="checked">            <span>Public</span>          </label>        </li>        <li>          <label>            <input type="radio" name="value" value="0">             <span>Private</span>          </label>        </li>    </div>  </div>'},
tags:function(){return'  <div class="clearfix">    <label>Tags</label>    <div class="input">      <input type="text" name="value" class="tags-autocomplete" placeholder="A comma separated list of tags" value="">    </div>  </div>'}},batchMessage:function(){var a=OP.Batch.collection.getLength();0<$("#batch-message").length&&0<a?$("#batch-count").html(a):0==a?$("#batch-message").parent().slideUp("fast",function(){$(this).remove()}):opTheme.message.append(l('  <a id="batch-message"></a>You have <span id="batch-count">'+
a+'</span> photos pinned.  <div class="alert-actions"><a class="btn small info batch-modal-click" data-controls-modal="modal" data-backdrop="static">Batch edit</a><a href="#" class="btn small pin-clear-click">Or clear pins</a></div>'))}},user:{base:{loginProcessed:function(a){200!=a.code?h("processing of login failed"):(h("login processing succeeded"),window.location.reload())}},browserid:{loginFailure:function(){h("login failed")},loginSuccess:function(a){OP.Util.makeRequest("/user/browserid/login.json",
{assertion:a},opTheme.user.base.loginProcessed)}}}}}();

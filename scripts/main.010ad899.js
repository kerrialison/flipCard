var FastClick;FastClick.attach(document.body),$(function(){"use strict";function a(a){function b(){void 0!==document.getElementsByTagName("body")[0]&&(window.clearInterval(c),a.call(b))}var c=window.setInterval(b,1e3)}function b(a,b){document.getElementById(a).className+=b?" showme":" hideme"}function c(a){for(var b,c,d=a.length;0!==d;)c=Math.floor(Math.random()*d),d-=1,b=a[d],a[d]=a[c],a[c]=b;return a}function d(a){"show"===a?($("#card-container").removeClass().one(g,function(){$("#card-container").empty()}),$(".start-screen").hasClass("exit-left")&&$(".start-screen").removeClass("exit-left")):"hide"===a&&$(".start-screen").addClass("exit-left")}function e(){var a,b=document.createElement("fakeelement"),c={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(a in c)if(void 0!==b.style[a])return c[a]}function f(){var a,b=document.createElement("fakeelement"),c={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(a in c)if(void 0!==b.style[a])return c[a]}a(function(){b("page",!0),b("loading",!1)}),$(".md-trigger").on("click",function(){$(this).addClass("active"),$(".md-modal").addClass("md-show")}),$(".md-close").on("click",function(){$(".md-trigger").removeClass("active"),$(".md-modal").removeClass("md-show")}),$(".btn-beer").on("click",function(){$(this).addClass("loading"),$(".icon-beer").toggleClass("icon-beer icon-arrows-cw")}),d("show"),$(".btn-play").on("click",function(){var a="",b=1e3,e=$(this).attr("data-level"),f=parseInt(e);8===f?(a="easy",b*=4*e):18===f?(a="medium",b*=5*e):32===f&&(a="hard",b*=6*e),d("hide"),$("#card-container").addClass("on-screen "+a);var g,i=[];for(g=0;e>g;g++)i.push(g);var j=c($.merge(i,i)),k=100/Math.sqrt(j.length);for(g=0;g<j.length;g++){var l=j[g];10>l&&(l="0"+l),$('<div class="card" style="width:'+k+"%; height:"+k+'%;"><div class="flipper"><div class="front"></div><div class="back"><i class="icon icon-'+l+'" data-icon="'+l+'"></i></div></div></div>').appendTo("#card-container")}var m="flipped",n=$("#card-container"),o=$(".card"),p=2*f,q=!1;o.on("click",function(a){if(a.preventDefault(),q)return!1;$(this).addClass(m);var b=$(this).find(".icon").attr("data-icon");n.find(".card.flipped").length>1&&(q=!0,setTimeout(function(){var a=$(".card.flipped .icon[data-icon="+b+"]");a.length>1?(a.parents(".card").toggleClass("found flipped"),q=!1,$(".card.found").length===p&&d("show")):(q=!1,o.removeClass("flipped"))},400))}),$('<i class="timer"></i>').prependTo(n).css({animation:"timer "+b+"ms linear"}).one(h,function(){d("show")})});var g=e(),h=f();$(document).keyup(function(a){27===a.keyCode&&d("show")})});
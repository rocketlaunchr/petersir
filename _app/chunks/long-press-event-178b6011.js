/*!
 * long-press-event - v@version@
 * Pure JavaScript long-press-event
 * https://github.com/john-doherty/long-press-event
 * @author John Doherty <www.johndoherty.info>
 * @license MIT
 */(function(t,r){var i=null,m="PointerEvent"in t||t.navigator&&"msPointerEnabled"in t.navigator,o="ontouchstart"in t||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0,f=m?"pointerdown":o?"touchstart":"mousedown",A=m?"pointerup":o?"touchend":"mouseup",F=m?"pointermove":o?"touchmove":"mousemove",c=0,l=0,p=10,q=10;typeof t.CustomEvent!="function"&&(t.CustomEvent=function(e,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var a=r.createEvent("CustomEvent");return a.initCustomEvent(e,n.bubbles,n.cancelable,n.detail),a},t.CustomEvent.prototype=t.Event.prototype),t.requestAnimFrame=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(e){t.setTimeout(e,1e3/60)}}();function b(e,n){if(!t.requestAnimationFrame&&!t.webkitRequestAnimationFrame&&!(t.mozRequestAnimationFrame&&t.mozCancelRequestAnimationFrame)&&!t.oRequestAnimationFrame&&!t.msRequestAnimationFrame)return t.setTimeout(e,n);var a=new Date().getTime(),s={},v=function(){var P=new Date().getTime(),L=P-a;L>=n?e.call():s.value=requestAnimFrame(v)};return s.value=requestAnimFrame(v),s}function C(e){e&&(t.cancelAnimationFrame?t.cancelAnimationFrame(e.value):t.webkitCancelAnimationFrame?t.webkitCancelAnimationFrame(e.value):t.webkitCancelRequestAnimationFrame?t.webkitCancelRequestAnimationFrame(e.value):t.mozCancelRequestAnimationFrame?t.mozCancelRequestAnimationFrame(e.value):t.oCancelRequestAnimationFrame?t.oCancelRequestAnimationFrame(e.value):t.msCancelRequestAnimationFrame?t.msCancelRequestAnimationFrame(e.value):clearTimeout(e))}function R(e){u(),e=X(e);var n=this.dispatchEvent(new CustomEvent("long-press",{bubbles:!0,cancelable:!0,detail:{clientX:e.clientX,clientY:e.clientY},clientX:e.clientX,clientY:e.clientY,offsetX:e.offsetX,offsetY:e.offsetY,pageX:e.pageX,pageY:e.pageY,screenX:e.screenX,screenY:e.screenY}));n||r.addEventListener("click",function a(s){r.removeEventListener("click",a,!0),E(s)},!0)}function X(e){return e.changedTouches!==void 0?e.changedTouches[0]:e}function Y(e){u();var n=e.target,a=parseInt(h(n,"data-long-press-delay","1500"),10);i=b(R.bind(n,e),a)}function u(e){C(i),i=null}function E(e){e.stopImmediatePropagation(),e.preventDefault(),e.stopPropagation()}function T(e){c=e.clientX,l=e.clientY,Y(e)}function g(e){var n=Math.abs(c-e.clientX),a=Math.abs(l-e.clientY);(n>=p||a>=q)&&u()}function h(e,n,a){for(;e&&e!==r.documentElement;){var s=e.getAttribute(n);if(s)return s;e=e.parentNode}return a}r.addEventListener(A,u,!0),r.addEventListener(F,g,!0),r.addEventListener("wheel",u,!0),r.addEventListener("scroll",u,!0),r.addEventListener(f,T,!0)})(window,document);

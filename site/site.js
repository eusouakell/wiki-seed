(function(){
var bg=document.querySelector('.bg'),nv=document.getElementById('nv');
if(bg){bg.addEventListener('click',function(){var o=nv.classList.toggle('op');bg.setAttribute('aria-expanded',o)})}
// reveal on scroll
var els=[].slice.call(document.querySelectorAll('[data-rv]'));
els.forEach(function(e){var i=[].indexOf.call(e.parentNode.children,e);e.classList.add('rv');e.style.setProperty('--d',(Math.min(i,5)*.08)+'s')});
if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')})}
else{var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.1,rootMargin:'0px 0px -5% 0px'});els.forEach(function(e){io.observe(e)});setTimeout(function(){els.forEach(function(e){e.classList.add('in')})},7000)}
})();

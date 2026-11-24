(function(){
var bg=document.querySelector('.bg'),nv=document.getElementById('nv');
if(bg){bg.addEventListener('click',function(){var o=nv.classList.toggle('op');bg.setAttribute('aria-expanded',o)})}
// reveal on scroll
var els=[].slice.call(document.querySelectorAll('[data-rv]'));
els.forEach(function(e){var i=[].indexOf.call(e.parentNode.children,e);e.classList.add('rv');e.style.setProperty('--d',(Math.min(i,5)*.08)+'s')});
if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')})}
else{var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.1,rootMargin:'0px 0px -5% 0px'});els.forEach(function(e){io.observe(e)});setTimeout(function(){els.forEach(function(e){e.classList.add('in')})},7000)}
// cursor badge on project cards
var cur=document.createElement('div');cur.className='cur';cur.textContent='Ver projeto';document.body.appendChild(cur);
var tx=0,ty=0,x=0,y=0,raf=0;
function loop(){x+=(tx-x)*.2;y+=(ty-y)*.2;cur.style.left=x+'px';cur.style.top=y+'px';raf=requestAnimationFrame(loop)}
document.querySelectorAll('.card').forEach(function(c){
c.addEventListener('mouseenter',function(e){tx=x=e.clientX;ty=y=e.clientY;cur.classList.add('on');if(!raf)loop()});
c.addEventListener('mousemove',function(e){tx=e.clientX;ty=e.clientY});
c.addEventListener('mouseleave',function(){cur.classList.remove('on');cancelAnimationFrame(raf);raf=0});
});
})();

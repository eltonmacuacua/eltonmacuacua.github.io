const header=document.querySelector('.site-header');
const toggle=document.querySelector('.menu-toggle');
const menu=document.querySelector('.mobile-menu');
const reveals=document.querySelectorAll('.reveal');
const cursor=document.querySelector('.cursor-dot');

document.getElementById('year').textContent=new Date().getFullYear();
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>40));

toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',open);document.body.style.overflow=open?'hidden':'';});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');document.body.style.overflow='';}));

const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target)}}),{threshold:.12});
reveals.forEach(el=>io.observe(el));

document.addEventListener('mousemove',e=>{if(cursor){cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'}});
document.querySelectorAll('a,button,.service-row').forEach(el=>{el.addEventListener('mouseenter',()=>{if(cursor){cursor.style.width='26px';cursor.style.height='26px'}});el.addEventListener('mouseleave',()=>{if(cursor){cursor.style.width='10px';cursor.style.height='10px'}})});


// Lightweight parallax: transforms only image layers, never text or layout.
const parallaxTargets = [...document.querySelectorAll('[data-parallax], .service-hero__image')];
let parallaxTicking = false;
function updateParallax(){
  const vh = window.innerHeight;
  parallaxTargets.forEach(el=>{
    const r=el.getBoundingClientRect();
    if(r.bottom < -100 || r.top > vh+100) return;
    const speed=parseFloat(el.dataset.parallax || '0.12');
    const center=r.top+r.height/2-vh/2;
    el.style.setProperty('--parallax-y', `${center * speed * -1}px`);
  });
  parallaxTicking=false;
}
function requestParallax(){ if(!parallaxTicking){ requestAnimationFrame(updateParallax); parallaxTicking=true; } }
window.addEventListener('scroll',requestParallax,{passive:true});
window.addEventListener('resize',requestParallax); requestParallax();

const tabs=[...document.querySelectorAll('[role="tab"]')];
function activate(tab){tabs.forEach(t=>{const selected=t===tab;t.setAttribute('aria-selected',String(selected));t.tabIndex=selected?0:-1;document.getElementById(t.getAttribute('aria-controls')).hidden=!selected;});}
tabs.forEach((t,i)=>{t.addEventListener('click',()=>activate(t));t.addEventListener('keydown',e=>{let n;if(e.key==='ArrowRight')n=(i+1)%tabs.length;if(e.key==='ArrowLeft')n=(i+tabs.length-1)%tabs.length;if(e.key==='Home')n=0;if(e.key==='End')n=tabs.length-1;if(n!==undefined){e.preventDefault();activate(tabs[n]);tabs[n].focus();}});});
const dialog=document.getElementById('share-dialog'),field=document.getElementById('share-url'),toast=document.getElementById('toast');let timer;
function message(text){toast.textContent=text;toast.classList.add('visible');clearTimeout(timer);timer=setTimeout(()=>toast.classList.remove('visible'),4000);}
const cardURL=location.protocol==='file:'?'https://elton-macuacua-digital.lets-play.chatgpt.site':location.origin+location.pathname;
async function share(){if(navigator.share){try{await navigator.share({title:'Elton Macuácua | Cartão Digital',text:'Tecnologia, estratégia e criatividade.',url:cardURL});return;}catch(e){if(e.name==='AbortError')return;}}field.value=cardURL;dialog.showModal();}
document.getElementById('share').addEventListener('click',share);document.getElementById('share-footer').addEventListener('click',share);
document.getElementById('copy-link').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(field.value);message('Link copiado.');dialog.close();}catch{field.focus();field.select();message('Seleccione e copie o link apresentado.');}});
dialog.addEventListener('click',e=>{const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();});

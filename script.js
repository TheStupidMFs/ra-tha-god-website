const gate=document.querySelector("#gate"),site=document.querySelector("#site"),modal=document.querySelector("#storyModal");
window.addEventListener("load",()=>{setTimeout(()=>{const l=document.querySelector("#loader");if(l)l.style.opacity="0"},650);setTimeout(()=>document.querySelector("#loader")?.remove(),1100)});
function enterWorld(target){gate.style.transition="opacity .8s,filter .8s,transform .8s";gate.style.filter="blur(12px) saturate(1.8)";gate.style.transform="scale(1.04)";gate.style.opacity="0";site.classList.add("active");site.setAttribute("aria-hidden","false");document.body.classList.remove("locked");setTimeout(()=>{gate.style.display="none";if(target)document.querySelector(target)?.scrollIntoView()},850)}
document.querySelector("#enterBtn")?.addEventListener("click",()=>enterWorld());
document.querySelector("#storyBtn")?.addEventListener("click",()=>modal.classList.add("open"));
document.querySelector("#closeStory")?.addEventListener("click",()=>modal.classList.remove("open"));
document.querySelector("#storyEnter")?.addEventListener("click",e=>{e.preventDefault();modal.classList.remove("open");enterWorld("#story")});
document.addEventListener("keydown",e=>{if(e.key==="Escape")modal.classList.remove("open")});
const cursor=document.querySelector(".cursor");window.addEventListener("pointermove",e=>{if(cursor){cursor.style.left=e.clientX+"px";cursor.style.top=e.clientY+"px"}});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("seen")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

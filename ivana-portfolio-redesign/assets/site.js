
document.addEventListener('DOMContentLoaded', () => {
  const yr=document.getElementById('yr'); if(yr) yr.textContent=new Date().getFullYear();
  const path=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('nav.site .links a').forEach(a=>{ if(a.getAttribute('href')===path) a.style.textDecoration='underline'; });
  const io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){e.target.classList.add('in'); io.unobserve(e.target);} }),{threshold:.15});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
});

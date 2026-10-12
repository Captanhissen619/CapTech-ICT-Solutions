// SCROLL REVEAL ANIMATION
const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('active');
      
      // animate skill bars when skills section enters
      if(entry.target.classList.contains('skill-box') || entry.target.closest('#skills')){
        document.querySelectorAll('.bar').forEach(bar=>{
          const w = bar.getAttribute('data-w');
          setTimeout(()=>{ bar.style.width = w + '%'; }, 200);
        });
      }
    }
  });
}, {threshold: 0.15});

document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-zoom, .skill-box').forEach(el=>{
  revealObserver.observe(el);
});

// Smooth button click ripple
document.querySelectorAll('.btn').forEach(btn=>{
  btn.addEventListener('click', function(e){
    let ripple = document.createElement('span');
    ripple.style.position='absolute';
    ripple.style.width='20px'; ripple.style.height='20px';
    ripple.style.background='rgba(255,255,255,0.5)';
    ripple.style.borderRadius='50%';
    ripple.style.left=e.offsetX+'px'; ripple.style.top=e.offsetY+'px';
    ripple.style.transform='translate(-50%,-50%)';
    ripple.style.animation='ripple 0.6s linear';
    this.appendChild(ripple);
    setTimeout(()=>ripple.remove(),600);
  });
});

// add ripple keyframe dynamically
const style = document.createElement('style');
style.textContent = `@keyframes ripple{to{width:200px;height:200px;opacity:0}} .btn{position:relative; overflow:hidden}`;
document.head.appendChild(style);

// Parallax for hero image on mouse move (desktop)
const heroImg = document.querySelector('.img-wrapper');
document.addEventListener('mousemove',(e)=>{
  if(window.innerWidth < 900) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 15;
  const y = (e.clientY / window.innerHeight - 0.5) * 15;
  if(heroImg) heroImg.style.transform = `translate(${x}px, ${y}px)`;
});
Custom slider
inside<head> tag
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"/>
<style>slide-nav:active { background: #0097A1; border-color: #0097A1; }
slide-nav:{ background: transparent; border-color: #0097A1; }
.swiper-container{overflow:inherit;}
.swiper-pagination-bullet{margin-right:8px;background:none;border:2px solid #095D60;width:12px;height:12px}
.swiper-pagination-bullet-active{background:#095D60}</style>

before <body> tag
<script src="https://unpkg.com/swiper/swiper-bundle.min.js">
</script>
<script>  var swiper = new Swiper(".ts-swiper", {    
slidesPerView: 1,    
spaceBetween: 40,    
mousewheel: false,    
keyboard: false,  
freeMode: false,  
pagination: {      el: ".swiper-pagination1",      clickable: true,    },    
breakpoints: {      
768: {        
slidesPerView: 2,        
spaceBetween: 40,      
},      
1024: {        
slidesPerView: 3,        
spaceBetween: 50,        
freeMode: true,        
mousewheel: true,    
keyboard: true,      
},    },  });
</script>

navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
       },

Slider dotes
<Style>
.w-slider-dot {    
background: transparent;    
border: 1.5px solid;    
border-color: #0097A1;    
width:10px;    
height:10px;
}    
.w-slider-dot.w-active {    
background: #0097A1;
}
</Style>

For Loop slider
loop:true,









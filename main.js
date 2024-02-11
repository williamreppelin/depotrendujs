

  document.addEventListener('DOMContentLoaded',function(){
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        autoplay: {
            delay: 2000,
          },
      });
  })

  const lightbox= new SimpleLightbox('.card a')

  const options = {
    gutterPixels: 50
  }

  const filterizr = new Filterizr('.portfolio-elements', options)

  let filterItems= document.querySelectorAll(".filters li")
  filterItems.forEach(function(filterItem){
    filterItem.addEventListener('click', function(){
        document.querySelector('.filters .active').classList.remove('active')
        filterItem.classList.add('active')
    })
  })


$("#darkTrigger").click(function(){
  if ($("body").hasClass("dark")){
    $("body").removeClass("dark");
  }
  else{
    $("body").addClass("dark");
  }
});

$(document).ready(function () {
  var d = new Date();
  var n = d.getHours();

  if(n > 17 || n < 8){
    $("body").addClass("dark");
  }
});
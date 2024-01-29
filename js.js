
function loading(){
    var tl=gsap.timeline();
    tl.to(".yellow1",{
        top:"-100%",
        delay:0.5,
        duration:0.7,
        ease:"expo.out"
    });
    tl.from(".yellow2",{
        top:"100%",
        delay:0.5,
        duration:0.7,
        ease:"expo.out"
    },"ani");
    tl.to(".loader h1",{
        delay:0.6,
        duration:0.7,
        color:"black", 
    },"ani");

    tl.to(".loader",{
      opacity:0
    });
    tl.to(".loader",{
        display:"none"
     });
     
}
loading();

function logic(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true
    });
    
    document.querySelector(".footer h2").addEventListener("click",()=>{
        scroll.scrollTo(0);
    })
    
    var elem=document.querySelectorAll(".elem");
    var pg2= document.querySelector(".pg2")
    elem.forEach(function(ele){
        ele.addEventListener("mouseenter",function(){
           var bg= ele.getAttribute("data-img");
          pg2.style.backgroundImage=`url(${bg})`
        })
    })
}
logic()



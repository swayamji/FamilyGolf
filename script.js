var crsr= document.querySelector("#cursor")
var blur= document.querySelector("#blur")
document.addEventListener("mousemove",function(det){
    crsr.style.left=det.x+30+"px"
    crsr.style.top=det.y+30+"px"
    blur.style.left=det.x-200+"px"
    blur.style.top=det.y-200+"px"

})

var h4all = document.querySelectorAll("#nav h4,button");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 4;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

gsap.to("#nav", {
    backgroundColor:"#000",
    duration: 2,
    height: "95px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        marker: true,
        start: "top -11%",
        end: "top -14%",
        scrub: 1

    },
});

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -47%",
        end:"top -60%",
        scrub: 2

    }
})

gsap.from("#about-us,about",{
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"Body",
        start:"top 61%",
        end:"top 57%",
        scrub:2,
    }
})

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

  gsap.from("#page4 h1", {
    y: 50,
    duration:0.1,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 80%",
      end: "top 74%",
      scrub: 3,
    },
  });
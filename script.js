var crsr = document.querySelector(".cursor")
var csbr = document.querySelector(".cursorBlur")

document.addEventListener("mousemove",function (dets) {
    crsr.style.left = dets.x -10 + 'px'
    crsr.style.top = dets.y -10 + 'px'
    csbr.style.left = dets.x -120 + 'px'
    csbr.style.top = dets.y -120 + 'px'

})


gsap.to(".nav",{
    backgroundColor : "black",
    duration : 0.5,
    height : "90px",
    scrollTrigger :{
        trigger :".nav",
        scroller :"body",
        start :"top -10%",
        end : "top -11%",
        scrub : 1
    }
})

gsap.to(".main",{
    backgroundColor : "black",
    scrollTrigger : {
        trigger : ".main",
        scroller : "body",
        start : "top -25%",
        end : "top -70%",
        scrub : 2
    }
})
var tl=gsap.timeline()
let string=document.querySelector('.string')
let initialValue=`M 10 100 Q 500 100 990 100`
let finalValue=`M 10 100 Q 500 100 990 100`
let btn=document.getElementById('btn')
tl.from('h2',{
  y:-30,
  duration:0.8,
  delay:0.5,
  opacity:0
})
tl.from('.part2 a',{
  y:-40,
  duration:0.5,
 stagger:0.1
})
tl.from('.hero img',{
  y:10,
  duration:0.5,
  scale:0.3,
  opacity:0
})
tl.from('.hero .text',{
  y:-10,
  duration:0.5,
  opacity:0
})


gsap.from('.logos span',{
  scale:0,
  x:-3,
  duration:1,
  delay:0.5,
  stagger:0.1,
  scrollTrigger:{
    trigger:'.logos span',
    scroller:"body",
    start:'top 70%',
    // markers:true
  }
})
gsap.from('.col-6 ',{
  y:-40,
  opacity:0,
  duration:1,
  stagger:0.2,
  scrollTrigger:{
    trigger:'.col-6',
    scroller:"body",
    start:'top 40%',
    // markers:true
  }
})

gsap.to('.section h1',{
  transform:"translateX(calc(-100% - 2vw - 4px))",
  scrollTrigger:{
    trigger:'.section ',
    scroller:'body',
    start:'top 100%',
    end:'top -100%',
    scrub:1,
    
  }
})


// string.addEventListner('click',()=>{
// console.log('it is clicked')
// })
string.addEventListener('mousemove',(event)=>{
  initialValue=`M 10 100 Q ${event.x} ${event.y} 990 100`
  console.log(event.X,event.Y,"and",event.x,event.y)
 gsap.to('svg path',{
  attr:{d:initialValue},
  duration:0.5
 })
})
string.addEventListener('mouseleave',(event)=>{
 gsap.to('svg path',{
  attr:{d:finalValue}
  ,duration:1.5,
  ease:'elastic.out'
 })
})

btn.addEventListener("click",()=>{
  window.open(
    "https://github.com/imdilshad", "_blank")
})
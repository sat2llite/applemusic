const sliders = document.querySelectorAll('.slider')
const uls = document.querySelectorAll('.slider ul')
// const sliderWidth = [6008,3418,6008]
  sliders.forEach((slider,index)=>{
    slider.append(uls[index].cloneNode(true))
  })
let move = 0
const moveSlider = ()=>{
  uls.forEach((ul)=>{
    const ulWidth = ul.offsetWidth
      ul.style.transition = `40s linear`
      ul.style.marginLeft = `-${ulWidth}px`
      setInterval(()=>{
        ul.style.transition = `0s`
        ul.style.marginLeft = `0px`
        setTimeout(()=>{
          ul.style.transition = `40s linear`
          ul.style.marginLeft = `-${ulWidth}px`
        },100)
        
      },40000)
  })
}

moveSlider()

const chapters = document.querySelector('.chapters')
const titleH1 = document.querySelector('.title h1')
const titleP = document.querySelector('.title_sub p')
const banner_wrap = document.querySelector('.banner_wrap')
const banner = document.querySelector('.banner')
const video_scroll_wrap = document.querySelector('.video_scroll_wrap')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
setTimeout(()=>{
  chapters.classList.remove('on')
},0)
setTimeout(()=>{
  titleH1.classList.remove('on')
},800)
setTimeout(()=>{
  titleP.classList.remove('on')
},1800)
setTimeout(()=>{
  banner_wrap.classList.remove('on')
  banner.classList.remove('on')
  video_scroll_wrap.classList.remove('on')
},2800)
const chapLis = chapters.querySelectorAll('li')
let chapNum = 0

const prevClick = ()=>{
  chapNum --
  let chapWidth = 30
  for(i = 0;i < chapNum; i++){
    chapWidth = chapWidth+chapLis[i].offsetWidth+20
  }

  
  if(chapNum === 0){
    prev.classList.add('on')
  }
  if(chapNum === 2){
    next.classList.remove('on')
  }
  chapters.style.marginLeft = `-${chapWidth}px`
}
const nextClick = ()=>{
    let chapWidth = 30
  for(i = 0;i <= chapNum; i++){
    chapWidth = chapWidth+chapLis[i].offsetWidth+20
  }
  chapNum ++
  if(chapNum === 3){
    next.classList.add('on')
  }
  if(chapNum === 1){
    prev.classList.remove('on')
  }
  chapters.style.marginLeft = `-${chapWidth}px`
  }
prev.addEventListener('click',prevClick)
next.addEventListener('click',nextClick)

// 슬라이드 이미지 폼생성!

const  sliderLis = document.querySelectorAll('.section1 .slider li, .section3 .slider li')
const  form_wrap = document.querySelector('.form_wrap')
const  form = document.querySelector('.form')
const body = document.querySelector('body')
sliderLis.forEach((sliderLi)=>{
  
  sliderLi.addEventListener('click',()=>{
    while(form.firstChild){
      form.removeChild(form.firstChild)
    }
    const formImg = sliderLi.querySelector('.slider_img')
    const formTitle = sliderLi.querySelector('.slider_title')
    const formSubtitle = sliderLi.querySelector('.slider_subtitle')
    const cloneImg = formImg.cloneNode(true)
    const cloneTitle = formTitle.cloneNode(true)
    const cloneSubtitle = formSubtitle.cloneNode(true)
    form.append(cloneTitle,cloneImg,cloneSubtitle)
    form_wrap.classList.add('on')
  })
})

form_wrap.addEventListener('click',()=>{
  form_wrap.classList.remove('on')
})


//sub menu
const menuLis = document.querySelectorAll(".header_ul li");
const subs = document.querySelectorAll(".sub");
const main_top_wrap = document.querySelector('.main_top_wrap')

let num = 0;

menuLis.forEach(function (menuLi, index) {
  menuLi.addEventListener("mouseover", function () {
    subs[num] && subs[num].classList.remove("on");
    subs[index] && subs[index].classList.add("on");
    num = index;
  });
});


main_top_wrap.addEventListener('mouseover',()=>{
  subs.forEach((sub)=>{
    sub.classList.remove('on')
  })
})
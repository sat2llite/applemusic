//헤더 부분 스크립트


//ham버튼을 클릭했을 때 header_open이라는 클라스가 추가
// document.getElementsByClassName('ham')[0].addEventListener('click',function(){
//     document.getElementsByClassName('header_menu')[0].classList.add('header_open');

// })




const ham = document.querySelector('.ham');
const headerWrap = document.querySelector('.header_wrap');

ham.addEventListener('click', function(){
    document.querySelector('.header_menu').classList.toggle('header_open');
    headerWrap.classList.toggle('active');
    console.log('')
});
//ham버튼을 클릭했을 때 header_open이라는 클라스가 추가

// ham.addEventListener('click',function(){
//     // doc/ument.getElementsByClassName('header_menu')[0].classList.add('header_open');
//     console.log(ham)
// })



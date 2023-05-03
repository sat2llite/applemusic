import products from "../json/ipad.json" assert {type:'json'}



const pages = document.querySelectorAll('.ipad_page'); // 페이지들을 가져옴
let currentPage = 0;

if(window.innerWidth > 1078){
  window.addEventListener('wheel', function(e) {  // 마우스 휠이 동작할때 함수 작동
  if (e.deltaY > 0) { // 스크롤을 내릴 때
    if ( pages[currentPage].getBoundingClientRect().bottom <= window.innerHeight) {
      currentPage++;
      if (currentPage > pages.length - 1) {
        currentPage = pages.length - 1;
      }
    }
  } else { // 스크롤을 올릴 때
    if (pages[currentPage].getBoundingClientRect().top >= 0) {
      currentPage--;
      if (currentPage < 0) {
        currentPage = 0;
      }
    }
  }
  
  window.scrollTo({
    top: pages[currentPage].offsetTop,
    behavior: 'smooth'
  });
  
});

  const filters_container = document.querySelector(`.filters_container`)
window.addEventListener('scroll', function(event){
  filters_container.classList.add('on');
  if(window.scrollY < 269){
    filters_container.classList.remove('on');
  }
})

}



// color 선택기
const pad_items = document.querySelectorAll('.pad_item')
const colorChoice = ()=>{
  pad_items.forEach((pad_item)=>{
    const colorLis = pad_item.querySelectorAll('.ipad_color_wrap li')

    const colorButtons = pad_item.querySelectorAll('.ipad_color_wrap button')

    colorLis.forEach((li,index)=>{
      li.addEventListener('click',()=>{
        colorButtons.forEach((colorButton)=>{
          colorButton.classList.remove('on')
          })
        const colorButton = li.querySelector('button')
        colorButton.classList.add('on')
        const pad_item_imgs = pad_item.querySelectorAll('.pad_item_img img')
        pad_item_imgs.forEach((pad_item_img)=>{
          pad_item_img.classList.remove('on')
          pad_item_imgs[index].classList.add('on')
        })
      })
    })
  })
}

colorChoice()





  //필터정의
  const filters = document.querySelectorAll('.filter')

  // filter1이 옵션을 바꿀때 filter1의 새로 바꾸는 옵션과 다른 필터의 기존옵션이 같다면 다른필터를 filter1의 기존 옵션상태로 바꾼다.


let preValue  // 기존옵션벨류 -click
let nextValue // 변경옵션벨류 -change
let changeOption 

  // 클릭되는 순간 기존 옵션 벨류 가져오기
  const filterClick = (clickEvent)=>{
    const options = clickEvent.target.querySelectorAll('option')
    options.forEach((option)=>{
      const {selected} = option
    if(selected){
      const {value} = option
      preValue = value
    }
    })
    
  }

const change = (e)=>{
  /* 선택후 변경된 3개의 선택벨류 가져오기 */
  //필터가 선택된후의 각각의 필터 선택벨류 담아두는 객체 filterValue
  const filterValue = {}

  /* 셀렉트 선택 change 이벤트로 선택된 filter value 가져오기*/
  const eFilter = e.target
  const eOptions = eFilter.querySelectorAll('option')
  eOptions.forEach((eOption)=>{
    const {selected} =eOption
    if(selected){
      const {value} = eOption
      nextValue = value
    }
  })

  // 각각의 필터의 선택된벨류를 가져오는 기능
  filters.forEach((filter)=>{ //세개의 필터 어레이를 forEach로 돌림
    if(filter !== e.target){ // 현재 선택중인 필터만 제외하고 진행
      filter.childNodes.forEach((option)=>{ //두 필터를 forEach로 돌림 (옵션)
        const {selected} = option   //옵션의 selected 속성을 뽑아냄

        if(selected){               //selected 속성이 있다면?
          const {value} = option    // 옵션의 밸류 뽑아오기
          if(nextValue == value){      // 옵션의 밸류가 선택옵션과 같아 
            option.selected = false  // 셀렉트 false
            filter.childNodes.forEach((option)=>{
              if(option.value === preValue){
                option.selected = true
              }
            })
          }
        }
      })
    }
  })
  //벨류들을 받아와 객체에 담기(이후 json파일에서 가져올때 비교)
  filters.forEach((filter,index)=>{
    filter.childNodes.forEach((option)=>{
      const {selected} = option
        if(selected){               
          const {value} = option
          filterValue[`filterValue${index+1}`] = value
        }
    })
  })
  //console.log(filterValue)

  /* 객체에 받아둔 벨류정보를 보기쉽게 꺼내온다. */
  const model1 =filterValue.filterValue1
  const model2 =filterValue.filterValue2
  const model3 =filterValue.filterValue3

  console.log(model1,model2,model3)

  /*
  1번 벨류와 제이슨 네임을 비교해서 같은 정보를 가지고 있는지 비교
  같은정보를 가지고 있는것만 필터링해서 modelObj1에 집어넣는다.
  modelObj1은 첫번째 필터에서 선택되어있는 벨류에 해당하는 json데이타
  이제 이 데이타에서 뽑아온 정보를 활용해 내용을 수정한다.
  2번과 3번도 반복
  */
  
  const modelObj1 = products.data.find((modelObj)=>{
    return modelObj.name === model1
  })
  const modelObj2 = products.data.find((modelObj)=>{
    return modelObj.name === model2
  })
  const modelObj3 = products.data.find((modelObj)=>{
    return modelObj.name === model3
  })
  console.log(modelObj1)
  console.log(modelObj2)
  console.log(modelObj3)
  const modelObj = [modelObj1,modelObj2,modelObj3]
  console.log(modelObj)
  // 가져온 제이슨 정보로 데이터들은 변경시키기
  

  //모든 바뀔 데이터 삭제해주는 함수 실행
  removeAll()
  createAll(modelObj)
  colorChoice()
}


// 모든 바뀔 데이터 삭제해주는 함수 정의
const removeAll = ()=>{
  // 아이패드 이미지를 삭제해주는 함수 정의
  const removePadImg = ()=>{
    pad_items.forEach((pad_item)=>{
      const padImgs = pad_item.querySelectorAll('.pad_item_img img')
      padImgs.forEach((padImg)=>{
        padImg.remove()
        
      })
    })
  }
  // 아이패드 컬러선택기를 삭제해주는 함수 정의
  const removeColor = ()=>{
    const ipadColors = document.querySelectorAll('.ipad_color_wrap li')
    ipadColors.forEach((ipadColor)=>{
      ipadColor.remove()
    })
  }

  //removeAll 실행시 아이패드 이미지를 삭제해주는 함수실행
  removePadImg()
  removeColor()
}
// 모든 바뀔 데이터를 넣어주는 함수 정의
const createAll = (modelObj)=>{
  // 아이패드 이미지 재생성함수정의
  const createPadImg = ()=>{
    const pad_item_imgs = document.querySelectorAll('.pad_item_img')
    pad_item_imgs.forEach((pad_item_img,index)=>{
      const Num = modelObj[index].colorNum
      const imgs = Object.keys(modelObj[index])
      .filter((key)=>{return key.startsWith("img")})
      .map((key)=>{return modelObj[index][key]})
      for(let i = 0; i < Num; i++){
        const createImg = document.createElement('img')
        createImg.setAttribute('src',imgs[i])
        pad_item_img.append(createImg)
      }
    })
  }
  // 아이패드 컬러 선택기 재생성 함수 정의
  const createcolor = () => {
    const ipadColorBoxs = document.querySelectorAll('.pad_item ul')
    ipadColorBoxs.forEach((ipadColorBox,index)=>{
      const Num = modelObj[index].colorNum
      const colors = Object.keys(modelObj[index])
      .filter((key)=>{return key.startsWith("colors")})
      .map((key)=>{return modelObj[index][key]})
      const cssColor = Object.keys(modelObj[index])
      .filter((key)=>{return key.startsWith("cssColor")})
      .map((key)=>{return modelObj[index][key]})
      for(let i=0; i < Num; i++){
        const ipadColorLi = document.createElement('li')
        const ipadColorButton = document.createElement('button')
        const ipadColorFigure = document.createElement('figure')
        const ipadColorFigcaption = document.createElement('figcaption')
        ipadColorFigcaption.innerText = `${colors[i]}`
        ipadColorFigcaption.className = 'ipad_color'
        ipadColorFigure.classList.add(`${cssColor[i]}`)
        ipadColorFigure.append(ipadColorFigcaption)
        ipadColorButton.append(ipadColorFigure)
        ipadColorLi.append(ipadColorButton)
        ipadColorBox.append(ipadColorLi)
      }
      const firstButton = ipadColorBox.querySelector('button')
      firstButton.classList.add('on')
  })
  }

  createPadImg()
  createcolor()
}


// 각각의 필터가 옵션변경 될때 change 함수발동!
filters.forEach((filter)=>{
  filter.addEventListener('change',change)
})


// 각각의 필터가 선택될때  filterClick 함수 발동!
filters.forEach((filter)=>{
  filter.addEventListener('click',filterClick)
})



//sub menu
const menuLis = document.querySelectorAll(".header_ul li");
const subs = document.querySelectorAll(".sub");
const ipad_pages = document.querySelectorAll('.ipad_page')

let num = 0;

menuLis.forEach(function (menuLi, index) {
  menuLi.addEventListener("mouseover", function () {
    subs[num] && subs[num].classList.remove("on");
    subs[index] && subs[index].classList.add("on");
    num = index;
  });
});


ipad_pages.forEach((ipad_page)=>{ipad_page.addEventListener('mouseover',()=>{
  subs.forEach((sub)=>{
    sub.classList.remove('on')
  })
})
})



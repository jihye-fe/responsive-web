// 탭
const subTab = document.querySelector(".sub-tab");
const subTabBtns = document.querySelectorAll(".sub-tab-btn"); // li가 둘 이상, querySelectorAll 사용
const tabDetails = document.querySelectorAll(".tab-detail") // 둘 이상, querySelectorAll 사용

// const subTabBtns = document.querySelectorAll(".sub-tab-btn");  >> 이렇게 사용해야함
// const tabDetails = document.querySelectorAll(".tab-detail")

// tabDetails[inx].classList.add("on");

// 1. 각 li가 다 클릭 대상이 되게 >> subTabBtns.forEach((대상,인덱스)=>{
//})

//     // 탭메뉴, 디테일= on 클래스 모두 제거
//     // on 클래스 생성

subTabBtns.forEach(function(btn, inx){
    btn.addEventListener("click", function(b){
        b.preventDefault(); // 링크 안 열게 막기
        subTabBtns.forEach(function(b){
            b.classList.remove("on") // 클래스 먼저 다 제거
        })
        subTabBtns[inx].classList.add("on"); // 내가 누른 거(inx) 만 add
    
        tabDetails.forEach(function(b){
            b.classList.remove("on")
        })
        tabDetails[inx].classList.add("on")
    })
})
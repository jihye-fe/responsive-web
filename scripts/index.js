var swiper = new Swiper(".banner-swiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        prevEl: ".banner-swiper .icon-m.prev",
        nextEl: ".banner-swiper .icon-m.next",
    },
    pagination: {
        el: ".banner-swiper .swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".banner-swiper .page",
        type: "fraction",
    },
});

// 현재 시간 < 종료 시간(2026,5,15,23,59,59)
const today = new Date();
// console.log(today);
const year = today.getFullYear();
const month = today.getMonth();
const date = today.getDate();

const popupWrap = document.querySelector(".popup-wrap");
const closeBtn = popupWrap.querySelector(".close-btn");
const checkBox = popupWrap.querySelector("input");
const label = popupWrap.querySelector("label");
// 닫기 버튼 클릭
closeBtn.addEventListener("click", function(){

    if(checkBox.checked){
        // 오늘 자정전까지만 팝업 숨기기 (팝업이 종료되는 시간)
        const endDate = new Date(year, month, date, 15, 57, 59);

        // 로컬스토리지에 저장
        localStorage.setItem("popupEnd", endDate);
    }
    popupWrap.style.display = "none"
});

// 체크박스 off/on - change
checkBox.addEventListener("change", function(){
    console.log(checkBox.checked); // true 또는 false
    if(checkBox.checked){
        label.classList.add("check");
    }else{
        label.classList.remove("check");
    }
})

const popupEnd = localStorage.getItem("popupEnd");
if(popupEnd){
    // 저장된 시간
    const endDate = new Date(popupEnd);

    if(today < endDate){
        popupWrap.style.display = "none";
    }
}

// 스와이퍼
var swiper = new Swiper(".popup-swiper", {
spaceBetween: 30,
centeredSlides: true,
autoplay: {
    delay: 2500,
    disableOnInteraction: true,
},
pagination: {
    el: ".popup-swiper .swiper-pagination",
    clickable: true,
},
navigation: {
    nextEl: ".popup-wrap .swiper-button-next",
    prevEl: ".popup-wrap .swiper-button-prev",
},
breakpoints: {
    650 : {
        slidesPerView: 2,
        navigation: false,
        centeredSlides: false
    }
},
});
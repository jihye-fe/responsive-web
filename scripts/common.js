// 탭
const subTab = document.querySelector(".sub-tab");
const subTabBtns = document.querySelectorAll(".sub-tab-btn");
const tabDetails = document.querySelectorAll(".tab-detail")

subTabBtns.forEach(function(btn, inx){
    btn.addEventListener("click", function(b){
        b.preventDefault();
        subTabBtns.forEach(function(b){
            b.classList.remove("on")
        })
        subTabBtns[inx].classList.add("on");
    
        tabDetails.forEach(function(b){
            b.classList.remove("on")
        })
        tabDetails[inx].classList.add("on")
    })
})

// 사이드바 열림접힘 표시 - 보류
// const asideWrap = document.querySelector(".aside-wrap")
// const isSub = asideWrap.querySelector(".is-sub")



// 페이지번호
// 선택자
const num = document.querySelectorAll(".page-num-box .num");
const prevBtn = document.querySelector(".page-num-box .prev");
const nextBtn = document.querySelector(".page-num-box .next");

let start = 0;

showPage();

// 숫자 클릭
for (let i = 0; i < num.length; i++) {
    num[i].addEventListener("click", function () {

        for (let j = 0; j < num.length; j++) {
            num[j].classList.remove("on");
        }

        this.classList.add("on");
    });
}

// 다음
nextBtn.addEventListener("click", function () {
    if (start < 5) {
        start += 5;
        showPage();
    }
});

// 이전
prevBtn.addEventListener("click", function () {
    if (start > 0) {
        start -= 5;
        showPage();
    }
});

// 페이지 보여주기
function showPage() {
    for (let i = 0; i < num.length; i++) {
        num[i].style.display = "none";
        num[i].classList.remove("on");
    }

    for (let i = start; i < start + 5; i++) {

        if (num[i]) {
            num[i].style.display = "";
        }

    }

    num[start].classList.add("on");
}
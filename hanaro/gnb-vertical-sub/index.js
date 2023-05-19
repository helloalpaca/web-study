
$(document).ready(function () {
  $(".gnb li").on("mouseover focusin", function () {
    $(this).siblings().children("ul").stop().slideUp(200);
    $(this).children("ul").stop().slideDown(300);
  });
  $(".gnb li").on("mouseleave", function () {
    $(this).children("ul").stop().slideUp(200);
  });
  $(".gnb li:last a").on("focusout", function () {
    $(this).parent("ul").stop().slideUp(200);
  });
});

/*
const lis = document.querySelectorAll(".gnb li");

function onClickLi() {
  // console.log(this);
  console.log(this.querySelector("ul"));
  if (this.querySelector("ul")) {
    this.querySelector("ul").style.display = "block";
  }
}

lis.forEach((li) => {
  li.addEventListener("mouseover", onClickLi);
});
*/
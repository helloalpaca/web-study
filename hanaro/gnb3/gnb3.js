$(document).ready(function () {
  $(".gnb li").on("mouseover focusin", function () {
    $(this).children("ul").stop().fadeIn(300);
    // 위에 this는 그 위에서 선택자로 썼던 ".gnb li"를 의미함
    // stop 무슨 차이지?? 보이는건 동일. 컴퓨터에게 쓸데없는 짓을 하지말라고 하는??
  });
  $(".gnb li").on("mouseleave", function () {
    $(this).children("ul").stop().fadeOut(200);
  });
  $(".gnb li").on("mouseover focusin", function () {
    $(".bg_gnb").stop().fadeIn(300);
  });
  $(".gnb li").on("mouseleave focusout", function () {
    $(".bg_gnb").stop().fadeOut(200);
  });
  $(".gnb > li").on("focusout", function () {
    $(this).children("ul").stop().fadeOut(200);
  });
});

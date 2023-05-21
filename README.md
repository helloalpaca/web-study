# HTML + CSS + JavaScript Study Repo

1. Chrome Todo App made by VanillaJS & HTML & CSS
2. Css Layout MasterClass
3. Digital Hanaro HTML & CSS & JS examples

2023.04.17 ~

# JS STUDY

1. querySelector(".className")
    - querySelector(".hello h1")
2. querySelector("#idName") 
    - querySelector("#hello h1")
3. querySelectorAll()
4. addEventListener("click", functionName)

5. localStorage
    - localStorage.setItem(key, value)
    - localStorage.getItem(key) => return null or value
    - localStorage.remove(key)
6. display: none과 visibility: hidden의 차이
    - display: none은 잡아둔 공간도 사라진다.
    - visibility: hidden은 잡아둔 공간은 그대로 두고, 보이지만 않는다.
7. string과 변수를 더할때는 "text~ ${변수}";로 써주는게 보기 좋다.

8. setInterval(function, 5000) : every 5 seconds, run function
9. setTimeout(function, 5000) : after 5 seoncds, run function (once)
10. padStart(maxLength, ch) : maxLength가 될 때까지 ch를 앞에 추가
    - padEnd : maxLength가 될 때까지 ch를 뒤에 추가
11. Math
    - Math.random() : return value that 0 <= value < 1
    - Math.round(x) : 반올림
    - Math.ceil(x) : 올림
    - Math.floor(x) : 내림
12. document.createElement()
    - appendChild() : 맨 뒤에 요소 추가
    - prepend() : 맨 앞에 요소 추가

# CONVENTION
1. 변수명, 함수명은 lowerCamelCase
2. 클래스는 PascalCase
3. string만 포함된 변수의 변수명은 UPPSER_CASE로 쓰는게 관습이다.
    - 예 : HIDDEN_CLASSNAME = "hidden"

function userProgress(time) {
  let start = 0; //начальная и постоянная позиция бара
  let progressElement = document.querySelector("#user-progress"); // елемент бара
  const itervalId = setInterval(function () {
    //иф есл для окончания функции
    if (start > 100) {
      clearInterval(itervalId);
      userProgressCallBack();
    } else {
      progressElement.value = start;
    }
    start++; //наращвание
  }, time);
}

userProgress(60);

function userProgressCallBack() {
  document.querySelector(".hidden-block").style.display = "block";
  //whatever you want
}

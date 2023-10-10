const checkBoxArray = document.querySelectorAll(".checkBox");
checkBoxArray.forEach((el) =>
  el.addEventListener("click", function () {
    if (el.checked)
      document.querySelector(`.${el.id}`).style.textDecoration = "line-through";
    else document.querySelector(`.${el.id}`).style.textDecoration = "";
  })
);

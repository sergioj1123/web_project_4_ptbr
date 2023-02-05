let items = document.querySelectorAll(".photo__likeButton_item");
items.forEach((item) =>
  item.addEventListener("click", function () {
    // console.log(event.target.src);
    // como o src de ambas imagens é o mesmo, se diferenciando só no final com o _black
    if (event.target.src.includes("_black.svg")) {
      event.target.src = "./images/like_button.svg";
    } else {
      event.target.src = "./images/like_button_black.svg";
    }
  })
);

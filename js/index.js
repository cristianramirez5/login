const $sign_in_btn = document.querySelector("#sign-in-button");

const $sing_up_btn = document.querySelector("#sign-up-button");

const $container = document.querySelector(".container");

$sing_up_btn.addEventListener("click", (e) => {
  $container.classList.add("sign-up-mode");
});

$sign_in_btn.addEventListener("click", (e) => {
  $container.classList.remove("sign-up-mode");
});

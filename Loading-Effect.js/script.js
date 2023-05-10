const amount = document.querySelector(".amount");
const present = document.querySelector(".pAmount");
const future = document.querySelector(".fAmount");
const button = document.querySelector(".but");
const loader = document.querySelector(".loader");
const result = document.querySelector(".result");
const result1 = document.querySelector(".result1");
const del = document.querySelector(".del");
let number = true;
function error() {
  console.log("active");
  const error = document.createElement("div");
  error.innerHTML = "<h6>Kindly Fill All The Field</h6>";
  error.classList.add("text-center");
  error.className = "b";
  const target = document.querySelector(".card-body");
  target.parentNode.insertBefore(error, target);
  number = false;
  setTimeout(function () {
    number = true;
    error.remove();
  }, 2000);
}

button.addEventListener("click", function (e) {
  e.preventDefault();
  if (present.value === "" || future.value === "" || amount.value === "") {
    if (number === true) {
      error();
    }
  } else {
    const answer =
      Number(amount.value) + Number(present.value) + Number(future.value);
    console.log(amount.value === "");
    console.log(answer);
    amount.value = "";
    present.value = "";
    future.value = "";
    result1.textContent = answer;
    amount.blur();
    present.blur();
    future.blur();
    loader.classList.remove("hidden");
    result.classList.add("hidden");
    setTimeout(function () {
      loader.classList.add("hidden");
      result.classList.remove("hidden");
    }, 3000);
  }
});
del.addEventListener("click", function () {
  result.classList.add("hidden");
});

(function () {
  const title = document.querySelector(".title");
  const input = document.querySelector(".input");
  const submitBtn = document.querySelector(".submit-btn");
  submitBtn.addEventListener("click", showText);
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      showText();
    }
  });

  function showText(){
    const result = input.value;
    title.innerHTML = result;
    const isSymbols = result.match(/[$-/:-?{-~!"^_`\[\]@№]/);
    if (isSymbols) {
      title.style.color = "red";
    } else if (!isSymbols && result.length > 3) {
      title.style.color = "green";
    } else {
      title.style.color = "white";
    }
    input.value = "";
  };
})();

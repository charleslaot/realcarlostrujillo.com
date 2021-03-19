(function getQuote() {
  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("https://api.github.com/zen", requestOptions)
    .then((response) => response.text())
    .then(
      (result) =>
        (document.getElementById("quote").innerHTML = "\x22" + result + "\x22")
    )
    .catch((error) => console.log("error", error));
})();

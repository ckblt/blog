function query(key) {
  return new URLSearchParams(location.search).get(key);
}

$(document).ready(function () {
  $("#nav").load("/static/html/nav.html");
  $("#ftr").load("/static/html/ftr.html");
  $(".nf-svg").load("/static/html/not-found-svg.html");

  function resize() {
    if (
      document.body.clientHeight + 100 ===
        document.documentElement.clientHeight ||
      document.body.clientHeight === document.documentElement.clientHeight
    ) {
      $("#ftr").css("position", "absolute").css("bottom", "0");
    } else {
      $("#ftr").css("position", "static");
    }
  }

  resize();
  setTimeout(resize, 1);

  console.log();

  window.addEventListener("resize", resize);
});

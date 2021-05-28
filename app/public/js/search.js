$(document).ready(function () {
  document
    .getElementsByClassName("search")[0]
    .getElementsByTagName("input")[0].value = query("s");
});

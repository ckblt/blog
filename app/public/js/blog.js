$(document).ready(function () {
  function cls(c) {
    return document.getElementsByClassName(c)[0];
  }

  var ci = cls("content")
    .innerHTML.replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;quot;/g, '"')
    .replace(
      /\n/g,
      '<span class="br"><svg style="width: .6em; height: .6em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1080 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="782"><path d="M970.105263 0a53.894737 53.894737 0 0 1 53.032421 44.193684L1024 53.894737v574.841263c0 61.44-32.983579 117.813895-87.309474 125.035789l-11.964631 0.754527H107.789474a53.894737 53.894737 0 0 1-9.701053-106.927158L107.789474 646.736842h816.936421c-7.545263 0-8.730947-1.940211-8.838737-7.221895l0.323368-10.778947V53.894737A53.894737 53.894737 0 0 1 970.105263 0z" fill="#aaa" p-id="783"></path><path d="M387.287579 459.614316v482.034526L18.539789 700.631579z" fill="#aaa" p-id="784"></path></svg></span>\n'
    );
  cls("content").innerHTML = ci;
});

$(function () {
  $.ajax({
    url: "http://127.0.0.1:5500/html/index.html",
    type: "get",
    success: function (result) {
      $(result).replaceAll("header");
      $(`<link rel="stylesheet" href="../css/index.css">`)
        .appendTo("head");

    }
  })
})
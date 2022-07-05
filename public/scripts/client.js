
$(document).ready(function () {

  $(".btn-arrow-up").click(function (event) {
    event.preventDefault();

    $("html, body").animate({
      scrollTop: 0
    }, 100);
  })
});

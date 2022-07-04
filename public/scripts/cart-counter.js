
$(function() {
  // console.log('count:    ',count);
  let count = 0;
  let str = 'Check Out ';
  $(".btn-cart").text(str+count);
  $(".btn-add").click(function(e){
    count++;
    $(".btn-cart").text(str+count);
  })
});


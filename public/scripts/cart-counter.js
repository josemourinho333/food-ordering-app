
$(function() {
  // console.log('count:    ',count);
  let count = 0;
  let str = 'Check Out ';
  let item = ' items';
  $(".btn-cart").text(str+count+item);
  $(".btn-add").click(function(e){
    count++;
    $(".btn-cart").text(str+count+item);
  })
});


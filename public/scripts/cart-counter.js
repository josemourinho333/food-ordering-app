
$(function() {
  // console.log('count:    ',count);
  let count = 0;
  let str = 'Check Out ';
  let item = ' items';
  $(".btn-cart").text(str+count+item);
  $(".btn-add").click(function(event){
    event.preventDefault();
    count++;
    $(".btn-cart").text(str+count+item);
    const itemID = '#item'+this.id;
    $(itemID).attr('style','visibility:visible');
  })
});


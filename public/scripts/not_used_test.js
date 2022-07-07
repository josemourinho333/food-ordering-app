// test for reduceArrayofObjects

// const { newOrder } = require("../../twilio/twilio-queries");

// <!-- sorting items list to merge all same itemid -->
// <% let itemsList = [{totalItems:0}]; %>

// <% let uniqueItems = [...new Set(items.map(item => item.itemnumber))]; %>


// <% for (unique of uniqueItems){ %>
//  <% let temp = {}%>
//  <% temp.itemnumber = unique %>
//  <% temp.price = 0 %>
//  <% temp.quantity = 0 %>
//  <% itemsList.push(temp) %>
// <% } %>

// <% console.log("itemsList before ",itemsList)%>

// <% for (newItem of items){ %>
//     <% let match = itemsList.find(item=>item.itemnumber===newItem.itemnumber) %>
//     <% match.orderid = newItem.orderid %>
//     <% match.name = newItem.name %>
//     <% match.price += newItem.price %>
//     <% match.quantity += newItem.quantity %>
//     <% itemsList[0].totalItems += newItem.quantity %>
// <% } %>

// <% console.log("itemsList after",itemsList)%>
// <!-- end sort -->



//test for reorder user order array
let orders = [
{
  id: 271,
  status_sent: true,
  date: '2022-07-06T08:00:00.000Z',
  day: '06-07-2022',
  name: 'Belle Hendrick',
  total_sum: '800',
  status_finished: true
},
{
  id: 270,
  status_sent: true,
  date: '2022-07-06T06:00:00.000Z',
  day: '06-07-2022',
  name: 'Belle Hendrick',
  total_sum: '1650',
  status_finished: false
},
{
  id: 269,
  status_sent: false,
  date: '2022-07-06T05:00:00.000Z',
  day: '06-07-2022',
  name: 'Belle Hendrick',
  total_sum: null,
  status_finished: true
},
{
  id: 268,
  status_sent: false,
  date: '2022-07-05T04:00:00.000Z',
  day: '05-07-2022',
  name: 'Belle Hendrick',
  total_sum: null,
  status_finished: true
},
{
  id: 267,
  status_sent: false,
  date: '2022-07-05T03:00:00.000Z',
  day: '05-07-2022',
  name: 'Belle Hendrick',
  total_sum: '1650',
  status_finished: false
},
{
  id: 266,
  status_sent: false,
  date: '2022-07-05T02:00:00.000Z',
  day: '05-07-2022',
  name: 'Belle Hendrick',
  total_sum: null,
  status_finished: true
}];

let newOrders=[];



// for (let i=0; i<newOrder.length;i++){
//   let curr = orders[0];
//   if (curr.status_finished){
//     newOrders.push(curr);
//     curr = orders[i];
//   }else{
//     newOrder.

//   }
// }


console.log(newOrders);

// test for reduceArrayofObjects

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

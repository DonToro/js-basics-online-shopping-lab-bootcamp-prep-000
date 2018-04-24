<<<<<<< HEAD
var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({ itemName : item , itemPrice : Math.floor((Math.random() * 100) + 1)});

  return `${item} has been added to your cart.`;
}

function viewCart() {
  if(!cart.length){
    return "Your shopping cart is empty."
  }
  else{
    	var temp=[];
    for(var i=0;i<cart.length;i++){
      temp.push(`${cart[i].itemName} at \$${cart[i].itemPrice}`);
    }
    if(cart.length==1){
      return `In your cart, you have ${temp[0]}.`;

    }
    else {
      return `In your cart, you have ${temp.slice(0,cart.length - 1).join(', ')} and ${temp.slice(cart.length-1)}.`;
  }
  }
}

function total() {
  var totalPrice = 0;
  for(var i = 0;i<cart.length;i++){
    totalPrice = totalPrice + cart[i].itemPrice;
  }
  return totalPrice;
}

function removeFromCart(item) {
  var flag = 0;
  for (var i = 0;i<cart.length;i++){
    if( item == cart[i].itemName){
      cart.splice(i,1);
      flag=1;
    }
  }
  if (flag === 0){
    return "That item is not in your cart.";
  }
  else{
    return cart;
  }
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    return `Sorry, we don't have a credit card on file for you.`;
  }
  else {
    var cost = total();
    cart= [];
    return `Your total cost is \$${cost}, which will be charged to the card ${cardNumber}.`;

=======
function addToCart(itme){

}
var price = Math.floor(Math.random() *  100)
 var itemName = item; // assigns the string 'item' and assigns that to variable itemName
 var name = {};
 name[itemName] = price;
 cart.push(name);
 console.log(`${item} has been added to your cart.`);
 return cart;

}

function viewCart() {
  var cItems = "";
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
    return
    }
    else{
      for(var i = 0; i < cart.length; i++) {
      var currentKey = Object.keys(cart[i]);
      var toString = currentKey.join();
        if (cart.length === 1) {
          cItems += ` ${currentKey} at $${cart[i][toString]}.`
          break;
        }
        else if (cart.length === 2) {
          if (cart[i] === cart[cart.length - 1]) {
          cItems += ` and ${currentKey} at $${cart[i][toString]}.`
          }
          else {
          cItems += ` ${currentKey} at $${cart[i][toString]}`
          continue;
          }
        }
        else { //means array items is 3 or more
          if (cart[i] === cart[cart.length - 1]) {
          cItems += ` and ${currentKey} at $${cart[i][toString]}.`
          }
          else {
          cItems += ` ${currentKey} at $${cart[i][toString]},`
          }
        }
    } //end of else statement*
  }
  console.log(`In your cart, you have${cItems}`);
}
function total() {
 // write your code here
 for (var i = 0; i < cart.length; i ++) {
    var thing = cart[i]
    if (thing.hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart
    }
  }
  console.log( "That item is not in your cart.")
  return cart;
}
function placeOrder(cardNumber) {
  //write code here
  if(cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.");
    }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
    }
>>>>>>> 61d186f1d74ce47a5216d395d19b9ff79c6959d8
  }
}
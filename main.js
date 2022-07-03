const cart = document.getElementById('cart')

function added(food){
  const item = document.createElement('div')
  item.innerText = food
  cart.appendChild(item)
}

function clearIt(){
  cart.innerHTML = "";
}

const cart = document.getElementById('cart');


function added(food){

  const element = document.createElement('div')
  element.innerText = food ;
  cart.appendChild(element)

}

function clear(){
  cart.innerHTML = "";
}
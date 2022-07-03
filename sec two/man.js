// const result  = document.getElementById('result')
const input = document.querySelector('input')


function convertCm(){

  const num = input.value
  contverted = +num * 2.54

  const result = document.createElement('div')
  result.innerText = contverted
document.body.appendChild(result)
}

function convertIn(){
  const num = input.value;
  const contverted = +num / 2.54

  const result = document.createElement('div')
  result.innerText = contverted;
  document.body.appendChild(result)
}
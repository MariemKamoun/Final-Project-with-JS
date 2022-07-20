const bookForAdding = document.querySelectorAll(".book-to-be-added");
const addCardButton = document.querySelectorAll(".Add_to_cart");
const Shop=document.querySelector('.shop');

const PlusButton=document.querySelectorAll('.quantity-button-plus')
const MinusButton=document.querySelectorAll('.quantity-button-minus')
const Price=document.querySelectorAll(".price-")
const quantity=document.querySelectorAll('.quantities')
const sum=document.querySelector('.sum-')

console.log(Shop)

for (let i = 0; i < PlusButton.length; i++) {
  PlusButton[i].addEventListener("click", function () {
    Shop.innerHTML=bookForAdding[i].innerHTML+ Shop.innerHTML
  });
}


for (let i = 0; i < addCardButton.length; i++) {
  addCardButton[i].addEventListener("click", function () {
    Shop.innerHTML=bookForAdding[i].innerHTML+ Shop.innerHTML
  });
}

for(let i=0; i<PlusButton.length; i++){
  PlusButton[i].addEventListener("click", function()
  {
    quantity[i].innerHTML++
    sum.textContent=Number(Price[i].innerHTML)+Number(sum.innerHTML)  
  }
      )
}


for(let i=0; i<MinusButton.length; i++){
  MinusButton[i].addEventListener("click", function()
  {
    if (quantity[i].innerHTML>0){
      quantity[i].innerHTML--
      sum.textContent=sum.textContent-Number(Price[i].innerHTML)
    }
  }
      )  


  }





var basketEl=document.getElementById("basket");
var heartButton = document.querySelectorAll('.fa-heart')
function addQuantityBasket(){
var basketQ=document.getElementById("basketQ");
var quantity=basketQ.innerHTML;
var totalEL=document.getElementById("total");
var price1 = parseInt(totalEL.textContent,10);
price1 += 100;
quantity++;
basketQ.innerHTML=quantity;
totalEL.textContent= price1;

};
function decreaseQantityBasket(){
    var basketQ=document.getElementById("basketQ");
    var quantity=basketQ.innerHTML;
    var totalEL=document.getElementById("total");
    var price1 = parseInt(totalEL.textContent,10);

    if(quantity>0){
        price1 -= 100;
        quantity--;
        basketQ.innerHTML=quantity;
        totalEL.textContent= price1;
    }
};
var socksEl=document.getElementById("socks");
function addQantitySocks(){
    var socksQ=document.getElementById("socksQ");
    var quantity=socksQ.innerHTML;
    var totalEL=document.getElementById("total");
    var price1 = parseInt(totalEL.textContent,10);
    price1 += 20;
    quantity++;
    socksQ.innerHTML=quantity;
    totalEL.textContent= price1;
};
function decreaseQantitySocks(){
    var socksQ=document.getElementById("socksQ");
    var quantity=socksQ.innerHTML;
    var totalEL=document.getElementById("total");
    var price1 = parseInt(totalEL.textContent,10);

    if(quantity>0){
        price1 -= 20;
        quantity--;
        socksQ.innerHTML=quantity;
        totalEL.textContent= price1;
    }
};

 var bagEl=document.getElementById("bag");

 function addQantityBag(){
    var bagQ=document.getElementById("bagQ");
    var quantity=bagQ.innerHTML;
    var totalEL=document.getElementById("total");
    var price1 = parseInt(totalEL.textContent,10);
    price1 += 50;
    quantity++;
    bagQ.innerHTML=quantity;
    totalEL.textContent= price1;
 };
function decreaseQantityBag(){
    var bagQ=document.getElementById("bagQ");
    var quantity=bagQ.innerHTML;
    var totalEL=document.getElementById("total");
    var price1 = parseInt(totalEL.textContent,10);
    
if(quantity>0){
    quantity--;
    bagQ.innerHTML=quantity;
    price1 -= 50;
    totalEL.textContent= price1;
}
};
function deletePriceBasket(){
var basketQ=document.getElementById("basketQ");
var quantity=basketQ.innerHTML;
var totalEL=document.getElementById("total");
var price1= parseInt(totalEL.textContent,10);
var priceBasket= 100*quantity;

price1-= priceBasket;
  

if(quantity>0){
    quantity-= quantity;
    basketQ.innerHTML=quantity;
    priceBasket= 100*quantity;
    price1-= priceBasket;
totalEL.textContent= price1;
};
};
function deletePriceSocks(){
    var socksQ=document.getElementById("socksQ");
    var quantity=socksQ.innerHTML;
    var totalEL=document.getElementById("total");
    var price1 = parseInt(totalEL.textContent,10);
   var priceSocks = quantity*20;

   price1-= priceSocks;

    if(quantity>0){
    quantity -= quantity; 
    socksQ.innerHTML=quantity;
    priceSocks = quantity*20;
    price1-= priceSocks;
    totalEL.textContent= price1;
    }
    };
    function deletePriceBag(){
        var bagQ=document.getElementById("bagQ");
        var quantity=bagQ.innerHTML;
        var totalEL=document.getElementById("total");
        var price1 = parseInt(totalEL.textContent,10);
        var priceBag = 50*quantity;

        price1-= priceBag;

        if(quantity>0){
            quantity -= quantity;
            bagQ.innerHTML=quantity;
            priceBag = 50*quantity;
            price1-= priceBag;
            totalEL.textContent= price1;
        };
    
};



heartButton.forEach(function (heart, index) {
    heart.addEventListener('click', () =>{
        const currentColor = getComputedStyle(heart).color;
        if( currentColor === 'rgb(0, 0, 0)'){
            heart.style.color = 'red';
        }else {
            heart.style.color = 'rgb(0, 0, 0)';
        }
    });
})

















/*const plus=document.querySelector("i"),
minus=document.querySelector("i"),
quantity=document.querySelector("span.quantity");
let a=0;
plus.addEventListener("click",(+)={
var(i=0;i<5;i++);
a+=arr[i];
quantity.innerText=a;
console.log(a);
});*/

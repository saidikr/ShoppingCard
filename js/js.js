
//card variables




var quantitynum1=1;//quantity of tshirt
var quantitynum2=1;//quantity of hoodie
var card=document.querySelectorAll(".card");//nodelist of two elements 
var tshirtHeart=false;
var hoodieHeart=false;
var totalprice=document.querySelector(".total-price");//total price text
var tshirtprice=parseInt(card[0].childNodes[3].childNodes[1].childNodes[1].textContent);
var hoodieprice=parseInt(card[1].childNodes[3].childNodes[1].childNodes[1].textContent);
var tp=tshirtprice;
var hp=hoodieprice;
var totalpricenum1=tshirtprice;//totalprice of the tshirt
var totalpricenum2=hoodieprice;//totalprice of the hoodie
var totalpricenum=totalpricenum1+totalpricenum2;//total price of both elements
totalprice.textContent=totalprice.textContent="Total Price : "+totalpricenum+" Da";






//--------------------------------------Tshirt---------------------------------

var tshirt=card[0].childNodes[3].childNodes[1].childNodes[1];//tshirt price-text
console.log(tshirt);
var quantity1=card[0].childNodes[5].childNodes[1];//tshirt quantity-text


//plus

var plus1=card[0].childNodes[7].childNodes[1];//tshirt plus
console.log(plus1);

plus1.addEventListener("click",function(ev){
    tp+=tshirtprice;
    totalpricenum1+=tshirtprice;
    totalpricenum=totalpricenum1+totalpricenum2;
    quantitynum1+=1;
    tshirt.textContent=tp;
    totalprice.textContent="Total Price : "+totalpricenum+" Da";
    quantity1.textContent="Quantity : "+quantitynum1;
})



//minus

var minus1=card[0].childNodes[7].childNodes[3];//tshirt minus

minus1.addEventListener("click",function(ev){
    if(tp>0){
        tp-=tshirtprice;
    }
    if(totalpricenum1>0){
        totalpricenum1-=tshirtprice;
        totalpricenum=totalpricenum1+totalpricenum2;
    }
    if(quantitynum1>0){
        quantitynum1-=1;
    }
    tshirt.textContent=tp;
    totalprice.textContent="Total Price : "+totalpricenum+" Da";
    quantity1.textContent="Quantity : "+quantitynum1;
    if(quantitynum1===0){
        card[0].remove();
     totalpricenum1=0;
     totalpricenum=totalpricenum1+totalpricenum2;
     totalprice.textContent="Total Price : "+totalpricenum+" Da";
    }
})

//trash

var trash=card[0].childNodes[7].childNodes[5];//tshirt trash

trash.addEventListener("click",function(ev){
     card[0].remove();
     totalpricenum1=0;
     totalpricenum=totalpricenum1+totalpricenum2;
     totalprice.textContent="Total Price : "+totalpricenum+" Da";
})


//heart

var heart1=card[0].childNodes[7].childNodes[7];//tshirt heart

heart1.addEventListener("click",function(ev){
    if(tshirtHeart===true){
        tshirtHeart=false;
        heart1.innerHTML='<img style="position:absolute;top:-14px " src="./images/heart.png" alt="HeartIcon" width="20px" height="20px">'
    }
    else{
        tshirtHeart=true;
                heart1.innerHTML='<img style="position:absolute;top:-14px " src="./images/heart (1).png" alt="HeartIcon" width="20px" height="20px">'
    }
})






//--------------------------------------Hoodie---------------------------------





var hoodie=card[1].childNodes[3].childNodes[1].childNodes[1];//hoodie price-text
var quantity2=card[1].childNodes[5].childNodes[1];//hoodie quantity-text



//plus

var plus2=card[1].childNodes[7].childNodes[1];//hoodie plus

plus2.addEventListener("click",function(ev){
    hp+=hoodieprice;
    totalpricenum2+=hoodieprice;
    totalpricenum=totalpricenum1+totalpricenum2;
    quantitynum2+=1;
    hoodie.textContent=hp;
    totalprice.textContent="Total Price : "+totalpricenum+" Da";
    quantity2.textContent="Quantity : "+quantitynum2;
})





//minus

var minus1=card[1].childNodes[7].childNodes[3];//hoodie minus

minus1.addEventListener("click",function(ev){
    if(hp>0){
        hp-=hoodieprice;
    }
    if(totalpricenum2>0){
        totalpricenum2-=hoodieprice;
        totalpricenum=totalpricenum1+totalpricenum2;
    }
    if(quantitynum2>0){
        quantitynum2-=1;
    }
    hoodie.textContent=hp
    totalprice.textContent="Total Price : "+totalpricenum+" Da"
    quantity2.textContent="Quantity : "+quantitynum2
    if(quantitynum2===0){
        card[1].remove();
     totalpricenum2=0;
     totalpricenum=totalpricenum1+totalpricenum2;
     totalprice.textContent="Total Price : "+totalpricenum+" Da";
    }

})



//trash

var trash2=card[1].childNodes[7].childNodes[5];//hoodie trash

trash2.addEventListener("click",function(ev){
     card[1].remove();
     totalpricenum2=0;
     totalpricenum=totalpricenum1+totalpricenum2;
     totalprice.textContent="Total Price : "+totalpricenum+" Da";
    })




//heart

var heart2=card[1].childNodes[7].childNodes[7];//tshirt heart
heart2.addEventListener("click",function(ev){
    if(hoodieHeart===true){
        hoodieHeart=false;
        heart2.innerHTML='<img style="position:absolute;top:-14px " src="./images/heart.png" alt="HeartIcon" width="20px" height="20px">'
    }
    else{
        hoodieHeart=true;
        heart2.innerHTML='<img style="position:absolute;top:-14px " src="./images/heart (1).png" alt="HeartIcon" width="20px" height="20px">'
    }
})
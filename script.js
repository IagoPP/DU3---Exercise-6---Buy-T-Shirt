function calcprice(){
    let num=document.getElementById("quantity");
    let price=12.55;

    document.getElementById("pricetotal").innerText=((num.value*price).toFixed(2));
}
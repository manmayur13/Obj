// document.querySelector("h1").innerHTML="hey mayur";

let product={
    company:"mango",
    brand:"cotton",
    price:950,
    display_price:function(){
        console.log(this.price);
    }
};
// console.log(typeof(product));
// . notatation
// console.log(product.company);

// bracket notation....
// console.log(product['brand']);

console.log(product.display_price());//function inside the obj..

// autoboxing...
console.log("my name is".length);







let products =[ {
    id: 6,
    image: "/ECOM/images/bag-2.avif",
    name: "shoecase",
    price: 2000
},{
    id: 1,
      image: "/ECOM/images/bag-1.avif",
    name: "shoe",
    price: 12000
},{
    id: 2,
      image: "/ECOM/images/bag-3.avif",
    name: "gloves",
    price: 1500
},{
    id: 3,
      image: "/ECOM/images/bag-4.avif",
    name: "cloth",
    price: 3000
},{
    id: 4,
      image: "/ECOM/images/bag-5.avif",
    name: "bag",
    price: 1000
}];

let productHTML="";
products.forEach((product)=>{
 productHTML += `
<section id="ProductsContainer">
            <h1>Products</h1>

            <section id="products_container_seller">
                <div class="product-card">
                    <img src="/ECOM/images/bag-2.avif"
                    <h4> ${product.name}</h4>
                    <p>${product.price}NGN</p>
                    <div>
                        <button class="js-add-to-cart" data-product-id="${product.id}">Add To Cart</button>
                        <button>Buy Now</button>
                    </div>
                </div>
                
            </section>
        </section> 
 `
});
document.getElementById("ProductsContainer").innerHTML=productHTML;
//let cartList = [];
             
    let sameProduct;
    
    const cartData = []; 

 
    document.querySelectorAll(".js-add-to-cart").forEach((button)=>{
        button.addEventListener("click", ()=>{
          const productId =  button.dataset.productId;
         // console.log(cartData);
        

cartData.forEach((product)=>{
    if ( productId===product.productId){
    sameProduct = product;
    }
    });
    if(sameProduct){
        sameProduct.Qty+=1;
    }else{
        cartData.push({ productId: productId,
            Qty: 1
    });
    }
    
    let cartQty = 0;
    cartData.forEach((product)=>{
        
        cartQty += product.Qty;
        })
       
        });
    });
// console.log(cartData);


//     document.querySelector('.js-cart-display').innerHTML = cartQty;
     document.querySelector('.display-cart').innerHTML = cartData;
 
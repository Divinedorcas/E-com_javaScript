

let productHTML="";
products.forEach((product)=>{
 productHTML += `
<section id="ProductsContainer">
            <h1>Products</h1>

            <section id="products_container_seller">
                <div class="product-card">
                    <img src="/ECOM/images/bag-2.avif"<br><br>
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
             
   
    
    const cartData = []; 
    let cartQty = 0;
 
    document.querySelectorAll(".js-add-to-cart").forEach((button)=>{
        button.addEventListener("click", ()=>{
          const productId =  button.dataset.productId;
        
         let sameProduct;

         cartData.forEach((product)=>{
            if ( productId===product.productId){
                sameProduct = product;
            }
            });
            if(sameProduct){
            sameProduct.Qty+=1;
            }
            else{cartData.push({ productId: productId,
                Qty: 1
            });}
                
            
            let cartQty = 0;
            cartData.forEach((product)=>{
            
            cartQty += product.Qty;
            });
           // console.log(cartQty);
 
           document.querySelector(".js-cart-display").innerHTML = cartQty;
    });
    });
    console.log(cartData);

    let cartSumHTML="";
    cartData.forEach((cartProduct)=>{
    const productId= cartProduct.id;
    
    let sameProduct;
    
    products.forEach((productItem)=>{
        if(cartProduct.id===productId){
    sameProduct= productItem;
        }
    });
    cartSumHTML +=
    `<section id="ProductsContainer">
                <h1>Products</h1>
    
                <section id="products_container_seller">
                    <div class="product-card display-cart">
                        <img src="/ECOM/images/bag-2.avif" alt="">
                        <h4>${sameProduct.name} </h4>
                        <p>${sameProduct.price}  NGN</p>
                         <p>Qty:${cartProduct.Qty}</p>
                    </div>
                </section>`;
    
    });
    
         document.getElementById("ProductsContainer").innerHTML=productHTML;
    
         function saveToLocalStorage(){


            localStorage.setItem('cartData', JSON.stringify(cartData))
            JSON.parse(  localStorage.getItem('cartData'));
            if(!cartData){
        
        }}
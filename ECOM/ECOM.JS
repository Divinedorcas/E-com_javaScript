
let products =[ {
    id: 6,
    image: "/ECOM/images/bag-1.avif",
    name: "shoecase",
    price: 2000
},{
    id: 1,
      image: "/ECOM/images/bag-2.avif",
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

let homeProductHTML = "";
products.forEach((product)=>{
    homeProductHTML +=
    `
<section id="ProductsContainer">

            <section id="products_container">
                <div class="product-card">
                    <img src="${product.image}" <br><br>
                    <h4>${product.name} </h4>
                    <p>${product.price} NGN</p>
                    <div>
                        <button class="js-add-to-cart" data-product-id="${product.id}">Add To Cart</button>
                    </div>
                </div>
            </section>
        </section> `;
        
});
const product = document.querySelector(".all-products-container").innerHTML= homeProductHTML;


let cart  =[{productId: 3,
    Qty: 1
}];
// let cart  = JSON.parse(localStorage.getItem("cart"));
// if (!cart){
// [{Id: 2,
//     Qty: 1
// }]
// }


function addToCart(id){
    let sameProduct;
    
    
    cart.forEach((product)=>{
    if(id===product.productId){
    sameProduct=product;
   
    }
    });
    if(sameProduct){
        sameProduct.Qty+=1;
        }
          else{
            cart.push({productId:id,
                Qty: 1
            });
          }
          
        }

 function updateCart(){
            let cartQty = 0;
            cart.forEach((product)=>{
               cartQty+=product.Qty;
            });
          
            document.querySelector(".js-cart-display").innerHTML = cartQty;
          }
         
function cartProductShow(id){

    let cartProductHTML= "";
    cart.forEach((productInCart)=>{
        const productId=productInCart.id;
        let same = "";
        products.forEach((productItem)=>{
            if(productInCart.id === productId){
                same = productItem;
                }
                    
        })
    
    cartProductHTML +=
    `
    <section id="ProductsContainer">
    
        <section id="products_container">
            <div class="product-card">
                <img src="${same.image}" <br><br>
                <h4>${ same.name} </h4>
                <p>${ same.price} NGN</p>
                <h4>Qty: ${productInCart.Qty} </h4>
                <div>
                <button class="js-decrease-cart-qty">-</button>
                <button class="js-remove-from-cart" data-product-id="${product.id}">Remove</button>
                <button onclick="increaseProductQty() updateCart()" class="js-increase-cart-qty" >+</button>
                </div>
            </div>
        </section>
    </section> `;   
     document.querySelector(".all-products-container").innerHTML= cartProductHTML;
    })
    }
  

//  function orderSummaryDetails(){

 
//     let orderSumHTML="";
//     orderSumHTML+=
//     `
//     <div id="sidebar">
//     <h3>Order summary</h3>
//     <p>Items (5)</p>
//     <p>Shipping fee $3000</p>
//     <h3>Total</h3>
//     <button>Place your Order</button>
//  </div>
//  `;

// document.querySelector(".js-order-summary").innerHTML= orderSumHTML;
//  }

document.querySelectorAll(".js-add-to-cart").forEach((button)=>{
    button.addEventListener("click",()=>{
     const id =button.dataset.productId;
     
     addToCart(id)
     updateCart()
     cartProductShow(id)
     //cartProduct()
    // orderSummaryDetails()
    });
    })

   


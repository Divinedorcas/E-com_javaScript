
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

let cart =[{productId:1,
    Qty: 1
},
{productId:6,
    Qty: 2
}];

function addToCart(Id){
    let sameProduct;
    
    
    cart.forEach((product)=>{
    if(Id===product.productId){
    sameProduct=product;
    }
    });
    if(sameProduct){
        sameProduct.Qty+=1;
        }
          else{
            cart.push({productId:Id,
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
            cartProduct();
          }
        
        function cartProduct(){
let cartProductHTML = "";

cart.forEach((cartProduct)=>{
    const productId= cartProduct.id;
    
    let sameProduct;
    
    products.forEach((productItem)=>{
        if(cartProduct.id===productId){
    sameProduct= productItem;
        }
    });
    cartProductHTML +=
    `
<section id="ProductsContainer">

            <section id="products_container">
                <div class="product-card">
                    <img src="${ sameProduct.image}" <br><br>
                    <h4>${ sameProduct.name} </h4>
                    <p>${ sameProduct.price} NGN</p>
                    <h4>Qty: ${ cartProduct.Qty} </h4>
                    <div>
                    </div>
                </div>
            </section>
        </section> `;
        
});
const cartProduct = document.querySelector("#display-cart").innerHTML= cartProductHTML;
}


document.querySelectorAll(".js-add-to-cart").forEach((button)=>{
    button.addEventListener("click",()=>{
     const Id =button.dataset.productId;
     
     addToCart(Id)
     updateCart()
    });
    });
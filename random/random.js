function addRandomImages(){
let random= Math.random();
console.log(random);
const container = document.querySelector(".container");
console.log(container);
 let randomHTML;
 randomHTML+=
 `

    <div class="container js-container" >
        <img src="https://picsum.photos/200/300" alt="">
        <img src="https://picsum.photos/${random}" alt="">
        <img src="https://picsum.photos/300" alt="">
    </div>`;


}

const container = document.querySelector(".container");

function addRandomImages(){
for(let i =0; i<3; i++){

let newimg = document.createElement("img");
let random= Math.random() *2000;
newimg.src=`https://picsum.photos/${Math.floor(random)}`;
container.append(newimg);
}
console.log(random);
}
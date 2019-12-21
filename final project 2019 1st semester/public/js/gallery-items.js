const photos = document.querySelector("#photo");

const host = "http://localhost:8080/";

import add_to_cart_handler from "./add-to-cart.js";

setTimeout(async () => {
  let collection_name = document.title.replace(`RB's "`, "").replace('"', "");
  const response = await fetch(host + "collection-items/" + collection_name);
  const data = await response.json();

  for (const item of data) {
    const block = document.createElement("div");
    block.classList.add("photo_item");

    const img = document.createElement("img");
    img.classList.add("item_photo");
    img.src = `img/${item.img}`;
    block.appendChild(img);

    const p = document.createElement("p");
    p.classList.add("item_des");
    p.innerHTML = item.description;
    block.appendChild(p);

    const a = document.createElement("a");
    a.classList.add("add_to_cart_button");
    a.innerHTML = "Add to Cart"
    a.onclick = add_to_cart_handler;
    block.appendChild(a);

    block.appendChild(document.createElement("hr"));

    photos.appendChild(block);
  }
}, 0);


// <div class="photo_item">
//   <img class="item_photo" src="img/colors 1.jpg" alt="" />
//   <p class="item_des">
//     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minus, architecto ex
//     ullam aspernatur deserunt neque similique? Odit animi nisi magnam, obcaecati nesciunt aliquid
//     pariatur accusantium, ratione natus officiis corrupti!
//   </p>
//   <a href="" class="add_to_cart_button">
//     Add to Cart
//   </a>
//   <hr />
// </div>;
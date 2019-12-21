const contributions = document.querySelector("#contributions");
const host = "http://localhost:8080/";

import add_to_cart_handler from "./add-to-cart.js";

setTimeout(async () => {
  const response = await fetch(host + "contributions");
  const data = await response.json();

  for (const item of data) {
    const block = document.createElement("div");
    block.classList.add("contributions_item");

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
    a.innerHTML = "Add to Cart";
    a.onclick = add_to_cart_handler;
    block.appendChild(a);

    block.appendChild(document.createElement("hr"));

    contributions.appendChild(block);
  }
}, 0);

const cart = document.querySelector("#cart");
const host = "http://localhost:8080/";

document.querySelector(".is-sort").onclick = event => {
  if (event.target.checked) fetch_data("cart/sorted");
  else fetch_data();
};

const fetch_data = async (path = "cart") => {
  const response = await fetch(host + path);
  const data = await response.json();

  const temp = cart.querySelector(".photo_item");

  if (temp) temp.remove();

  const block = document.createElement("div");
  block.classList.add("photo_item");
  cart.appendChild(block);
  if (data.length !== 0) {
    for (const img of data) {
      const image = document.createElement("img");
      image.classList.add("item_photo");
      image.src = `img/${img}`;
      block.appendChild(image);

      image.onclick = async () => {
        const response = await fetch(host + "delete-from-cart", {
          body: JSON.stringify({ item: img }),
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        });

        document.location.reload();
      };
    }
    block.appendChild(document.createElement("hr"));
  } else {
    const text = document.createElement("p");
    text.innerHTML = "Nothing here";
    text.classList.add("item_des");
    text.style.fontSize = "2rem";
    text.style.width = "100%";
    text.style.borderBottom = "1px solid white";
    block.appendChild(text);
  }
};

setTimeout(() => {
  fetch_data();
}, 0);

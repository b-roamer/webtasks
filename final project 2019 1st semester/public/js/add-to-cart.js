const host = "http://localhost:8080/";

export default async event => {
  const url = event.target.parentNode
    .querySelector("img")
    .src.replace(document.location.origin + "/img/", "");
  console.log(url);

  const response = await fetch(host + "add-to-cart", {
    body: JSON.stringify({ item: url }),
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  if (response.status === 200) {
    // item added
  } else {
    // item is already added
  }
};

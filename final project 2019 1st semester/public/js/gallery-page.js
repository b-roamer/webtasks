const host = "http://localhost:8080/";

setTimeout(async () => {
  const response = await fetch(host + "collections");
  const data = await response.json();
  for (const collection of data) {
    const block = document.createElement("div");
    block.classList.add("gallery_title");

    const h1 = document.createElement("h1");
    h1.innerHTML = `"${collection.name}"`;
    block.appendChild(h1);

    const p = document.createElement("p");
    p.innerHTML = collection.description;
    block.appendChild(p);

    const preview = document.createElement("div");
    preview.classList.add("preview");
    block.appendChild(preview);

    for (let i = 1; i < 4; i++) {
      const img = document.createElement("img");
      img.src = `img/${collection.name.toLowerCase()} ${i}.jpg`;
      preview.appendChild(img);
    }

    for (let i = 1; i < 4; i++)
      preview.appendChild(document.createElement("br"));

    const a = document.createElement("a");
    while (collection.name.includes(" "))
        collection.name = collection.name.toLowerCase().replace(" ", "");

    a.href = `gallery_${collection.name}.html`;
    a.innerHTML = "See More";
    preview.appendChild(a);

    preview.appendChild(document.createElement("hr"));

    document.body.appendChild(block);
  }
}, 0);

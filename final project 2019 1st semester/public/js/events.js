const events_list = document.querySelector("#events_list");

const host = "http://localhost:8080/";

setTimeout(async () => {
    const response = await fetch(host + "events");
    const data = await response.json();
    for (const event of data) {        
        const event_block = document.createElement("div");
        event_block.classList.add("event_block");

        const event_title = document.createElement("div");
        event_title.classList.add("event_title");

        const h2 = document.createElement("h2");
        h2.innerHTML = event.name;

        event_title.appendChild(h2);

        const event_des = document.createElement("p");
        event_des.classList.add("event_des");
        event_des.innerHTML = event.description;

        const hr = document.createElement("hr");
        hr.classList.add("event_hr");

        event_block.appendChild(event_title);
        event_block.appendChild(event_des);
        event_block.appendChild(hr);

        events_list.appendChild(event_block);
    }
}, 0);

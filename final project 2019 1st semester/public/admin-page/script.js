const nav_items = document.querySelectorAll(".sections-nav__item");
const section_items = document.querySelectorAll(".main__section");
const host = "http://localhost:8080/";

const current_fields = [];
let current_section = "events";
let data = [];

const fetch_items = async (section_item, name) => {
  const response = await fetch(host + name);
  data = await response.json();
  const container = section_item.querySelector(".main-section__data-flow");
  current_section = name;
  container.innerHTML = "";

  const fields_container = section_item.querySelector(".crud-control__fields");
  fields_container.innerHTML = "";
  current_fields.splice(0, current_fields.length);

  for (const key in data[0]) {
    const field = document.createElement("input");
    field.classList.add("crud-control__field");
    field.placeholder = key;

    if (key === "id") field.readOnly = true;

    fields_container.appendChild(field);

    current_fields.push(field);
  }

  for (const item of data) {
    for (const key in item) {
      const div = document.createElement("div");
      div.classList.add("main-section__data-item");
      div.innerHTML = item[key];
      const item_id = document.createAttribute("item-id");
      item_id.value = item["id"];

      div.attributes.setNamedItem(item_id);
      container.appendChild(div);

      div.onclick = () => {
        const temp = data.find(item => item.id == item_id.value);
        let field_index = 0;
        for (const key1 in temp) current_fields[field_index++].value = temp[key1];
      };
    }
  }
};

const reload_data = () => {
  document.location.reload();
};

fetch_items(section_items.item(0), "events");

for (const nav_item of nav_items)
  nav_item.onclick = () => {
    // removing previously selected
    document
      .querySelector(".sections-nav__item_selected")
      .classList.remove("sections-nav__item_selected");
    document.querySelector(".main__section_selected").classList.remove("main__section_selected");

    // selecting new
    nav_item.classList.add("sections-nav__item_selected");
    const page_name = nav_item.innerHTML
      .trim()
      .toLowerCase()
      .replace(" ", "-");
    for (const section_item of section_items) {
      if (section_item.className.includes(page_name)) {
        section_item.classList.add("main__section_selected");
        fetch_items(section_item, page_name);
      }
    }
  };

const add_buttons = document.querySelectorAll(".crud-control__button-add");
const delete_buttons = document.querySelectorAll(".crud-control__button-delete");
const update_buttons = document.querySelectorAll(".crud-control__button-update");
const clear_buttons = document.querySelectorAll(".crud-control__button-clear");

for (const clear_button of clear_buttons)
  clear_button.onclick = () => current_fields.forEach(field => (field.value = ""));

for (const update_button of update_buttons)
  update_button.onclick = () => {
    if (current_fields[0].value === "") return; // nothing to update
    if (confirm("Are you sure?")) {
      const item = {};

      for (const field of current_fields) {
        item[field.placeholder] = field.value;
      }

      fetch(host + current_section, {
        body: JSON.stringify({ item: item }),
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }).then(() => reload_data());
    }
  };

for (const delete_button of delete_buttons)
  delete_button.onclick = () => {
    if (current_fields[0].value === "") return; // nothing to delete
    if (confirm("Are you sure?")) {
      const item = {};

      for (const field of current_fields) {
        item[field.placeholder] = field.value;
      }

      fetch(host + current_section, {
        body: JSON.stringify({ item: item }),
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }).then(() => reload_data());
    }
  };

for (const add_button of add_buttons)
  add_button.onclick = () => {
    if (current_fields[0].value !== "") return; // fields are not clear
    if (confirm("Are you sure?")) {
      const item = {};

      for (const field of current_fields) {
        item[field.placeholder] = field.value;
      }

      fetch(host + current_section, {
        body: JSON.stringify({ item: item }),
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }).then(() => reload_data());
    }
  };

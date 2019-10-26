const checkboxes = document.getElementsByClassName("checkbox_btn");
console.log(checkboxes);
for (const checkbox in checkboxes)
{
    checkbox.onclick = () => {
        checkbox.classList.add("highlighted");
    }
}
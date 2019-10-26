function crossTask1()
{
    console.log("clicked")

    document.querySelector(".task1").style.textDecoration = "line-through";
}

function crossTask2()
{
    console.log("clicked")

    document.querySelector(".task2").style.textDecoration = "line-through";
}

function crossTask3()
{
    console.log("clicked")

    document.querySelector(".task3").style.textDecoration = "line-through";
}

function crossTask4()
{
    console.log("clicked")

    document.querySelector(".task4").style.textDecoration = "line-through";
}

function crossTask5()
{
    console.log("clicked")

    document.querySelector(".task5").style.textDecoration = "line-through";
}

let selector = document.querySelector("#drop_down");
let city_selector = document.querySelector("#city_dropdown");

if (selector.value == "Kazakhstan")
{
    city_selector.classList.remove("hidden");
    city_selector.classList.add("shown");
}

let isAdded1 = false;
let isAdded2 = false;
let isAdded3 = false;
let total = 0;
function add1()
{
    if (!(isAdded1))
    {
        total+=1000;
        document.getElementById("total").innerHTML = total;
        isAdded1=true;
    }
    else
    {
        total-=1000;
        document.getElementById("total").innerHTML = total;
        isAdded1=false;
    }
    
}
function add2()
{
    if (!(isAdded2))
    {
        total+=2000;
        document.getElementById("total").innerHTML = total;
        isAdded2=true;
    }
    else
    {
        total-=2000;
        document.getElementById("total").innerHTML = total;
        isAdded2=false;
    }
    
}
function add3()
{
    if (!(isAdded3))
    {
        total+=500;
        document.getElementById("total").innerHTML = total;
        isAdded3=true;
    }
    else
    {
        total-=500;
        document.getElementById("total").innerHTML = total;
        isAdded3=false;
    }
    
}
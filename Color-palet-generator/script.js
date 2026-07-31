let colordevs=document.querySelectorAll(".colordv");
let button=document.querySelector(".btngenerate ");
button.addEventListener('click',()=>{
    colordevs.forEach((div) => {

        // Generate random HEX color
        let color = "#" + Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0")
            .toUpperCase();

        // Change background
        div.style.backgroundColor = color;

        // Find the HEX text belonging to this color
        let colorText = div.parentElement.querySelector("h4");

        // Change HEX text
        colorText.innerText = color;

    });

});
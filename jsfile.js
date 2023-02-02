const container = document.querySelector('.Container');

for(let i=0;i<16;i++){
    for(let j=0;j<16;j++){   
         const box = document.createElement("div")    
        box.className = "grid";
        container.appendChild(box);
        // box.textContent = "nice"
    }    
}

const container = document.querySelector('.Container');
// console.log(container.style.width);
// const side = 10

function gridRemove(){
    const grid = document.querySelectorAll('.grid');
    grid.forEach((item) =>{
        item.remove()
    })
}



function gridSize(side){ 
    
    container.style.backgroundColor = "black";
    for(let i=0;i<side;i++){
        for(let j=0;j<side;j++){   
            const box = document.createElement("div")    
            box.className = "grid";
            // box.textContent = i;
            container.appendChild(box);
            box.addEventListener('mouseenter',() => {
                box.style.backgroundColor = 'blue';
                

            })
            box.addEventListener('mouseleave',() => {
            box.style.backgroundColor = 'white';

            })
            
            box.style.width = `calc(100%/${side})`;
            container.appendChild(box);


            // box.textContent = "nice"
        }    
    }
}

const button = document.querySelector('button')
// console.log(button)
button.addEventListener('click',() => {
    gridRemove();
    size = parseInt(prompt("Enter Grid Size"));
    gridSize(size);
} )

gridSize(20);
// gridRemove();
// gridSize(16);







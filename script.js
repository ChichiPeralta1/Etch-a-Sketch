const mainContainer = document.querySelector("#container")
const rows = document.querySelector(".row")
const row = document.createElement('div');


let createSquares = function(rows){


    

    row.className = 'row'   
    row.style.cssText = "flex:1; display: flex; flex-direction:column"
   


    for(let i = 0; i < (rows - 1); i++){
        mainContainer.appendChild(row)
        mainContainer.appendChild(row.cloneNode(true)); 
    }

    console.log(rows)
    filas = document.getElementsByClassName('row')
    
    Array.from(filas).forEach(element => {
        
        for(let i = 0; i < rows; i++){
            const columna = document.createElement('div');
            columna.classList.add('columna')
            element.appendChild(columna)

        }

   
    });
        
}

createSquares(20)


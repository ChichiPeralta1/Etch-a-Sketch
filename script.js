const mainContainer = document.querySelector("#container")
const rows = document.querySelector(".row")
const row = document.createElement('div');
const button = document.querySelector("#set-grid")
const resetButton = document.querySelector('#reset-button')


let createGrid = function(rows){



    row.className = 'row'   
    row.style.cssText = "flex:1; display: flex; flex-direction:column"
   
    for(let i = 0; i < (rows - 1); i++){
        mainContainer.appendChild(row)
        mainContainer.appendChild(row.cloneNode(true)); 
    }

    
    filas = document.getElementsByClassName('row')
    
    Array.from(filas).forEach(element => {
        
        for(let i = 0; i < rows; i++){
            const columna = document.createElement('div');
            columna.classList.add('columna')
            columna.addEventListener('mouseenter', (e) => { //
                e.target.style.background = randomCol()
                
                
    


            })
            element.appendChild(columna)

        }   
    });


    
}


function randomCol(){

    return 'rgb(' + Math.floor(Math.random() * 255).toString() + ',' + Math.floor(Math.random() * 255).toString() + ',' + Math.floor(Math.random() * 255).toString() + ')'
    
}



button.addEventListener('click', (e) => {
    let input = parseInt(prompt('Ingresa numero entre 2 y 99'));
  
    mainContainer.innerHTML = ''
    row.innerHTML = ''
    createGrid(input)

})




createGrid(16)
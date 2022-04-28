
const container = document.querySelector('#container')
const content = document.createElement('content')

function createGrid(size){

for (let i=1; i <=size; i++){
    let randomcolor = Math.floor(Math.random()*16777215).toString(16);
    let board = document.createElement('div')
    board.classList.add('box')


    board.addEventListener('mouseenter', () =>
board.style.backgroundColor = '#' + randomcolor
)   
   board.addEventListener('mouseleave', () =>
board.style.backgroundColor = 'white'
)   
container.append(board)
} 

  
    
 
 

}

console.log(createGrid(50))



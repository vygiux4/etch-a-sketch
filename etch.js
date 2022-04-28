
const container = document.querySelector('#container')
const content = document.createElement('content')


const button = document.querySelector('button')
 
let bunga = function(){
   let size = prompt('select size')
   return size
     
    
}




button.onclick = function(size){
  
size = bunga()
     
if (size > 1000){
 return window.alert('size is too large')
}
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
console.log(createGrid())






    
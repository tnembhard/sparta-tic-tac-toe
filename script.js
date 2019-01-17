document.addEventListener("DOMContentLoaded", function() {

    let box = document.getElementsByTagName(`td`);
    console.log(Number(
        
    ));
    
    var boo1 = true;
    let playerTurn = document.getElementsByClassName(`playerTurn`)[0];
    
    let varArray = [[0,1,2], [3,4,5], [6,7,8], [0,4,8], [2,4,6], [0,3,6], [1,4,7], [2,5,8]];

    gameClick();

    function gameClick() {
        for (let i = 0; i < box.length; i++) {
            
            box[i].addEventListener(`click`,function(event){
                if (boo1) {
                    event.target.setAttribute(`class`, `X`);
                    event.target.innerText = "X";   
                    playerTurn.innerText = `It is Player X's turn`;   
                    boo1 = false;    
                    winVerify();                  
                } else  {
                    event.target.setAttribute(`class`, `O`);
                    event.target.innerText = "O";
                    playerTurn.innerText = `It is Player O's turn`;
                    boo1 = true; 
                    winVerify();                      
                }                          
                   
            });
                      
        }
    } 

    function winVerify() {
        for (let i = 0; i < varArray.length; i++) {
            console.log(varArray);
            
            if (box[varArray[i][0]].innerText === `X` && box[varArray[i][1]].innerText === `X` && box[varArray[i][2]].innerText === `X` ){
                alert("Player X wins!")
            } else if (box[varArray[i][0]].innerText === `O` && box[varArray[i][1]].innerText === `O` && box[varArray[i][2]].innerText === `O`){
                alert("Player O wins!")
            }            
        }     
    }


});



var cur=0;
var arr=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
var temp=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
var totCells=document.querySelectorAll(".cell").length;



// for tracking game playing area work
for( let i=0;i<totCells;i++)
{
    document.querySelectorAll(".cell")[i].addEventListener("click",function()
    {
    if(arr[i]==-1)
    {
    if(cur%2==0)
    {
        document.querySelectorAll(".cell")[i].innerHTML="O";
        arr[i]=3;
        
        // moves button creation
        text="<p> move "+(cur)+" on block "+i+" </p>";
        text="<button class= move"+(cur+" btn ")+"/>" +text+"</button>";
        

        temp[cur]=i;
        document.querySelector(".displayMoves").insertAdjacentHTML("beforeend",text);
        //button created

        let tempclass=".move"+cur;
        // adding event listener to move buttons so that we can go to previous moves
        document.querySelector(tempclass).addEventListener("click",function()
        {
             //getting class of current button
             let tempptr=tempclass[tempclass.length-1];
             tempptr=Number(tempptr);
               
             
            //reseting array
            cur=tempptr+1;
            for(let j=tempptr+1;j<9;j++)
            {
                temp[j]=-1;
            }             
            for(let k=0;k<9;k++)
            {
                arr[k]=-1;
            }
            for(let k=0;k<=tempptr;k++)
            {
                if(k%2==0)
                {
                arr[temp[k]]=3;
                }
                else
                {
                arr[temp[k]]=5;
                }
            }
            // array resetted
           
             for(let i=tempptr+1;i<9;i++)
             {
                let target=".move"+i;
                

                // removing cell moves 
                let tempBlock=document.querySelector(target).textContent;
                tempBlock=tempBlock[tempBlock.length-2];
                tempBlock=Number(tempBlock);
                document.querySelectorAll(".cell")[tempBlock].innerHTML="";
                // cell moves removed
                
                
                
                let tempButton =document.querySelector(target)   //removing buttons
                tempButton.remove();
                   
            }


             

        });
        
        cur++;
    }
    else{
        document.querySelectorAll(".cell")[i].innerHTML="X";
        arr[i]=5;
        

        text="<p> move "+(cur)+" on block "+i+" </p>";
        text="<button class=move"+cur+" movebutton " +"/>" +text+"</button>";
        temp[cur]=i;
        document.querySelector(".displayMoves").insertAdjacentHTML("beforeend",text)
        //button created
        let tempclass=".move"+cur;
        
       
        
        document.querySelector(tempclass).addEventListener("click",function()
        {


            let tempptr=tempclass[tempclass.length-1];
             tempptr=Number(tempptr);
               
             //extracting block number
             //resetting array
             cur=tempptr+1;
             for(let j=tempptr+1;j<9;j++)
             {
                 temp[j]=-1;
             }             
             for(let k=0;k<9;k++)
             {
                 arr[k]=-1;
             }
             for(let k=0;k<=tempptr;k++)
             {
                 if(k%2==0)
                 {
                 arr[temp[k]]=3;
                 }
                 else
                 {
                 arr[temp[k]]=5;
                 }
             }
             
           
             for(let i=tempptr+1;i<9;i++)
             {
                let target=".move"+i;
                

                // removing cell moves 
                let tempBlock=document.querySelector(target).textContent;
                tempBlock=tempBlock[tempBlock.length-2];
                tempBlock=Number(tempBlock);
                document.querySelectorAll(".cell")[tempBlock].innerHTML="";
                // cell moves removed
                
                
                
                let tempButton =document.querySelector(target)   //removing buttons
                tempButton.remove();
                
                   
            }

        });
        
        cur++;
    }
    
    if(cur>=5)
    {
        winningCheck();
    }
    }
    }
    );
}
function winningCheck()
{

    if(arr[0]*arr[1]*arr[2]==27||arr[0]*arr[1]*arr[2]==125)
    {
        if(arr[0]==3)
        {
            // O wins
            
            document.querySelector(".output").innerHTML="<h3>  O wins</h3>";
        
        }
        else
        {
            // X wins
            document.querySelector(".output").innerHTML="<h3>  X wins</h3>";
            
        
        }

        // resetplay();
    }
    else if(arr[3]*arr[4]*arr[5]==27||arr[3]*arr[4]*arr[5]==125)
    {
        if(arr[3]==3)
        {
            // O wins
            document.querySelector(".output").innerHTML="<h3>  O wins</h3>";
            
        }
        else
        {
            // X wins
            document.querySelector(".output").innerHTML="<h3>  X wins</h3>";
            
        
        }
    }
    else if(arr[6]*arr[7]*arr[8]==27||arr[6]*arr[7]*arr[8]==125)
    {
        if(arr[6]==3)
        {
            // O wins
            document.querySelector(".output").innerHTML="<h3>  O wins</h3>";
            
        }
        else
        {
            // X wins
            document.querySelector(".output").innerHTML="<h3>  X wins</h3>";
            
        
        }
    }
    else if(arr[0]*arr[3]*arr[6]==27||arr[0]*arr[3]*arr[6]==125)
    {
        if(arr[0]==3)
        {
            // O wins
            document.querySelector(".output").innerHTML="<h3>  O wins</h3>";
            
        }
        else
        {
            // X wins
            document.querySelector(".output").innerHTML="<h3>  X wins</h3>";
            
        
        }
    }
    else if(arr[1]*arr[4]*arr[7]==27||arr[1]*arr[4]*arr[7]==125)
    {
        if(arr[1]==3)
        {
            // O wins
            document.querySelector(".output").innerHTML="<h3>  O wins</h3>";
            
        }
        else
        {
            // X wins
            document.querySelector(".output").innerHTML="<h3>  X wins</h3>";
            
        
        }
    }
    else if(arr[2]*arr[5]*arr[8]==27||arr[2]*arr[5]*arr[8]==125)
    {
        if(arr[2]==3)
        {
            // O wins
            document.querySelector(".output").innerHTML="<h3>  O wins</h3>";
            
        }
        else
        {
            // X wins
            document.querySelector(".output").innerHTML="<h3>  X wins</h3>";
            
        
        }
    }
    else if(arr[0]*arr[4]*arr[8]==27||arr[0]*arr[4]*arr[8]==125)
    {
        if(arr[0]==3)
        {
            // O wins
            document.querySelector(".output").innerHTML="<h3>  O wins</h3>";
            
        }
        else
        {
            // X wins
            document.querySelector(".output").innerHTML="<h3>  X wins</h3>";
            
        
        }
    }
    else if(arr[2]*arr[4]*arr[6]==27||arr[2]*arr[4]*arr[6]==125)
    {
        if(arr[2]==3)
        {
            // O wins
            document.querySelector(".output").innerHTML="<h3>  O wins</h3>";
            
        }
        else
        {
            // X wins
            document.querySelector(".output").innerHTML="<h3>  X wins</h3>";
            
            
        }

    }
        

    
}
//function winning check end

// Reset button
document.querySelector(".reset").addEventListener("click",resetplay);
function resetplay(){
    // alert('reset button pressed');
    cur=0;
  
    for(let i=0;i<totCells;i++)
    {
        arr[i]=-1;
        document.querySelectorAll(".cell")[i].innerHTML='';
    }
    document.querySelector(".output").innerHTML="";
    document.querySelector(".displayMoves").innerHTML="";    
}

// Revert back functionality


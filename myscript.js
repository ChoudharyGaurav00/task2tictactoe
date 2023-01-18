// alert("linked")
var cur=0;
var arr=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
var totCells=document.querySelectorAll(".cell").length;
for( let i=0;i<totCells;i++)
{
    document.querySelectorAll(".cell")[i].addEventListener("click",function()
    {

    if(cur%2==0)
    {
        document.querySelectorAll(".cell")[i].innerHTML="O";
        arr[i]=3;
        cur++;
    }
    else{
        document.querySelectorAll(".cell")[i].innerHTML="X";
        arr[i]=5;
        cur++;
    }
    
    if(cur>=5)
    {
        winningCheck();
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



let bool = true
let btns = $("#btns").children()
$("#btns").children().click(myfunction)
function myfunction()
{
  if(bool==true)
  {
     event.srcElement.innerHTML="X"
      bool=false
  }
  else
  {
      event.target.innerHTML="O"
      bool=true
  }
    if((btns[0].innerHTML==btns[1].innerHTML && btns[1].innerHTML==btns[2].innerHTML) || (btns[0].innerHTML==btns[3].innerHTML && btns[3].innerHTML==btns[6].innerHTML) || (btns[0].innerHTML==btns[4].innerHTML && btns[4].innerHTML==btns[8].innerHTML))
    {
        if(btns[0].innerHTML=="X")
        {
            alert("X is won")
        }
        else
        {
            alert("o is won")
        }
    }
    else if((btns[0].innerHTML==btns[1].innerHTML && btns[1].innerHTML==btns[2].innerHTML) || (btns[1].innerHTML==btns[4].innerHTML && btns[4].innerHTML==btns[7].innerHTML))
    {
        if(btns[1].innerHTML=="X")
        {
            alert("X is won")
        }
        else
        {
            alert("o is won")
        }
    }
}
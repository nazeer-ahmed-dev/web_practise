function myfun()
{
   
    let a = document.getElementById('radios').getElementsByTagName('label')
    for (let i=0;i<a.length;i++)
    {
        document.getElementById('radios').getElementsByTagName('input')[i].addEventListener("click",myfuntion)
    }
}
function myfuntion()
{
 let a =parseInt(document.getElementById('number1').value)
 let b = parseInt(document.getElementById('number2').value)
   //// let b = document.getElementsById('number2').value
//    let c=0
    // cal(a,b,event.target.value)if
    if(event.target.value=="Add")
    {
       cal(a,b,Add)
    }
    else if(event.target.value=="Multiply")
    {
        cal(a,b,Multiply)
    }
    else if(event.target.value=="Subtract")
    {
        cal(a,b,Subtract)
    }
    else if(event.target.value=="Divide")
    {
        cal(a,b,Divide)
    }
    

   
    
}
function cal(a,b,callback)
{
    //alert(typeof(callback))
  callback(a,b)
}
function Add(a,b)
{
   alert(a+b)
}
function Multiply(a,b)
{
    alert(a*b)
}
function Subtract(a,b)
{
    alert(a-b)
}
function Divide(a,b)
{
    alert(a/b)
}

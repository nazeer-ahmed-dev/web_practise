function myfunction()
{
    let elem = document.querySelector('.btn')
    for(i=0;i<elem.children.length;i++)
    {
        elem.children[i].addEventListener("click",func);
    }
}
function func()
{
    var sum = 0;
    if(event.srcElement.value==="=")
    {
       let array =  document.getElementById("exampleInputEmail1").value
      for(let i=0;i<array.length;i++)
      {
          if(array[i]=='+' || array[i]=='-')
          {
              var op = array[i]
          }
      }
      let splitit = array.split(op)
      for(let i=0;i<splitit.length;i++)
      {
          if(op=='+')
          {
              sum=sum+parseInt(splitit[i])
          }
      }
      document.getElementById("exampleInputEmail1").value=sum
    }
    else
    {
        document.getElementById("exampleInputEmail1").value+=event.srcElement.value
    }
    
    
}
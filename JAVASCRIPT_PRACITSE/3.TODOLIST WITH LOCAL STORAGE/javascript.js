var c =1;
function add()
{
   
    let elem = document.getElementById('exampleInputEmail1').value
    if(elem=="")
    {
        alert("Plz Add element ")
    }
    else
    {

        var tab = document.getElementById('tbody')
        var row_count = tab.rows.length
        var tr = tab.insertRow(row_count)
        tr.id=c
       
            var td = tr.insertCell(0)
            td.innerHTML=c
          
            var td1 = tr.insertCell(1)
            td1.innerHTML=elem
          
            var td2 =tr.insertCell(2)
            btn1 = document.createElement('button')
            btn1.innerHTML = "Complete"
            btn1.type='button'
            btn1.id=c
            btn1.onclick=compelete
            td2.appendChild(btn1)
           
            var td3 =tr.insertCell(3)
            btn2 = document.createElement('button')
            btn2.innerHTML = "Delete"
            btn2.type='button'
            btn2.onclick=deleteItem
            td3.appendChild(btn2)

       


    } 
    c=c+1
}
function compelete()
{  
  let a=document.getElementById(event.srcElement.id)
  alert(a[1].children)
}

function deleteItem()
{
    alert("Deleted")
}
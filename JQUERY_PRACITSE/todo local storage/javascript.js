var c =1
function onload_fun()
{
   let leng= localStorage.length
   for(let i=1;i<=leng;i++)
   {
       let val = `<tr id="id_${i}"><td>${localStorage.getItem(i)}</td><td><button type="button" onclick="myfunction()" id="id_${i}">Delete</button></td><td><button type="button" onclick="complete()" id="id_${i}">Complete</button></td></tr>`
        $("#tbody").append(val)

   }
   c= localStorage.length+1
}
function add()
{
    let text_field = $("#element1").val()
    if(text_field==="")
    {
        alert("Add something")
    }
    else
    {
        let val = `<tr id="id_${c}"><td>${text_field}</td><td><button type="button" onclick="myfunction()" id="id_${c}">Delete</button></td><td><button type="button" onclick="complete()" id="id_${c}">Complete</button></td></tr>`
        $("#tbody1").append(val)
        localStorage.setItem(c,text_field)
    }
    c++
}
function complete()
{
        let elem = $("#tbody") //event.target.id
        for(let i=0;i<elem[0].rows.length;i++)
        {
            if(elem[0].rows[i].id==event.target.id)
            {
               // alert(elem[0].rows[i].cells[0].innerHTML)
                let val1 = `<tr id="C${elem[0].rows[i].id}"><td>${elem[0].rows[i].cells[0].innerHTML}</td><td><button type="button">Delete</button></td></tr>`
                $("#tbody1").append(val1)
                elem[0].rows[i].remove()
                localStorage.getItem(i+1)
                localStorage.setItem("C"+i,elem[0].rows[i].cells[0].innerHTML)
            }
            
        }
        

}
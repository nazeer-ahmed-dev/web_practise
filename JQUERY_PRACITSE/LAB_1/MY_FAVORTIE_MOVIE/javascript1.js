 let c=1;
function add()
{
    if($("#rat").val()=="")
    {
        $("#rat").animate({
            height: '+=30px'
        })
    }
    else
    {
        let movie = $("#name").val()
        let rating = parseInt($("#rat").val())
        let val1 = `<tr><td>d</td></tr>`
        
        let val = `<tr id="id_${c}"><td>${movie}</td><td>${rating}</td><td><button type="button" class="btn btn-primary" onclick="complete()" id="id_${c}">Delete</button></td></tr>`
        $("#tbody").append(val)
        c++;
    }
}
function change()
{
    if($("#rat").height()>24)
    {
        $("#rat").animate({
            height: '-=30px'
        })
    }
   
}
function complete()
{
    let elem = $("#tbody") //event.target.id
    for(let i=0;i<elem[0].rows.length;i++)
    {
        if(elem[0].rows[i].id==event.target.id)
        { 
            elem[0].rows[i].remove()
        }
        
    }
    
}
function order()
{
    let elem = $("#tbody")
    //alert(elem[0].rows[0].cells[0].innerHTML)
     let length = $("#tbody tr").length
     for(let i=0;i<length;i++)
     {
         for (let j=0;j<length-i;j++)
         {
                if(elem[j].rows[j].cells[1].innerHTML > elem[j+1].rows[j+1].cells[1].innerHTML )
                {
                    let val =elem[j+1].rows[j+1].cells[1].innerHTML
                    elem[j+1].rows[j+1].cells[1].innerHTML=elem[j].rows[j].cells[1].innerHTML
                    elem[j].rows[j].cells[1].innerHTML=val

                }
         }
     }
}
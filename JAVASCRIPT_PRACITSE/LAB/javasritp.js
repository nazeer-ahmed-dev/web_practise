var val = true;
function getFormvalue()
{
    
   let  get = document.getElementById('first_name')
    let coll= document.querySelectorAll('#form1 > input')
    
    for(let i=0;i<coll.length;i++)
    {
        if(coll[i].value==="Submit")
        {
           
        }
        else
        {
            get.innerHTML=coll[i].value
        }
    }
}
function set_background()
{
    elem = document.querySelectorAll('#task2 > p')
    for(let i=0 ;i<elem.length;i++)
    {
        elem[i].style.backgroundColor='blue'
    }
}
function getAttributes()
{
    document.getElementById('values').innerHTML=document.getElementById('w3r').type +" "+ document.getElementById('w3r').hreflang

}
function js_style()
{
    document.getElementById('text').style.fontFamily="Impact,Charcoal,sans-serif"
    document.getElementById('text').style.color="blue"  
}

function insert_Row()
{
    row = `<tr>
                <td>CELL 1</td>
                 <td>CELL 2</td>
                
         </tr>`;
         document.getElementById('sampleTable').innerHTML+=row;

}
function task6()
{
    document.getElementById('task_6_1').innerHTML=document.getElementById('container').innerHTML
    document.getElementById('task_6_1').innerHTML+=document.getElementById('container').querySelectorAll('.second')[0].innerHTML
    document.getElementById('task_6_1').innerHTML+=document.getElementById('container').querySelectorAll('.second')[1].innerHTML
    document.getElementById('task_6_1').innerHTML+=document.getElementById('container').getElementsByTagName('ol')[0].querySelector('.third').innerHTML
    document.getElementsByClassName('footer')[0].classList.add('main')
    let elem1 = document.createElement('li')
    elem1.innerText='four'
    document.getElementById('container').getElementsByTagName('ol')[0].appendChild(elem1)
    let len = document.getElementById('container').getElementsByTagName('ol')[0].children.length
for(let i =0 ;i<len;i++)
{
    document.getElementById('container').getElementsByTagName('ol')[0].children[i].style.color="green"
}


}
function changeme()
{
    document.getElementById('change_heading').innerHTML="Hello World !"
}

// function task9()

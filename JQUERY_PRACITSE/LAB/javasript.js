function task1()
{ 
    var counter=9
    var inter = setInterval(my_fun,1000)
    let P_id_1 = $("#task1")
    
    function my_fun()
    {
        if(counter==0)
        {
            clearInterval(inter)
        }
        else
        {
            P_id_1.text(counter)

        }
        counter--
    }
}
let text_value=$("#number1")
$("#radios").children().click(function(){
    if(event.target.value==="isEven")
    {
        isEven(parseInt(text_value.val()))
    }
   else if(event.target.value==="isOdd")
    {
        isOdd(parseInt(text_value.val()))
    }
   else if(event.target.value==="isPrime")
    {
        isPrime(parseInt(text_value.val()))
    }

})
function isEven(val)
{
    if(val%2==0)
    {
        alert('true')
        return true
    }
    else
    {
        alert("false")
        return false
    }
}
function isOdd(val)
{
    if(val%2==0)
    {
        alert('false')
        return false
    }
    else
    {
        alert("ture")
        return true
    }
}
function isPrime(val)
{
    if(val==1)
    {
        alert('prime')
    }
    else
    {
        for(let i=2;i<val;i++)
        {
            if(val%i==0)
            {
                alert("NOT PRIME")
                return false
            }
        }
        alert("prime")
        return true
    }
  

}
function task5()
{
    let num_value = $("#text1")
    let operation_1 = $("#text2")
    if(operation_1.val()=="Even" || operation_1.val()=="even")
    {
        isEven(parseInt(num_value.val()))
    }
    else if(operation_1.val()=="odd" || operation_1.val()=="Odd")
    {
        isOdd(parseInt(num_value.val()))
    }
    if(operation_1.val()=="prime" || operation_1.val()=="Prime")
    {
        isPrime(parseInt(num_value.val()))
    }

}
var checkvalue;
 $("#radios2").children().click(function(){
    checkvalue= event.target.value
 })
function task6()
{
   var check=true
    let text_for_find = $("#text_1_find").val().toString()
    let text_for_findindexorvale= $("#text_2_find").val()
    let text_for_i_v=parseInt(text_for_findindexorvale)
   let check_radio_state = $("#radios2").children()
   let array = text_for_find.split(",")
   let arr=[]
   array.forEach(element => {
       arr.push(element)
   });
   if(checkvalue=="findvalue")
   {
    findItem(arr)
   }
   else if(checkvalue=="findindex")
   {
    findIndex(parseInt(arr))
   }
   function findItem(arr)
   {
     alert(arr.find((itm)=>{
           return itm > text_for_i_v
       }))
   }
   function findIndex(arr)
   {
      alert(arr.findIndex((item)=>{
          return itm == text_for_i_v
      }))
   }
}
function task8()
{
    let valus = $("#parms1").val().toString()
    let total=1
    function specialMultiply()
    {
        if(arguments.length===2)
        {
            for(let i=0;i<arguments.length;i++)
            {
                total*=arguments[i]
            }
        }
    }
}
function task14(array,val)
{
    array.filter(itm=>{
        return itm == val
    })
}
function task12(array)
{
    array.map((itm,index,array)=>{
        return itm*2;
    })
}
function printFirstlast(array)
{
    console.log(array[array.length-1])
    console.log(array[array[0]])
}
/////////////////////
let users = [
    {
    username: 'larry',
    email: 'larry@foo.com',
    yearsExperience: 22.1,
    favoriteLanguages: ['Perl', 'Java', 'C++'],
    favoriteEditor: 'Vim',
    hobbies: ['Fishing', 'Sailing', 'Hiking'],
    hometown: {
    city: 'San Francisco',
    state: 'CA'
    }
    },
    {
    username: 'jane',
    email: 'jane@test.com',
    yearsExperience: 33.9,
    favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
    favoriteEditor: 'Emacs',
    hobbies: ['Swimming', 'Biking', 'Hiking'],
    hometown: {
    city: 'New York',
    state: 'NY'
}},
{
username: 'sam',
email: 'sam@test.com',
yearsExperience: 8.2,
favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
favoriteEditor: 'Atom',
hobbies: ['Golf', 'Cooking', 'Archery'],
hometown: {
city: 'Fargo',
state: 'SD'
}
},
{
username: 'anne',
email: 'anne@test.com',
yearsExperience: 4,
favoriteLanguages: ['C#', 'C++', 'F#'],
favoriteEditor: 'Visual Studio Code',
hobbies: ['Tennis', 'Biking', 'Archery'],
hometown: {
city: 'Albany',
state: 'NY'
}
},
{
username: 'david',
email: 'david@test.com',
yearsExperience: 12.5,
favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
favoriteEditor: 'VS Code',
hobbies: ['Volunteering', 'Biking', 'Coding'],
hometown: {
city: 'Los Angeles',
state: 'CA'
}
}
];
function getEmails()
{
    let email_id = $("#emails")
    let a =""
    for(let i=0;i<users.length;i++)
    {
       a=a+" , "+users[i].email 
       
      
    }
    email_id.text(a)
  
}
function hobbies()
{
    let hobies=$("#hobies")
    let a=""
    for(let i=0;i<users.length;i++)
    {
        a=a+" ,"+users[i].hobbies
    }
    hobies.text(a)
}
function All_lang()
{
    let lng = $("#lang")
    let a=""
    let array=[]
    for (let i=0;i<users.length;i++)
    {
        for(j=0;j<users[i].favoriteLanguages.length;j++)
        {
            array.push(users[i].favoriteLanguages[j])
        }
    }
    var uniqueArr = [...new Set(array)]; 
    lng.text(uniqueArr)
}
function getbyUser()
{
    let user = $("#user").val()
    let by_usr = $("#by_user")
    for(let i=0;i<users.length;i++)
    {
        if(users[i].username===user)
        {
            by_usr.text(users[i])
        }
    }
}
function set_background()
{
    let get_p = $("#task20 > p")
    for(let i=0;i<get_p.length;i++)
    {
        get_p.css("background-color", "yellow");
    }
}
function getAttributes()
{
    let id1  = $("#w3r")
    let attr = $("#attr")
    attr.text(id1.attr("hreflang"))

}
function js_style()
{
    let txt = $("#text")
    txt.css({"background-color": "yellow", "font-size": "200%"})
}
function insert_Row()
{
    let mark ="<tr><td> cell 1</td><td> cell 2 </td></tr>"
   $("#sampleTable").append(mark)
   

}
function task24()
{

}
$("#colors").children().click(function(){

    $(".selected").css($("#colors").children().css("background-color"))
})
function changeme()
{
    $("#change_heading").text("hello")
}
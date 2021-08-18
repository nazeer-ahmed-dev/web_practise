// javascript bydefault working Asynchronous
function getData()
{
    setTimeout(function(){
        return 2;
    },2000)
}
function getMoreDate(x)
{
    setTimeout(function(){
        return 3+x
    },3000)
}
function printSum(a,b)
{
    return a+b;
}
let x = getData()
let y = getMoreDate(x)
console.log("sum is : "+printSum(x,y))

// to Asynchronous behavoir we used call back function
// $.getJSON("https://www.maciejtreder.com/asynchronous-javascript/directors",function(data){

// $('#hello').text(data[0].name)

// })

// WORKING WITH PROMISES
function buyCake(cake)
{
    return new Promise((resolve,reject)=>{

        if(cake=='cofee')
            resolve("job done")
        else
            reject('not done')
    })
}

buyCake().then(res=>{co     


function getDirectors()
{
    return new Promise((resolve,reject)=>{
        fetch("https://www.maciejtreder.com/asynchronous-javascript/directors").then(res=>res.json()).then(r=>{resolve(r[0].id)})
    });
    
}
function getname(id)
{
    return new Promise((resolve,reject)=>{
        fetch("https://www.maciejtreder.com/asynchronous-javascript/directors/"+id+"/name").then(res=>{res.json()}).then(r=>{resolve(r)})
    })
}
let a = getDirectors().then(getname)
$('#hello').text(a)
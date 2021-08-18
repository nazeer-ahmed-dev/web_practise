//How to use one file to other file .load()
/*  EcmaScript 6 features
    1.arrow function
    2.classess
    3.enhanced object literal
    4.template strings
    5.destructuring 
    6.default + rest + spread
    7.let + const
    8.itertors + for, of
    9.module
*/

//using of spread operator

let array = [1,2,3,4]
//let anotherArray = array // reference what ever you will insert in anotherArray inserted value will also append in array
let anotherArray = [...array] // shallow copy : only we are assigning copy
anotherArray.push(3)
console.log(array)

//object
let person = {fullname:"nazeer",age:30}
let p = {...person}
p.gender="male"
console.log(person)
console.log(p)

//Enhanced object Literal

let fullname = 'Nazeer ahmed'
let age =21
let per = {fullname,age}
console.log(per)
let abc ='address'
per = {fullname,age,[abc]:'IBA'} // here abc refered as objecdt computed property name
console.log(per)

// rest operator
function printme(...args)
{
    args.forEach(itm => {console.log(itm)})
}
printme(1,2,3,4)
//ienumerable  and enumerable  

//differnce between arguments and rest opetor 
    //1 arguments can run on foreach

// destructring object
let newPerson = {n:"nazeer",a:21,address:{city:"mithi"}}
const {n,a,address:{city}}= newPerson
console.log(city)

//destructuring array
let newArray = [1,2,3,[3,4,5]]
const [h,b,c,[e,f,g]]  = newArray // [a,b,c,d,,,e] // for skipping
console.log(e)

//default parameter
function defalutFunction(abc='hello_world')
{
    console.log(abc)
}
defalutFunction(123)

//genrators

function *Mygen()
{
    yield 1;
    yield 2;
    yield 'me';
    yield 4;
}
let gen = Mygen()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
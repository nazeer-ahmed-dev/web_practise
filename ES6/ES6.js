// Genarator
function * Mygen()
{
    yield 1;
    yield 2;
    yield 3;
    yield 'abc';

}
let gen = Mygen()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

//Genarator with array
function * Mygen_array()
{
    let arr =[1,2,4,4,5]
    for(let i=0;i<5;i++)
    {
        yield arr[i]
    }
}

// shallow copy using spread operator in array
let array1 = [1,2,3,4]
let array2=[...array1]
array2.push(1)
console.log(array1)

// shallow copy using spread operator in object
let person = {name:"nazeer",age:24}
let person2 ={...person}

//rest operator alternative of arguments
function rest_operator(...args)
{
    args.forEach(item=>{console.log(item)})
}
rest_operator(1,3,4,5)

//object destructuring
let per ={name:"Nazeer",age:21,address:{street:{no:123,city:"mithi"}}}
const {name,age,address:{street:{no,city}}}=per
console.log(city)
console.log(name)
console.log(no)

//array destructuring
let array_For_destructring =[1,2,3,4,5,6]
const [a,b,c,,d]=array_For_destructring
console.log(a)
console.log(b)
console.log(c)

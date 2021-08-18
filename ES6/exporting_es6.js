const calMe=()=>
{
    return "Function_called"
}
const PI=3.14
export default name="Nazeer"
export {PI,calMe};

class person{
    constructor(name,age)
    {
        this.name=name
        this.age=age
    }
    walk()
    {
        console.log(this.name)
    }
}
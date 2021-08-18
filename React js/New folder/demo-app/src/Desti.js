import { useEffect, useState } from "react";

//increment and decremnt using hooks
 export function Counter()
 {
    //1 const  [count,setCount] = useState(1) // return array 
    const [obj , setObj] = useState({count:0,product:['abc','xyz']})                                       // mutiple usestate can be use

     function Increment()
     {
           //1  setCount(count+1)
        setObj(preState=>
            {return {product:[...preState.product,'z'],count:preState.count+1}}
            )
     }
     function decrement()
     {
           
     }
     useEffect(()=>{
 // fetch('api').then(res=>res.json).then(res=>setObj(res))
     }
    ,[count])// use as componentdidmount in lifecyle // render ke bad call hota he
    
     // let list = setObj.mpa(item =><li>{item.name}</li>)
     return(
            <div>
                <h1>{obj.count}</h1>
                <button onClick={Increment}>+</button>
                <button onClick={()=>setObj(preState=>
            {return {product:[...preState.product,'z'],count:preState.count-1}}
            )}>-</button>
            </div>
     );
 }

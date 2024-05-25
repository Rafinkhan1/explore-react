import { useState } from "react"

export default function Count(){
    const [count,setCount] = useState(0);
    const handleAdd = () =>{
        const newCount = count+1;
        setCount(newCount);
    }
    const reduceAdd = ()=>{
        const newCount = count -1;
        setCount(newCount);
        
    }
    return(
        <div>
            <h3>Counter: {count} </h3>
            <button onClick={handleAdd}>Add</button>
            <button  onClick={reduceAdd}>Reduce</button>
        </div>
    )
}
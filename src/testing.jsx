import { useEffect, useState } from "react"

export default function Demo(){
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("Mount");
        return (
            console.log("hello")
        )
    },[])
//     useEffect(()=>{
//         console.log("Count MOunt");
//         return(()=>{
//                console.log("Unmount count");
//            }
//         ); 
//    },[count])
    return(
        <>
        <h1>{count}</h1>
        <br></br>
        <button onClick={()=>setCount(count+1)}>Button</button>
        </>
    )
}
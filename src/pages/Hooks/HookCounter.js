import { useState } from "react"
import { useNavigate } from "react-router-dom";
const HookCounter = () => {
    const [count,setCount] = useState(0);
    let navigate = useNavigate();
  return (
    <div>
        <button onClick={()=>{navigate(-1)}}>Back</button>
        <h2>Hook Counter</h2>
        <p>This counter maintain state of count vairable and increments it using setCount method.</p>
        <br/>
        <h3>{count}</h3>
        <button onClick={()=>setCount(p=>p+1)}>Increment count</button>
    </div>
  )
}

export default HookCounter
import { useEffect } from "react"
import {Link} from '../../imports/Router';


const Hooks = () => {
    useEffect(()=>{
        document.title="Hooks"
    })
  return (
    <>
    <h1>Hooks</h1>
    <ul>
      <li><Link to="/hooks/usestate">Usestate</Link></li>
      <li><Link to="/hooks/useeffect">useEffect</Link></li>
    </ul>
    </>
  )
}

export default Hooks
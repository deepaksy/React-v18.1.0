import { useEffect } from "react"
import { Link } from "react-router-dom";
import "../styles/Home.css"
const Home = () => {
    useEffect(()=>{
        document.title="Home";
    })
  return (
    <div>
        <h1>Home</h1>
        <ul>
          <label>Contexts:</label>
        <li><Link className="links" to="/hooks">HOOKS</Link></li>
        <li><Link className="links" to="/classcomponent">ClassComponents</Link></li>

        </ul>
    </div>
  )
}

export default Home
import { Link } from "react-router-dom";

const Navbar = (): JSX.Element => {
    return (
        <div className="navbar">
            <h2>Tour of Heroes</h2>
            <br/>
            <Link to="/"><button>Dashboard</button></Link>
            <Link to="/heroes"><button>Heroes</button></Link>
        </div>
    );
}
 
export default Navbar;
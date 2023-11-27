import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <div className="Navbar">
            <Link to = "/">Home</Link>&nbsp; | &nbsp;
            <Link to = "/register">Register</Link>&nbsp; | &nbsp;
            <Link to = "/users">Users</Link>
        </div>
    )
}
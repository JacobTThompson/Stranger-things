import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <div className="Navbar">
            <header className="Header">Stranger Things</header>
            <Link to = "/">Home</Link>&nbsp; | &nbsp;
            <Link to = "/register">Register</Link>&nbsp; | &nbsp;
            <Link to = "/post">Posts</Link>
        </div>
    )
}
import { Link, NavLink } from "react-router-dom"



const Navbar = ()=>{
    return(
        <>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark " >
  <div className="container-fluid">
    <Link className="navbar-brand" to="">Usermanagement</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="Home">Home</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="about">About</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="contact">Contact</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="users">users</Link>
        </li>
      

      
      </ul>
      <form className="d-flex">
       
        <Link to="/login"className="btn btn-outline-primary" type="submit">Login</Link>
        <Link to="/register"  className="btn btn-outline-success" type="submit">Register</Link>
      </form>
    </div>
  </div>
</nav>

        </>
    )
}

export default Navbar
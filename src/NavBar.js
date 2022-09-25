import React from "react";
import {Link,Outlet} from "react-router-dom";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';

/* import  Home  from "./Home";
import BookList from "./BookList";
import Login from "./Login"; */

export default function NavBar() {

    return(
    <>

    {/* bg="black" variant="dark" */}

<Navbar collapseOnSelect expand="sm" bg="" variant="" width="100vw">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <NavLink  eventKey="1" as={Link} to="/"><h2><Badge pill bg="secondary">Home</Badge>{' '}</h2></NavLink>
                    <NavLink  eventKey="2" as={Link} to="Meme"><h2><Badge pill bg="secondary">Generate Thumbnail</Badge>{' '}</h2></NavLink>
                    <NavLink  eventKey="3" as={Link} to="Login"><h2><Badge pill bg="secondary">Login</Badge>{' '}</h2></NavLink>
                    <NavLink  eventKey="4" as={Link} to="Aboutus"><h2><Badge pill bg="secondary">Aboutus</Badge>{' '}</h2></NavLink>
                    {/* <NavLink  eventKey="3" as={Link} to="Login">Login</NavLink> */}
                </Nav>
            </Navbar.Collapse>     
        </Navbar>

    {/* <nav>
     
          <Link to="/"> Home</Link>
       
          <Link to="BookList"> BookList</Link>
       
          <Link to="Login"> Login</Link>
       
    </nav>
   */}

<Outlet />




  </>

    );
}

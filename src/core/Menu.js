import React, { Fragment}  from 'react';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import { withRouter} from 'react-router-dom';
import { signout, isAuthenticated } from '../auth';


const Menu = ({history}) => {
    // ....navlink should be active with color
  const  isActive = (history, path) => {
    if(history.location.pathname === path) {
       return  {color : '#ff9900'};
    } else {
        return { color : '#ffffff'};
    }
};
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="#home">VEVI</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link style={isActive(history,'/')} href="/">Home</Nav.Link>

                                    {/* if is not admin, redirect to its profile/dashboard */}
                                    {isAuthenticated() && isAuthenticated().user.role === 0 && (
                                      <Nav.Link style={isActive(history,'/profile')} href="/profile">Profile</Nav.Link>
                                    )}

                                    {/* is if its an admin, after login should be redirected to admin dashboard */}
                                    {isAuthenticated() && isAuthenticated().user.role === 1 && (
                                      <Nav.Link style={isActive(history,'/adminprofile')} href="/adminprofile">Profile</Nav.Link>
                                    )}

                                    {!isAuthenticated() && (
                                        <Fragment>
                                               <Nav.Link style={isActive(history, '/signin')} href="/signin">Signin</Nav.Link>
                                               <Nav.Link style={isActive(history, '/signup')} href="/signup">Signup</Nav.Link>
                                        </Fragment>
                                    )}

                                    {isAuthenticated() && (
                                                <li className='nav-item'>
                                                    <span className='nav-link' style={{cursor:'pointer', color:'#ffffff'}} onClick={() => 
                                                        signout(() => { history.push("/"); }) }>Signout</span>
                                                </li>
                                    )} 
                                    <NavDropdown title="Category"  id="basic-nav-dropdown">
                                        <NavDropdown.Item style={isActive(history, '/shop')} href="/shop">Shop</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Men</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Women</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                    </Nav>
                                    <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-success">Search</Button>
                                    </Form>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </div>
                </div>
            )  
        }
export default withRouter(Menu);
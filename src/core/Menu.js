// import React, { Fragment} from 'react' 
// import {Link, withRouter} from 'react-router-dom'
// import { signout, isAuthenticated } from '../auth'




// const isActive = (history, path) => {
//     if(history.location.pathname === path) {
//         return {color: '#fe3466'}
//     } else{
//         return {color: '#ffffff'}
//     }
// }

// const Menu  = ({ history }) => (
//     <div>
//         <ul className='nav nav-tabs bg-primary'>
//             <li className='nav-item'>
//                 <Link 
//                     className='nav-link' 
//                     style={isActive(history, "/")} to="/">
//                     Home
//                 </Link>
//             </li>

//             <li className='nav-item'>
//                 <Link
//                  className='nav-link' 
//                     style={isActive(history, '/user/dashboard')} 
//                     to='/user/dashboard'>
//                     Dashboard
//                  </Link>
//             </li>


//             {!isAuthenticated() && (
//             <Fragment >
//             <li className='nav-item'>
//                 <Link className='nav-link' 
//                 style={isActive(history, '/signin')} 
//                 to='/signin'>Signin</Link>
//             </li>

//             <li className='nav-item'>
//                <Link className='nav-link'
//                 style={isActive(history, '/signup')}
//                  to='/signup'>Signup</Link>
//             </li>
//             </Fragment>
//             )}
            
//             {!isAuthenticated() && (
//                 <li className='nav-item'>
//                     <span 
//                     className='nav-link'
//                     style={{cursor:'pointer', color:'#ffff56'}}
//                     onClick={() => 
//                         signout(() => {
//                             history.push("/");
//                         })
//                     }
//                         >
//                             Signout
//                     </span>
//                 </li>
//              )} 
//         </ul>
//     </div>
// );

// export default withRouter(Menu);

import React from 'react';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import { withRouter} from 'react-router-dom';

const Menu =({history}) => {
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
                            <Navbar.Brand to="#home">Vevi Store</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                <Nav.Link style={isActive(history,'/')} href="/">Home</Nav.Link>
                                <Nav.Link style={isActive(history,'/dashboard')} href="/user/dashboard">Dashboard</Nav.Link>
                                <Nav.Link style={isActive(history,'/About')} href="/contact-us">About Us</Nav.Link>
                                <Nav.Link style={isActive(history,'/signup')} href="/signup">Sign up</Nav.Link>
                                <Nav.Link style={isActive(history,'/signin')} href="/signin">Sign in</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
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
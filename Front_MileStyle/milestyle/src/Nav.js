import React from 'react'
import { Navbar , FormGroup , ButtonToolbar, NavItem ,Nav, Button , FormControl} from 'react-bootstrap';
import {Link} from 'react-router'
class Navs extends React.Component{
  render(){
    return(
      <Navbar fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">MileStyle</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
    <Nav pullRight>
      <NavItem eventKey={1111} href="#">REGISTER</NavItem>
      <NavItem eventKey={2222} href="#">LOGIN</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    )
  }
}
export default Navs

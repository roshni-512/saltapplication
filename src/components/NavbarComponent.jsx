import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
export default function NavbarComponent() {
  return (
    <>
     <Navbar className='bgcolor' >
        <Container>
          <Navbar.Brand href="#home"><img
              src="./images/saltlogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top mt-3"
              alt="React Bootstrap logo"
              /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"className='mt-3' style={{fontFamily:'Sarina', fontSize:'20px',fontStyle:'italic',fontWeight:900,color:'white'}}>Salt</Nav.Link>
          </Nav>
          <Form className="d-flex"  id='fspace'>
              <img src={"./images/Linkedin (1).png"} style={{width:'20%'}} className='mt-3' alt=''/>
              <img src={"./images/Facebook (1).png"} style={{width:'20%'}} className='mt-3' alt=''/>
              <img src={"./images/Twitter (1).png"} style={{width:'20%'}} className='mt-3' alt=''/>
               </Form>
        </Container>
      </Navbar>
    </>

  )
}

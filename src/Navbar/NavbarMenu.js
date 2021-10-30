import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function NavbarMenu() {
  return (
    <div>
  <br />
  <Navbar bg="light" variant="light">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="/">Ana Sayfa</Nav.Link>
      <Nav.Link href="/login">Giriş Yap</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

    </div>
      
  
    
  )
}



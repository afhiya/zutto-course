import { useState,useEffect } from "react"
import {Container,Navbar,Nav} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import {navLinks} from "../data/index"


const NavbarComponent = () => {

  const [changeColor,setChangeColor] = useState(false)

  const changeBackground = () => {
    window.scrollY > 10 ? setChangeColor(true) : setChangeColor(false)
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll",changeBackground)
  })

  return (
    <div>
    <Navbar expand="lg" id="navbar" className={changeColor ? "color-active" : ""}>
    <Container>
      <Navbar.Brand href="#home" className="fs-3 fw-bold">Zutto</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto text-center">
          {navLinks.map(link => {
            return (
              <div className="nav-link" key={link.id}>
                <NavLink to={link.path} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              } end >{link.text}</NavLink>
              </div>
            )
          })}
          </Nav>

          <div className="text-center">
            <button className="btn btn-outline-danger rounded-1">Join With Use</button>
          </div>
          </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}

export default NavbarComponent

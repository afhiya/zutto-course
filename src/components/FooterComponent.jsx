import {Link} from 'react-router-dom'
import { Container,Row ,Col } from 'react-bootstrap'
import { navLinks } from '../data/index'

const FooterComponent = () => {
  return (
    <div className='footer py-5'>
      <Container>
        <Row className='d-flex justify-content-between'>
          <Col lg="5">
            <h3 className='fw-bold'>Zutto</h3>
            <p className='desc'>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et rem reiciendis quaerat officia commodi nobis corporis incidunt beatae fugiat qui!</p>
            <div className='nomor  mb-1 mt-4'>
              <Link className='text-decoration-none'>
                <i className='fa-brands fa-whatsapp'></i>
                <p className='m-0'>+6282299402705</p>
              </Link>            
            </div>
            <div className='email'>
              <Link className='text-decoration-none'>
                <i className='fa-regular fa-envelope'></i>
                <p className='m-0'>faridrakapratama@gmail.com</p>
              </Link>            
            </div>
          </Col>
          <Col className='d-flex flex-column col-lg-2 col mt-lg-0 mt-5'>
            <h5 className='fw-bold '>Menus</h5>
            {navLinks.map(nav => {
              return <Link to={nav.path}>{nav.text}</Link>
            })}
          </Col>
          <Col lg="4" className='mt-lg-0 mt-5'>
            <h5 className='fw-bold mb-3'>Subscribe untuk info menarik</h5>
            <div className='subscribes'>
              <input type='text' placeholder='Subscribes..'/>
              <button className='btn btn-danger rounded-end rounded-0'>Subscribe</button>
            </div>
            <div className='social mt-3'>
              <i className='fa-brands fa-facebook'></i>
              <i className='fa-brands fa-twitter'></i>
              <i className='fa-brands fa-linkedin'></i>
              <i className='fa-brands fa-youtube'></i>
              <i className='fa-brands fa-instagram'></i>
            </div>
          </Col>
        </Row>
        <Row>
            <Col>
              <p className='text-center px-md-0 px-3'>&copy; Copyright {new Date().getFullYear()} by <span className='fw-bold'>Zutto</span></p>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent

import { Container, Row, Col, Accordion } from 'react-bootstrap'
import { faq } from '../data/index'

const FaqComponent = () => {
  return (
    <div className='faq'>
      <Container>
        <Row>
          <Col>
            <h2 className='text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s'>Pertanyaan Yang Sering Ditanyakan</h2>
          </Col>
        </Row>
        <Row className='row-cols-lg-2 row-cols-1 g-4 pt-5'>
        {faq.map(faq => {
          return(
            <Col key={faq.id}>
        <Accordion className='shadow-sm'>
          <Accordion.Item eventKey={faq.eventKey}>
            <Accordion.Header>{faq.title}</Accordion.Header>
            <Accordion.Body>
            {faq.desc}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </Col>
          )
        })}
        </Row>
      </Container>
    </div>
  )
}

export default FaqComponent

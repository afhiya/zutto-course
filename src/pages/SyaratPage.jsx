import { Container,Row ,Col } from "react-bootstrap"
import FaqComponent from "../components/FaqComponent"

const SyaratPage = () => {
  return (
    <div>
      <div className="syarat min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">Syarat dan Ketentuan</h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, repellat.</p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, obcaecati expedita. Accusantium iusto exercitationem neque laborum ab eum enim placeat aspernatur nulla! Dicta facere odit ut modi laudantium autem asperiores impedit architecto, hic distinctio praesentium quae sint. Tempora voluptatibus dignissimos distinctio atque dolore earum perferendis eius unde, sapiente aliquid cum.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 className="fw-bold">1. Lorem</h4>
              <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, obcaecati expedita. Accusantium iusto exercitationem neque laborum ab eum enim placeat aspernatur nulla! Dicta facere odit ut modi laudantium autem asperiores impedit architecto, hic distinctio praesentium quae sint. Tempora voluptatibus dignissimos distinctio atque dolore earum perferendis eius unde, sapiente aliquid cum.</p>
            </Col>
          </Row>
        </Container>
      </div>

    <FaqComponent/>
    </div>
  )
}

export default SyaratPage

import React from 'react'
import { Container, Col,Row } from 'react-bootstrap'
const Backg = () => {
  return (
    <div className='back'>
      <Container fluid>
        <Row>
            <Col lg={4}>
               <h1>
                it's Almost Mom's Day
               </h1>
               <p>celebrate Mom With Beautiful Flowers.</p>
               <button>SHOP MOTHER'S DAY</button>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Backg

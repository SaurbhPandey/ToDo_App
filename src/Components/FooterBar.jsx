import React from 'react'
import {Row , Col} from 'react-bootstrap'
const FooterBar = (props) => {
  return (
    <Row className='bg-secondary p-4 d-flex align-items-center justify-content-center' style={{"height" : "30vh"}}>
    <Col className='' lg={12} style={{}}>
        <h4 className='text-center'>React Router Dom</h4>
    </Col>
    {/* style={{"paddingLeft" : "90px"}} */}
    {console.log(props.count)};
    {props.count > 0 ? (
        <Row  className='d-flex justify-content-between align-items-center '>
        {/* <Col lg={5}>
            <p style={{ "fontSize": "20px" }}>Home</p>
            <p style={{ "fontSize": "20px" }}>Achievements</p>
            <p style={{ "fontSize": "20px" }}>Carrers</p>
        </Col>
        <Col lg={5}>
            <p style={{ "fontSize": "20px" }}>Home</p>
            <p style={{ "fontSize": "20px" }}>Achievements</p>
            <p style={{ "fontSize": "20px" }}>Carrers</p>
        </Col>
        <Col>
            <p style={{ "fontSize": "20px" }}>Home</p>
            <p style={{ "fontSize": "20px" }}>Achievements</p>
            <p style={{ "fontSize": "20px" }}>Carrers</p>
        </Col> */}

        <Col>
        <h4 className='text-center'>Current Count : {props.count} times</h4>
        </Col>
    </Row> 
    ) : <></>}
</Row>
  )
}

export default FooterBar
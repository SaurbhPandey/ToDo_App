import React, { useState, useEffect  } from 'react'
import { Col, Row, Container, Navbar } from 'react-bootstrap'
import FooterBar from './FooterBar'
import { Link , useNavigate} from 'react-router-dom'
import HeaderComponenet from './HeaderComponenet'
const Screen_1 = (props) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        props.callback(count);
    }, [count]);

    const navigate = useNavigate();
    const navigateToScreen2 = () => {
        navigate('/screen2');
    }
    return (
        <>
            <Row className='bg-body-tertiary d-flex justify-content-center align-items-center' style={{ "height": "60vh" }}>
                <Row className='my-5  d-flex justify-content-center align-items-center'>
                    <Col lg={12} className='d-flex justify-content-center align-items-center' style={{"marginBottom" : "30px"}}>
                        <h1>You Clicked : {count} times </h1>
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <button style={{"width" : "250px"}} className='btn btn-secondary pt-3' onClick={() => { setCount(count + 1) }}><p style={{"fontSize" : "25px"}}>Click here</p></button>
                    </Col>
                </Row>
                <Row>
                <Col className='d-flex justify-content-center align-items-center'>
                        <button style={{"width" : "250px"}} className='btn btn-secondary pt-3' onClick={navigateToScreen2} ><p style={{"fontSize" : "25px"}}>Screen 2</p></button>
                    </Col>
                </Row>
            </Row>
        </>
    )
}

export default Screen_1
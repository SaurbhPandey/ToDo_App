import React from 'react'
import { Row , Col , Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const HeaderComponenet = () => {
    return (
        <>
            <Row className='bg-secondary px-2'>
                <Col>
                    <Container className='d-flex justify-content-between align-items-center py-4'>
                        <Row>
                            <Col> <Link style={{ "textDecoration": "none", "color": "black" }} to={"/"}><h4>React Router</h4></Link></Col>
                        </Row>
                        <Row>
                            <Col >
                                <ul className='d-flex justify-content-between align-items-center' style={{ "listStyleType": "none" }}>
                                    <li className='px-4' ><Link style={{ "textDecoration": "none", "color": "black" }} to={"/screen1"}>Screen 1</Link></li>
                                    <li className='px-4' ><Link style={{ "textDecoration": "none", "color": "black" }} to={"/screen2"}>Screen 2</Link></li>
                                    <li className='px-4'><Link style={{ "textDecoration": "none", "color": "black" }} to={"/screen3"}>Screen 3</Link></li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </>
    )
}

export default HeaderComponenet
import React, { useState, useEffect } from 'react'
import { Col, Row, Container, Navbar } from 'react-bootstrap'
const Screen_2 = () => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url).then((result) => {
            result.json().then((res) => {
                setData(res);
                setLoading(false);
            })
        })
    }, []);

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

      const first100Data = data.slice(0,100);

    console.log(data);
    return (
        <>
            {!loading ? (
                <Row className='bg-body-tertiary d-flex justify-content-center'>
                    {data.slice(0,100).map((item) => {
                        return(
                            <Col className='d-flex justify-content-center align-items-center p-4'>
                            <img src={item.thumbnailUrl } alt=""  height={100} width={100} onClick={()=>openInNewTab(item.url)}/>
                        </Col>
                        )
                        
                    })}

                </Row>
            ) : <Row><h1 className='text-center'>Loading...</h1></Row>
            }
        </>
    )
}

export default Screen_2
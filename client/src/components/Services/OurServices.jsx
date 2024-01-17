import React from 'react'
import ServiceCards from './ServiceCards'
// import Contact from '../../pages/Contact'
import { Row, Col, Container } from "react-bootstrap";

export default function OurServices() {
  return (
    <div className='h-full'>
        <div className='mb-4'>
            <div className='flex justify-center'>
                <h2 className='capitalize'>our services</h2>
            </div>
        </div>

        <Container>
            <Row className='flex justify-center'>
                <Col sm={6} md={4} className='!rounded-3xl flex justify-center'>
                    <ServiceCards title='software development' url='/softwareinfo' />
                </Col>

                <Col sm={6} md={4} className='!rounded-3xl flex justify-center'>
                    <ServiceCards title='branding & designing' url='/brandanddesigninfo' />
                </Col>

                <Col sm={6} md={4} className='!rounded-3xl flex justify-center'>
                    <ServiceCards title='animation' url='/animationinfo' />
                </Col>

                <Col sm={6} md={4} className='!rounded-3xl flex justify-center'>
                    <ServiceCards title='digital marketing' url='/digitalmarketinginfo' />
                </Col>

                <Col sm={6} md={4} className='!rounded-3xl flex justify-center'>
                    <ServiceCards title='Photo editing & product shoot' url='/photoinfo' />
                </Col>

                <Col sm={6} md={4} className='!rounded-3xl flex justify-center'>
                    <ServiceCards title='website design & development' url='/websiteinfo' />
                </Col>
            </Row>
        </Container>

        {/* <ServiceCards /> */}
    </div>
  )
}
